self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/ui/components/surfaces/Header/Header.tsx":
/*!******************************************************!*\
  !*** ./src/ui/components/surfaces/Header/Header.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.js");
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.style */ "./src/ui/components/surfaces/Header/Header.style.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\Users\\felip\\Desktop\\projetos\\emmanuel-jp\\src\\ui\\components\\surfaces\\Header\\Header.tsx",
    _this = undefined;





var Header = function Header(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_style__WEBPACK_IMPORTED_MODULE_2__.HeaderAppBar, {
    position: 'sticky',
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Toolbar, {
      component: _material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Container,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
        edge: "start",
        color: "inherit",
        "aria-label": "menu",
        sx: {
          mr: 2
        },
        onClick: props.onMenuClick,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: 'fas fa-bars'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_style__WEBPACK_IMPORTED_MODULE_2__.HeaderLogo, {
        src: '/emmanuel-logo.png',
        alt: 'Instituto Educacional Emmanuel'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
        edge: "start",
        color: "inherit",
        "aria-label": "menu",
        sx: {
          mr: 2
        },
        onClick: props.onMenuClick,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: 'fas fa-bars'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, _this);
};

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL2NvbXBvbmVudHMvc3VyZmFjZXMvSGVhZGVyL0hlYWRlci50c3giXSwibmFtZXMiOlsiSGVhZGVyIiwicHJvcHMiLCJDb250YWluZXIiLCJtciIsIm9uTWVudUNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQU1BLElBQU1BLE1BQTZCLEdBQUcsU0FBaENBLE1BQWdDLENBQUNDLEtBQUQsRUFBVztBQUM3QyxzQkFDSSw4REFBQyx1REFBRDtBQUFjLFlBQVEsRUFBRSxRQUF4QjtBQUFBLDJCQUNJLDhEQUFDLHNEQUFEO0FBQVMsZUFBUyxFQUFFQyx3REFBcEI7QUFBQSw4QkFDSSw4REFBQyx5REFBRDtBQUNJLFlBQUksRUFBQyxPQURUO0FBRUksYUFBSyxFQUFDLFNBRlY7QUFHSSxzQkFBVyxNQUhmO0FBSUksVUFBRSxFQUFFO0FBQUVDLFlBQUUsRUFBRTtBQUFOLFNBSlI7QUFLSSxlQUFPLEVBQUVGLEtBQUssQ0FBQ0csV0FMbkI7QUFBQSwrQkFPSTtBQUFHLG1CQUFTLEVBQUU7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBVUksOERBQUMscURBQUQ7QUFDSSxXQUFHLEVBQUUsb0JBRFQ7QUFFSSxXQUFHLEVBQUU7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkosZUFlSSw4REFBQyx5REFBRDtBQUNJLFlBQUksRUFBQyxPQURUO0FBRUksYUFBSyxFQUFDLFNBRlY7QUFHSSxzQkFBVyxNQUhmO0FBSUksVUFBRSxFQUFFO0FBQUVELFlBQUUsRUFBRTtBQUFOLFNBSlI7QUFLSSxlQUFPLEVBQUVGLEtBQUssQ0FBQ0csV0FMbkI7QUFBQSwrQkFPSTtBQUFHLG1CQUFTLEVBQUU7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTZCSCxDQTlCRDs7S0FBTUosTTtBQWdDTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjgwYzYxYWY5OTc4M2M3ZmNjNjRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUb29sYmFyLCBDb250YWluZXIsIEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlckFwcEJhciwgSGVhZGVyTG9nbyB9IGZyb20gJy4vSGVhZGVyLnN0eWxlJztcclxuXHJcbmludGVyZmFjZSBIZWFkZXJQcm9wcyB7XHJcbiAgICBvbk1lbnVDbGljazogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgSGVhZGVyOiBSZWFjdC5GQzxIZWFkZXJQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEhlYWRlckFwcEJhciBwb3NpdGlvbj17J3N0aWNreSd9PlxyXG4gICAgICAgICAgICA8VG9vbGJhciBjb21wb25lbnQ9e0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibWVudVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3sgbXI6IDIgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbk1lbnVDbGlja31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9eydmYXMgZmEtYmFycyd9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyTG9nb1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17Jy9lbW1hbnVlbC1sb2dvLnBuZyd9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXsnSW5zdGl0dXRvIEVkdWNhY2lvbmFsIEVtbWFudWVsJ31cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7IG1yOiAyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25NZW51Q2xpY2t9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXsnZmFzIGZhLWJhcnMnfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9IZWFkZXJBcHBCYXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9