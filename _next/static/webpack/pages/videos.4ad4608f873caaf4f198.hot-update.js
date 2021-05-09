self["webpackHotUpdate_N_E"]("pages/videos",{

/***/ "./src/pages/videos.tsx":
/*!******************************!*\
  !*** ./src/pages/videos.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Videos; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var data_database_videos_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! data/database/videos-data */ "./src/data/database/videos-data.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ui_components_data_display_ContentBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui/components/data-display/ContentBox */ "./src/ui/components/data-display/ContentBox.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\Users\\felip\\Desktop\\projetos\\emmanuel-jp\\src\\pages\\videos.tsx";



function Videos() {
  var _this = this;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Instituto Educacional Emmanuel :: Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "V\xEDdeos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), data_database_videos_data__WEBPACK_IMPORTED_MODULE_1__.videosList.map(function (videoCollection) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ui_components_data_display_ContentBox__WEBPACK_IMPORTED_MODULE_3__.default, {
        title: "V\xEDdeos de ".concat(videoCollection.year),
        children: videoCollection.videos.map(function (video) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: video.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, _this);
    })]
  }, void 0, true);
}
_c = Videos;

var _c;

$RefreshReg$(_c, "Videos");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3ZpZGVvcy50c3giXSwibmFtZXMiOlsiVmlkZW9zIiwidmlkZW9zTGlzdCIsInZpZGVvQ29sbGVjdGlvbiIsInllYXIiLCJ2aWRlb3MiLCJtYXAiLCJ2aWRlbyIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFDN0Isc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyxrREFBRDtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixFQU9LQyxxRUFBQSxDQUFlLFVBQUNDLGVBQUQ7QUFBQSwwQkFDWiw4REFBQywwRUFBRDtBQUFZLGFBQUsseUJBQWVBLGVBQWUsQ0FBQ0MsSUFBL0IsQ0FBakI7QUFBQSxrQkFDS0QsZUFBZSxDQUFDRSxNQUFoQixDQUF1QkMsR0FBdkIsQ0FBMkIsVUFBQ0MsS0FBRDtBQUFBLDhCQUN4QjtBQUFBLHNCQUFNQSxLQUFLLENBQUNDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEd0I7QUFBQSxTQUEzQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEWTtBQUFBLEtBQWYsQ0FQTDtBQUFBLGtCQURKO0FBaUJIO0tBbEJ1QlAsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92aWRlb3MuNGFkNDYwOGY4NzNjYWFmNGYxOTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IHZpZGVvc0xpc3QgfSBmcm9tICdkYXRhL2RhdGFiYXNlL3ZpZGVvcy1kYXRhJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IENvbnRlbnRCb3ggZnJvbSAndWkvY29tcG9uZW50cy9kYXRhLWRpc3BsYXkvQ29udGVudEJveCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWRlb3MoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkluc3RpdHV0byBFZHVjYWNpb25hbCBFbW1hbnVlbCA6OiBIb21lPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAgPGgxPlbDrWRlb3M8L2gxPlxyXG5cclxuICAgICAgICAgICAge3ZpZGVvc0xpc3QubWFwKCh2aWRlb0NvbGxlY3Rpb24pID0+IChcclxuICAgICAgICAgICAgICAgIDxDb250ZW50Qm94IHRpdGxlPXtgVsOtZGVvcyBkZSAke3ZpZGVvQ29sbGVjdGlvbi55ZWFyfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt2aWRlb0NvbGxlY3Rpb24udmlkZW9zLm1hcCgodmlkZW8pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57dmlkZW8udGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRlbnRCb3g+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9