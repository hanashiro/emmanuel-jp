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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.js");
/* harmony import */ var data_database_videos_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! data/database/videos-data */ "./src/data/database/videos-data.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ui_components_data_display_ContentBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui/components/data-display/ContentBox */ "./src/ui/components/data-display/ContentBox.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\Users\\felip\\Desktop\\projetos\\emmanuel-jp\\src\\pages\\videos.tsx",
    _s = $RefreshSig$();






function Videos() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      selectedVideo = _useState[0],
      setVideo = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Instituto Educacional Emmanuel :: Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "V\xEDdeos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Dialog, {
      open: selectedVideo !== '',
      children: selectedVideo && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("iframe", {
        width: "560",
        height: "315",
        src: selectedVideo,
        title: "YouTube video player",
        frameBorder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), data_database_videos_data__WEBPACK_IMPORTED_MODULE_1__.videosList.map(function (videoCollection) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ui_components_data_display_ContentBox__WEBPACK_IMPORTED_MODULE_4__.default, {
        title: "V\xEDdeos de ".concat(videoCollection.year),
        children: videoCollection.videos.map(function (video) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "https://i.ytimg.com/vi/".concat(video.id, "/mqdefault.jpg")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, _this), video.title, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 29
            }, _this)]
          }, video.id, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, _this);
        })
      }, videoCollection.year, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, _this);
    })]
  }, void 0, true);
}

_s(Videos, "wz1XrQGEXPWCVQjyhCyEYl3byBM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3ZpZGVvcy50c3giXSwibmFtZXMiOlsiVmlkZW9zIiwidXNlU3RhdGUiLCJzZWxlY3RlZFZpZGVvIiwic2V0VmlkZW8iLCJ2aWRlb3NMaXN0IiwidmlkZW9Db2xsZWN0aW9uIiwieWVhciIsInZpZGVvcyIsIm1hcCIsInZpZGVvIiwiaWQiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUFBLGtCQUNLQywrQ0FBUSxDQUFDLEVBQUQsQ0FEYjtBQUFBLE1BQ3RCQyxhQURzQjtBQUFBLE1BQ1BDLFFBRE87O0FBRTdCLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosZUFPSSw4REFBQyxxREFBRDtBQUFRLFVBQUksRUFBRUQsYUFBYSxLQUFLLEVBQWhDO0FBQUEsZ0JBQ0tBLGFBQWEsaUJBQ1Y7QUFDSSxhQUFLLEVBQUMsS0FEVjtBQUVJLGNBQU0sRUFBQyxLQUZYO0FBR0ksV0FBRyxFQUFFQSxhQUhUO0FBSUksYUFBSyxFQUFDLHNCQUpWO0FBS0ksbUJBQVcsRUFBQyxHQUxoQjtBQU1JLGFBQUssRUFBQywwRkFOVjtBQU9JLHVCQUFlO0FBUG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosRUFxQktFLHFFQUFBLENBQWUsVUFBQ0MsZUFBRDtBQUFBLDBCQUNaLDhEQUFDLDBFQUFEO0FBRUksYUFBSyx5QkFBZUEsZUFBZSxDQUFDQyxJQUEvQixDQUZUO0FBQUEsa0JBSUtELGVBQWUsQ0FBQ0UsTUFBaEIsQ0FBdUJDLEdBQXZCLENBQTJCLFVBQUNDLEtBQUQ7QUFBQSw4QkFDeEI7QUFBQSxvQ0FDSTtBQUNJLGlCQUFHLG1DQUE0QkEsS0FBSyxDQUFDQyxFQUFsQztBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKLEVBS0tELEtBQUssQ0FBQ0UsS0FMWCxlQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkosZUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBKLGVBUUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSSjtBQUFBLGFBQVVGLEtBQUssQ0FBQ0MsRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEd0I7QUFBQSxTQUEzQjtBQUpMLFNBQ1NMLGVBQWUsQ0FBQ0MsSUFEekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURZO0FBQUEsS0FBZixDQXJCTDtBQUFBLGtCQURKO0FBMkNIOztHQTdDdUJOLE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmlkZW9zLjdiY2YwZjFiZWQwNTc0MTY0NmM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBvZ3JhcGh5LCBEaWFsb2cgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IHZpZGVvc0xpc3QgfSBmcm9tICdkYXRhL2RhdGFiYXNlL3ZpZGVvcy1kYXRhJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb250ZW50Qm94IGZyb20gJ3VpL2NvbXBvbmVudHMvZGF0YS1kaXNwbGF5L0NvbnRlbnRCb3gnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlkZW9zKCkge1xyXG4gICAgY29uc3QgW3NlbGVjdGVkVmlkZW8sIHNldFZpZGVvXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+SW5zdGl0dXRvIEVkdWNhY2lvbmFsIEVtbWFudWVsIDo6IEhvbWU8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8aDE+VsOtZGVvczwvaDE+XHJcblxyXG4gICAgICAgICAgICA8RGlhbG9nIG9wZW49e3NlbGVjdGVkVmlkZW8gIT09ICcnfT5cclxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZFZpZGVvICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTYwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzZWxlY3RlZFZpZGVvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaWZyYW1lPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9EaWFsb2c+XHJcblxyXG4gICAgICAgICAgICB7dmlkZW9zTGlzdC5tYXAoKHZpZGVvQ29sbGVjdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnRCb3hcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e3ZpZGVvQ29sbGVjdGlvbi55ZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtgVsOtZGVvcyBkZSAke3ZpZGVvQ29sbGVjdGlvbi55ZWFyfWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3ZpZGVvQ29sbGVjdGlvbi52aWRlb3MubWFwKCh2aWRlbykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17dmlkZW8uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vaS55dGltZy5jb20vdmkvJHt2aWRlby5pZH0vbXFkZWZhdWx0LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmlkZW8udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50Qm94PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==