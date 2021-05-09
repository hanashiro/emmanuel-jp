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
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              target: '_blank',
              href: video.url,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "https://i.ytimg.com/vi/".concat(video.id, "/mqdefault.jpg")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 33
              }, _this), video.title]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3ZpZGVvcy50c3giXSwibmFtZXMiOlsiVmlkZW9zIiwidXNlU3RhdGUiLCJzZWxlY3RlZFZpZGVvIiwic2V0VmlkZW8iLCJ2aWRlb3NMaXN0IiwidmlkZW9Db2xsZWN0aW9uIiwieWVhciIsInZpZGVvcyIsIm1hcCIsInZpZGVvIiwidXJsIiwiaWQiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUFBLGtCQUNLQywrQ0FBUSxDQUFDLEVBQUQsQ0FEYjtBQUFBLE1BQ3RCQyxhQURzQjtBQUFBLE1BQ1BDLFFBRE87O0FBRTdCLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosZUFPSSw4REFBQyxxREFBRDtBQUFRLFVBQUksRUFBRUQsYUFBYSxLQUFLLEVBQWhDO0FBQUEsZ0JBQ0tBLGFBQWEsaUJBQ1Y7QUFDSSxhQUFLLEVBQUMsS0FEVjtBQUVJLGNBQU0sRUFBQyxLQUZYO0FBR0ksV0FBRyxFQUFFQSxhQUhUO0FBSUksYUFBSyxFQUFDLHNCQUpWO0FBS0ksbUJBQVcsRUFBQyxHQUxoQjtBQU1JLGFBQUssRUFBQywwRkFOVjtBQU9JLHVCQUFlO0FBUG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosRUFxQktFLHFFQUFBLENBQWUsVUFBQ0MsZUFBRDtBQUFBLDBCQUNaLDhEQUFDLDBFQUFEO0FBRUksYUFBSyx5QkFBZUEsZUFBZSxDQUFDQyxJQUEvQixDQUZUO0FBQUEsa0JBSUtELGVBQWUsQ0FBQ0UsTUFBaEIsQ0FBdUJDLEdBQXZCLENBQTJCLFVBQUNDLEtBQUQ7QUFBQSw4QkFDeEI7QUFBQSxvQ0FVSTtBQUFHLG9CQUFNLEVBQUUsUUFBWDtBQUFxQixrQkFBSSxFQUFFQSxLQUFLLENBQUNDLEdBQWpDO0FBQUEsc0NBQ0k7QUFDSSxtQkFBRyxtQ0FBNEJELEtBQUssQ0FBQ0UsRUFBbEM7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKSixFQUtLRixLQUFLLENBQUNHLEtBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVZKLGVBaUJJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBakJKLGVBa0JJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbEJKLGVBbUJJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbkJKO0FBQUEsYUFBVUgsS0FBSyxDQUFDRSxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUR3QjtBQUFBLFNBQTNCO0FBSkwsU0FDU04sZUFBZSxDQUFDQyxJQUR6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFk7QUFBQSxLQUFmLENBckJMO0FBQUEsa0JBREo7QUFzREg7O0dBeER1Qk4sTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92aWRlb3MuZDVkYTg3ZDM3ZTk0ZmE5MDk5Y2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cG9ncmFwaHksIERpYWxvZyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgdmlkZW9zTGlzdCB9IGZyb20gJ2RhdGEvZGF0YWJhc2UvdmlkZW9zLWRhdGEnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbnRlbnRCb3ggZnJvbSAndWkvY29tcG9uZW50cy9kYXRhLWRpc3BsYXkvQ29udGVudEJveCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWRlb3MoKSB7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRWaWRlbywgc2V0VmlkZW9dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5JbnN0aXR1dG8gRWR1Y2FjaW9uYWwgRW1tYW51ZWwgOjogSG9tZTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIDxoMT5Ww61kZW9zPC9oMT5cclxuXHJcbiAgICAgICAgICAgIDxEaWFsb2cgb3Blbj17c2VsZWN0ZWRWaWRlbyAhPT0gJyd9PlxyXG4gICAgICAgICAgICAgICAge3NlbGVjdGVkVmlkZW8gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1NjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3NlbGVjdGVkVmlkZW99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cclxuICAgICAgICAgICAgICAgICAgICA+PC9pZnJhbWU+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0RpYWxvZz5cclxuXHJcbiAgICAgICAgICAgIHt2aWRlb3NMaXN0Lm1hcCgodmlkZW9Db2xsZWN0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8Q29udGVudEJveFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17dmlkZW9Db2xsZWN0aW9uLnllYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2BWw61kZW9zIGRlICR7dmlkZW9Db2xsZWN0aW9uLnllYXJ9YH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dmlkZW9Db2xsZWN0aW9uLnZpZGVvcy5tYXAoKHZpZGVvKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXt2aWRlby5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGlmcmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTYwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dmlkZW8uc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2lmcmFtZT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9eydfYmxhbmsnfSBocmVmPXt2aWRlby51cmx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS8ke3ZpZGVvLmlkfS9tcWRlZmF1bHQuanBnYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2aWRlby50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRlbnRCb3g+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9