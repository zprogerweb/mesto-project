let editButton = document.querySelector('.profile__edit-button');
let addButton = document.querySelector('.profile__add-button');
let closeIcon = document.querySelector('.popup__close-icone');
let submitButton = document.querySelector('.popup__submit-button');
let popup = document.querySelector('.popup');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let submit = document.querySelector('.popup__submit-button');



editButton.addEventListener('click', function() {
    popup.classList.add('popup_opened');
});

closeIcon.addEventListener('click', function() {
    popup.classList.remove('popup_opened');
});


let popupForm = document.querySelector('.popup__form');
let nameInput = popupForm.querySelector('.popup__field_type_name');
let jobInput = popupForm.querySelector('.popup__field_type_about');


function formSubmitHandler (evt) {
    evt.preventDefault(); 

    profileTitle.textContent = `${nameInput.value}`;
    profileSubtitle.textContent = `${jobInput.value}`;
    popup.classList.remove('popup_opened');
}


popupForm.addEventListener('submit', formSubmitHandler);














