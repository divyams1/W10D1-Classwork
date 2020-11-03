/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 58:0-14 */
/***/ ((module) => {

eval("class DOMNodeCollection {\r\n    constructor(array) {\r\n        this.array = array;\r\n    }    \r\n\r\n    html(arg) {\r\n        if (arg) {\r\n            this.array.forEach( (ele) => {\r\n                ele.innerHTML = arg;\r\n            })\r\n        } else {\r\n            return this.array[0];\r\n        }\r\n    }\r\n\r\n    empty() {\r\n        this.html(' ');\r\n    }\r\n    \r\n    append(ele) {\r\n        debugger\r\n        if(typeof ele === \"string\"){\r\n            this.array.forEach((el) => {\r\n                el.innerHTML += ele; \r\n            })\r\n        }\r\n        if(ele instanceof HTMLElement){\r\n            this.array.forEach((el) => {\r\n                el.innerHTML += ele.outerHTML;\r\n            })\r\n        }\r\n    }\r\n\r\n    attr(arg1, arg2) {\r\n        if (arg2) {\r\n            this.array.forEach( (ele)=> {\r\n                ele.setAttribute( arg1, arg2)\r\n            })\r\n        } else {\r\n           return this.array[0].getAttribute(arg1);\r\n        }\r\n    }\r\n\r\n    addClass(str){\r\n        this.array.forEach((ele) => {\r\n            ele.classList.add(str);\r\n        })\r\n    }\r\n    removeClass(str){\r\n        this.array.forEach((ele) => {\r\n            ele.classList.remove(str);\r\n        })\r\n    }\r\n} \r\n\r\n\r\n\r\nmodule.exports = DOMNodeCollection;\r\n \n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\r\nwindow.$l = (arg) => {\r\n        if ( typeof(arg) === \"string\") {\r\n        return new DOMNodeCollection(Array.from(document.querySelectorAll(arg)));\r\n        }  else if (arg instanceof HTMLElement){ \r\n            return new DOMNodeCollection([arg]);\r\n        }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;