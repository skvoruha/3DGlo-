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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n\r\n\r\n\r\n\r\n// в идеале пеередаваемый аргумент должна быть в вызове\r\n// timer('28 february 2022')\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('1 march 2022')\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () =>{\r\n  const menuBtn = document.querySelector('.menu')\r\n  const menu = document.querySelector('menu')\r\n  const closeBtn = menu.querySelector('.close-btn')\r\n  const menuItems = menu.querySelectorAll('ul > li > a')\r\n\r\n  const handleMenu = () => {\r\n    menu.classList.toggle('active-menu')\r\n  }\r\n  // передаём по клику нукцию handleMenu\r\n  menuBtn.addEventListener('click', handleMenu)\r\n  closeBtn.addEventListener('click', handleMenu)\r\n  for (let i = 0; i < menuItems.length -1;i++){\r\n    menuItems[i].addEventListener('click', handleMenu)\r\n  }\r\n  menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu));\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () =>{\r\n  const width = document.documentElement.clientWidth\r\n  if (width > 768) {\r\n\r\n    const modal = document.querySelector('.popup')\r\n    const buttons = document.querySelectorAll('.popup-btn')\r\n    const closeBtn = modal.querySelector('.popup-close')\r\n    // индетификатор анимации\r\n    let idInterval\r\n    let count = 100\r\n\r\n    // функция анимации\r\n    const modalAnimation = () =>{\r\n      modal.style.display = 'block'\r\n      count = count -4\r\n      idInterval = requestAnimationFrame(modalAnimation)\r\n      if (count >= 0) {\r\n        // modal.style.left = count\r\n        modal.style.transform = 'translateX('+ count +'%)'\r\n      } else {\r\n        count = 100\r\n        cancelAnimationFrame(idInterval)\r\n      }\r\n    }\r\n    // функция закрытия анимации\r\n    const modalAnimationClose = () =>{\r\n      modal.style.transform = 'translateX(100%)'\r\n      modal.style.display = 'none'\r\n    }\r\n\r\n    buttons.forEach(btn => {\r\n      btn.addEventListener('click', modalAnimation)\r\n    })\r\n\r\n    closeBtn.addEventListener('click', modalAnimationClose)\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// передаём дедлайн в функцию\r\nconst timer = (deadline) => {\r\n  // запишем в перменная элменты со временм\r\n  const timerHours = document.getElementById('timer-hours')\r\n  const timerMinutes = document.getElementById('timer-minutes')\r\n  const timerSeconds = document.getElementById('timer-seconds')\r\n  const timerDays = document.getElementById('timer-days')\r\n\r\n  const getTimeRemaining = () =>{\r\n    // получим в милисекундах время дедлайна\r\n    let dateStop = new Date(deadline).getTime()\r\n    // получим в милисекундах время сейчас\r\n    let dateNow = new Date().getTime()\r\n    // переменная с разницой во времени в милисек\r\n    // let timeRemaining = dateStop - dateNow\r\n    // Чтобы получить в секундах делм на 1000\r\n    let timeRemaining = (dateStop - dateNow) / 1000\r\n    // ПЕРЕМЕННАЯ КОЛИЧЕСВТВО ДНЕЙ возьмём расчёт часов\r\n    let days = Math.floor(timeRemaining / 60 / 60 / 24)\r\n    // чтобы получить час ынжно раздалить на 60 и еще на 60\r\n    // чтобы показывадло не 150 часов нужно разделить ещё на 24 и получить остаотк от деления\r\n    let hours = Math.floor((timeRemaining / 60 / 60) % 24)\r\n    //  чтоы получить минуты нужно раздлеить на 60\r\n    let minutes = Math.floor((timeRemaining / 60) % 60)\r\n    // округление числа до целочисленного и птом получаем остаток от деления\r\n    let seconds = Math.floor(timeRemaining % 60)\r\n\r\n    // даная функция будет возвращать объект\r\n    // если навзание ключа соответсвет названию переменной то можно убрать название ключа       days: days,\r\n    return {timeRemaining, days, hours, minutes,seconds }\r\n  }\r\n  const updateClock = () =>{\r\n    let getTime = getTimeRemaining()\r\n\r\n    timerHours.textContent = String(getTime.hours).padStart(2,'0')\r\n    timerMinutes.textContent = String(getTime.minutes).padStart(2,'0')\r\n    timerSeconds.textContent = String(getTime.seconds).padStart(2,'0')\r\n    timerDays.textContent = getTime.days\r\n    if (getTime.timeRemaining > 0) {\r\n      setTimeout(updateClock, 1000)\r\n    } else {\r\n      timerHours.textContent = '00'\r\n      timerMinutes.textContent = '00'\r\n      timerSeconds.textContent = '00'\r\n      timerDays.textContent = 0\r\n    }\r\n  }\r\n\r\n  // дата по делайну которую передаем в функцию\r\n  // getTime('27 February 2022')\r\n  // третим параметрм будет аргумеент передаваемый в функцию  getTimeRemaining('27 February 2022')\r\n  // setInterval(getTimeRemaining, 1000 , '27 February 2022')\r\n  updateClock()\r\n}\r\n// экспортируем функцию\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

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