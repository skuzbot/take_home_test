webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/CoordInput.js":
/*!****************************************!*\
  !*** ./pages/components/CoordInput.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/stevenduncan/Documents/takeHomeCodeChallenege/Javascript/React_Nextjs_UI/pages/components/CoordInput.js";



var CoordInput = function CoordInput(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3782269665" + " " + 'coord-input-wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: "jsx-3782269665",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    placeholder: "Enter x coordinate",
    value: props.x,
    name: "x",
    onChange: function onChange(e) {
      return props.handleInputChange(e);
    },
    className: "jsx-3782269665" + " " + 'x-input input',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    placeholder: "Enter y coordinate",
    value: props.y,
    name: "y",
    onChange: true,
    className: "jsx-3782269665" + " " + 'y-input input',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "submit",
    onSubmit: function onSubmit(e) {
      return props.handleSubmit(e);
    },
    className: "jsx-3782269665" + " " + 'submit-button',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Submit")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3782269665",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGV2ZW5kdW5jYW4vRG9jdW1lbnRzL3Rha2VIb21lQ29kZUNoYWxsZW5lZ2UvSmF2YXNjcmlwdC9SZWFjdF9OZXh0anNfVUkvcGFnZXMvY29tcG9uZW50cy9Db29yZElucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCa0IiLCJmaWxlIjoiL1VzZXJzL3N0ZXZlbmR1bmNhbi9Eb2N1bWVudHMvdGFrZUhvbWVDb2RlQ2hhbGxlbmVnZS9KYXZhc2NyaXB0L1JlYWN0X05leHRqc19VSS9wYWdlcy9jb21wb25lbnRzL0Nvb3JkSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDb29yZElucHV0ID0gKHByb3BzKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29vcmQtaW5wdXQtd3JhcHBlcic+XG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGlucHV0IFxuICAgICAgICAgIGNsYXNzTmFtZT0neC1pbnB1dCBpbnB1dCdcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgeCBjb29yZGluYXRlJ1xuICAgICAgICAgIHZhbHVlPXtwcm9wcy54fVxuICAgICAgICAgIG5hbWU9J3gnXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBwcm9wcy5oYW5kbGVJbnB1dENoYW5nZShlKX0+XG5cbiAgICAgICAgPC9pbnB1dD5cbiAgICAgICAgPGlucHV0IFxuICAgICAgICAgIGNsYXNzTmFtZT0neS1pbnB1dCBpbnB1dCdcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgeSBjb29yZGluYXRlJ1xuICAgICAgICAgIHZhbHVlPXtwcm9wcy55fVxuICAgICAgICAgIG5hbWU9J3knXG4gICAgICAgICAgb25DaGFuZ2U+XG5cbiAgICAgICAgPC9pbnB1dD5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT0nc3VibWl0LWJ1dHRvbidcbiAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgb25TdWJtaXQ9eyhlKSA9PiBwcm9wcy5oYW5kbGVTdWJtaXQoZSl9PlxuICAgICAgICAgICAgU3VibWl0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29vcmRJbnB1dCJdfQ== */\n/*@ sourceURL=/Users/stevenduncan/Documents/takeHomeCodeChallenege/Javascript/React_Nextjs_UI/pages/components/CoordInput.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (CoordInput);

/***/ })

})
//# sourceMappingURL=index.js.13e7daaff176cb361dd2.hot-update.js.map