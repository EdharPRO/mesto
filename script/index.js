let PopProf = document.querySelector('.popup');
let PopAddBtn = document.querySelector('.profile__edit-button');
let ProfInfoName = document.querySelector('.profile__info-name');
let PopName = PopProf.querySelector('.popup_input__name'); /* popup__name */
let PopText = PopProf.querySelector('.popup_input__text'); /* popup__text */
let PopInfoText = document.querySelector('.profile__info-text');
let PopForm = document.querySelector('.popup__form');
let PopBtnSave = PopProf.querySelector('.popup__save');
let PopBtnClose = PopProf.querySelector('.popup__close');

function openPopup() {
PopName.value = ProfInfoName.textContent;
PopText.value = PopInfoText.textContent;
PopProf.classList.add('popup_open');
}

function closePopup() {
    PopProf.classList.remove('popup_open');
}

function handlePopupSubmit(event) {
event.preventDefault();
ProfInfoName.textContent = PopName.value;
PopInfoText.textContent = PopText.value;
closePopup();
}

PopAddBtn.addEventListener('click', openPopup);
PopBtnClose.addEventListener('click', closePopup);
PopForm.addEventListener('submit', handlePopupSubmit);


