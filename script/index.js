const PopAddBtn = document.querySelector('.profile__Edit-button')
const Popprof = document.querySelector('.popup');
const PopBtnClose = document.querySelectorAll('.popup__close');
const PopForm = document.querySelector('.popup__form');

const ProfInfoName = document.querySelector('.profile__info-name');
const PopInfoText = document.querySelector('.profile__info-text');
const PopName = document.querySelector('.popup__name');
const PopText = document.querySelector('.popup__text');


const PopBtnSave = document.querySelector('.popup__save');


const openPopup = mod => {
  mod.classList.add('popup_open');
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

const closePopup = mod => {
  mod.classList.remove('popup_open');
}