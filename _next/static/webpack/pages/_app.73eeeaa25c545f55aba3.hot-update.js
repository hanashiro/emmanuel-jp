self["webpackHotUpdate_N_E"]("pages/_app",{

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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.js");
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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ui_components_data_display_ContentBox__WEBPACK_IMPORTED_MODULE_3__.default, {
        title: 'Seções',
        children: "Ol\xE1, Web Developers!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ui_components_data_display_ContentBox__WEBPACK_IMPORTED_MODULE_3__.default, {
        title: 'Estatísticas',
        children: "Ol\xE1, Web Developers!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ui_components_data_display_ContentBox__WEBPACK_IMPORTED_MODULE_3__.default, {
        title: 'Links',
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
          sx: {
            textAlign: 'center'
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: 'https://www.meupositivo.com.br/',
            rel: "noopener noreferrer",
            target: '_blank',
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: '/top_logo_3.gif',
              width: "180",
              height: "37",
              alt: "Portal Positivo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9EcmF3ZXIvRHJhd2VyLnRzeCJdLCJuYW1lcyI6WyJEcmF3ZXIiLCJpc09wZW4iLCJvbkNsb3NlIiwiaXNNb2JpbGUiLCJ1c2VJc01vYmlsZSIsImtlZXBNb3VudGVkIiwidGV4dEFsaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBT0EsSUFBTUEsTUFBNkIsR0FBRyxTQUFoQ0EsTUFBZ0MsT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsTUFBc0IsUUFBdEJBLE1BQXNCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQzNELE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxzQkFDSTtBQUFBLDJCQUNJLDhEQUFDLHVEQUFEO0FBQ0ksWUFBTSxFQUFFLE1BRFo7QUFFSSxVQUFJLEVBQUVILE1BRlY7QUFHSSxnQkFBVSxFQUFFO0FBQ1JJLG1CQUFXLEVBQUUsSUFETCxDQUNXOztBQURYLE9BSGhCO0FBTUksYUFBTyxFQUFFSCxPQU5iO0FBQUEsOEJBUUksOERBQUMsMEVBQUQ7QUFBWSxhQUFLLEVBQUUsUUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSSixlQVNJLDhEQUFDLDBFQUFEO0FBQVksYUFBSyxFQUFFLGNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEosZUFZSSw4REFBQywwRUFBRDtBQUFZLGFBQUssRUFBRSxPQUFuQjtBQUFBLCtCQUNJLDhEQUFDLGtEQUFEO0FBQUssWUFBRSxFQUFFO0FBQUVJLHFCQUFTLEVBQUU7QUFBYixXQUFUO0FBQUEsaUNBQ0k7QUFDSSxnQkFBSSxFQUFFLGlDQURWO0FBRUksZUFBRyxFQUFDLHFCQUZSO0FBR0ksa0JBQU0sRUFBRSxRQUhaO0FBQUEsbUNBS0k7QUFDSSxpQkFBRyxFQUFFLGlCQURUO0FBRUksbUJBQUssRUFBQyxLQUZWO0FBR0ksb0JBQU0sRUFBQyxJQUhYO0FBSUksaUJBQUcsRUFBQztBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQWlDSCxDQW5DRDs7R0FBTU4sTTtVQUNlSSwyRDs7O0tBRGZKLE07QUFxQ04sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43M2VlZWFhMjVjNTQ1ZjU1YWJhMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB1c2VJc01vYmlsZSBmcm9tICdkYXRhL2hvb2tzL3VzZUlzTW9iaWxlJztcclxuaW1wb3J0IENvbnRlbnRCb3ggZnJvbSAndWkvY29tcG9uZW50cy9kYXRhLWRpc3BsYXkvQ29udGVudEJveCc7XHJcbmltcG9ydCB7IERyYXdlclN0eWxlZCB9IGZyb20gJy4vRHJhd2VyLnN0eWxlJztcclxuXHJcbmludGVyZmFjZSBEcmF3ZXJQcm9wcyB7XHJcbiAgICBpc09wZW46IGJvb2xlYW47XHJcbiAgICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBEcmF3ZXI6IFJlYWN0LkZDPERyYXdlclByb3BzPiA9ICh7IGlzT3Blbiwgb25DbG9zZSB9KSA9PiB7XHJcbiAgICBjb25zdCBpc01vYmlsZSA9IHVzZUlzTW9iaWxlKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxEcmF3ZXJTdHlsZWRcclxuICAgICAgICAgICAgICAgIGFuY2hvcj17J2xlZnQnfVxyXG4gICAgICAgICAgICAgICAgb3Blbj17aXNPcGVufVxyXG4gICAgICAgICAgICAgICAgTW9kYWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIGtlZXBNb3VudGVkOiB0cnVlLCAvLyBCZXR0ZXIgb3BlbiBwZXJmb3JtYW5jZSBvbiBtb2JpbGUuXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17b25DbG9zZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnRCb3ggdGl0bGU9eydTZcOnw7Vlcyd9Pk9sw6EsIFdlYiBEZXZlbG9wZXJzITwvQ29udGVudEJveD5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50Qm94IHRpdGxlPXsnRXN0YXTDrXN0aWNhcyd9PlxyXG4gICAgICAgICAgICAgICAgICAgIE9sw6EsIFdlYiBEZXZlbG9wZXJzIVxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50Qm94PlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnRCb3ggdGl0bGU9eydMaW5rcyd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9eydodHRwczovL3d3dy5tZXVwb3NpdGl2by5jb20uYnIvJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PXsnX2JsYW5rJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Jy90b3BfbG9nb18zLmdpZid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxODBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjM3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQb3J0YWwgUG9zaXRpdm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50Qm94PlxyXG4gICAgICAgICAgICA8L0RyYXdlclN0eWxlZD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcmF3ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=