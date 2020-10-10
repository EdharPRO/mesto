let Popprof = document.querySelector('.popup__profile');
let PopAddBtn = document.querySelector('.profile__Edit-button');
let ProfInfoName = document.querySelector('.profile__info-name');
let PopName = document.querySelector('.popup__name');
let PopText = document.querySelector('.popup__text');
let PopInfoText = document.querySelector('.profile__info-text');
let PopForm = document.querySelector('.popup__form');
let PopBtnSave = document.querySelector('.popup__save');
let PopBtnClose = document.querySelectorAll('.popup__close');

let openPopup = mod => {
  mod.classList.add('popup_open');
}

let closePopup = mod => {
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















