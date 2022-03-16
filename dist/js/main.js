/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calcField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calcField */ \"./modules/calcField.js\");\n/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/form */ \"./modules/form.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_phoneMask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/phoneMask */ \"./modules/phoneMask.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// в идеале пеередаваемый аргумент должна быть в вызове\r\n// timer('28 february 2022')\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('25 march 2022')\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_calcField__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n// передаём id и классы в slider all-progect, - где находится сладер, .portfolio-item - ссами слайды,\r\n// .portfolio-dots - точки для переключения слайдов\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('all-progects','.portfolio-item','.portfolio-dots'  )\r\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(100)\r\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\r\n  formId: 'form1',\r\n  someElem: [\r\n    {\r\n      type: 'block',\r\n      id:'total'\r\n    }\r\n  ]\r\n})\r\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({formId: 'form2',\r\n  someElem: [\r\n    {\r\n      type: 'block',\r\n      id:'total'\r\n    }\r\n  ]})\r\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({ formId: 'form3',\r\n  someElem: [\r\n    {\r\n      type: 'block',\r\n      id:'total'\r\n    }\r\n]})\r\n;(0,_modules_phoneMask__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('input[type=tel]')\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n//  по умолчанию сделаем 100\r\nconst calc = (price = 100) => {\r\n\r\n  const calcBlock = document.querySelector('.calc-block')\r\n  const calcType = document.querySelector('.calc-type')\r\n  const calcSquare = document.querySelector('.calc-square')\r\n  const calcCount = document.querySelector('.calc-count')\r\n  const calcDay = document.querySelector('.calc-day')\r\n  const total = document.getElementById('total')\r\n\r\n  const countCalc = ()=>{\r\n    const calcTypeValue = +calcType.options[calcType.selectedIndex].value\r\n    const calcSquareValue = calcSquare.value\r\n\r\n    let totalValue = 0\r\n    let calcCountValue = 1\r\n    let calcDayValue = 1\r\n\r\n    if (calcCount.value > 1) {\r\n      calcCountValue += (+calcCount.value / 10)\r\n    }\r\n\r\n    if (calcDay.value && calcDay.value < 5) {\r\n      calcDayValue = 2\r\n    } else if (calcDay.value && calcDay.value < 10){\r\n      calcDayValue = 1.5\r\n    }\r\n\r\n    // проврека что эти поля не пустые\r\n    if (calcType.value && calcSquare.value) {\r\n      totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue\r\n    } else {\r\n      totalValue = 0\r\n    }\r\n\r\n\r\n\r\n    let previousNum = +total.textContent\r\n    ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n      duration: 500,\r\n      timing(timeFraction) {\r\n        return Math.pow(timeFraction, 3)\r\n      },\r\n      draw(progress) {\r\n        if (previousNum > 0) {\r\n          total.textContent = previousNum + Math.round((totalValue - previousNum) * progress)\r\n        } else {\r\n          total.textContent = Math.round(totalValue * progress)\r\n        }\r\n      }\r\n    });\r\n  }\r\n\r\n  calcBlock.addEventListener('input', (e)=>{\r\n    // проверка если event target равен  select то выполним функцию\r\n    if (e.target === calcType || e.target === calcSquare ||\r\n       e.target === calcCount || e.target === calcDay) {\r\n      countCalc()\r\n    }\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/calcField.js":
/*!******************************!*\
  !*** ./modules/calcField.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calcField = () => {\r\nconst calcBlock = document.querySelector('.calc-block')\r\n\r\n  calcBlock.addEventListener('input', (e) =>{\r\n    if (e.target.localName == 'input') {\r\n      e.target.value = e.target.value.replace(/\\D+/gi,\"\")\r\n    }\r\n  })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calcField);\n\n//# sourceURL=webpack:///./modules/calcField.js?");

/***/ }),

