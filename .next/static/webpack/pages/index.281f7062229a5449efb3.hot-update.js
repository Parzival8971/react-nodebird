webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ImagesZoom/index.js":
/*!****************************************!*\
  !*** ./components/ImagesZoom/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./components/ImagesZoom/styles.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/eomseonghun/Desktop/react-nodebird/prepare/front/components/ImagesZoom/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar ImagesZoom = function ImagesZoom(_ref) {\n  _s();\n\n  var images = _ref.images,\n      onClose = _ref.onClose;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      currentSlide = _useState[0],\n      setCurrentSlide = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Overlay\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Global\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Header\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"h1\", {\n        children: \"\\uC0C1\\uC138 \\uC774\\uBBF8\\uC9C0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"CloseBtn\"], {\n        onClick: onClose\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"SlickWrapper\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          initialSlide: 0,\n          beforeChange: function beforeChange(slide, newSlide) {\n            return setCurrentSlide(newSlide);\n          },\n          infinite: true,\n          arrows: false,\n          slidesToShow: 1,\n          slidesToScroll: 1,\n          children: images.map(function (v) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"ImgWrapper\"], {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"img\", {\n                src: v.src,\n                alt: v.src\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 36,\n                columnNumber: 17\n              }, _this)\n            }, v.src, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Indicator\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n            children: [currentSlide + 1, \" / \", images.length]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ImagesZoom, \"VQw0KpRgltXDNPWBgmV3GhZXdQE=\");\n\n_c = ImagesZoom;\nImagesZoom.propTypes = {\n  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n  })).isRequired,\n  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImagesZoom);\n\nvar _c;\n\n$RefreshReg$(_c, \"ImagesZoom\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzPzYxODciXSwibmFtZXMiOlsiSW1hZ2VzWm9vbSIsImltYWdlcyIsIm9uQ2xvc2UiLCJ1c2VTdGF0ZSIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsInNsaWRlIiwibmV3U2xpZGUiLCJtYXAiLCJ2Iiwic3JjIiwibGVuZ3RoIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsInNoYXBlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQVVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQXlCO0VBQUE7O0VBQUEsSUFBdEJDLE1BQXNCLFFBQXRCQSxNQUFzQjtFQUFBLElBQWRDLE9BQWMsUUFBZEEsT0FBYzs7RUFDMUMsZ0JBQXdDQyxzREFBUSxDQUFDLENBQUQsQ0FBaEQ7RUFBQSxJQUFPQyxZQUFQO0VBQUEsSUFBcUJDLGVBQXJCOztFQUVBLG9CQUNFLHFFQUFDLCtDQUFEO0lBQUEsd0JBQ0UscUVBQUMsOENBQUQ7TUFBQTtNQUFBO01BQUE7SUFBQSxTQURGLGVBRUUscUVBQUMsOENBQUQ7TUFBQSx3QkFDRTtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQURGLGVBRUUscUVBQUMsZ0RBQUQ7UUFBVSxPQUFPLEVBQUVIO01BQW5CO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FGRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FGRixlQU1FLHFFQUFDLG9EQUFEO01BQUEsdUJBQ0U7UUFBQSx3QkFDRSxxRUFBQyxrREFBRDtVQUNFLFlBQVksRUFBRSxDQURoQjtVQUVFLFlBQVksRUFBRSxzQkFBQ0ksS0FBRCxFQUFRQyxRQUFSO1lBQUEsT0FBcUJGLGVBQWUsQ0FBQ0UsUUFBRCxDQUFwQztVQUFBLENBRmhCO1VBR0UsUUFBUSxNQUhWO1VBSUUsTUFBTSxFQUFFLEtBSlY7VUFLRSxZQUFZLEVBQUUsQ0FMaEI7VUFNRSxjQUFjLEVBQUUsQ0FObEI7VUFBQSxVQVFHTixNQUFNLENBQUNPLEdBQVAsQ0FBVyxVQUFDQyxDQUFEO1lBQUEsb0JBQ1YscUVBQUMsa0RBQUQ7Y0FBQSx1QkFDRTtnQkFBSyxHQUFHLEVBQUVBLENBQUMsQ0FBQ0MsR0FBWjtnQkFBaUIsR0FBRyxFQUFFRCxDQUFDLENBQUNDO2NBQXhCO2dCQUFBO2dCQUFBO2dCQUFBO2NBQUE7WUFERixHQUFpQkQsQ0FBQyxDQUFDQyxHQUFuQjtjQUFBO2NBQUE7Y0FBQTtZQUFBLFNBRFU7VUFBQSxDQUFYO1FBUkg7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQURGLGVBZUUscUVBQUMsaURBQUQ7VUFBQSx1QkFDRTtZQUFBLFdBQ0dOLFlBQVksR0FBRyxDQURsQixTQUN3QkgsTUFBTSxDQUFDVSxNQUQvQjtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFERjtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBZkY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxTQU5GO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBZ0NELENBbkNEOztHQUFNWCxVOztLQUFBQSxVO0FBcUNOQSxVQUFVLENBQUNZLFNBQVgsR0FBdUI7RUFDckJYLE1BQU0sRUFBRVksaURBQVMsQ0FBQ0MsT0FBVixDQUNORCxpREFBUyxDQUFDRSxLQUFWLENBQWdCO0lBQ2RMLEdBQUcsRUFBRUcsaURBQVMsQ0FBQ0c7RUFERCxDQUFoQixDQURNLEVBSU5DLFVBTG1CO0VBTXJCZixPQUFPLEVBQUVXLGlEQUFTLENBQUNLLElBQVYsQ0FBZUQ7QUFOSCxDQUF2QjtBQVNlakIseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ltYWdlc1pvb20vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFNsaWNrIGZyb20gJ3JlYWN0LXNsaWNrJztcbmltcG9ydCB7XG4gIE92ZXJsYXksXG4gIEhlYWRlcixcbiAgQ2xvc2VCdG4sXG4gIFNsaWNrV3JhcHBlcixcbiAgSW1nV3JhcHBlcixcbiAgSW5kaWNhdG9yLFxuICBHbG9iYWwsXG59IGZyb20gJy4vc3R5bGVzJztcblxuY29uc3QgSW1hZ2VzWm9vbSA9ICh7IGltYWdlcywgb25DbG9zZSB9KSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgwKTtcblxuICByZXR1cm4gKFxuICAgIDxPdmVybGF5PlxuICAgICAgPEdsb2JhbCAvPlxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPGgxPuyDgeyEuCDsnbTrr7jsp4A8L2gxPlxuICAgICAgICA8Q2xvc2VCdG4gb25DbGljaz17b25DbG9zZX0gLz5cbiAgICAgIDwvSGVhZGVyPlxuICAgICAgPFNsaWNrV3JhcHBlcj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U2xpY2tcbiAgICAgICAgICAgIGluaXRpYWxTbGlkZT17MH1cbiAgICAgICAgICAgIGJlZm9yZUNoYW5nZT17KHNsaWRlLCBuZXdTbGlkZSkgPT4gc2V0Q3VycmVudFNsaWRlKG5ld1NsaWRlKX1cbiAgICAgICAgICAgIGluZmluaXRlXG4gICAgICAgICAgICBhcnJvd3M9e2ZhbHNlfVxuICAgICAgICAgICAgc2xpZGVzVG9TaG93PXsxfVxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw9ezF9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2ltYWdlcy5tYXAoKHYpID0+IChcbiAgICAgICAgICAgICAgPEltZ1dyYXBwZXIga2V5PXt2LnNyY30+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Yuc3JjfSBhbHQ9e3Yuc3JjfSAvPlxuICAgICAgICAgICAgICA8L0ltZ1dyYXBwZXI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1NsaWNrPlxuICAgICAgICAgIDxJbmRpY2F0b3I+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7Y3VycmVudFNsaWRlICsgMX0gLyB7aW1hZ2VzLmxlbmd0aH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvSW5kaWNhdG9yPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2xpY2tXcmFwcGVyPlxuICAgIDwvT3ZlcmxheT5cbiAgKTtcbn07XG5cbkltYWdlc1pvb20ucHJvcFR5cGVzID0ge1xuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBzcmM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfSlcbiAgKS5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VzWm9vbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ImagesZoom/index.js\n");

/***/ })

})