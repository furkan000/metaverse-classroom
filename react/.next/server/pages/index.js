"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst myPage = ()=>{\n    const [loaded, setLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { pathname  } = (next_router__WEBPACK_IMPORTED_MODULE_2___default());\n        // conditional redirect\n        if (pathname == \"/\") {\n            // with router.push the page may be added to history\n            // the browser on history back will  go back to this page and then forward again to the redirected page\n            // you can prevent this behaviour using location.replace\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/blackboard\");\n        //location.replace(\"/hello-nextjs\")\n        } else {\n            setLoaded(true);\n        }\n    }, []);\n    if (!loaded) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n            fileName: \"/Users/tarikmoussa/tubCloud/Uni/TU-Berlin/WESE23/react-split-panel/pages/index.js\",\n            lineNumber: 20,\n            columnNumber: 16\n        }, undefined) //show nothing or a loader\n        ;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            'You will see this page only if pathname !== \"/\" , ',\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tarikmoussa/tubCloud/Uni/TU-Berlin/WESE23/react-split-panel/pages/index.js\",\n                lineNumber: 24,\n                columnNumber: 63\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tarikmoussa/tubCloud/Uni/TU-Berlin/WESE23/react-split-panel/pages/index.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (myPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFrRDtBQUNsQjtBQUNoQyxNQUFNSSxTQUFTLElBQUk7SUFDZixNQUFNLENBQUNDLFFBQU9DLFVBQVUsR0FBR0osK0NBQVFBLENBQUMsS0FBSztJQUN6Q0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLE1BQU0sRUFBQ00sU0FBUSxFQUFDLEdBQUdKLG9EQUFNQTtRQUN6Qix1QkFBdUI7UUFDdkIsSUFBR0ksWUFBWSxLQUFLO1lBQ2hCLG9EQUFvRDtZQUNwRCx1R0FBdUc7WUFDdkcsd0RBQXdEO1lBQ3hESix1REFBVyxDQUFDO1FBQ2IsbUNBQW1DO1FBQ3RDLE9BQUs7WUFDREcsVUFBVSxJQUFJO1FBQ2xCLENBQUM7SUFDSCxHQUFFLEVBQUU7SUFFTixJQUFHLENBQUNELFFBQU87UUFDUCxxQkFBTyw4REFBQ0k7Ozs7c0JBQVcsMEJBQTBCOztJQUNqRCxDQUFDO0lBQ0QscUJBQ0ksOERBQUNDOztZQUFFOzBCQUNtRCw4REFBQ0M7Ozs7Ozs7Ozs7O0FBRy9EO0FBQ0EsaUVBQWVQLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5jb25zdCBteVBhZ2UgPSAoKT0+e1xuICAgIGNvbnN0IFtsb2FkZWQsc2V0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHtwYXRobmFtZX0gPSBSb3V0ZXJcbiAgICAgICAgLy8gY29uZGl0aW9uYWwgcmVkaXJlY3RcbiAgICAgICAgaWYocGF0aG5hbWUgPT0gJy8nICl7XG4gICAgICAgICAgICAvLyB3aXRoIHJvdXRlci5wdXNoIHRoZSBwYWdlIG1heSBiZSBhZGRlZCB0byBoaXN0b3J5XG4gICAgICAgICAgICAvLyB0aGUgYnJvd3NlciBvbiBoaXN0b3J5IGJhY2sgd2lsbCAgZ28gYmFjayB0byB0aGlzIHBhZ2UgYW5kIHRoZW4gZm9yd2FyZCBhZ2FpbiB0byB0aGUgcmVkaXJlY3RlZCBwYWdlXG4gICAgICAgICAgICAvLyB5b3UgY2FuIHByZXZlbnQgdGhpcyBiZWhhdmlvdXIgdXNpbmcgbG9jYXRpb24ucmVwbGFjZVxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9ibGFja2JvYXJkJylcbiAgICAgICAgICAgLy9sb2NhdGlvbi5yZXBsYWNlKFwiL2hlbGxvLW5leHRqc1wiKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNldExvYWRlZCh0cnVlKVxuICAgICAgICB9XG4gICAgICB9LFtdKTtcblxuICAgIGlmKCFsb2FkZWQpe1xuICAgICAgICByZXR1cm4gPGRpdj48L2Rpdj4gLy9zaG93IG5vdGhpbmcgb3IgYSBsb2FkZXJcbiAgICB9XG4gICAgcmV0dXJuICggXG4gICAgICAgIDxwPlxuICAgICAgICAgICAgWW91IHdpbGwgc2VlIHRoaXMgcGFnZSBvbmx5IGlmIHBhdGhuYW1lICE9PSBcIi9cIiAsIDxici8+XG4gICAgICAgIDwvcD4gXG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgbXlQYWdlIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSb3V0ZXIiLCJteVBhZ2UiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJwYXRobmFtZSIsInB1c2giLCJkaXYiLCJwIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();