/***/ "./modules/form.js":
/*!*************************!*\
  !*** ./modules/form.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst form = () => {\r\n\r\nconst allFormInput = document.querySelectorAll('input[type=\"text\"]')\r\nconst inputPlaceMessage = document.querySelector('input[placeholder=\"Ваше сообщение\"]')\r\nconst inputEmail = document.querySelectorAll('input[type=email]')\r\nconst inputTel = document.querySelectorAll('input[type=tel]')\r\nconst allInput = document.querySelectorAll('input')\r\n\r\n\r\n  allFormInput.forEach(element => {\r\n    element.addEventListener('input',() =>{\r\n      element.value = element.value.replace(/[^а-я-\\s]/gi,'');\r\n      // console.log(element);\r\n    })\r\n  });\r\n\r\n  inputPlaceMessage.addEventListener('input', ()=>{\r\n    // ПОЯснение все не латинские не буквы заменяем на пустую строку и не цифры\r\n    inputPlaceMessage.value = inputPlaceMessage.value.replace(/[^\\W\\d]+/gi,'');\r\n  })\r\n\r\n\r\n  inputEmail.forEach(element => {\r\n    element.addEventListener('input',() =>{\r\n      const replaceEmail = /[^\\w\\s\\_\\-\\@\\.\\!\\~\\*\\']+/gi\r\n      element.value = element.value.replace(replaceEmail, \"\")\r\n    })\r\n  });\r\n\r\n  inputTel.forEach(e => {\r\n    e.addEventListener('input',() =>{\r\n      const replaceTel = /[^\\d\\-()']+/gi\r\n      e.value = e.value.replace(replaceTel, \"\")\r\n    })\r\n\r\n  });\r\n\r\n\r\n  allInput.forEach(element => {\r\n    element.addEventListener('blur', ()=>{\r\n      element.value = test(element.value)\r\n    })\r\n  });\r\n\r\n\r\n\r\n  const test = (str) =>{\r\n    // Несколько идущих подряд пробелов или дефисов должны заменяться на один.\r\n    const spacesВefines = /(\\s{2,})|(\\-{2,})/g\r\n    // Пробелы и дефисы в начале и конце значения должны удаляться.\r\n    const trimStartEnd = /(^[\\s\\-]+|^)(.*?)(?:([\\s\\-]+$)|$)/i\r\n    // Для поля type=text Первая буква каждого слова должна приводиться к верхнему регистру, а все остальные — к нижнему.\r\n    const capitalizedWord = /((^|\\s\\-|\\s|\\-)[а-я])([а-я]*)/gi\r\n\r\n    str = str.replace(spacesВefines,' ')\r\n    str = str.replace(trimStartEnd,(str, $1, $2) =>`${$2}`)\r\n    str = str.replace(capitalizedWord,(str, $1, $2,$3) =>`${$1.toUpperCase() + $3.toLowerCase()}`)\r\n    return str\r\n    // .toUpperCase() + other.toLowerCase());\r\n  }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);\n\n//# sourceURL=webpack:///./modules/form.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({timing, draw, duration}) => {\r\n\r\n  let start = performance.now();\r\n\r\n  requestAnimationFrame(function animate(time) {\r\n    // timeFraction изменяется от 0 до 1\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) timeFraction = 1;\r\n\r\n    // вычисление текущего состояния анимации\r\n    let progress = timing(timeFraction);\r\n\r\n    draw(progress); // отрисовать её\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n\r\n  });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () =>{\r\n  // само меню\r\n  const menu = document.querySelector('menu')\r\n\r\n  const handleMenu = (e) => {\r\n    e.preventDefault()\r\n    menu.classList.toggle('active-menu')\r\n    if (e.target.matches('ul > li > a')) {\r\n      // присваиванием href то есть ссылку к какому id перейти экрану\r\n      let elmnt = document.querySelector(e.target.hash)\r\n      // экран с настройками переходт к элементу по id\r\n      elmnt.scrollIntoView({\r\n        block: \"start\",\r\n        behavior: \"smooth\"\r\n      });\r\n    }\r\n  }\r\n\r\n  document.addEventListener('click',(e)=>{\r\n    // в e -> target  ищем classList -> conatins (проверяем есть ли во вложенномти элемент с таким классом )\r\n\r\n    if( e.target.closest('.close-btn') || e.target.matches('ul > li > a') ||\r\n    e.target.closest('.menu') || (!e.target.closest('.active-menu') && menu.classList.contains('active-menu'))) {\r\n      handleMenu(e)\r\n    }\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst modal = () =>{\r\n\r\n  const btnScroll = document.getElementById('btn-scroll')\r\n  const modal = document.querySelector('.popup')\r\n  const buttons = document.querySelectorAll('.popup-btn')\r\n  // индетификатор анимации\r\n  let idScroll\r\n  // функция анимации\r\n  // перебор кнопок nodelist\r\n  buttons.forEach(btn => {\r\n    btn.addEventListener('click', ()=>{\r\n\r\n      if (window.innerWidth > 767) {\r\n          // body делаем hidden чтобы не работала прокрутка\r\n          (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n            duration: 500,\r\n            timing(timeFraction) {\r\n              return Math.pow(timeFraction, 3)\r\n            },\r\n            draw(progress) {\r\n              let num = (1 - +progress) * 100\r\n              // elem.style.width = progress * 100 + '%';\r\n              modal.style.transform = 'translateX('+ num +'%)'\r\n            }\r\n          });\r\n        }\r\n      modal.style.display = 'block'\r\n      document.body.style.overflow = 'hidden'\r\n      document.body.style.cssText = `\r\n      padding-right: 0 !important;`\r\n\r\n    })\r\n  })\r\n  // закрытия анимациии\r\n  modal.addEventListener('click', (e)=>{\r\n    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n      modal.style.display = 'none'\r\n      // убираем отмену прокрутки\r\n      document.body.style.overflow = ''\r\n    }\r\n  })\r\n\r\n  btnScroll.addEventListener('click',(e)=>{\r\n    e.preventDefault()\r\n    // получаем высоту где находится наш экран\r\n    let top = document.documentElement.scrollTop\r\n    const scrollBottom = () =>{\r\n      top = top + 20\r\n      idScroll = requestAnimationFrame(scrollBottom)\r\n      document.documentElement.scrollTop = top\r\n      // если  top больше 850 то сбрасываем анимацию\r\n      if(top > 850) {\r\n        cancelAnimationFrame(idScroll)\r\n      }\r\n    }\r\n    scrollBottom()\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/phoneMask.js":
/*!******************************!*\
  !*** ./modules/phoneMask.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst maskPhone = (selector, masked = '+7 (___) ___-__-__') => {\r\n\tconst elems = document.querySelectorAll(selector);\r\n\tfunction mask(event) {\r\n\t\tconst keyCode = event.keyCode;\r\n\t\tconst template = masked,\r\n\t\t\tdef = template.replace(/\\D/g, \"\"),\r\n\t\t\tval = this.value.replace(/\\D/g, \"\");\r\n\t\tconsole.log(template);\r\n\t\tlet i = 0,\r\n\t\t\tnewValue = template.replace(/[_\\d]/g, function (a) {\r\n\t\t\t\treturn i < val.length ? val.charAt(i++) || def.charAt(i) : a;\r\n\t\t\t});\r\n\t\ti = newValue.indexOf(\"_\");\r\n\t\tif (i !== -1) {\r\n\t\t\tnewValue = newValue.slice(0, i);\r\n\t\t}\r\n\t\tlet reg = template.substr(0, this.value.length).replace(/_+/g,\r\n\t\t\tfunction (a) {\r\n\t\t\t\treturn \"\\\\d{1,\" + a.length + \"}\";\r\n\t\t\t}).replace(/[+()]/g, \"\\\\$&\");\r\n\t\treg = new RegExp(\"^\" + reg + \"$\");\r\n\t\tif (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {\r\n\t\t\tthis.value = newValue;\r\n\t\t}\r\n\t\tif (event.type === \"blur\" && this.value.length < 5) {\r\n\t\t\tthis.value = \"\";\r\n\t\t}\r\n\r\n\t}\r\n\r\n\tfor (const elem of elems) {\r\n\t\telem.addEventListener(\"input\", mask);\r\n\t\telem.addEventListener(\"focus\", mask);\r\n\t\telem.addEventListener(\"blur\", mask);\r\n\t}\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (maskPhone);\n\n//# sourceURL=webpack:///./modules/phoneMask.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({formId, someElem = []}) =>{\r\n  const form = document.getElementById(formId)\r\n  const statusBlock = document.createElement('div')\r\n\r\n  const loadText = 'Загрузка...'\r\n  const errorText = 'Ошибка'\r\n  const successText = 'Спасибо! Наш менеджер с вами свяжеться!'\r\n  const modal = document.querySelector('.popup')\r\n\r\n\r\n\r\n  const validate = (list) =>{\r\n    let success = true\r\n    // провреям в списке еси там не ни одного класа success то success равняем false\r\n    list.forEach(input =>{\r\n      if (input.name == 'user_name' && input.value.length < 2) {\r\n          success = false\r\n      }\r\n      if (input.name == 'user_phone' && input.value.length < 6) {\r\n          success = false\r\n      }\r\n    })\r\n\r\n    return success\r\n  }\r\n\r\n  const sendData = (data) =>{\r\n    return fetch('https://jsonplaceholder.typicode.com/posts',{\r\n      method: 'POST',\r\n      body: JSON.stringify(data),\r\n      headers:{\r\n        \"Content-Type\": \"application/json\"\r\n      }\r\n      }).then(res => res.json())\r\n  }\r\n\r\n  const submitForm = () =>{\r\n    const formElements = form.querySelectorAll('input')\r\n    // СОБРАТЬ ВСЕ ДАННЫЕ ИЗ ФОРМЫ ЧТОБЫ НЕ ИСКАТЬ КАЖДЫЙ input\r\n    const formData = new FormData(form)\r\n    const formBody = {}\r\n\r\n    statusBlock.textContent = loadText\r\n\r\n    // Меняем цвет для модального окна\r\n    if (formId === 'form3') {\r\n      statusBlock.style.color ='#fff'\r\n    }\r\n\r\n    form.append(statusBlock)\r\n\r\n    formData.forEach((val , key) =>{\r\n      formBody[key] = val\r\n    })\r\n\r\n    someElem.forEach(elem =>{\r\n      const element = document.getElementById(elem.id)\r\n      if (element && parseInt(element.textContent) > 0) {\r\n        console.log(element.textContent);\r\n        if (elem.type === 'block') {\r\n          formBody[elem.id] = element.textContent\r\n        } else if (elem.type === 'input') {\r\n          formBody[elem.id] = element.value\r\n        }\r\n      }\r\n\r\n    })\r\n\r\n    if (validate(formElements)) {\r\n      sendData(formBody)\r\n        .then(data =>{\r\n          statusBlock.textContent = successText\r\n\r\n          formElements.forEach(input =>{\r\n            input.value = ''\r\n          })\r\n        })\r\n        .catch(error =>{\r\n          statusBlock.textContent = errorText\r\n        })\r\n        .finally(()=>{\r\n          setTimeout(() => statusBlock.textContent = '', 2000);\r\n          setTimeout(() => {\r\n          modal.style.display = 'none'\r\n          document.body.style.overflow = ''\r\n        }, 4000);\r\n        })\r\n    } else {\r\n      alert('Данные не валидны')\r\n      statusBlock.textContent = ''\r\n    }\r\n  }\r\n  try {\r\n    // проверяем наличие формы\r\n    if (!form) {\r\n      throw new Error(' Верните форму на место пожалуйста')\r\n    }\r\n\r\n    form.addEventListener('submit', (event) => {\r\n      event.preventDefault()\r\n\r\n      submitForm()\r\n    })\r\n  } catch(error) {\r\n    console.log(error.message);\r\n  }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// all-progects\r\n\r\n\r\nconst slider = (allProgects,portfolioItem,portfolioDots) =>{\r\n  // проверка передаваемых значений\r\n  // подключить\r\n  if (!(allProgects && portfolioItem && portfolioDots)) return;\r\n\r\n  const sliderBlock = document.getElementById(allProgects)\r\n  const slides = document.querySelectorAll(portfolioItem)\r\n  const dotsWrapper = document.querySelector(portfolioDots)\r\n  //  проверяем элементы на пустые элементы и где nodelist проверям длину массива\r\n  if (!(sliderBlock && slides.length > 0 && dotsWrapper)) return;\r\n  // делаем значение по умолчнию для первого элемента\r\n  slides[0].classList = 'portfolio-item portfolio-item-active'\r\n\r\n  const timeInterval = 2000\r\n  // dot-active\r\n  let dots = document.querySelectorAll('.dot')\r\n  let currentSlide = 0\r\n  let interval\r\n\r\n  const addDot = () =>{\r\n    for (let i = 0; i < slides.length; i++) {\r\n      let elem = document.createElement('li')\r\n      // даём значение по умолчнию 0 по индексу элементу\r\n      if (i == 0) {\r\n         elem.classList = 'dot dot-active'\r\n      } else {\r\n        elem.classList = 'dot'\r\n      }\r\n      dotsWrapper.append(elem)\r\n    }\r\n    dots = document.querySelectorAll('.dot')\r\n  }\r\n  // вызов функцции добавления dot\r\n  addDot()\r\n\r\n\r\n  const prevSlide = (elems, index, strClass) =>{\r\n    elems[index].classList.remove(strClass)\r\n  }\r\n\r\n  const nextSlide = (elems, index, strClass) =>{\r\n    elems[index].classList.add(strClass)\r\n  }\r\n\r\n  const autoSlide = () => {\r\n    prevSlide(slides, currentSlide, 'portfolio-item-active')\r\n    prevSlide(dots, currentSlide, 'dot-active')\r\n    currentSlide++\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0\r\n    }\r\n\r\n    nextSlide(slides, currentSlide, 'portfolio-item-active')\r\n    nextSlide(dots, currentSlide, 'dot-active')\r\n  }\r\n\r\n  const startSlide = (timer = 1500) =>{\r\n    interval = setInterval(autoSlide,timer)\r\n  }\r\n\r\n  const stopSlide = () =>{\r\n    clearInterval(interval)\r\n  }\r\n\r\n  sliderBlock.addEventListener('click', (e)=>{\r\n    e.preventDefault()\r\n\r\n    // ОБРАБОТКА СОБЫТИЙ ПОЛ КЛИК ПО Методу ДЕЛеГИРОВАНИЯ\r\n    // ЗАППРЕТИТИТ БЕЗ .dot, .portfolio-btn')) \"MN КЛАССОВ обрабатывать\"\r\n    if (!e.target.matches('.dot, .portfolio-btn')) {\r\n      return\r\n    }\r\n\r\n    prevSlide(slides, currentSlide, 'portfolio-item-active')\r\n    prevSlide(dots, currentSlide, 'dot-active')\r\n\r\n    if (e.target.matches('#arrow-right')) {\r\n      currentSlide++\r\n    } else if(e.target.matches('#arrow-left')){\r\n      currentSlide--\r\n\r\n    } else if (e.target.classList.contains('dot')){\r\n      dots.forEach((dot, index) =>{\r\n        if (e.target === dot) {\r\n          currentSlide = index\r\n        }\r\n      })\r\n    }\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0\r\n    }\r\n\r\n    if (currentSlide < 0) {\r\n      currentSlide = slides.length - 1\r\n    }\r\n\r\n    nextSlide(slides, currentSlide, 'portfolio-item-active')\r\n    nextSlide(dots, currentSlide, 'dot-active')\r\n\r\n  })\r\n\r\n  sliderBlock.addEventListener('mouseenter',(e) =>{\r\n    if (e.target.matches('.dot, .portfolio-btn')) {\r\n      stopSlide()\r\n    }\r\n    // параметр true активирование вспытия\r\n    // чтобы события обрабатыались на дчернем желменте\r\n  }, true)\r\n  sliderBlock.addEventListener('mouseleave',(e) =>{\r\n    if (e.target.matches('.dot, .portfolio-btn')) {\r\n      startSlide(timeInterval)\r\n    }\r\n  }, true)\r\n\r\n  startSlide(timeInterval)\r\n }\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n  const tabPanel = document.querySelector('.service-header')\r\n  const tabs = document.querySelectorAll('.service-header-tab')\r\n  const tabContent = document.querySelectorAll('.service-tab')\r\n\r\n  tabPanel.addEventListener('click',(e)=>{\r\n    if (e.target.closest('.service-header-tab')) {\r\n      const tabBtn = e.target.closest('.service-header-tab')\r\n      tabs.forEach((tab, index) =>{\r\n        if (tab === tabBtn) {\r\n          tab.classList.add('active')\r\n          tabContent[index].classList.remove('d-none')\r\n        } else {\r\n          tab.classList.remove('active')\r\n          tabContent[index].classList.add('d-none')\r\n        }\r\n      })\r\n    }\r\n  })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// передаём дедлайн в функцию\r\nconst timer = (deadline) => {\r\n  // запишем в перменная элменты со временм\r\n  const timerHours = document.getElementById('timer-hours')\r\n  const timerMinutes = document.getElementById('timer-minutes')\r\n  const timerSeconds = document.getElementById('timer-seconds')\r\n  const timerDays = document.getElementById('timer-days')\r\n\r\n  const getTimeRemaining = () =>{\r\n    // получим в милисекундах время дедлайна\r\n    let dateStop = new Date(deadline).getTime()\r\n    // получим в милисекундах время сейчас\r\n    let dateNow = new Date().getTime()\r\n    // переменная с разницой во времени в милисек\r\n    // let timeRemaining = dateStop - dateNow\r\n    // Чтобы получить в секундах делм на 1000\r\n    let timeRemaining = (dateStop - dateNow) / 1000\r\n    // ПЕРЕМЕННАЯ КОЛИЧЕСВТВО ДНЕЙ возьмём расчёт часов\r\n    let days = Math.floor(timeRemaining / 60 / 60 / 24)\r\n    // чтобы получить час ынжно раздалить на 60 и еще на 60\r\n    // чтобы показывадло не 150 часов нужно разделить ещё на 24 и получить остаотк от деления\r\n    let hours = Math.floor((timeRemaining / 60 / 60) % 24)\r\n    //  чтоы получить минуты нужно раздлеить на 60\r\n    let minutes = Math.floor((timeRemaining / 60) % 60)\r\n    // округление числа до целочисленного и птом получаем остаток от деления\r\n    let seconds = Math.floor(timeRemaining % 60)\r\n\r\n    // даная функция будет возвращать объект\r\n    // если навзание ключа соответсвет названию переменной то можно убрать название ключа       days: days,\r\n    return {timeRemaining, days, hours, minutes,seconds }\r\n  }\r\n  const updateClock = () =>{\r\n    let getTime = getTimeRemaining()\r\n    let nameDay = lastDigitToWord(getTime.days)\r\n    timerHours.textContent = String(getTime.hours).padStart(2,'0')\r\n    timerMinutes.textContent = String(getTime.minutes).padStart(2,'0')\r\n    timerSeconds.textContent = String(getTime.seconds).padStart(2,'0')\r\n    timerDays.textContent = `${getTime.days} ${nameDay}`\r\n\r\n    if (getTime.timeRemaining > 0) {\r\n      setTimeout(updateClock, 1000)\r\n    } else {\r\n      timerHours.textContent = '00'\r\n      timerMinutes.textContent = '00'\r\n      timerSeconds.textContent = '00'\r\n      timerDays.textContent = 0\r\n    }\r\n  }\r\n  // пишет правильны окончания к слову день\r\n  const lastDigitToWord = (digit) => {\r\n    const lastFigure = parseInt(digit.toString().substr(digit.toString().length - 1, 1));\r\n    if (digit >= 11 && digit < 15) {\r\n      return 'Дней';\r\n    }\r\n    else {\r\n      if (lastFigure == 1) return 'день';\r\n      if (lastFigure > 1 && lastFigure < 5) return 'дня';\r\n      if (lastFigure == 0 || lastFigure >= 5) return 'дней';\r\n    }\r\n  }\r\n\r\n  // дата по делайну которую передаем в функцию\r\n  // getTime('27 February 2022')\r\n  // третим параметрм будет аргумеент передаваемый в функцию  getTimeRemaining('27 February 2022')\r\n  // setInterval(getTimeRemaining, 1000 , '27 February 2022')\r\n  updateClock()\r\n}\r\n// экспортируем функцию\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;