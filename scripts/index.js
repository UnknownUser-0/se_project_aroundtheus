const initialCards = [
    {
        name: "Yosemite Valley",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
    },

    {
        name: "Lake Louise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
    },

    {
        name: "Bald Mountains",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
    },

    {
        name: "Latemar",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
    },

    {
        name: "Vanoise National Park",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
    },

    {
        name: "Lago di Braies",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
    },

];

  const profileEditButton = document.querySelector("#profile-edit-button");
  const profileEditModal = document.querySelector("#profile-edit-modal");
  const profileCloseButton = document.querySelector("#profile-close-modal");
  const profileTitle = document.querySelector(".profile__title");
  const profileDescription = document.querySelector(".profile__description");
  const profileTitleInput = document.querySelector("#modal__title");
  const profileDescriptionInput = document.querySelector("#modal__description");
  const profileEditForm = profileEditModal.querySelector(".modal__form");
  const cardListEl = document.querySelector(".cards__list");
  const cardTemplate = document.querySelector("#card-template").content.firstElementChild;
  const addNewCardButton = document.querySelector(".profile__add-button");
  const addCardModal = document.querySelector("#add-card-modal");
  const addCardModalCloseButton = addCardModal.querySelector("#add-card-close-modal");
  const addCardFormElement = addCardModal.querySelector(".modal__form");
  const cardTitleInput = addCardFormElement.querySelector(".modal__input_type_title");
  const cardUrlInput = addCardFormElement.querySelector(".modal__input_type_url");

//Cards
function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  cardTitleEl.textContent = cardData.name;
  cardElement.alt = cardData.link;
  cardImageEl.alt = cardData.name;
  cardImageEl.src = cardData.link;
  return cardElement;
}

function handleProfileEditSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard( {name, link}, cardListEl);
  closeModal(addCardModal);
}

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.append(cardElement);
});

//profile Edit modal
profileEditForm.addEventListener("submit", handleProfileEditSubmit);

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened");
});

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopop();
}

function closePopop() {
  profileEditModal.classList.remove("modal_opened");
}

profileCloseButton.addEventListener("click", closePopop);

//Add card modal
function modal_opened() {
  addCardModal.classList.add("modal_opened");
}

addNewCardButton.addEventListener('click', modal_opened);

addCardModalCloseButton.addEventListener('click', () => addCardModal.classList.remove("modal_opened"));

const likeButtons = document.querySelectorAll(".card__like-button");
likeButtons.forEach(likeButton => {
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });
})