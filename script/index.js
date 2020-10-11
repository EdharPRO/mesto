let Popprof = document.querySelector('.popup');
let PopAddBtn = document.querySelector('.profile__Edit-button');
let ProfInfoName = document.querySelector('.profile__info-name');
let PopName = Popprof.querySelector('.popup__name');
let PopText = Popprof.querySelector('.popup__text');
let PopInfoText = document.querySelector('.profile__info-text');
let PopForm = document.querySelector('.popup__form');
let PopBtnSave = Popprof.querySelector('.popup__save');
let PopBtnClose = Popprof.querySelector('.popup__close');

function openPopup() {
PopName.value = ProfInfoName.textContent;
PopText.value = PopInfoText.textContent;
Popprof.classList.add('popup_open');
}

function closePopup() {
Popprof.classList.remove('popup_open');
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
