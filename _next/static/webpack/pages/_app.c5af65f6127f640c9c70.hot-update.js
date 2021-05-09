self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/ui/components/data-display/ContentBox.style.tsx":
/*!*************************************************************!*\
  !*** ./src/ui/components/data-display/ContentBox.style.tsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "Title": function() { return /* binding */ Title; },
/* harmony export */   "Subtitle": function() { return /* binding */ Subtitle; },
/* harmony export */   "Content": function() { return /* binding */ Content; }
/* harmony export */ });
/* harmony import */ var E_Users_felip_Desktop_projetos_emmanuel_jp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function _templateObject4() {
  var data = (0,E_Users_felip_Desktop_projetos_emmanuel_jp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    padding: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0,E_Users_felip_Desktop_projetos_emmanuel_jp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    font-size: 12px;\n    font-weight: normal;\n    background-color: var(--background-dark);\n    margin: 0;\n    padding: ", ";\n    border-bottom: 1px solid black;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,E_Users_felip_Desktop_projetos_emmanuel_jp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    font-size: 14px;\n    background-color: var(--header-color);\n    margin: 0;\n    padding: ", ";\n    border-bottom: 1px solid black;\n    font-family: Verdana, Tahoma, Arial, sans-serif;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,E_Users_felip_Desktop_projetos_emmanuel_jp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    font-size: 14px;\n    background-color: #abc5e2;\n    border-radius: 2px;\n    border: 1px solid black;\n    color: black;\n    a {\n        color: inherit;\n        text-decoration: underline;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Container = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.experimentalStyled)('div')(_templateObject());
var Title = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.experimentalStyled)('h2')(_templateObject2(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(0.5) + ' ' + theme.spacing();
});
var Subtitle = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.experimentalStyled)('h3')(_templateObject3(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(0.5) + ' ' + theme.spacing();
});
var Content = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.experimentalStyled)('div')(_templateObject4(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing(0.5) + ' ' + theme.spacing() + ' ' + theme.spacing();
});

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

/***/ "./src/ui/components/data-display/ContentBox.tsx":
/*!*******************************************************!*\
  !*** ./src/ui/components/data-display/ContentBox.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ContentBox_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContentBox.style */ "./src/ui/components/data-display/ContentBox.style.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\Users\\felip\\Desktop\\projetos\\emmanuel-jp\\src\\ui\\components\\data-display\\ContentBox.tsx",
    _this = undefined;




