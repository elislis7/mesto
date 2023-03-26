(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n,r,o,i,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userId=u,this._ownerId=e.owner._id,this._cardId=e._id,this._name=e.name,this._link=e.link,this._isLike=!1,this._likes=e.likes,this._templateSelector=n,this._element=this._getTemplate(),this._heartButton=this._element.querySelector(".element__heart"),this._likeCounter=this._element.querySelector(".element__heart-numbers"),this._trashButton=this._element.querySelector(".element__trash"),this._elementImage=this._element.querySelector(".element__image"),this._elementName=this._element.querySelector(".element__title"),this._handleCardClick=r,this._handleCardDelete=o,this._handleCardLike=i}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var t=this;this._heartButton.addEventListener("click",(function(){t._handleCardLike(t,t._cardId)})),this._trashButton.addEventListener("click",(function(){t._handleCardDelete(t,t._cardId)})),this._elementImage.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}},{key:"_clickLikeButton",value:function(){this._likeButton.classList.toggle("element__heart_active")}},{key:"isLike",get:function(){return this._isLike}},{key:"getlikesCard",value:function(t){this._likes=t,this._likeCounter.textContent=this._likes.length}},{key:"toggleIsLike",value:function(){this._isLike=!this._isLike}},{key:"toggleLike",value:function(){this._heartButton.classList.toggle("element__heart_active")}},{key:"deleteCard",value:function(){this._element.remove()}},{key:"createElement",value:function(){var t=this;return this._setEventListeners(),this._elementImage.src=this._link,this._elementImage.alt=this._name,this._elementName.textContent=this._name,this._likeCounter.textContent=this._likes.length,this._userId!==this._ownerId&&this._trashButton.remove(),this._likes.some((function(e){return e._id===t._userId}))&&(this._heartButton.classList.add("element__heart_active"),this._isLike=!0),this._element}},{key:"getNameImage",value:function(){return this._name}},{key:"getLinkImage",value:function(){return this._link}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._settings=e,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._settings.inputSelector)),this._buttonElement=this._formElement.querySelector(this._settings.submitButtonSelector)}var e,n;return e=t,(n=[{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_showInputError",value:function(t,e){var n=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._settings.inputErrorClass),n.classList.add(this._settings.errorClass),n.textContent=e}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._settings.inputErrorClass),e.classList.remove(this._settings.errorClass),e.textContent=""}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._settings.inactiveButtonClass),this._buttonElement.setAttribute("disabled","disabled")):(this._buttonElement.classList.remove(this._settings.inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetValidation",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)})),this._toggleButtonState()}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),u={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_inactive",inputErrorClass:".popup__input-type_error",errorClass:"popup__input-error_visible"};function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}var l=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=r,this._renderer=o,this._containerSelector=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderer",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._containerSelector.append(t)}},{key:"addItemPrepend",value:function(t){this._containerSelector.prepend(t)}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}var p=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._headers=e.headers}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers,method:"GET"}).then((function(t){if(t.ok)return t.json()})).catch((function(t){return console.log(t)}))}},{key:"getCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers,method:"GET"}).then((function(t){if(t.ok)return t.json()})).catch((function(t){return console.log(t)}))}},{key:"editProfile",value:function(t){return fetch("".concat(this._url,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:t.name,about:t.about})}).then((function(t){if(t.ok)return t.json()})).catch((function(t){return console.log(t)}))}},{key:"editProfileAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:t.avatar})}).then((function(t){if(t.ok)return t.json()})).catch((function(t){return console.log(t)}))}},{key:"createCard",value:function(t){return fetch("".concat(this._url,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify({name:t.name,link:t.link})}).then((function(t){if(t.ok)return t.json()})).catch((function(t){return console.log(t)}))}},{key:"deleteCardApi",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{headers:this._headers,method:"DELETE"}).then((function(t){if(t.ok)return t.json()})).catch((function(t){return console.log(t)}))}},{key:"addLikes",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{headers:this._headers,method:"PUT"}).then((function(t){if(t.ok)return t.json()})).catch((function(t){return console.log(t)}))}},{key:"deleteLikes",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{headers:this._headers,method:"DELETE"}).then((function(t){if(t.ok)return t.json()})).catch((function(t){return console.log(t)}))}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}var m=function(){function t(e){var n=e.dataName,r=e.dataDescription,o=e.dataAvatar,i=e._id;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameElement=document.querySelector(n),this._descriptionElement=document.querySelector(r),this._avatarElement=document.querySelector(o),this._id=i}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,about:this._descriptionElement.textContent,avatar:this._avatarElement.src}}},{key:"setUserInfo",value:function(t){this._nameElement.textContent=t.name,this._descriptionElement.textContent=t.about}},{key:"setUserAvatar",value:function(t){this._avatarElement.src=t.avatar}},{key:"getUserId",value:function(){return this._id}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}var v=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){e.target.classList.contains("popup_opened")&&t.close(),e.target.classList.contains("popup__close-icon")&&t.close()}))}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=w(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},S.apply(this,arguments)}function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},k(t,e)}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=w(r);if(o){var n=w(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._placeImage=e,r._titleImage=n,r}return e=u,(n=[{key:"open",value:function(t,e){this._placeImage.src=e,this._placeImage.alt=t,this._titleImage.textContent=t,S(w(u.prototype),"open",this).call(this)}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(v);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},P.apply(this,arguments)}function L(t,e){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},L(t,e)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&L(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(r);if(o){var n=C(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=e.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleFormSubmit=r,n._popupForm=n._popup.querySelector(".popup__form"),n._popupInput=n._popup.querySelectorAll(".popup__input"),n._submitButton=n._popupForm.querySelector(".popup__submit-button"),n}return e=u,(n=[{key:"setInputValues",value:function(t){this._popupInput.forEach((function(e){e.value=t[e.name]}))}},{key:"_getInputValues",value:function(){var t={};return this._popupInput.forEach((function(e){t[e.name]=e.value})),t}},{key:"setButtonText",value:function(t){this._submitButton.textContent=t}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())})),P(C(u.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){P(C(u.prototype),"close",this).call(this),this._popupForm.reset()}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(v);function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=R(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},B.apply(this,arguments)}function x(t,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},x(t,e)}function R(t){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},R(t)}var A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=R(r);if(o){var n=R(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleFormDeleteSubmit=e,n._form=n._popup.querySelector(".popup__form"),n._button=n._form.querySelectorAll(".popup__submit-button"),n}return e=u,(n=[{key:"setButtonText",value:function(t){this._button.textContent=t}},{key:"open",value:function(t,e){B(R(u.prototype),"open",this).call(this),this._card=t,this._cardID=e}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("click",(function(e){e.preventDefault(),t._handleFormDeleteSubmit(t._card),B(R(u.prototype),"close",t).call(t)})),B(R(u.prototype),"setEventListeners",this).call(this)}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(v),D=(Array.from(document.querySelectorAll(".popup")),document.querySelector(".popup__input_type_name")),U=document.querySelector(".popup__input_type_avatar"),V=document.querySelector(".popup__input_type_description"),F=document.querySelector(".profile__edit-button"),N=document.querySelector(".profile__add-button"),J=document.querySelector(".profile__edit-avatar-button"),G=document.querySelector(".popup__form"),H=document.querySelector(".popup__form_area_add"),M=document.querySelector(".popup__form_edit_avatar"),z=document.querySelector(".popup_type_image"),$=(document.querySelector(".popup__input_type_title"),document.querySelector(".popup__input_type_image"),z.querySelector(".popup__place-image")),K=z.querySelector(".popup__title-image");function Q(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var W,X=new p({url:"https://mesto.nomoreparties.co/v1/cohort-61",headers:{authorization:"94d1ffee-3999-4573-85f3-6adc0420e1b3","Content-Type":"application/json"}});Promise.all([X.getUserInfo(),X.getCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return Q(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];it.setUserInfo(o),it.setUserAvatar(o),it.getUserId(o._id),W=o._id,at.renderer(i)})).catch((function(t){return console.log(t)})),X.getUserInfo().then((function(t){it.getUserInfo(t),D.value=t.name,V.value=t.about})).catch((function(t){return console.log(t)}));var Y=new I(".popup_edit_avatar",{handleFormSubmit:function(t){Y.setButtonText("Сохранение..."),X.editProfileAvatar(t).then((function(t){it.setUserAvatar(t,{avatar:U}),Y.close()})).catch((function(t){return console.log(t)})).finally((function(){Y.setButtonText("Сохранить")}))}});Y.setEventListeners(),J.addEventListener("click",(function(){ot.resetValidation(),Y.open()}));var Z=new A(".popup_delete_card",(function(t){Z.setButtonText("Удаление..."),X.deleteCardApi(t._cardId).then((function(){t.deleteCard(),Z.close()})).catch((function(t){return console.log(t)})).finally((function(){Z.setButtonText("Да")}))}));function tt(t,e){Z.open(t,e)}function et(t,e){t.isLike?X.deleteLikes(e).then((function(e){t.getlikesCard(e.likes),t.toggleIsLike(),t.toggleLike()})).catch((function(t){return console.log(t)})):X.addLikes(e).then((function(e){t.getlikesCard(e.likes),t.toggleIsLike(),t.toggleLike()})).catch((function(t){return console.log(t)}))}Z.setEventListeners();var nt=new i(u,G);nt.enableValidation();var rt=new i(u,H);rt.enableValidation();var ot=new i(u,M);ot.enableValidation();var it=new m({dataName:".profile__info-name",dataDescription:".profile__info-description",dataAvatar:".profile__avatar"}),ut=new I(".popup_type_edit",{handleFormSubmit:function(t){ut.setButtonText("Сохранение..."),X.editProfile(t).then((function(e){it.setUserInfo(t),ut.close(e)})).catch((function(t){return console.log(t)})).finally((function(){ut.setButtonText("Сохранить")}))}});ut.setEventListeners(),F.addEventListener("click",(function(){nt.resetValidation(),ut.open()}));var at=new l({renderer:function(t){at.addItem(ct(t))}},".elements");function ct(t){return new n(t,"#element-template",ft,tt,et,W).createElement()}X.getCards().then((function(t){at.renderer(t)})).catch((function(t){return console.log(t)}));var lt=new I(".popup_type_add",{handleFormSubmit:function(t,e){lt.setButtonText("Сохранение..."),X.createCard(t,e).then((function(t){var e=ct(t);at.addItemPrepend(e),lt.close()})).catch((function(t){return console.log(t)})).finally((function(){lt.setButtonText("Создать")}))}});lt.setEventListeners(),N.addEventListener("click",(function(){rt.resetValidation(),lt.open()}));var st=new E(".popup_type_image",$,K);function ft(){st.open(this.getNameImage(),this.getLinkImage())}st.setEventListeners()})();