webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Home/WhatWeBelieve.js":
/*!******************************************!*\
  !*** ./components/Home/WhatWeBelieve.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/colors */ "./constants/colors.js");
/* harmony import */ var _constants_breakpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/breakpoints */ "./constants/breakpoints.js");
/* harmony import */ var _data_whatWeBelieve__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/whatWeBelieve */ "./data/whatWeBelieve.js");
var _jsxFileName = "/Users/pchong/Desktop/next-c4/components/Home/WhatWeBelieve.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Banner() {
  var content = _data_whatWeBelieve__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (_ref, i) {
    var flex = _ref.flex,
        title = _ref.title,
        description = _ref.description;
    return __jsx(StyledInnerDiv, {
      first: i === 0,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, title), description.map(function (paragraph, i) {
      return __jsx(StyledParagraph, {
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, paragraph);
    }));
  });
  return __jsx(StyledSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(StyledInner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, content));
}

var StyledSection = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "WhatWeBelieve__StyledSection",
  componentId: "sc-1cndkdc-0"
})(["background:linear-gradient( to bottom,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.6) 30%,rgba(0,0,0,0.7) 80%,rgba(0,0,0,0.8) 100% ),url('/assets/misc/background-nature.jpg');background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover;position:relative;"]);
var StyledInner = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "WhatWeBelieve__StyledInner",
  componentId: "sc-1cndkdc-1"
})(["color:white;display:flex;flex-wrap:wrap;padding:3em;@media screen and ", "{flex:", ";padding:5.5em;}h3{font-family:'OpenSans700';font-size:1.75em;text-transform:uppercase;width:100%;:after{content:'';background-color:", ";display:block;height:2px;margin:0.325em 0 0.75em 0;width:100%;}@media screen and ", "{font-size:2em;width:fit-content;}}"], _constants_breakpoints__WEBPACK_IMPORTED_MODULE_3__["default"].medium, function (props) {
  return props.first ? '40%' : '60%';
}, _constants_colors__WEBPACK_IMPORTED_MODULE_2__["default"].white, _constants_breakpoints__WEBPACK_IMPORTED_MODULE_3__["default"].medium);
var StyledInnerDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "WhatWeBelieve__StyledInnerDiv",
  componentId: "sc-1cndkdc-2"
})(["flex:100%;margin-bottom:1.5em;padding:1.5em;@media screen and ", "{flex:", ";}"], _constants_breakpoints__WEBPACK_IMPORTED_MODULE_3__["default"].medium, function (props) {
  return props.first ? '100%' : '33%';
});
var StyledParagraph = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "WhatWeBelieve__StyledParagraph",
  componentId: "sc-1cndkdc-3"
})(["color:white;font-size:1.15em;line-height:1.65;margin-bottom:1em;"]);
/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ })

})
//# sourceMappingURL=index.js.8db09686be34187ebc6b.hot-update.js.map