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


let secElemCard = document.querySelector('.elements');
let popImg = document.querySelector('.popup_img');
let hugeImg = document.querySelector('.popup__img-photo');

 
let cardName = popElement.querySelector('#cardname');
let cardLink = popElement.querySelector('#cardlink');
function formSubmitCard(evt){

    let newCard = { 
      name: cardName.value, 
      link: cardLink.value 
    }; 
  closePopup(popElement);  
  secElemCard.prepend(createCard(newCard));
  evt.preventDefault(); 
} 
 
popElement.addEventListener('submit', formSubmitCard); 

 
function createCard(element) { 
    let cardElement = document.querySelector('#element').content.cloneNode(true); 
    cardElement.querySelector('.element__paragraph').textContent = element.name; 

    cardElement.querySelector('.element__image').src = element.link; 

    cardElement.querySelector('.element__icon').addEventListener('click' , (event) => { 

        event.target.classList.toggle('element__icon_active');
    }); 
    cardElement.querySelector('.element__delete').addEventListener('click' , (event) => { 

        event.target.closest('.element').remove();
    }); 
    cardElement.querySelector('.element__image').addEventListener('click', event => {
        openPopup(popImg);
        let image = event.target.closest('.element__image');
        hugeImg.src = image.src;
        document.querySelector('.popup__img-text').textContent = element.name;
    })
    return cardElement; 
} 

initialCards.forEach((element) => { 
    secElemCard.append(createCard(element)); 
});