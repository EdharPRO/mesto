let popProf = document.querySelector('.popup');
let popAddBtn = document.querySelector('.profile__edit-button');
let profInfoName = document.querySelector('.profile__info-name');
let popName = popProf.querySelector('.popup__input_name');
let popText = popProf.querySelector('.popup__input_text');
let popInfoText = document.querySelector('.profile__info-text');
let popForm = document.querySelector('.popup__form');
let popBtnSave = popProf.querySelector('.popup__save');
let popBtnClose = popProf.querySelector('.popup__close');

function openPopup() {
popName.value = profInfoName.textContent;
popText.value = popInfoText.textContent;
popProf.classList.add('popup_open');
}

function closePopup() {
    popProf.classList.remove('popup_open');
}

function handlePopupSubmit(event) {
event.preventDefault();
profInfoName.textContent = popName.value;
popInfoText.textContent = popText.value;
closePopup();
}

popAddBtn.addEventListener('click', openPopup);
popBtnClose.addEventListener('click', closePopup);
popForm.addEventListener('submit', handlePopupSubmit);


