webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_CoordInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/CoordInput */ "./pages/components/CoordInput.js");






var _jsxFileName = "/Users/stevenduncan/Documents/takeHomeCodeChallenege/Javascript/React_Nextjs_UI/pages/index.js";





var index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(index, _Component);

  function index() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(index).call(this));
    _this.state = {
      xInput: '',
      yInput: '',
      x: '',
      y: ''
    };
    _this.handleFormSubmit = _this.handleFormSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleInputChange = _this.handleInputChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(index, [{
    key: "handleFormSubmit",
    value: function handleFormSubmit(e) {
      e.preventDefault();

      if (this.state.xInput > 12 || this.state.yInput > 12) {
        alert('Index selection is limited to 12 or below');
      } else if (this.state.xInput === '' || this.state.yInput === '') {
        alert('Please select both an x and y index');
      } else {
        this.setState({
          x: this.state.xInput,
          y: this.state.yInput
        });
      }
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(e) {
      e.preventDefault(e);
      var index = e.target.name;
      var value = e.target.value.replace(/[^0-9]/, '');
      index === 'x' ? this.setState({
        xInput: value
      }) : this.setState({
        yInput: value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3033268396",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_CoordInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
        x: this.state.xInput,
        y: this.state.yInput,
        handleFormSubmit: this.handleFormSubmit,
        handleInputChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3033268396",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "x: ", this.state.x, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        className: "jsx-3033268396",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), "y: ", this.state.y), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3033268396",
        __self: this
      }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGV2ZW5kdW5jYW4vRG9jdW1lbnRzL3Rha2VIb21lQ29kZUNoYWxsZW5lZ2UvSmF2YXNjcmlwdC9SZWFjdF9OZXh0anNfVUkvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURvQiIsImZpbGUiOiIvVXNlcnMvc3RldmVuZHVuY2FuL0RvY3VtZW50cy90YWtlSG9tZUNvZGVDaGFsbGVuZWdlL0phdmFzY3JpcHQvUmVhY3RfTmV4dGpzX1VJL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvb3JkSW5wdXQgZnJvbSAnLi9jb21wb25lbnRzL0Nvb3JkSW5wdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB4SW5wdXQ6ICcnLFxuICAgICAgeUlucHV0OiAnJyxcbiAgICAgIHg6ICcnLFxuICAgICAgeTogJycsXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlRm9ybVN1Ym1pdCA9IHRoaXMuaGFuZGxlRm9ybVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVGb3JtU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMuc3RhdGUueElucHV0ID4gMTIgfHwgdGhpcy5zdGF0ZS55SW5wdXQgPiAxMikge1xuICAgICAgYWxlcnQoJ0luZGV4IHNlbGVjdGlvbiBpcyBsaW1pdGVkIHRvIDEyIG9yIGJlbG93JylcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUueElucHV0ID09PSAnJyB8fCB0aGlzLnN0YXRlLnlJbnB1dCA9PT0gJycpIHtcbiAgICAgIGFsZXJ0KCdQbGVhc2Ugc2VsZWN0IGJvdGggYW4geCBhbmQgeSBpbmRleCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB4OiB0aGlzLnN0YXRlLnhJbnB1dCxcbiAgICAgICAgeTogdGhpcy5zdGF0ZS55SW5wdXQsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KGUpO1xuICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQubmFtZTtcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1teMC05XS8sICcnKTtcbiAgICBpbmRleCA9PT0gJ3gnID9cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHhJbnB1dDogdmFsdWUsXG4gICAgfSlcbiAgICA6IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgeUlucHV0OiB2YWx1ZSxcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Q29vcmRJbnB1dCBcbiAgICAgICAgICB4PXt0aGlzLnN0YXRlLnhJbnB1dH1cbiAgICAgICAgICB5PXt0aGlzLnN0YXRlLnlJbnB1dH1cbiAgICAgICAgICBoYW5kbGVGb3JtU3VibWl0PXt0aGlzLmhhbmRsZUZvcm1TdWJtaXR9XG4gICAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgeDoge3RoaXMuc3RhdGUueH1cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIHk6IHt0aGlzLnN0YXRlLnl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIFxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=/Users/stevenduncan/Documents/takeHomeCodeChallenege/Javascript/React_Nextjs_UI/pages/index.js */"));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.f20be35add30616fa37e.hot-update.js.map