const popupList = Array.from(document.querySelectorAll('.popup')); // найдем все попапы на странице
const inputName = document.querySelector('.popup__input_type_name'); //место куда будем подставлять значение имени
const inputDescription = document.querySelector('.popup__input_type_description'); //место куда будем подставлять значение род занятия
const buttonEditProfile = document.querySelector('.profile__edit-button'); //кнопка редактирования
const buttonAddProfile = document.querySelector('.profile__add-button'); //кнопка добавления
const formElementEdit = document.querySelector('.popup__form'); //форма в окне редактировная
const formElementAdd = document.querySelector('.popup__form_area_add');
const popupImage = document.querySelector('.popup_type_image'); //окно картинки
const inputTitle = document.querySelector('.popup__input_type_title'); //место куда будем подставлять значение названия картинки
const inputLink = document.querySelector('.popup__input_type_image'); //место куда будем подставлять значение ссылки на картинку 
const placeImage = popupImage.querySelector('.popup__place-image'); // находим карточку
const titleImage = popupImage.querySelector('.popup__title-image'); // находим имя карточки

export {
  inputName,
  inputDescription,
  buttonEditProfile,
  buttonAddProfile,
  popupList,
  formElementEdit,
  formElementAdd,
  popupImage,
  inputTitle,
  inputLink,
  placeImage,
  titleImage,
}