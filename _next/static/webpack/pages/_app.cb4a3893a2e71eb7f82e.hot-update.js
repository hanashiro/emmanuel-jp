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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Link, {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Link, {
          href: "/fotos",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Fotos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Link, {
          href: "/videos",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "V\xEDdeos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Link, {
          href: "/localizacao",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Localiza\xE7\xE3o"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Link, {
          rel: "noopener noreferrer",
          target: '_blank',
          href: 'https://www.facebook.com/groups/434885159866193',
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Grupo do Facebook"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ui_components_data_display_ContentBox__WEBPACK_IMPORTED_MODULE_3__.default, {
        title: 'Estatísticas',
        children: ["N\xF3s temos ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: "2325"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 31
        }, _this), " usu\xE1rios registrados ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 74
        }, _this), "O mais novo integrante \xE9 o(a) Plokiikmol ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 62
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, _this), "Nossos usu\xE1rios enviaram um total de ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: "5696"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 58
        }, _this), ' ', "mensagens within ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: "1318"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 38
        }, _this), " topics"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
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
              lineNumber: 67,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9EcmF3ZXIvRHJhd2VyLnRzeCJdLCJuYW1lcyI6WyJEcmF3ZXIiLCJpc09wZW4iLCJvbkNsb3NlIiwiaXNNb2JpbGUiLCJ1c2VJc01vYmlsZSIsImtlZXBNb3VudGVkIiwidGV4dEFsaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBT0EsSUFBTUEsTUFBNkIsR0FBRyxTQUFoQ0EsTUFBZ0MsT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsTUFBc0IsUUFBdEJBLE1BQXNCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQzNELE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxzQkFDSTtBQUFBLDJCQUNJLDhEQUFDLHVEQUFEO0FBQ0ksWUFBTSxFQUFFLE1BRFo7QUFFSSxVQUFJLEVBQUVILE1BRlY7QUFHSSxnQkFBVSxFQUFFO0FBQ1JJLG1CQUFXLEVBQUUsSUFETCxDQUNXOztBQURYLE9BSGhCO0FBTUksYUFBTyxFQUFFSCxPQU5iO0FBQUEsOEJBUUksOERBQUMsMEVBQUQ7QUFBWSxhQUFLLEVBQUUsUUFBbkI7QUFBQSxnQ0FDSSw4REFBQyxtREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQUEsaUNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEosZUFNSSw4REFBQyxtREFBRDtBQUFNLGNBQUksRUFBQyxRQUFYO0FBQUEsaUNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KLGVBU0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFUSixlQVVJLDhEQUFDLG1EQUFEO0FBQU0sY0FBSSxFQUFDLFNBQVg7QUFBQSxpQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkosZUFhSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJKLGVBY0ksOERBQUMsbURBQUQ7QUFBTSxjQUFJLEVBQUMsY0FBWDtBQUFBLGlDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkSixlQWlCSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpCSixlQWtCSSw4REFBQyxtREFBRDtBQUNJLGFBQUcsRUFBQyxxQkFEUjtBQUVJLGdCQUFNLEVBQUUsUUFGWjtBQUdJLGNBQUksRUFBRSxpREFIVjtBQUFBLGlDQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkosZUFtQ0ksOERBQUMsMEVBQUQ7QUFBWSxhQUFLLEVBQUUsY0FBbkI7QUFBQSxpREFDYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEZCw0Q0FDeUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEekQsK0RBRTZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRjdDLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISiwyREFJeUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSnpDLEVBTWMsR0FOZCxvQ0FPcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5DSixlQTRDSSw4REFBQywwRUFBRDtBQUFZLGFBQUssRUFBRSxPQUFuQjtBQUFBLCtCQUNJLDhEQUFDLGtEQUFEO0FBQUssWUFBRSxFQUFFO0FBQUVJLHFCQUFTLEVBQUU7QUFBYixXQUFUO0FBQUEsaUNBQ0k7QUFDSSxnQkFBSSxFQUFFLGlDQURWO0FBRUksZUFBRyxFQUFDLHFCQUZSO0FBR0ksa0JBQU0sRUFBRSxRQUhaO0FBQUEsbUNBS0k7QUFDSSxpQkFBRyxFQUFFLGlCQURUO0FBRUksbUJBQUssRUFBQyxLQUZWO0FBR0ksb0JBQU0sRUFBQyxJQUhYO0FBSUksaUJBQUcsRUFBQztBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE1Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFpRUgsQ0FuRUQ7O0dBQU1OLE07VUFDZUksMkQ7OztLQURmSixNO0FBcUVOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuY2I0YTM4OTNhMmU3MWViN2Y4MmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBMaW5rIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgdXNlSXNNb2JpbGUgZnJvbSAnZGF0YS9ob29rcy91c2VJc01vYmlsZSc7XHJcbmltcG9ydCBDb250ZW50Qm94IGZyb20gJ3VpL2NvbXBvbmVudHMvZGF0YS1kaXNwbGF5L0NvbnRlbnRCb3gnO1xyXG5pbXBvcnQgeyBEcmF3ZXJTdHlsZWQgfSBmcm9tICcuL0RyYXdlci5zdHlsZSc7XHJcblxyXG5pbnRlcmZhY2UgRHJhd2VyUHJvcHMge1xyXG4gICAgaXNPcGVuOiBib29sZWFuO1xyXG4gICAgb25DbG9zZTogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgRHJhd2VyOiBSZWFjdC5GQzxEcmF3ZXJQcm9wcz4gPSAoeyBpc09wZW4sIG9uQ2xvc2UgfSkgPT4ge1xyXG4gICAgY29uc3QgaXNNb2JpbGUgPSB1c2VJc01vYmlsZSgpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8RHJhd2VyU3R5bGVkXHJcbiAgICAgICAgICAgICAgICBhbmNob3I9eydsZWZ0J31cclxuICAgICAgICAgICAgICAgIG9wZW49e2lzT3Blbn1cclxuICAgICAgICAgICAgICAgIE1vZGFsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBrZWVwTW91bnRlZDogdHJ1ZSwgLy8gQmV0dGVyIG9wZW4gcGVyZm9ybWFuY2Ugb24gbW9iaWxlLlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50Qm94IHRpdGxlPXsnU2XDp8O1ZXMnfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5Ib21lPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2ZvdG9zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkZvdG9zPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3ZpZGVvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5Ww61kZW9zPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvY2FsaXphY2FvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkxvY2FsaXphw6fDo288L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9eydfYmxhbmsnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXsnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2dyb3Vwcy80MzQ4ODUxNTk4NjYxOTMnfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+R3J1cG8gZG8gRmFjZWJvb2s8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50Qm94PlxyXG5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50Qm94IHRpdGxlPXsnRXN0YXTDrXN0aWNhcyd9PlxyXG4gICAgICAgICAgICAgICAgICAgIE7Ds3MgdGVtb3MgPHN0cm9uZz4yMzI1PC9zdHJvbmc+IHVzdcOhcmlvcyByZWdpc3RyYWRvcyA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICBPIG1haXMgbm92byBpbnRlZ3JhbnRlIMOpIG8oYSkgUGxva2lpa21vbCA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICBOb3Nzb3MgdXN1w6FyaW9zIGVudmlhcmFtIHVtIHRvdGFsIGRlIDxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDU2OTZcclxuICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIG1lbnNhZ2VucyB3aXRoaW4gPHN0cm9uZz4xMzE4PC9zdHJvbmc+IHRvcGljc1xyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50Qm94PlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnRCb3ggdGl0bGU9eydMaW5rcyd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9eydodHRwczovL3d3dy5tZXVwb3NpdGl2by5jb20uYnIvJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PXsnX2JsYW5rJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Jy90b3BfbG9nb18zLmdpZid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxODBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjM3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQb3J0YWwgUG9zaXRpdm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50Qm94PlxyXG4gICAgICAgICAgICA8L0RyYXdlclN0eWxlZD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcmF3ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=