var ContentBox = function ContentBox(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContentBox_style__WEBPACK_IMPORTED_MODULE_2__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContentBox_style__WEBPACK_IMPORTED_MODULE_2__.Title, {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this), subtitle && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContentBox_style__WEBPACK_IMPORTED_MODULE_2__.Subtitle, {
      children: subtitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 26
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContentBox_style__WEBPACK_IMPORTED_MODULE_2__.Content, {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, _this);
};

_c = ContentBox;
/* harmony default export */ __webpack_exports__["default"] = (ContentBox);

var _c;

$RefreshReg$(_c, "ContentBox");

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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Link, {
        href: "/",
        style: {
          textAlign: 'center'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: '/emmanuel-logo.png',
            alt: 'Instituto Educacional Emmanuel',
            style: {
              maxWidth: '50%'
            },
            width: "200"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ui_components_data_display_ContentBox__WEBPACK_IMPORTED_MODULE_3__.default, {
        title: 'Seções',
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Link, {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Link, {
          href: "/fotos",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Fotos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Link, {
          href: "/videos",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "V\xEDdeos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Link, {
          href: "/localizacao",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Localiza\xE7\xE3o"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Link, {
          rel: "noopener noreferrer",
          target: '_blank',
          href: 'https://www.facebook.com/groups/434885159866193',
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Grupo do Facebook"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ui_components_data_display_ContentBox__WEBPACK_IMPORTED_MODULE_3__.default, {
        title: 'Estatísticas',
        children: ["N\xF3s temos ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: "2325"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 31
        }, _this), " usu\xE1rios registrados ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 74
        }, _this), "O mais novo integrante \xE9 o(a) Plokiikmol ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 62
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, _this), "Nossos usu\xE1rios enviaram um total de ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: "5696"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 58
        }, _this), ' ', "mensagens within ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: "1318"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 38
        }, _this), " topics"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
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
              lineNumber: 77,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL2NvbXBvbmVudHMvZGF0YS1kaXNwbGF5L0NvbnRlbnRCb3guc3R5bGUudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvdWkvY29tcG9uZW50cy9kYXRhLWRpc3BsYXkvQ29udGVudEJveC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91aS9jb21wb25lbnRzL25hdmlnYXRpb24vRHJhd2VyL0RyYXdlci50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiVGl0bGUiLCJ0aGVtZSIsInNwYWNpbmciLCJTdWJ0aXRsZSIsIkNvbnRlbnQiLCJDb250ZW50Qm94IiwidGl0bGUiLCJzdWJ0aXRsZSIsImNoaWxkcmVuIiwiRHJhd2VyIiwiaXNPcGVuIiwib25DbG9zZSIsImlzTW9iaWxlIiwidXNlSXNNb2JpbGUiLCJrZWVwTW91bnRlZCIsInRleHRBbGlnbiIsIm1heFdpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxTQUFTLEdBQUdDLDRFQUFNLENBQUMsS0FBRCxDQUFULG1CQUFmO0FBWUEsSUFBTUMsS0FBSyxHQUFHRCw0RUFBTSxDQUFDLElBQUQsQ0FBVCxxQkFJSDtBQUFBLE1BQUdFLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsT0FBTixDQUFjLEdBQWQsSUFBcUIsR0FBckIsR0FBMkJELEtBQUssQ0FBQ0MsT0FBTixFQUExQztBQUFBLENBSkcsQ0FBWDtBQVNBLElBQU1DLFFBQVEsR0FBR0osNEVBQU0sQ0FBQyxJQUFELENBQVQscUJBS047QUFBQSxNQUFHRSxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE9BQU4sQ0FBYyxHQUFkLElBQXFCLEdBQXJCLEdBQTJCRCxLQUFLLENBQUNDLE9BQU4sRUFBMUM7QUFBQSxDQUxNLENB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QUdJLGtCQUFNLEVBQUUsUUFIWjtBQUFBLG1DQUtJO0FBQ0ksaUJBQUcsRUFBRSxpQkFEVDtBQUVJLG1CQUFLLEVBQUMsS0FGVjtBQUdJLG9CQUFNLEVBQUMsSUFIWDtBQUlJLGlCQUFHLEVBQUM7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBMkVILENBN0VEOztHQUFNTixNO1VBQ2VJLDJEOzs7S0FEZkosTTtBQStFTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmM1YWY2NWY2MTI3ZjY0MGM5YzcwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleHBlcmltZW50YWxTdHlsZWQgYXMgc3R5bGVkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FiYzVlMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQoJ2gyJylgXHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nKDAuNSkgKyAnICcgKyB0aGVtZS5zcGFjaW5nKCl9O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIFRhaG9tYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3VidGl0bGUgPSBzdHlsZWQoJ2gzJylgXHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1kYXJrKTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZygwLjUpICsgJyAnICsgdGhlbWUuc3BhY2luZygpfTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkKCdkaXYnKWBcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT5cclxuICAgICAgICB0aGVtZS5zcGFjaW5nKDAuNSkgKyAnICcgKyB0aGVtZS5zcGFjaW5nKCkgKyAnICcgKyB0aGVtZS5zcGFjaW5nKCl9O1xyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFRpdGxlLCBTdWJ0aXRsZSwgQ29udGVudCB9IGZyb20gJy4vQ29udGVudEJveC5zdHlsZSc7XHJcblxyXG5pbnRlcmZhY2UgQ29udGVudEJveFByb3BzIHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBzdWJ0aXRsZT86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG59XHJcblxyXG5jb25zdCBDb250ZW50Qm94OiBSZWFjdC5GQzxDb250ZW50Qm94UHJvcHM+ID0gKHtcclxuICAgIHRpdGxlLFxyXG4gICAgc3VidGl0bGUsXHJcbiAgICBjaGlsZHJlbixcclxufSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8VGl0bGU+e3RpdGxlfTwvVGl0bGU+XHJcbiAgICAgICAgICAgIHtzdWJ0aXRsZSAmJiA8U3VidGl0bGU+e3N1YnRpdGxlfTwvU3VidGl0bGU+fVxyXG4gICAgICAgICAgICA8Q29udGVudD57Y2hpbGRyZW59PC9Db250ZW50PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRCb3g7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBMaW5rIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgdXNlSXNNb2JpbGUgZnJvbSAnZGF0YS9ob29rcy91c2VJc01vYmlsZSc7XHJcbmltcG9ydCBDb250ZW50Qm94IGZyb20gJ3VpL2NvbXBvbmVudHMvZGF0YS1kaXNwbGF5L0NvbnRlbnRCb3gnO1xyXG5pbXBvcnQgeyBEcmF3ZXJTdHlsZWQgfSBmcm9tICcuL0RyYXdlci5zdHlsZSc7XHJcblxyXG5pbnRlcmZhY2UgRHJhd2VyUHJvcHMge1xyXG4gICAgaXNPcGVuOiBib29sZWFuO1xyXG4gICAgb25DbG9zZTogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgRHJhd2VyOiBSZWFjdC5GQzxEcmF3ZXJQcm9wcz4gPSAoeyBpc09wZW4sIG9uQ2xvc2UgfSkgPT4ge1xyXG4gICAgY29uc3QgaXNNb2JpbGUgPSB1c2VJc01vYmlsZSgpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8RHJhd2VyU3R5bGVkXHJcbiAgICAgICAgICAgICAgICBhbmNob3I9eydsZWZ0J31cclxuICAgICAgICAgICAgICAgIG9wZW49e2lzT3Blbn1cclxuICAgICAgICAgICAgICAgIE1vZGFsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBrZWVwTW91bnRlZDogdHJ1ZSwgLy8gQmV0dGVyIG9wZW4gcGVyZm9ybWFuY2Ugb24gbW9iaWxlLlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsnL2VtbWFudWVsLWxvZ28ucG5nJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17J0luc3RpdHV0byBFZHVjYWNpb25hbCBFbW1hbnVlbCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzUwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudEJveCB0aXRsZT17J1Nlw6fDtWVzJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+SG9tZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mb3Rvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5Gb3RvczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi92aWRlb3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+VsOtZGVvczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2NhbGl6YWNhb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5Mb2NhbGl6YcOnw6NvPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PXsnX2JsYW5rJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17J2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9ncm91cHMvNDM0ODg1MTU5ODY2MTkzJ31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkdydXBvIGRvIEZhY2Vib29rPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvQ29udGVudEJveD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q29udGVudEJveCB0aXRsZT17J0VzdGF0w61zdGljYXMnfT5cclxuICAgICAgICAgICAgICAgICAgICBOw7NzIHRlbW9zIDxzdHJvbmc+MjMyNTwvc3Ryb25nPiB1c3XDoXJpb3MgcmVnaXN0cmFkb3MgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgTyBtYWlzIG5vdm8gaW50ZWdyYW50ZSDDqSBvKGEpIFBsb2tpaWttb2wgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgTm9zc29zIHVzdcOhcmlvcyBlbnZpYXJhbSB1bSB0b3RhbCBkZSA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA1Njk2XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+eycgJ31cclxuICAgICAgICAgICAgICAgICAgICBtZW5zYWdlbnMgd2l0aGluIDxzdHJvbmc+MTMxODwvc3Ryb25nPiB0b3BpY3NcclxuICAgICAgICAgICAgICAgIDwvQ29udGVudEJveD5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50Qm94IHRpdGxlPXsnTGlua3MnfT5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXsnaHR0cHM6Ly93d3cubWV1cG9zaXRpdm8uY29tLmJyLyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD17J19ibGFuayd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9eycvdG9wX2xvZ29fMy5naWYnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTgwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiUG9ydGFsIFBvc2l0aXZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDwvQ29udGVudEJveD5cclxuICAgICAgICAgICAgPC9EcmF3ZXJTdHlsZWQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJhd2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9