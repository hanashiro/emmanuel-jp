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
  var data = (0,E_Users_felip_Desktop_projetos_emmanuel_jp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    font-size: 14px;\n    background-color: #abc5e2;\n    border-radius: 2px;\n    border: 1px solid black;\n"]);

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
  return theme.spacing(0.5) + ' ' + theme.spacing();
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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.js");
/* harmony import */ var data_hooks_useIsMobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! data/hooks/useIsMobile */ "./src/data/hooks/useIsMobile.ts");
/* harmony import */ var ui_components_data_display_ContentBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui/components/data-display/ContentBox */ "./src/ui/components/data-display/ContentBox.tsx");
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
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Drawer, {
      anchor: 'left',
      open: isOpen,
      ModalProps: {
        keepMounted: true // Better open performance on mobile.

      },
      onClose: onClose,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ui_components_data_display_ContentBox__WEBPACK_IMPORTED_MODULE_3__.default, {
        title: 'Fotos'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL2NvbXBvbmVudHMvZGF0YS1kaXNwbGF5L0NvbnRlbnRCb3guc3R5bGUudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvdWkvY29tcG9uZW50cy9kYXRhLWRpc3BsYXkvQ29udGVudEJveC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91aS9jb21wb25lbnRzL25hdmlnYXRpb24vRHJhd2VyL0RyYXdlci50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiVGl0bGUiLCJ0aGVtZSIsInNwYWNpbmciLCJTdWJ0aXRsZSIsIkNvbnRlbnQiLCJDb250ZW50Qm94IiwidGl0bGUiLCJzdWJ0aXRsZSIsImNoaWxkcmVuIiwiRHJhd2VyIiwiaXNPcGVuIiwib25DbG9zZSIsImlzTW9iaWxlIiwidXNlSXNNb2JpbGUiLCJrZWVwTW91bnRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsU0FBUyxHQUFHQyw0RUFBTSxDQUFDLEtBQUQsQ0FBVCxtQkFBZjtBQU9BLElBQU1DLEtBQUssR0FBR0QsNEVBQU0sQ0FBQyxJQUFELENBQVQscUJBSUg7QUFBQSxNQUFHRSxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE9BQU4sQ0FBYyxHQUFkLElBQXFCLEdBQXJCLEdBQTJCRCxLQUFLLENBQUNDLE9BQU4sRUFBMUM7QUFBQSxDQUpHLENBQVg7QUFTQSxJQUFNQyxRQUFRLEdBQUdKLDRFQUFNLENBQUMsSUFBRCxDQUFULHFCQUtOO0FBQUEsTUFBR0UsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxPQUFOLENBQWMsR0FBZCxJQUFxQixHQUFyQixHQUEyQkQsS0FBSyxDQUFDQyxPQUFOLEVBQTFDO0FBQUEsQ0FMTSxDQUFkO0FBU0EsSUFBTUUsT0FBTyxHQUFHTCw0RUFBTSxDQUFDLEtBQUQsQ0FBVCxxQkFDTDtBQUFBLE1BQUdFLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsT0FBTixDQUFjLEdBQWQsSUFBcUIsR0FBckIsR0FBMkJELEtBQUssQ0FBQ0MsT0FBTixFQUExQztBQUFBLENBREssQ0FBYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCUDtBQUNBOztBQU9BLElBQU1HLFVBQXFDLEdBQUcsU0FBeENBLFVBQXdDLE9BSXhDO0FBQUEsTUFIRkMsS0FHRSxRQUhGQSxLQUdFO0FBQUEsTUFGRkMsUUFFRSxRQUZGQSxRQUVFO0FBQUEsTUFERkMsUUFDRSxRQURGQSxRQUNFO0FBQ0Ysc0JBQ0ksOERBQUMsd0RBQUQ7QUFBQSw0QkFDSSw4REFBQyxvREFBRDtBQUFBLGdCQUFRRjtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQUVLQyxRQUFRLGlCQUFJLDhEQUFDLHVEQUFEO0FBQUEsZ0JBQVdBO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZqQixlQUdJLDhEQUFDLHNEQUFEO0FBQUEsZ0JBQVVDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBT0gsQ0FaRDs7S0FBTUgsVTtBQWNOLCtEQUFlQSxVQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7O0FBT0EsSUFBTUksTUFBNkIsR0FBRyxTQUFoQ0EsTUFBZ0MsT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsTUFBc0IsUUFBdEJBLE1BQXNCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQzNELE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxzQkFDSTtBQUFBLDJCQUNJLDhEQUFDLHFEQUFEO0FBQ0ksWUFBTSxFQUFFLE1BRFo7QUFFSSxVQUFJLEVBQUVILE1BRlY7QUFHSSxnQkFBVSxFQUFFO0FBQ1JJLG1CQUFXLEVBQUUsSUFETCxDQUNXOztBQURYLE9BSGhCO0FBTUksYUFBTyxFQUFFSCxPQU5iO0FBQUEsNkJBUUksOERBQUMsMEVBQUQ7QUFBWSxhQUFLLEVBQUU7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQWNILENBaEJEOztHQUFNRixNO1VBQ2VJLDJEOzs7S0FEZkosTTtBQWtCTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjEzOTEwNWU5MTU1ZjExNDE1NWI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleHBlcmltZW50YWxTdHlsZWQgYXMgc3R5bGVkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpYFxyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FiYzVlMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkKCdoMicpYFxyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZygwLjUpICsgJyAnICsgdGhlbWUuc3BhY2luZygpfTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBUYWhvbWEsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN1YnRpdGxlID0gc3R5bGVkKCdoMycpYFxyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtZGFyayk7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcoMC41KSArICcgJyArIHRoZW1lLnNwYWNpbmcoKX07XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudCA9IHN0eWxlZCgnZGl2JylgXHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcoMC41KSArICcgJyArIHRoZW1lLnNwYWNpbmcoKX07XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgVGl0bGUsIFN1YnRpdGxlLCBDb250ZW50IH0gZnJvbSAnLi9Db250ZW50Qm94LnN0eWxlJztcclxuXHJcbmludGVyZmFjZSBDb250ZW50Qm94UHJvcHMge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHN1YnRpdGxlPzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbn1cclxuXHJcbmNvbnN0IENvbnRlbnRCb3g6IFJlYWN0LkZDPENvbnRlbnRCb3hQcm9wcz4gPSAoe1xyXG4gICAgdGl0bGUsXHJcbiAgICBzdWJ0aXRsZSxcclxuICAgIGNoaWxkcmVuLFxyXG59KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxUaXRsZT57dGl0bGV9PC9UaXRsZT5cclxuICAgICAgICAgICAge3N1YnRpdGxlICYmIDxTdWJ0aXRsZT57c3VidGl0bGV9PC9TdWJ0aXRsZT59XHJcbiAgICAgICAgICAgIDxDb250ZW50PntjaGlsZHJlbn08L0NvbnRlbnQ+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudEJveDtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEcmF3ZXIgYXMgTURyYXdlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHVzZUlzTW9iaWxlIGZyb20gJ2RhdGEvaG9va3MvdXNlSXNNb2JpbGUnO1xyXG5pbXBvcnQgQ29udGVudEJveCBmcm9tICd1aS9jb21wb25lbnRzL2RhdGEtZGlzcGxheS9Db250ZW50Qm94JztcclxuXHJcbmludGVyZmFjZSBEcmF3ZXJQcm9wcyB7XHJcbiAgICBpc09wZW46IGJvb2xlYW47XHJcbiAgICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBEcmF3ZXI6IFJlYWN0LkZDPERyYXdlclByb3BzPiA9ICh7IGlzT3Blbiwgb25DbG9zZSB9KSA9PiB7XHJcbiAgICBjb25zdCBpc01vYmlsZSA9IHVzZUlzTW9iaWxlKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxNRHJhd2VyXHJcbiAgICAgICAgICAgICAgICBhbmNob3I9eydsZWZ0J31cclxuICAgICAgICAgICAgICAgIG9wZW49e2lzT3Blbn1cclxuICAgICAgICAgICAgICAgIE1vZGFsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBrZWVwTW91bnRlZDogdHJ1ZSwgLy8gQmV0dGVyIG9wZW4gcGVyZm9ybWFuY2Ugb24gbW9iaWxlLlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50Qm94IHRpdGxlPXsnRm90b3MnfT48L0NvbnRlbnRCb3g+XHJcbiAgICAgICAgICAgIDwvTURyYXdlcj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcmF3ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=