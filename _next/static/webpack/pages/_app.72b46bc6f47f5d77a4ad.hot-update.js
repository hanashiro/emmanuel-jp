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
          href: "/",
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
          lineNumber: 36,
          columnNumber: 31
        }, _this), " usu\xE1rios registrados ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 74
        }, _this), "O mais novo integrante \xE9 o(a) Plokiikmol ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 62
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, _this), "Nossos usu\xE1rios enviaram um total de ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: "5696"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 58
        }, _this), ' ', "mensagens within ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: "1318"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 38
        }, _this), " topics"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
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
              lineNumber: 51,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9EcmF3ZXIvRHJhd2VyLnRzeCJdLCJuYW1lcyI6WyJEcmF3ZXIiLCJpc09wZW4iLCJvbkNsb3NlIiwiaXNNb2JpbGUiLCJ1c2VJc01vYmlsZSIsImtlZXBNb3VudGVkIiwidGV4dEFsaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBT0EsSUFBTUEsTUFBNkIsR0FBRyxTQUFoQ0EsTUFBZ0MsT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsTUFBc0IsUUFBdEJBLE1BQXNCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQzNELE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxzQkFDSTtBQUFBLDJCQUNJLDhEQUFDLHVEQUFEO0FBQ0ksWUFBTSxFQUFFLE1BRFo7QUFFSSxVQUFJLEVBQUVILE1BRlY7QUFHSSxnQkFBVSxFQUFFO0FBQ1JJLG1CQUFXLEVBQUUsSUFETCxDQUNXOztBQURYLE9BSGhCO0FBTUksYUFBTyxFQUFFSCxPQU5iO0FBQUEsOEJBUUksOERBQUMsMEVBQUQ7QUFBWSxhQUFLLEVBQUUsUUFBbkI7QUFBQSxnQ0FDSSw4REFBQyxtREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQUEsaUNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEosZUFNSSw4REFBQyxtREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQUEsaUNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJKLGVBbUJJLDhEQUFDLDBFQUFEO0FBQVksYUFBSyxFQUFFLGNBQW5CO0FBQUEsaURBQ2M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGQsNENBQ3lEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHpELCtEQUU2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUY3QyxlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosMkRBSXlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUp6QyxFQU1jLEdBTmQsb0NBT3FCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVByQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuQkosZUE0QkksOERBQUMsMEVBQUQ7QUFBWSxhQUFLLEVBQUUsT0FBbkI7QUFBQSwrQkFDSSw4REFBQyxrREFBRDtBQUFLLFlBQUUsRUFBRTtBQUFFSSxxQkFBUyxFQUFFO0FBQWIsV0FBVDtBQUFBLGlDQUNJO0FBQ0ksZ0JBQUksRUFBRSxpQ0FEVjtBQUVJLGVBQUcsRUFBQyxxQkFGUjtBQUdJLGtCQUFNLEVBQUUsUUFIWjtBQUFBLG1DQUtJO0FBQ0ksaUJBQUcsRUFBRSxpQkFEVDtBQUVJLG1CQUFLLEVBQUMsS0FGVjtBQUdJLG9CQUFNLEVBQUMsSUFIWDtBQUlJLGlCQUFHLEVBQUM7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBNUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBaURILENBbkREOztHQUFNTixNO1VBQ2VJLDJEOzs7S0FEZkosTTtBQXFETiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjcyYjQ2YmM2ZjQ3ZjVkNzdhNGFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgTGluayB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHVzZUlzTW9iaWxlIGZyb20gJ2RhdGEvaG9va3MvdXNlSXNNb2JpbGUnO1xyXG5pbXBvcnQgQ29udGVudEJveCBmcm9tICd1aS9jb21wb25lbnRzL2RhdGEtZGlzcGxheS9Db250ZW50Qm94JztcclxuaW1wb3J0IHsgRHJhd2VyU3R5bGVkIH0gZnJvbSAnLi9EcmF3ZXIuc3R5bGUnO1xyXG5cclxuaW50ZXJmYWNlIERyYXdlclByb3BzIHtcclxuICAgIGlzT3BlbjogYm9vbGVhbjtcclxuICAgIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IERyYXdlcjogUmVhY3QuRkM8RHJhd2VyUHJvcHM+ID0gKHsgaXNPcGVuLCBvbkNsb3NlIH0pID0+IHtcclxuICAgIGNvbnN0IGlzTW9iaWxlID0gdXNlSXNNb2JpbGUoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPERyYXdlclN0eWxlZFxyXG4gICAgICAgICAgICAgICAgYW5jaG9yPXsnbGVmdCd9XHJcbiAgICAgICAgICAgICAgICBvcGVuPXtpc09wZW59XHJcbiAgICAgICAgICAgICAgICBNb2RhbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAga2VlcE1vdW50ZWQ6IHRydWUsIC8vIEJldHRlciBvcGVuIHBlcmZvcm1hbmNlIG9uIG1vYmlsZS5cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudEJveCB0aXRsZT17J1Nlw6fDtWVzJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+SG9tZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+Rm90b3M8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50Qm94PlxyXG5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50Qm94IHRpdGxlPXsnRXN0YXTDrXN0aWNhcyd9PlxyXG4gICAgICAgICAgICAgICAgICAgIE7Ds3MgdGVtb3MgPHN0cm9uZz4yMzI1PC9zdHJvbmc+IHVzdcOhcmlvcyByZWdpc3RyYWRvcyA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICBPIG1haXMgbm92byBpbnRlZ3JhbnRlIMOpIG8oYSkgUGxva2lpa21vbCA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICBOb3Nzb3MgdXN1w6FyaW9zIGVudmlhcmFtIHVtIHRvdGFsIGRlIDxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDU2OTZcclxuICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIG1lbnNhZ2VucyB3aXRoaW4gPHN0cm9uZz4xMzE4PC9zdHJvbmc+IHRvcGljc1xyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50Qm94PlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnRCb3ggdGl0bGU9eydMaW5rcyd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9eydodHRwczovL3d3dy5tZXVwb3NpdGl2by5jb20uYnIvJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PXsnX2JsYW5rJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Jy90b3BfbG9nb18zLmdpZid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxODBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjM3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQb3J0YWwgUG9zaXRpdm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50Qm94PlxyXG4gICAgICAgICAgICA8L0RyYXdlclN0eWxlZD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcmF3ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=