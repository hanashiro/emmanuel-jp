self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/ui/components/navigation/Drawer/Drawer.style.tsx":
/*!**************************************************************!*\
  !*** ./src/ui/components/navigation/Drawer/Drawer.style.tsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawerStyled": function() { return /* binding */ DrawerStyled; }
/* harmony export */ });
/* harmony import */ var E_Users_felip_Desktop_projetos_emmanuel_jp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function _templateObject() {
  var data = (0,E_Users_felip_Desktop_projetos_emmanuel_jp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var DrawerStyled = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.experimentalStyled)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Drawer)(_templateObject());

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


/***/ }),

/***/ "./src/ui/components/navigation/Drawer/Drawer.tsx":
/*!********************************************************!*\
  !*** ./src/ui/components/navigation/Drawer/Drawer.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var data_hooks_useIsMobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! data/hooks/useIsMobile */ "./src/data/hooks/useIsMobile.ts");
/* harmony import */ var ui_components_data_display_ContentBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui/components/data-display/ContentBox */ "./src/ui/components/data-display/ContentBox.tsx");
/* harmony import */ var _Drawer_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Drawer.style */ "./src/ui/components/navigation/Drawer/Drawer.style.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\Users\\felip\\Desktop\\projetos\\emmanuel-jp\\src\\ui\\components\\navigation\\Drawer\\Drawer.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var Drawer = function Drawer(_ref) {
  _s();

  var isOpen = _ref.isOpen,
      onClose = _ref.onClose;
  var isMobile = (0,data_hooks_useIsMobile__WEBPACK_IMPORTED_MODULE_2__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Drawer_style__WEBPACK_IMPORTED_MODULE_4__.DrawerStyled, {
      anchor: 'left',
      open: isOpen,
      ModalProps: {
        keepMounted: true // Better open performance on mobile.

      },
      onClose: onClose,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ui_components_data_display_ContentBox__WEBPACK_IMPORTED_MODULE_3__.default, {
        title: 'Fotos',
        children: "Ol\xE1, Web Developers!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(Drawer, "zdJ8C3X+YlDYVai5EPOd8CzoqSU=", false, function () {
  return [data_hooks_useIsMobile__WEBPACK_IMPORTED_MODULE_2__.default];
});

_c = Drawer;
/* harmony default export */ __webpack_exports__["default"] = (Drawer);

var _c;

$RefreshReg$(_c, "Drawer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9EcmF3ZXIvRHJhd2VyLnN0eWxlLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9EcmF3ZXIvRHJhd2VyLnRzeCJdLCJuYW1lcyI6WyJEcmF3ZXJTdHlsZWQiLCJzdHlsZWQiLCJEcmF3ZXIiLCJpc09wZW4iLCJvbkNsb3NlIiwiaXNNb2JpbGUiLCJ1c2VJc01vYmlsZSIsImtlZXBNb3VudGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxZQUFZLEdBQUdDLDRFQUFNLENBQUNDLHFEQUFELENBQVQsbUJBQWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQO0FBRUE7QUFDQTtBQUNBOztBQU9BLElBQU1BLE1BQTZCLEdBQUcsU0FBaENBLE1BQWdDLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLE1BQXNCLFFBQXRCQSxNQUFzQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUMzRCxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0Esc0JBQ0k7QUFBQSwyQkFDSSw4REFBQyx1REFBRDtBQUNJLFlBQU0sRUFBRSxNQURaO0FBRUksVUFBSSxFQUFFSCxNQUZWO0FBR0ksZ0JBQVUsRUFBRTtBQUNSSSxtQkFBVyxFQUFFLElBREwsQ0FDVzs7QUFEWCxPQUhoQjtBQU1JLGFBQU8sRUFBRUgsT0FOYjtBQUFBLDZCQVFJLDhEQUFDLDBFQUFEO0FBQVksYUFBSyxFQUFFLE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBY0gsQ0FoQkQ7O0dBQU1GLE07VUFDZUksMkQ7OztLQURmSixNO0FBa0JOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNTQzNWE1MWJhMWI2ODI5NDg5OTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4cGVyaW1lbnRhbFN0eWxlZCBhcyBzdHlsZWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBEcmF3ZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5leHBvcnQgY29uc3QgRHJhd2VyU3R5bGVkID0gc3R5bGVkKERyYXdlcilgYDtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB1c2VJc01vYmlsZSBmcm9tICdkYXRhL2hvb2tzL3VzZUlzTW9iaWxlJztcclxuaW1wb3J0IENvbnRlbnRCb3ggZnJvbSAndWkvY29tcG9uZW50cy9kYXRhLWRpc3BsYXkvQ29udGVudEJveCc7XHJcbmltcG9ydCB7IERyYXdlclN0eWxlZCB9IGZyb20gJy4vRHJhd2VyLnN0eWxlJztcclxuXHJcbmludGVyZmFjZSBEcmF3ZXJQcm9wcyB7XHJcbiAgICBpc09wZW46IGJvb2xlYW47XHJcbiAgICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBEcmF3ZXI6IFJlYWN0LkZDPERyYXdlclByb3BzPiA9ICh7IGlzT3Blbiwgb25DbG9zZSB9KSA9PiB7XHJcbiAgICBjb25zdCBpc01vYmlsZSA9IHVzZUlzTW9iaWxlKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxEcmF3ZXJTdHlsZWRcclxuICAgICAgICAgICAgICAgIGFuY2hvcj17J2xlZnQnfVxyXG4gICAgICAgICAgICAgICAgb3Blbj17aXNPcGVufVxyXG4gICAgICAgICAgICAgICAgTW9kYWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIGtlZXBNb3VudGVkOiB0cnVlLCAvLyBCZXR0ZXIgb3BlbiBwZXJmb3JtYW5jZSBvbiBtb2JpbGUuXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17b25DbG9zZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnRCb3ggdGl0bGU9eydGb3Rvcyd9Pk9sw6EsIFdlYiBEZXZlbG9wZXJzITwvQ29udGVudEJveD5cclxuICAgICAgICAgICAgPC9EcmF3ZXJTdHlsZWQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJhd2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9