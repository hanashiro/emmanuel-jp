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
    url: 'https://youtu.be/ATVgz50ZY4Q',
    src: 'https://www.youtube.com/embed/ATVgz50ZY4Q'
  }, {
    title: 'Sorteio de chaves - Jogos Emmanuel ',
    url: 'https://youtu.be/yakXzThb8NU',
    src: 'https://www.youtube.com/embed/yakXzThb8NU'
  }, {
    title: 'Feira de Ciências / Ensaio Miss Emmanuel - 2002',
    url: 'https://youtu.be/DClSeqlNQfE',
    src: 'https://www.youtube.com/embed/DClSeqlNQfE'
  }, {
    title: 'Feira de Ciências - 2002',
    url: 'https://youtu.be/Tfxf8ji2fVw',
    src: 'https://www.youtube.com/embed/Tfxf8ji2fVw'
  }, {
    title: 'Festa Natal 2002 e Nagashima',
    url: 'https://youtu.be/jsLV659HmrY',
    src: 'https://www.youtube.com/embed/jsLV659HmrY'
  }]
}, {
  year: 2003,
  videos: [{
    title: 'Miss Emmanuel 2003',
    url: 'https://youtu.be/zL1f08tBac4',
    src: 'https://www.youtube.com/embed/zL1f08tBac4'
  }, {
    title: 'Festa Junina (2003)',
    url: 'https://youtu.be/4wL2bboLsLI',
    src: 'https://www.youtube.com/embed/4wL2bboLsLI'
  }, {
    title: 'Educação Física - 2003',
    url: 'https://youtu.be/vziabwsBJrc',
    src: 'https://www.youtube.com/embed/vziabwsBJrc'
  }, {
    title: 'Teatro Fantoches/Dia das Crianças - Jogos Estudantis - 2003',
    url: 'https://youtu.be/qqXkMpeUKRI',
    src: 'https://www.youtube.com/embed/qqXkMpeUKRI'
  }, {
    title: 'Feira de Ciências 2003',
    url: 'https://youtu.be/9i0OQ_RTHqg',
    src: 'https://www.youtube.com/embed/9i0OQ_RTHqg'
  }, {
    title: 'Feira de Ciências 2003 - Parte 2',
    url: 'https://youtu.be/15O3wmk9M-Y',
    src: 'https://www.youtube.com/embed/15O3wmk9M-Y'
  }, {
    title: 'Natal / Fim de Ano / Formatura - 2003',
    url: 'https://youtu.be/_pO8oBMxF3E',
    src: 'https://www.youtube.com/embed/_pO8oBMxF3E'
  }]
}, {
  year: 2004,
  videos: [{
    title: 'Miss Emmanuel 2004',
    url: 'https://youtu.be/XtQMBnAptQw',
    src: 'https://www.youtube.com/embed/XtQMBnAptQw'
  }, {
    title: 'Miss Emmanuel 2004 parte 2',
    url: 'https://youtu.be/2EMLf6qL-bE',
    src: 'https://www.youtube.com/embed/2EMLf6qL-bE'
  }, {
    title: 'Miss Emmanuel 2004 parte 3',
    url: 'https://youtu.be/bzRsYFKthAM',
    src: 'https://www.youtube.com/embed/bzRsYFKthAM'
  }]
}, {
  year: '200x',
  videos: [{
    title: 'Festa de Natal / Fim de Ano - 200x',
    url: 'https://youtu.be/29O3WPYAlTw',
    src: 'https://www.youtube.com/embed/29O3WPYAlTw'
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2RhdGEvZGF0YWJhc2UvdmlkZW9zLWRhdGEudHMiXSwibmFtZXMiOlsidmlkZW9zTGlzdCIsInllYXIiLCJ2aWRlb3MiLCJ0aXRsZSIsInVybCIsInNyYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFXTyxJQUFNQSxVQUE2QixHQUFHLENBQ3pDO0FBQ0lDLE1BQUksRUFBRSxJQURWO0FBRUlDLFFBQU0sRUFBRSxDQUNKO0FBQ0lDLFNBQUssRUFBRSxtQkFEWDtBQUVJQyxPQUFHLEVBQUUsOEJBRlQ7QUFHSUMsT0FBRyxFQUFFO0FBSFQsR0FESSxFQU1KO0FBQ0lGLFNBQUssRUFBRSxxQ0FEWDtBQUVJQyxPQUFHLEVBQUUsOEJBRlQ7QUFHSUMsT0FBRyxFQUFFO0FBSFQsR0FOSSxFQVdKO0FBQ0lGLFNBQUssRUFBRSxpREFEWDtBQUVJQyxPQUFHLEVBQUUsOEJBRlQ7QUFHSUMsT0FBRyxFQUFFO0FBSFQsR0FYSSxFQWdCSjtBQUNJRixTQUFLLEVBQUUsMEJBRFg7QUFFSUMsT0FBRyxFQUFFLDhCQUZUO0FBR0lDLE9BQUcsRUFBRTtBQUhULEdBaEJJLEVBcUJKO0FBQ0lGLFNBQUssRUFBRSw4QkFEWDtBQUVJQyxPQUFHLEVBQUUsOEJBRlQ7QUFHSUMsT0FBRyxFQUFFO0FBSFQsR0FyQkk7QUFGWixDQUR5QyxFQStCekM7QUFDSUosTUFBSSxFQUFFLElBRFY7QUFFSUMsUUFBTSxFQUFFLENBQ0o7QUFDSUMsU0FBSyxFQUFFLG9CQURYO0FBRUlDLE9BQUcsRUFBRSw4QkFGVDtBQUdJQyxPQUFHLEVBQUU7QUFIVCxHQURJLEVBTUo7QUFDSUYsU0FBSyxFQUFFLHFCQURYO0FBRUlDLE9BQUcsRUFBRSw4QkFGVDtBQUdJQyxPQUFHLEVBQUU7QUFIVCxHQU5JLEVBV0o7QUFDSUYsU0FBSyxFQUFFLHdCQURYO0FBRUlDLE9BQUcsRUFBRSw4QkFGVDtBQUdJQyxPQUFHLEVBQUU7QUFIVCxHQVhJLEVBZ0JKO0FBQ0lGLFNBQUssRUFDRCw2REFGUjtBQUdJQyxPQUFHLEVBQUUsOEJBSFQ7QUFJSUMsT0FBRyxFQUFFO0FBSlQsR0FoQkksRUFzQko7QUFDSUYsU0FBSyxFQUFFLHdCQURYO0FBRUlDLE9BQUcsRUFBRSw4QkFGVDtBQUdJQyxPQUFHLEVBQUU7QUFIVCxHQXRCSSxFQTJCSjtBQUNJRixTQUFLLEVBQUUsa0NBRFg7QUFFSUMsT0FBRyxFQUFFLDhCQUZUO0FBR0lDLE9BQUcsRUFBRTtBQUhULEdBM0JJLEVBZ0NKO0FBQ0lGLFNBQUssRUFBRSx1Q0FEWDtBQUVJQyxPQUFHLEVBQUUsOEJBRlQ7QUFHSUMsT0FBRyxFQUFFO0FBSFQsR0FoQ0k7QUFGWixDQS9CeUMsRUF3RXpDO0FBQ0lKLE1BQUksRUFBRSxJQURWO0FBRUlDLFFBQU0sRUFBRSxDQUNKO0FBQ0lDLFNBQUssRUFBRSxvQkFEWDtBQUVJQyxPQUFHLEVBQUUsOEJBRlQ7QUFHSUMsT0FBRyxFQUFFO0FBSFQsR0FESSxFQU1KO0FBQ0lGLFNBQUssRUFBRSw0QkFEWDtBQUVJQyxPQUFHLEVBQUUsOEJBRlQ7QUFHSUMsT0FBRyxFQUFFO0FBSFQsR0FOSSxFQVdKO0FBQ0lGLFNBQUssRUFBRSw0QkFEWDtBQUVJQyxPQUFHLEVBQUUsOEJBRlQ7QUFHSUMsT0FBRyxFQUFFO0FBSFQsR0FYSTtBQUZaLENBeEV5QyxFQTRGekM7QUFDSUosTUFBSSxFQUFFLE1BRFY7QUFFSUMsUUFBTSxFQUFFLENBQ0o7QUFDSUMsU0FBSyxFQUFFLG9DQURYO0FBRUlDLE9BQUcsRUFBRSw4QkFGVDtBQUdJQyxPQUFHLEVBQUU7QUFIVCxHQURJO0FBRlosQ0E1RnlDLENBQXRDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZpZGVvcy41ZTU1ZjdiMGNhODRlMGE1M2IyOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFZpZGVvQ29sbGVjdGlvbiB7XHJcbiAgICB5ZWFyOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgICB2aWRlb3M6IFZpZGVvW107XHJcbn1cclxuXHJcbmludGVyZmFjZSBWaWRlbyB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBzcmM6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHZpZGVvc0xpc3Q6IFZpZGVvQ29sbGVjdGlvbltdID0gW1xyXG4gICAge1xyXG4gICAgICAgIHllYXI6IDIwMDIsXHJcbiAgICAgICAgdmlkZW9zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRmVzdGEgSnVuaW5hIDIwMDInLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly95b3V0dS5iZS9BVFZnejUwWlk0UScsXHJcbiAgICAgICAgICAgICAgICBzcmM6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9BVFZnejUwWlk0UScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnU29ydGVpbyBkZSBjaGF2ZXMgLSBKb2dvcyBFbW1hbnVlbCAnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly95b3V0dS5iZS95YWtYelRoYjhOVScsXHJcbiAgICAgICAgICAgICAgICBzcmM6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC95YWtYelRoYjhOVScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRmVpcmEgZGUgQ2nDqm5jaWFzIC8gRW5zYWlvIE1pc3MgRW1tYW51ZWwgLSAyMDAyJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8veW91dHUuYmUvRENsU2VxbE5RZkUnLFxyXG4gICAgICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvRENsU2VxbE5RZkUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0ZlaXJhIGRlIENpw6puY2lhcyAtIDIwMDInLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly95b3V0dS5iZS9UZnhmOGppMmZWdycsXHJcbiAgICAgICAgICAgICAgICBzcmM6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9UZnhmOGppMmZWdycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRmVzdGEgTmF0YWwgMjAwMiBlIE5hZ2FzaGltYScsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3lvdXR1LmJlL2pzTFY2NTlIbXJZJyxcclxuICAgICAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL2pzTFY2NTlIbXJZJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB5ZWFyOiAyMDAzLFxyXG4gICAgICAgIHZpZGVvczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ01pc3MgRW1tYW51ZWwgMjAwMycsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3lvdXR1LmJlL3pMMWYwOHRCYWM0JyxcclxuICAgICAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3pMMWYwOHRCYWM0JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdGZXN0YSBKdW5pbmEgKDIwMDMpJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8veW91dHUuYmUvNHdMMmJib0xzTEknLFxyXG4gICAgICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvNHdMMmJib0xzTEknLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0VkdWNhw6fDo28gRsOtc2ljYSAtIDIwMDMnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly95b3V0dS5iZS92emlhYndzQkpyYycsXHJcbiAgICAgICAgICAgICAgICBzcmM6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC92emlhYndzQkpyYycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOlxyXG4gICAgICAgICAgICAgICAgICAgICdUZWF0cm8gRmFudG9jaGVzL0RpYSBkYXMgQ3JpYW7Dp2FzIC0gSm9nb3MgRXN0dWRhbnRpcyAtIDIwMDMnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly95b3V0dS5iZS9xcVhrTXBlVUtSSScsXHJcbiAgICAgICAgICAgICAgICBzcmM6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9xcVhrTXBlVUtSSScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRmVpcmEgZGUgQ2nDqm5jaWFzIDIwMDMnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly95b3V0dS5iZS85aTBPUV9SVEhxZycsXHJcbiAgICAgICAgICAgICAgICBzcmM6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC85aTBPUV9SVEhxZycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRmVpcmEgZGUgQ2nDqm5jaWFzIDIwMDMgLSBQYXJ0ZSAyJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8veW91dHUuYmUvMTVPM3dtazlNLVknLFxyXG4gICAgICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvMTVPM3dtazlNLVknLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05hdGFsIC8gRmltIGRlIEFubyAvIEZvcm1hdHVyYSAtIDIwMDMnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly95b3V0dS5iZS9fcE84b0JNeEYzRScsXHJcbiAgICAgICAgICAgICAgICBzcmM6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9fcE84b0JNeEYzRScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgeWVhcjogMjAwNCxcclxuICAgICAgICB2aWRlb3M6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNaXNzIEVtbWFudWVsIDIwMDQnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly95b3V0dS5iZS9YdFFNQm5BcHRRdycsXHJcbiAgICAgICAgICAgICAgICBzcmM6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9YdFFNQm5BcHRRdycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWlzcyBFbW1hbnVlbCAyMDA0IHBhcnRlIDInLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly95b3V0dS5iZS8yRU1MZjZxTC1iRScsXHJcbiAgICAgICAgICAgICAgICBzcmM6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8yRU1MZjZxTC1iRScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWlzcyBFbW1hbnVlbCAyMDA0IHBhcnRlIDMnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly95b3V0dS5iZS9ielJzWUZLdGhBTScsXHJcbiAgICAgICAgICAgICAgICBzcmM6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9ielJzWUZLdGhBTScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgeWVhcjogJzIwMHgnLFxyXG4gICAgICAgIHZpZGVvczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0Zlc3RhIGRlIE5hdGFsIC8gRmltIGRlIEFubyAtIDIwMHgnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly95b3V0dS5iZS8yOU8zV1BZQWxUdycsXHJcbiAgICAgICAgICAgICAgICBzcmM6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8yOU8zV1BZQWxUdycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbl07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=