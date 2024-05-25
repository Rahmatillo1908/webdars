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

/***/ "./src/Text.js":
/*!*********************!*\
  !*** ./src/Text.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   div2: () => (/* binding */ div2),\n/* harmony export */   img: () => (/* binding */ img),\n/* harmony export */   img1: () => (/* binding */ img1),\n/* harmony export */   styleSheet: () => (/* binding */ styleSheet)\n/* harmony export */ });\nlet img = document.createElement(\"img\")\r\nlet img1 = document.createElement(\"img\")\r\nlet div2 = document.createElement(\"div\")\r\n\r\ndiv2.textContent = \"new\"\r\n\r\nlet styleSheet = document.createElement(\"style\")\r\n// barcha stylelar uchun\r\n\r\n\n\n//# sourceURL=webpack://webdars/./src/Text.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ \"./src/style.js\");\n/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Text */ \"./src/Text.js\");\n\r\n\r\n\r\nlet body = document.querySelector(\"body\")\r\n\r\n_Text__WEBPACK_IMPORTED_MODULE_1__.styleSheet.innerText = _style__WEBPACK_IMPORTED_MODULE_0__.styles\r\nbody.appendChild(_Text__WEBPACK_IMPORTED_MODULE_1__.styleSheet)\r\n\r\n\r\nbody.appendChild(_Text__WEBPACK_IMPORTED_MODULE_1__.img)\r\nbody.appendChild(_Text__WEBPACK_IMPORTED_MODULE_1__.img1)\r\nbody.appendChild(_Text__WEBPACK_IMPORTED_MODULE_1__.div2)\r\n\r\n\r\n//xar yangilangandan keyin: npm run build\n\n//# sourceURL=webpack://webdars/./src/index.js?");

/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   styles: () => (/* binding */ styles)\n/* harmony export */ });\n\r\nlet styles = \r\n`\r\nbody {\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\ndiv {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: orange;\r\n}\r\n`\r\n\r\n//  faqat css uchun\n\n//# sourceURL=webpack://webdars/./src/style.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;