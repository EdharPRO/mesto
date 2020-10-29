const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    },
];

const popAddBtn = document.querySelector('.profile__edit-button');
const profInfoName = document.querySelector('.profile__info-name');
const popName = document.querySelector('.popup__input_name');
const popText = document.querySelector('.popup__input_text');
const popInfoText = document.querySelector('.profile__info-text');
const popImageText = document.querySelector('.popup__img-text');
const popForm = document.querySelector('.popup__form');
const popBtnClose = document.querySelectorAll('.popup__close');
const popBtnElement = document.querySelector('.profile__button');
const popProf = document.querySelector('.popup__add-prof');
const popElement = document.querySelector('.popup__element');
const cardElementContent = document.querySelector('#element').content;
const secElemCard = document.querySelector('.elements');
const popImg = document.querySelector('.popup_img');
const hugeImg = document.querySelector('.popup__img-photo');
const cardName = popElement.querySelector('#cardname');
const cardLink = popElement.querySelector('#cardlink');

function renderModalData() {
    popName.value = profInfoName.textContent;
    popText.value = popInfoText.textContent;
}

function openPopup(popup) {
    popup.classList.add('popup_open');
}

function closePopup(popup) {
    popup.classList.remove('popup_open');
}

function handlePopupSubmit(evt) {
    evt.preventDefault();
    profInfoName.textContent = popName.value;
    popInfoText.textContent = popText.value;
    closePopup(popProf);
}

function formSubmitCard(evt) {

    let newCard = {
        name: cardName.value,
        link: cardLink.value,
    };
    closePopup(popElement);
    secElemCard.prepend(createCard(newCard));
    evt.preventDefault();
}

function createCard(element) {
    let cardElement = cardElementContent.cloneNode(true);
    let cardElementImage = cardElement.querySelector('.element__image');

    cardElement.querySelector('.element__paragraph').textContent = element.name;
    cardElement.querySelector('.element__image').src = element.link;
    cardElement.querySelector('.element__icon').addEventListener('click', (event) => {
        event.target.classList.toggle('element__icon_active');
    });
    cardElement.querySelector('.element__delete').addEventListener('click', (event) => {
        event.target.closest('.element').remove();
    });
    cardElement.querySelector('.element__image').addEventListener('click', event => {
        hugeImg.src = cardElementImage.src;
        popImageText.textContent = element.name;
        openPopup(popImg);
    });

    return cardElement;
}

popAddBtn.addEventListener('click', () => {
    renderModalData();
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

popForm.addEventListener('submit', handlePopupSubmit);

popElement.addEventListener('submit', formSubmitCard);

initialCards.forEach((element) => {
    secElemCard.append(createCard(element));
});


