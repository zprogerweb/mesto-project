

//Кнопка редактирования профиля
const editButton = document.querySelector('.profile__edit-button');
const closeIconProfile = document.querySelector('.popup__close-icone_profile');
const formProfile = document.querySelector('.popup__form_profile');
const popupProfile = document.querySelector('.popup_profile');


editButton.addEventListener('click', function() {
    popupProfile.classList.add('popup_opened');
});

closeIconProfile.addEventListener('click', function() {
    popupProfile.classList.remove('popup_opened');
});

const nameInput = formProfile.querySelector('.popup__field_type_name');
const jobInput = formProfile.querySelector('.popup__field_type_about');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const submitProfile = formProfile.querySelector('.popup__submit-button');

function formSubmitProfile (evt) {
    evt.preventDefault(); 

    profileTitle.textContent = `${nameInput.value}`;
    profileSubtitle.textContent = `${jobInput.value}`;
    popupProfile.classList.remove('popup_opened');
}
formProfile.addEventListener('submit', formSubmitProfile);


// Кнопка добавления карточки
const elements = document.querySelector('.elements');
const addButton = document.querySelector('.profile__add-button');
const closeIconElement = document.querySelector('.popup__close-icone_element');
const popupElement = document.querySelector('.popup_element');
const formElement = document.querySelector('.popup__form_element');
const submitElement = formElement.querySelector('.popup__submit-button');




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

for (let i = 0; i < initialCards.length; i++) {
  let cardName = initialCards[i].name;
  let cardLink = initialCards[i].link;
  let card = createCard(cardName, cardLink);
  renderCard(card);
      
  }
// Добавление карточки
function createCard(cardName, cardLink) {
  const cardTemplate = document.querySelector('#elements-template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  
  cardElement.querySelector('.element__title').textContent = cardName;
  cardElement.querySelector('.element__image').src = cardLink;
  cardElement.querySelector('.element__heart').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__heart_active');
  });

  const deleteButton = cardElement.querySelector('.element__basket');
  deleteButton.addEventListener('click', function () {
  const elementItem = deleteButton.closest('.element');
  elementItem.remove();
  });
  return cardElement;
} 



function renderCard(card) {
  elements.prepend(card);
}



function addClickButton() {
  popupElement.classList.add('popup_opened');
}
addButton.addEventListener('click', addClickButton);


closeIconElement.addEventListener('click', function() {
  popupElement.classList.remove('popup_opened');
});


  function handleAddCardClick(evt) {
    evt.preventDefault();
    
    const photoTitleInput = formElement.querySelector('.popup__field_type_title').value;
    const photoLinkInput = formElement.querySelector('.popup__field_type_link').value;
    
    let newcard = createCard(photoTitleInput, photoLinkInput);
    renderCard(newcard);
    evt.target.reset ();

  }
  formElement.addEventListener('submit', handleAddCardClick);
  
  
  function submitFormElement() {
    popupElement.classList.remove('popup_opened');
  }
  submitElement.addEventListener('click', submitFormElement);


  
  
    
  
  // Удаление карточки
 


  cardElement.querySelector('.element__heart').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__heart_active');
  });