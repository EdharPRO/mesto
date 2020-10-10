const Popprof = document.querySelector('.popup');
const PopAddBtn = document.querySelector('.profile__add-button');
const ProfInfoName = document.querySelector('.profile__info-name');
const PopName = document.querySelector('.popup__name');
const PopText = document.querySelector('.popup__text');
const PopInfoText = document.querySelector('.profile__info-text');
const PopForm = document.querySelector('.popup__form');
const PopBtnSave = document.querySelector('.popup__save');
const PopBtnClose = document.querySelectorAll('.popup__close');

const openPopup = mod => {
  mod.classList.add('popup_open');
}

const closePopup = mod => {
  mod.classList.remove('popup_open');
} 

PopAddBtn.addEventListener('click', () => {
  openPopup(Popprof);
});


PopBtnClose.forEach((button) => {
  button.addEventListener('click', (event) => {
    closePopup(event.target.closest('.popup'));
  });
});

function handleFormSubmit (evt) { 
    evt.preventDefault(); 
    ProfInfoName.textContent = PopName.value; 
    PopInfoText.textContent = PopText.value; 
    closePopup(evt); 
    PopName.value ='';
    PopText.value ='';    
} 

PopForm.addEventListener('submit', handleFormSubmit); 
















