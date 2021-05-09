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
        lineNumber: 23,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
        edge: "end",
        color: "inherit",
        sx: {
          ml: 2
        },
        component: 'a',
        rel: "noopener noreferrer",
        target: '_blank',
        href: 'https://www.facebook.com/groups/434885159866193',
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: 'fab fa-facebook-f'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL2NvbXBvbmVudHMvc3VyZmFjZXMvSGVhZGVyL0hlYWRlci50c3giXSwibmFtZXMiOlsiSGVhZGVyIiwicHJvcHMiLCJDb250YWluZXIiLCJtciIsIm9uTWVudUNsaWNrIiwibWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBTUEsSUFBTUEsTUFBNkIsR0FBRyxTQUFoQ0EsTUFBZ0MsQ0FBQ0MsS0FBRCxFQUFXO0FBQzdDLHNCQUNJLDhEQUFDLHVEQUFEO0FBQWMsWUFBUSxFQUFFLFFBQXhCO0FBQUEsMkJBQ0ksOERBQUMsc0RBQUQ7QUFBUyxlQUFTLEVBQUVDLHdEQUFwQjtBQUFBLDhCQUNJLDhEQUFDLHlEQUFEO0FBQ0ksWUFBSSxFQUFDLE9BRFQ7QUFFSSxhQUFLLEVBQUMsU0FGVjtBQUdJLHNCQUFXLE1BSGY7QUFJSSxVQUFFLEVBQUU7QUFBRUMsWUFBRSxFQUFFO0FBQU4sU0FKUjtBQUtJLGVBQU8sRUFBRUYsS0FBSyxDQUFDRyxXQUxuQjtBQUFBLCtCQU9JO0FBQUcsbUJBQVMsRUFBRTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFXSSw4REFBQyxxREFBRDtBQUNJLFdBQUcsRUFBRSxvQkFEVDtBQUVJLFdBQUcsRUFBRTtBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYSixlQWdCSSw4REFBQyx5REFBRDtBQUNJLFlBQUksRUFBQyxLQURUO0FBRUksYUFBSyxFQUFDLFNBRlY7QUFHSSxVQUFFLEVBQUU7QUFBRUMsWUFBRSxFQUFFO0FBQU4sU0FIUjtBQUlJLGlCQUFTLEVBQUUsR0FKZjtBQUtJLFdBQUcsRUFBQyxxQkFMUjtBQU1JLGNBQU0sRUFBRSxRQU5aO0FBT0ksWUFBSSxFQUFFLGlEQVBWO0FBQUEsK0JBU0k7QUFBRyxtQkFBUyxFQUFFO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZ0NILENBakNEOztLQUFNTCxNO0FBbUNOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZWVkMjJiOTI0OGZjNGJiYTY0MmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRvb2xiYXIsIENvbnRhaW5lciwgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVyQXBwQmFyLCBIZWFkZXJMb2dvIH0gZnJvbSAnLi9IZWFkZXIuc3R5bGUnO1xyXG5cclxuaW50ZXJmYWNlIEhlYWRlclByb3BzIHtcclxuICAgIG9uTWVudUNsaWNrOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBIZWFkZXI6IFJlYWN0LkZDPEhlYWRlclByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8SGVhZGVyQXBwQmFyIHBvc2l0aW9uPXsnc3RpY2t5J30+XHJcbiAgICAgICAgICAgIDxUb29sYmFyIGNvbXBvbmVudD17Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJtZW51XCJcclxuICAgICAgICAgICAgICAgICAgICBzeD17eyBtcjogMiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uTWVudUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17J2ZhcyBmYS1iYXJzJ30gLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyTG9nb1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17Jy9lbW1hbnVlbC1sb2dvLnBuZyd9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXsnSW5zdGl0dXRvIEVkdWNhY2lvbmFsIEVtbWFudWVsJ31cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBlZGdlPVwiZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7IG1sOiAyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXsnYSd9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PXsnX2JsYW5rJ31cclxuICAgICAgICAgICAgICAgICAgICBocmVmPXsnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2dyb3Vwcy80MzQ4ODUxNTk4NjYxOTMnfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17J2ZhYiBmYS1mYWNlYm9vay1mJ30gLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvSGVhZGVyQXBwQmFyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==