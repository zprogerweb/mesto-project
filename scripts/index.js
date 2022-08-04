const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
  ];

//Кнопка редактирования профиля
const buttonEditProfile = document.querySelector('.profile__edit-button');
const iconCloseProfile = document.querySelector('.popup__close-icone_type_profile');
const formProfile = document.querySelector('.popup__form_type_profile');
const popupProfile = document.querySelector('.popup_type_profile');
// Кнопка добавления карточки
const elementContainer = document.querySelector('.elements');
const cardAddButton = document.querySelector('.profile__add-button');
const iconCloseElement = document.querySelector('.popup__close-icone_type_element');
const popupElement = document.querySelector('.popup_type_element');
const formElement = document.querySelector('.popup__form_type_element');
const elementSubmitButton = formElement.querySelector('.popup__submit-button');
// Попап картинки
const imageCardPopup = document.querySelector('.image-card');
const imageCardItem = imageCardPopup.querySelector('.image-card__item');
const popupImage = imageCardItem.querySelector('.image-card__image');
const popupCaption = imageCardItem.querySelector('.image-card__caption');
const iconCloseImage = imageCardItem.querySelector('.popup__close-icone_type_image');
const elementImage = elementContainer.querySelector('.element__image');



buttonEditProfile.addEventListener('click', () => openPopup(popupProfile)); // Открытие попапа для редактирования профиля
iconCloseProfile.addEventListener('click', () => closePopup(popupProfile));

cardAddButton.addEventListener('click', () => openPopup(popupElement)); // Открытие попапа для добавления новой карточки
iconCloseElement.addEventListener('click', () => closePopup(popupElement));


function openPopup(popup) { //  открываем попап
  popup.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
};
function closePopup(popup) { // закрываем попап 
  popup.classList.remove('popup_opened');
};

const nameInput = formProfile.querySelector('.popup__field_type_name');
const jobInput = formProfile.querySelector('.popup__field_type_about');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const ProfileSubmitButton = formProfile.querySelector('.popup__submit-button');

function submitFormProfile (evt) {
    evt.preventDefault(); 

    profileTitle.textContent = `${nameInput.value}`;
    profileSubtitle.textContent = `${jobInput.value}`;
    closePopup(popupProfile);
}
formProfile.addEventListener('submit', submitFormProfile);


// Создаем карточки из массива
for (let i = 0; i < initialCards.length; i++) {
  const cardName = initialCards[i].name;
  const cardLink = initialCards[i].link;
  const card = createCard(cardName, cardLink);
  renderCard(card);
      
  }
// Добавление карточки
function createCard(cardName, cardLink) {
  const cardTemplate = document.querySelector('#elements-template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const elementImage = cardElement.querySelector('.element__image');

  cardElement.querySelector('.element__title').textContent = cardName;
  elementImage.src = cardLink;
  elementImage.alt = cardName;

  cardElement.querySelector('.element__heart').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__heart_active');
  });
  // Добавляем кнопку удаления карточки
  const deleteButton = cardElement.querySelector('.element__basket');
  deleteButton.addEventListener('click', function () {
  const elementItem = deleteButton.closest('.element');
  elementItem.remove();
  });
  
  const imageCardPopup = document.querySelector('.image-card');

  // Передаем значения карточки в попап просмотра картинки
  elementImage.addEventListener ('click', function(evt) {
    evt.preventDefault();
    const popupImage = imageCardItem.querySelector('.image-card__image');
    const popupCaption = imageCardItem.querySelector('.image-card__caption');
    popupCaption.textContent = cardName;
    popupImage.src = cardLink;
    popupImage.alt = cardName;
    imageCardPopup.classList.add('image-card_opened');
    })
    
  return cardElement;
} 

// Вставляем карточку вначало списка
function renderCard(card) {
  elementContainer.prepend(card);
}

// Закрытие попапа добавление карточки на крестик
iconCloseElement.addEventListener('click', function() {
  popupElement.classList.remove('popup_opened');
});

// Закрытие попапа добавления карточки на кнопку "Сохранить" 
  function handleAddCardClick(evt) {
    evt.preventDefault();
    
    const photoTitleInput = formElement.querySelector('.popup__field_type_title').value;
    const photoLinkInput = formElement.querySelector('.popup__field_type_link').value;
    
    let newcard = createCard(photoTitleInput, photoLinkInput);
    renderCard(newcard);
    evt.target.reset ();
    closePopup(popupElement);
  }
  formElement.addEventListener('submit', handleAddCardClick);
  

  iconCloseImage.addEventListener('click', function() {
    imageCardPopup.classList.remove('image-card_opened');
  });
 
 