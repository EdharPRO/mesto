let popup = document.querySelector('.popup');
let popAddBtn = document.querySelector('.profile__edit-button');
let profInfoName  = document.querySelector('.profile__info-name');
let popName = document.querySelector('.popup__input_name');
let popText = document.querySelector('.popup__input_text');
let popInfoText = document.querySelector('.profile__info-text');
let popForm = document.querySelector('.popup__form');
let popBtnClose = document.querySelectorAll('.popup__close');
let popBtnElement = document.querySelector('.profile__button');
let popProf = document.querySelector('.popup__add-prof');  
let popElement = document.querySelector('.popup__element');

function openPopup(popup){ popup.classList.add('popup_open')
    popName.value = profInfoName.textContent;
    popText.value = popInfoText.textContent;
}

function closePopup(popup){popup.classList.remove('popup_open');}


popAddBtn.addEventListener('click', () => {
    openPopup(popProf);
});


popBtnElement.addEventListener('click', () => {
    openPopup(popElement);
});


popBtnClose.forEach((button) => {
    button.addEventListener('click', (event) => {
      closePopup(event.target.closest('.popup'));
    });
});

function handlePopupSubmit(evt) { 
    evt.preventDefault(); 
    profInfoName.textContent = popName.value; 
    popInfoText.textContent = popText.value; 
    closePopup(popProf);  
} 

popForm.addEventListener('submit', handlePopupSubmit);


