self["webpackHotUpdate_N_E"]("pages/videos",{

/***/ "./src/data/database/videos-data.ts":
/*!******************************************!*\
  !*** ./src/data/database/videos-data.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "videosList": function() { return /* binding */ videosList; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var videosList = [{
  year: 2002,
  videos: [{
    title: 'Festa Junina 2002',
    url: 'https://youtu.be/ATVgz50ZY4Q'
  }, {
    title: 'Sorteio de chaves - Jogos Emmanuel ',
    url: 'https://youtu.be/yakXzThb8NU'
  }, {
    title: 'Feira de Ciências / Ensaio Miss Emmanuel - 2002',
    url: 'https://youtu.be/DClSeqlNQfE'
  }, {
    title: 'Feira de Ciências - 2002',
    url: 'https://youtu.be/Tfxf8ji2fVw'
  }, {
    title: 'Festa Natal 2002 e Nagashima',
    url: 'https://youtu.be/jsLV659HmrY'
  }]
}, {
  year: 2003,
  videos: [{
    title: 'Miss Emmanuel 2003',
    url: 'https://youtu.be/zL1f08tBac4'
  }, {
    title: 'Festa Junina (2003)',
    url: 'https://youtu.be/4wL2bboLsLI'
  }, {
    title: 'Educação Física - 2003',
    url: 'https://youtu.be/vziabwsBJrc'
  }, {
    title: 'Teatro Fantoches/Dia das Crianças - Jogos Estudantis - 2003',
    url: 'https://youtu.be/qqXkMpeUKRI'
  }, {
    title: 'Feira de Ciências 2003',
    url: 'https://youtu.be/9i0OQ_RTHqg'
  }, {
    title: 'Feira de Ciências 2003 - Parte 2',
    url: 'https://youtu.be/15O3wmk9M-Y'
  }, {
    title: 'Natal / Fim de Ano / Formatura - 2003',
    url: 'https://youtu.be/_pO8oBMxF3E'
  }]
}, {
  year: 2004,
  videos: [{
    title: 'Miss Emmanuel 2004',
    url: 'https://youtu.be/XtQMBnAptQw'
  }, {
    title: 'Miss Emmanuel 2004 parte 2',
    url: 'https://youtu.be/2EMLf6qL-bE'
  }, {
    title: 'Miss Emmanuel 2004 parte 3',
    url: 'https://youtu.be/bzRsYFKthAM'
  }]
}, {
  year: '200x',
  videos: [{
    title: 'Festa de Natal / Fim de Ano - 200x',
    url: 'https://youtu.be/29O3WPYAlTw'
  }]
}];

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
        title: 'Instituto Educacional Emmanuel:',
        subtitle: 'Postado: Lucas @ Mon Jul 09, 2007 1:11 pm',
        children: "Ol\xE1, Web Developers!"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2RhdGEvZGF0YWJhc2UvdmlkZW9zLWRhdGEudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy92aWRlb3MudHN4Il0sIm5hbWVzIjpbInZpZGVvc0xpc3QiLCJ5ZWFyIiwidmlkZW9zIiwidGl0bGUiLCJ1cmwiLCJWaWRlb3MiLCJ2aWRlb0NvbGxlY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBVU8sSUFBTUEsVUFBNkIsR0FBRyxDQUN6QztBQUNJQyxNQUFJLEVBQUUsSUFEVjtBQUVJQyxRQUFNLEVBQUUsQ0FDSjtBQUNJQyxTQUFLLEVBQUUsbUJBRFg7QUFFSUMsT0FBRyxFQUFFO0FBRlQsR0FESSxFQUtKO0FBQ0lELFNBQUssRUFBRSxxQ0FEWDtBQUVJQyxPQUFHLEVBQUU7QUFGVCxHQUxJLEVBU0o7QUFDSUQsU0FBSyxFQUFFLGlEQURYO0FBRUlDLE9BQUcsRUFBRTtBQUZULEdBVEksRUFhSjtBQUNJRCxTQUFLLEVBQUUsMEJBRFg7QUFFSUMsT0FBRyxFQUFFO0FBRlQsR0FiSSxFQWlCSjtBQUNJRCxTQUFLLEVBQUUsOEJBRFg7QUFFSUMsT0FBRyxFQUFFO0FBRlQsR0FqQkk7QUFGWixDQUR5QyxFQTBCekM7QUFDSUgsTUFBSSxFQUFFLElBRFY7QUFFSUMsUUFBTSxFQUFFLENBQ0o7QUFDSUMsU0FBSyxFQUFFLG9CQURYO0FBRUlDLE9BQUcsRUFBRTtBQUZULEdBREksRUFLSjtBQUNJRCxTQUFLLEVBQUUscUJBRFg7QUFFSUMsT0FBRyxFQUFFO0FBRlQsR0FMSSxFQVNKO0FBQ0lELFNBQUssRUFBRSx3QkFEWDtBQUVJQyxPQUFHLEVBQUU7QUFGVCxHQVRJLEVBYUo7QUFDSUQsU0FBSyxFQUNELDZEQUZSO0FBR0lDLE9BQUcsRUFBRTtBQUhULEdBYkksRUFrQko7QUFDSUQsU0FBSyxFQUFFLHdCQURYO0FBRUlDLE9BQUcsRUFBRTtBQUZULEdBbEJJLEVBc0JKO0FBQ0lELFNBQUssRUFBRSxrQ0FEWDtBQUVJQyxPQUFHLEVBQUU7QUFGVCxHQXRCSSxFQTBCSjtBQUNJRCxTQUFLLEVBQUUsdUNBRFg7QUFFSUMsT0FBRyxFQUFFO0FBRlQsR0ExQkk7QUFGWixDQTFCeUMsRUE0RHpDO0FBQ0lILE1BQUksRUFBRSxJQURWO0FBRUlDLFFBQU0sRUFBRSxDQUNKO0FBQ0lDLFNBQUssRUFBRSxvQkFEWDtBQUVJQyxPQUFHLEVBQUU7QUFGVCxHQURJLEVBS0o7QUFDSUQsU0FBSyxFQUFFLDRCQURYO0FBRUlDLE9BQUcsRUFBRTtBQUZULEdBTEksRUFTSjtBQUNJRCxTQUFLLEVBQUUsNEJBRFg7QUFFSUMsT0FBRyxFQUFFO0FBRlQsR0FUSTtBQUZaLENBNUR5QyxFQTZFekM7QUFDSUgsTUFBSSxFQUFFLE1BRFY7QUFFSUMsUUFBTSxFQUFFLENBQ0o7QUFDSUMsU0FBSyxFQUFFLG9DQURYO0FBRUlDLE9BQUcsRUFBRTtBQUZULEdBREk7QUFGWixDQTdFeUMsQ0FBdEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RQO0FBQ0E7QUFDQTtBQUVlLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFDN0Isc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyxrREFBRDtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixFQU9LTCxxRUFBQSxDQUFlLFVBQUNNLGVBQUQ7QUFBQSwwQkFDWiw4REFBQywwRUFBRDtBQUNJLGFBQUssRUFBRSxpQ0FEWDtBQUVJLGdCQUFRLEVBQUUsMkNBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEWTtBQUFBLEtBQWYsQ0FQTDtBQUFBLGtCQURKO0FBa0JIO0tBbkJ1QkQsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92aWRlb3MuNjM4YWRjYTdkMjY4NzJhZmQ2MDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBWaWRlb0NvbGxlY3Rpb24ge1xyXG4gICAgeWVhcjogbnVtYmVyIHwgc3RyaW5nO1xyXG4gICAgdmlkZW9zOiBWaWRlb1tdO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVmlkZW8ge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHVybDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdmlkZW9zTGlzdDogVmlkZW9Db2xsZWN0aW9uW10gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgeWVhcjogMjAwMixcclxuICAgICAgICB2aWRlb3M6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdGZXN0YSBKdW5pbmEgMjAwMicsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3lvdXR1LmJlL0FUVmd6NTBaWTRRJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTb3J0ZWlvIGRlIGNoYXZlcyAtIEpvZ29zIEVtbWFudWVsICcsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3lvdXR1LmJlL3lha1h6VGhiOE5VJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdGZWlyYSBkZSBDacOqbmNpYXMgLyBFbnNhaW8gTWlzcyBFbW1hbnVlbCAtIDIwMDInLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly95b3V0dS5iZS9EQ2xTZXFsTlFmRScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRmVpcmEgZGUgQ2nDqm5jaWFzIC0gMjAwMicsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3lvdXR1LmJlL1RmeGY4amkyZlZ3JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdGZXN0YSBOYXRhbCAyMDAyIGUgTmFnYXNoaW1hJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8veW91dHUuYmUvanNMVjY1OUhtclknLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHllYXI6IDIwMDMsXHJcbiAgICAgICAgdmlkZW9zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWlzcyBFbW1hbnVlbCAyMDAzJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8veW91dHUuYmUvekwxZjA4dEJhYzQnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0Zlc3RhIEp1bmluYSAoMjAwMyknLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly95b3V0dS5iZS80d0wyYmJvTHNMSScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRWR1Y2HDp8OjbyBGw61zaWNhIC0gMjAwMycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3lvdXR1LmJlL3Z6aWFid3NCSnJjJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6XHJcbiAgICAgICAgICAgICAgICAgICAgJ1RlYXRybyBGYW50b2NoZXMvRGlhIGRhcyBDcmlhbsOnYXMgLSBKb2dvcyBFc3R1ZGFudGlzIC0gMjAwMycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3lvdXR1LmJlL3FxWGtNcGVVS1JJJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdGZWlyYSBkZSBDacOqbmNpYXMgMjAwMycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3lvdXR1LmJlLzlpME9RX1JUSHFnJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdGZWlyYSBkZSBDacOqbmNpYXMgMjAwMyAtIFBhcnRlIDInLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly95b3V0dS5iZS8xNU8zd21rOU0tWScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTmF0YWwgLyBGaW0gZGUgQW5vIC8gRm9ybWF0dXJhIC0gMjAwMycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3lvdXR1LmJlL19wTzhvQk14RjNFJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB5ZWFyOiAyMDA0LFxyXG4gICAgICAgIHZpZGVvczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ01pc3MgRW1tYW51ZWwgMjAwNCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3lvdXR1LmJlL1h0UU1CbkFwdFF3JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNaXNzIEVtbWFudWVsIDIwMDQgcGFydGUgMicsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3lvdXR1LmJlLzJFTUxmNnFMLWJFJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNaXNzIEVtbWFudWVsIDIwMDQgcGFydGUgMycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3lvdXR1LmJlL2J6UnNZRkt0aEFNJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB5ZWFyOiAnMjAweCcsXHJcbiAgICAgICAgdmlkZW9zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRmVzdGEgZGUgTmF0YWwgLyBGaW0gZGUgQW5vIC0gMjAweCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3lvdXR1LmJlLzI5TzNXUFlBbFR3JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuXTtcclxuIiwiaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgdmlkZW9zTGlzdCB9IGZyb20gJ2RhdGEvZGF0YWJhc2UvdmlkZW9zLWRhdGEnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgQ29udGVudEJveCBmcm9tICd1aS9jb21wb25lbnRzL2RhdGEtZGlzcGxheS9Db250ZW50Qm94JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZGVvcygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+SW5zdGl0dXRvIEVkdWNhY2lvbmFsIEVtbWFudWVsIDo6IEhvbWU8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8aDE+VsOtZGVvczwvaDE+XHJcblxyXG4gICAgICAgICAgICB7dmlkZW9zTGlzdC5tYXAoKHZpZGVvQ29sbGVjdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnRCb3hcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17J0luc3RpdHV0byBFZHVjYWNpb25hbCBFbW1hbnVlbDonfVxyXG4gICAgICAgICAgICAgICAgICAgIHN1YnRpdGxlPXsnUG9zdGFkbzogTHVjYXMgQCBNb24gSnVsIDA5LCAyMDA3IDE6MTEgcG0nfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIE9sw6EsIFdlYiBEZXZlbG9wZXJzIVxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50Qm94PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==