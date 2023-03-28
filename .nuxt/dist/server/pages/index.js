exports.ids = [6,1,2,3,4,5];
exports.modules = Array(28).concat([
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4bb7bf3e", content, false, context)
};

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PopupModal.vue?vue&type=template&id=20a66f94&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "popupModalWrapper"
  }, [_vm._ssrNode("<div" + _vm._ssrClass("popupModal", _vm.modalClass) + ">", "</div>", [_vm._ssrNode("<div class=\"popupModalHeader\">" + _vm._ssrEscape("\n      " + _vm._s(_vm.title) + "\n      ") + "<div class=\"close-btn\"><i class=\"fas fa-times\"></i></div></div> "), _vm._ssrNode("<div class=\"popupModalBody\">", "</div>", [_vm._t("default")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"popupModalFooter\">", "</div>", [_vm._t("footer")], 2)], 2), _vm._ssrNode(" "), _c('style', {
    tag: "component"
  }, [_vm._v("\n    body {\n    overflow: hidden;\n    }\n  ")])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/PopupModal.vue?vue&type=template&id=20a66f94&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PopupModal.vue?vue&type=script&lang=js&
/* harmony default export */ var PopupModalvue_type_script_lang_js_ = ({
  props: {
    modalClass: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/PopupModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PopupModalvue_type_script_lang_js_ = (PopupModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PopupModal.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(30)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PopupModalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "d3e487f8"
  
)

/* harmony default export */ var PopupModal = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopupModal_vue_vue_type_style_index_0_id_20a66f94_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopupModal_vue_vue_type_style_index_0_id_20a66f94_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopupModal_vue_vue_type_style_index_0_id_20a66f94_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopupModal_vue_vue_type_style_index_0_id_20a66f94_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopupModal_vue_vue_type_style_index_0_id_20a66f94_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".popupModalWrapper{align-items:center;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:var(--overlay-bg-color);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:2000}.popupModal{background:var(--modal-bg-color);border:1px solid var(--modal-border-color);border-radius:var(--modal-border-radius);box-shadow:0 15px 15px rgba(0,0,0,.1);box-sizing:border-box;color:var(--modal-font-color);display:flex;flex-direction:column;max-height:calc(100vh - 120px);max-width:90%;min-width:300px;padding:0 20px;position:relative;width:100%}@media(max-width:767px){.popupModal{animation:modalSlideUp .3s}}.popupModalHeader{border-bottom:1px solid var(--modal-header-border-color);font-weight:700;padding:20px;position:relative;text-align:center}.popupModalHeader .close-btn{cursor:pointer;position:absolute;right:2px;top:20px;transition:opacity .3s}.popupModalHeader .close-btn:hover{opacity:.7}.popupModalBody{flex:1;overflow-y:auto;padding:20px 0}.popupModalFooter{border-top:1px solid var(--modal-header-border-color);padding:20px;position:relative;text-align:center}.popupModalFooter button{-webkit-appearance:none;background:#eee;border:1px solid #eee;border-radius:var(--button-border-radius);cursor:pointer;max-width:300px;outline:none;padding:10px 30px}.popupModalFooter button:hover{filter:brightness(.95)}.popupModalFooter button:active{filter:brightness(.9)}.popupModalFooter button.primary{background:var(--primary-button-bg-color);border:1px solid var(--primary-button-border-color);color:var(--primary-button-font-color);font-weight:700}.popupModalFooter button.secondary{background:var(--secondary-button-bg-color);border:1px solid var(--secondary-button-border-color);color:var(--secondary-button-font-color)}@keyframes modalSlideUp{0%{top:500px}to{top:0}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("23aa7c87", content, false, context)
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4a160787", content, false, context)
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("26b39bfb", content, false, context)
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("004255d7", content, false, context)
};

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return availableKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return availableSamples; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defaultProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return beepSample; });
const availableKeys = '4567rtyufghjvbnm'.split('');

// https://hiphopmakers.com/40-free-music-producer-free-drum-kits
const availableSamples = [{
  id: 'clap1',
  name: 'Clap 1',
  source: '/audio_sources/clap1.mp3',
  tags: ['Clap']
}, {
  id: 'clap2',
  name: 'Clap 2',
  source: '/audio_sources/clap2.mp3',
  tags: ['Clap']
}, {
  id: 'crash1',
  name: 'Crash 1',
  source: '/audio_sources/crash1.mp3',
  tags: ['Crash']
}, {
  id: 'crash2',
  name: 'Crash 2',
  source: '/audio_sources/crash2.mp3',
  tags: ['Crash']
}, {
  id: 'cymbal1',
  name: 'Cymbal 1',
  source: '/audio_sources/cymbal1.mp3',
  tags: ['Cymbal']
}, {
  id: 'cymbal2',
  name: 'Cymbal 2',
  source: '/audio_sources/cymbal2.mp3',
  tags: ['Cymbal']
}, {
  id: 'hihat1',
  name: 'Hi Hat 1',
  source: '/audio_sources/hihat1.mp3',
  tags: ['Hi Hat']
}, {
  id: 'hihat2',
  name: 'Hi Hat 2',
  source: '/audio_sources/hihat2.mp3',
  tags: ['Hi Hat']
}, {
  id: 'kick1',
  name: 'Kick 1',
  source: '/audio_sources/kick1.mp3',
  tags: ['Kick']
}, {
  id: 'kick2',
  name: 'Kick 2',
  source: '/audio_sources/kick2.mp3',
  tags: ['Kick']
}, {
  id: 'openhihat1',
  name: 'Open Hi Hat 1',
  source: '/audio_sources/openhihat1.mp3',
  tags: ['Open Hi Hat', 'Hi Hat']
}, {
  id: 'openhihat2',
  name: 'Open Hi Hat 2',
  source: '/audio_sources/openhihat2.mp3',
  tags: ['Open Hi Hat', 'Hi Hat']
}, {
  id: 'perc1',
  name: 'Perc 1',
  source: '/audio_sources/perc1.mp3',
  tags: ['Percussion']
}, {
  id: 'perc2',
  name: 'Perc 2',
  source: '/audio_sources/perc2.mp3',
  tags: ['Percussion']
}, {
  id: 'ride',
  name: 'Ride',
  source: '/audio_sources/ride.mp3',
  tags: ['Ride']
}, {
  id: 'snare1',
  name: 'Snare 1',
  source: '/audio_sources/snare1.mp3',
  tags: ['Snare']
}, {
  id: 'snare2',
  name: 'Snare 2',
  source: '/audio_sources/snare2.mp3',
  tags: ['Snare']
}];
const defaultProjects = [{
  name: 'New Project',
  // 小節數
  measures: 2,
  // 速度 一拍 60/speed
  speed: 120,
  // 一小節幾拍
  beats: 4,
  tracks: [{
    name: 'New Track',
    // 最多能有16個，順序照key排
    samples: ['clap1', 'clap2', 'crash1', 'crash2', 'cymbal1', 'cymbal2', 'hihat1', 'hihat2', 'kick1', 'kick2', 'openhihat1', 'openhihat2', 'perc1', 'perc2', 'snare1', 'snare2'],
    // samples: ['clap1'],
    hits: [
      /*
      {
        sample: 0,
        measure: 2,
        pos: 0.14 (x100 => percentage)
      }
      */
    ]
  }, {
    name: 'Cool Drum',
    // 最多能有16個，順序照key排
    samples: ['crash1', 'crash2', 'cymbal1', 'cymbal2', 'hihat1', 'hihat2', 'kick1', 'kick2', 'openhihat1', 'openhihat2', 'snare1', 'snare2'],
    // samples: ['clap1'],
    hits: [
    /*
    {
      sample: 0,
      measure: 2,
      pos: 14.23 (%)
    }
    */
    {
      sample: 4,
      measure: 0,
      pos: 0
    }, {
      sample: 4,
      measure: 0,
      pos: 0.25
    }, {
      sample: 4,
      measure: 0,
      pos: 0.5
    }, {
      sample: 4,
      measure: 0,
      pos: 0.75
    }, {
      sample: 4,
      measure: 0,
      pos: 0.125
    }, {
      sample: 4,
      measure: 0,
      pos: 0.375
    }, {
      sample: 4,
      measure: 0,
      pos: 0.625
    }, {
      sample: 8,
      measure: 0,
      pos: 0.875
    }, {
      sample: 5,
      measure: 1,
      pos: 0
    }, {
      sample: 5,
      measure: 1,
      pos: 0.25
    }, {
      sample: 5,
      measure: 1,
      pos: 0.5
    }, {
      sample: 5,
      measure: 1,
      pos: 0.75
    }, {
      sample: 5,
      measure: 1,
      pos: 0.125
    }, {
      sample: 5,
      measure: 1,
      pos: 0.375
    }, {
      sample: 5,
      measure: 1,
      pos: 0.625
    }, {
      sample: 9,
      measure: 1,
      pos: 0.875
    }, {
      sample: 6,
      measure: 0,
      pos: 0
    }, {
      sample: 10,
      measure: 0,
      pos: 0.25
    }, {
      sample: 7,
      measure: 0,
      pos: 0.5
    }, {
      sample: 11,
      measure: 0,
      pos: 0.75
    }, {
      sample: 6,
      measure: 1,
      pos: 0
    }, {
      sample: 10,
      measure: 1,
      pos: 0.25
    }, {
      sample: 7,
      measure: 1,
      pos: 0.5
    }, {
      sample: 11,
      measure: 1,
      pos: 0.75
    }]
  }, {
    name: 'Perc',
    samples: ['clap1', 'clap2', 'perc1', 'perc2'],
    hits: [{
      sample: 0,
      measure: 0,
      pos: 0.125
    }, {
      sample: 1,
      measure: 0,
      pos: 0.375
    }, {
      sample: 0,
      measure: 0,
      pos: 0.625
    }, {
      sample: 3,
      measure: 0,
      pos: 0.875
    }, {
      sample: 0,
      measure: 1,
      pos: 0.125
    }, {
      sample: 1,
      measure: 1,
      pos: 0.375
    }, {
      sample: 0,
      measure: 1,
      pos: 0.625
    }, {
      sample: 2,
      measure: 1,
      pos: 0.875
    }]
  }]
}];
const beepSample = [{
  type: 'sawtooth',
  freq: 1400
}, {
  type: 'triangle',
  freq: 1000
}, {
  type: 'triangle',
  freq: 1000
}, {
  type: 'triangle',
  freq: 1000
}, {
  type: 'triangle',
  freq: 1000
}, {
  type: 'triangle',
  freq: 1000
}, {
  type: 'triangle',
  freq: 1000
}, {
  type: 'triangle',
  freq: 1000
}];


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_style_index_0_id_5075ee66_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_style_index_0_id_5075ee66_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_style_index_0_id_5075ee66_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_style_index_0_id_5075ee66_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_style_index_0_id_5075ee66_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".projects .no-projects,.projects .project{margin:10px 0;padding:10px}.projects .project{grid-gap:10px;align-items:center;background:var(--track-bg-color);border:1px solid var(--track-border-color);border-radius:var(--button-border-radius);display:grid;grid-template-columns:1fr auto;transition:background .3s,border .3s}.projects .project .project-action button{padding:.8em .5em!important}.projects .add-btn{align-items:center;background:var(--light-gray);display:flex;height:50px;justify-content:center;margin:25px auto;width:50px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectTracks_vue_vue_type_style_index_0_id_4590cee8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectTracks_vue_vue_type_style_index_0_id_4590cee8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectTracks_vue_vue_type_style_index_0_id_4590cee8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectTracks_vue_vue_type_style_index_0_id_4590cee8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectTracks_vue_vue_type_style_index_0_id_4590cee8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".tracks .no-tracks,.tracks .track{margin:10px 0;padding:10px}.tracks .track{grid-gap:10px;align-items:center;background:var(--track-bg-color);border:1px solid var(--track-border-color);border-radius:var(--button-border-radius);display:grid;grid-template-columns:80px 25px 1fr auto;transition:background .3s,border .3s}.tracks .track .track-name{word-break:break-all}.tracks .track .track-mute .muted{color:var(--primary)}.tracks .track .track-action button{padding:.8em .5em!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pad_vue_vue_type_style_index_0_id_25aba824_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pad_vue_vue_type_style_index_0_id_25aba824_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pad_vue_vue_type_style_index_0_id_25aba824_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pad_vue_vue_type_style_index_0_id_25aba824_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pad_vue_vue_type_style_index_0_id_25aba824_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".track-setting button.edit{background:var(--red);color:var(--white)}.pad-mode .track-preview{margin-top:1em}.pad-buttons{grid-gap:5px;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;text-align:center}.pad-buttons .pad-button{align-items:center;border-radius:var(--button-border-radius);box-shadow:inset 0 0 100px rgba(0,0,0,.533);display:flex;font-size:.75em;height:calc(25vh - 62.5px);justify-content:center;min-height:100px;opacity:.6;transition:opacity 1s}.pad-buttons .pad-button.active{opacity:1;transition:opacity 0s,box-shadow 0s}.pad-buttons .pad-button:first-child{background:var(--pad-button-color--1)}.pad-buttons .pad-button:nth-child(2){background:var(--pad-button-color--2)}.pad-buttons .pad-button:nth-child(3){background:var(--pad-button-color--3)}.pad-buttons .pad-button:nth-child(4){background:var(--pad-button-color--4)}.pad-buttons .pad-button:nth-child(5){background:var(--pad-button-color--5)}.pad-buttons .pad-button:nth-child(6){background:var(--pad-button-color--6)}.pad-buttons .pad-button:nth-child(7){background:var(--pad-button-color--7)}.pad-buttons .pad-button:nth-child(8){background:var(--pad-button-color--8)}.pad-buttons .pad-button:nth-child(9){background:var(--pad-button-color--9)}.pad-buttons .pad-button:nth-child(10){background:var(--pad-button-color--10)}.pad-buttons .pad-button:nth-child(11){background:var(--pad-button-color--11)}.pad-buttons .pad-button:nth-child(12){background:var(--pad-button-color--12)}.pad-buttons .pad-button:nth-child(13){background:var(--pad-button-color--13)}.pad-buttons .pad-button:nth-child(14){background:var(--pad-button-color--14)}.pad-buttons .pad-button:nth-child(15){background:var(--pad-button-color--15)}.pad-buttons .pad-button:nth-child(16){background:var(--pad-button-color--16)}.instruments-form .section-title{margin-bottom:10px}.sample-select .samples{grid-gap:10px;display:grid;grid-template-columns:1fr 1fr}.sample-select .sample{grid-gap:10px;align-items:center;border:1px solid var(--modal-separator-color);border-radius:var(--button-border-radius);display:grid;grid-template-columns:1fr auto;padding:5px 10px;transition:border-color color .3s .3s}.sample-select .sample .sample-preview{opacity:0}.sample-select .sample.active{border-color:var(--primary);color:var(--primary)}.sample-select .sample.active .sample-preview{opacity:1}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rec_vue_vue_type_style_index_0_id_5b70011e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rec_vue_vue_type_style_index_0_id_5b70011e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rec_vue_vue_type_style_index_0_id_5b70011e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rec_vue_vue_type_style_index_0_id_5b70011e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rec_vue_vue_type_style_index_0_id_5b70011e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".footer-bar .rec-action button{font-size:1.2em}.footer-bar .rec-btn{width:40px}.footer-bar .rec-btn.active{color:var(--warning)!important;opacity:1!important;pointer-events:none}.footer-bar .project-info{font-size:.75em}.footer-bar .countdown-text{display:inline-block;font-weight:700;text-align:center;width:2em}.footer-bar .progress-bar{left:0;position:absolute;right:0;top:0}.footer-bar .progress-bar .progress{background:var(--green);height:1px}.footer-bar .progress-bar.recording .progress{background:var(--light-red)}@keyframes breath{0%{opacity:1}50%{opacity:.5}to{opacity:1}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1822bf33", content, false, context)
};

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProjectList.vue?vue&type=template&id=5075ee66&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "tracks-mode"
  }, [_vm._ssrNode("<div class=\"header-bar project-list\"><div></div> <div class=\"project-name center\">\n      DropTheBeat\n    </div> <div class=\"add-project right\"><button><i class=\"fas fa-plus\"></i></button></div></div> <div class=\"main\"><div class=\"projects\">" + (!_vm.projects.length ? "<div class=\"no-projects center\">\n        No Projects\n      </div>" : "<!---->") + " " + _vm._ssrList(_vm.projects, function (project, idx) {
    return "<div class=\"project\"><div class=\"project-name\">" + _vm._ssrEscape("\n          " + _vm._s(project.name) + "\n        ") + "</div> <div class=\"project-action\"><button class=\"icon-btn\"><i class=\"far fa-trash-alt\"></i></button></div></div>";
  }) + " <button class=\"add-btn\"><i class=\"fas fa-plus\"></i></button></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ProjectList.vue?vue&type=template&id=5075ee66&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProjectList.vue?vue&type=script&lang=js&
/* harmony default export */ var ProjectListvue_type_script_lang_js_ = ({
  props: {
    projects: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    addProject() {
      /* eslint-disable */
      this.projects.push({
        name: 'New Project',
        // 小節數
        measures: 4,
        // 速度 一拍 60/speed
        speed: 120,
        // 一小節幾拍
        beats: 4,
        tracks: [{
          name: 'Track 1',
          // 最多能有16個，順序照key排
          samples: [],
          hits: []
        }]
      });
      /* eslint-enable */
    },

    async removeProject(projectIdx) {
      if (await this.$confirm('Are you sure?')) {
        /* eslint-disable */
        this.projects.splice(projectIdx, 1);
        /* eslint-enable */
      }
    }
  }
});
// CONCATENATED MODULE: ./components/ProjectList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProjectListvue_type_script_lang_js_ = (ProjectListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ProjectList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProjectListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "05b17f44"
  
)

/* harmony default export */ var ProjectList = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProjectTracks.vue?vue&type=template&id=4590cee8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "tracks-mode"
  }, [_vm._ssrNode("<div class=\"header-bar project-info\"><div class=\"project-back\"><button" + _vm._ssrAttr("disabled", _vm.playing || _vm.recording) + " class=\"icon-btn\"><i class=\"fas fa-chevron-left\"></i>\n        Projects\n      </button></div> <div class=\"project-name center\"><span>" + _vm._ssrEscape(_vm._s(_vm.project.name)) + "</span></div> <div class=\"add-track right\"><button" + _vm._ssrAttr("disabled", _vm.playing || _vm.recording) + "><i class=\"fas fa-plus\"></i></button></div></div> <div class=\"main\"><div class=\"tracks\">" + (!_vm.tracks.length ? "<div class=\"no-tracks center\">\n        No Tracks\n      </div>" : "<!---->") + " " + _vm._ssrList(_vm.tracks, function (track, idx) {
    return "<div class=\"track\"><div class=\"track-name\">" + _vm._ssrEscape("\n          " + _vm._s(track.name) + "\n        ") + "</div> <div class=\"track-mute\"><button" + _vm._ssrAttr("disabled", _vm.playing) + " title=\"mute\"" + _vm._ssrClass("icon-btn", {
      muted: track.muted
    }) + ">" + (!track.muted ? "<i class=\"fas fa-volume-down\"></i>" : "<i class=\"fas fa-volume-mute\"></i>") + "</button></div> <div class=\"track-preview\">" + _vm._ssrList(_vm.project.measures, function (measure, mIdx) {
      return "<div" + _vm._ssrClass("measure", {
        active: mIdx === _vm.currentMeasure
      }) + ">" + _vm._ssrList(track.samples, function (sample, sIdx) {
        return "<div class=\"sample\">" + _vm._ssrList(track.hits.filter(hit => hit.sample === sIdx && hit.measure === measure - 1), function (hit, hIdx) {
          return "<div class=\"hit\"" + _vm._ssrStyle(null, `left: ${hit.pos * 100}%`, null) + "></div>";
        }) + "</div>";
      }) + "</div>";
    }) + "</div> <div class=\"track-action\"><button" + _vm._ssrAttr("disabled", _vm.playing) + " title=\"Remove\" class=\"icon-btn\"><i class=\"far fa-trash-alt\"></i></button> <button" + _vm._ssrAttr("disabled", _vm.playing) + " title=\"Clear all\" class=\"icon-btn clean-rec-btn\"><i class=\"fas fa-eraser\"></i></button></div></div>";
  }) + "</div></div> "), _vm.editModalVisible ? _c('PopupModal', {
    attrs: {
      "title": "Edit Project"
    },
    on: {
      "close": function ($event) {
        return _vm.hideEditModal();
      }
    }
  }, [_c('div', {
    staticClass: "form edit-grid"
  }, [_c('div', {
    staticClass: "form-row"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("\n          Project Name\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.clonedProject.name,
      expression: "clonedProject.name"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.clonedProject.name
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.clonedProject, "name", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c('template', {
    slot: "footer"
  }, [_c('button', {
    staticClass: "secondary",
    on: {
      "click": function ($event) {
        return _vm.hideEditModal();
      }
    }
  }, [_vm._v("\n        Cancel\n      ")]), _vm._v(" "), _c('button', {
    staticClass: "primary",
    on: {
      "click": function ($event) {
        return _vm.hideEditModal(true);
      }
    }
  }, [_vm._v("\n        OK\n      ")])])], 2) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ProjectTracks.vue?vue&type=template&id=4590cee8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProjectTracks.vue?vue&type=script&lang=js&
/* harmony default export */ var ProjectTracksvue_type_script_lang_js_ = ({
  props: {
    project: {
      type: Object,
      default: () => {}
    },
    playing: {
      type: Boolean,
      default: false
    },
    recording: {
      type: Boolean,
      default: false
    },
    contextCurrentTime: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      editModalVisible: false,
      clonedProject: {}
    };
  },
  computed: {
    tracks() {
      return this.project.tracks;
    },
    currentMeasure() {
      const speed = 60 / this.project.speed;
      const measureTime = speed * this.project.beats;
      const totalTime = speed * this.project.beats * this.project.measures;
      return this.playing ? Math.floor(this.contextCurrentTime % totalTime / measureTime) : -1;
    }
  },
  methods: {
    showEditModal() {
      this.clonedProject = JSON.parse(JSON.stringify(this.project));
      this.editModalVisible = true;
    },
    hideEditModal(save) {
      this.editModalVisible = false;
      if (save) {
        this.$emit('update', this.clonedProject);
      }
    },
    addTrack() {
      /*eslint-disable */
      this.project.tracks.push({
        name: 'New Track',
        // 最多能有16個，順序照key排
        samples: [],
        hits: []
      });
      /* eslint-enable */
    },

    async removeTrack(idx) {
      if (await this.$confirm('Are you sure?')) {
        /*eslint-disable */
        this.project.tracks.splice(idx, 1);
        /* eslint-enable */
      }
    }
  }
});
// CONCATENATED MODULE: ./components/ProjectTracks.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProjectTracksvue_type_script_lang_js_ = (ProjectTracksvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ProjectTracks.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProjectTracksvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "629f12a4"
  
)

/* harmony default export */ var ProjectTracks = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {PopupModal: __webpack_require__(29).default})


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pad.vue?vue&type=template&id=25aba824&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "pad-mode"
  }, [_vm._ssrNode("<div class=\"header-bar pad-info\"><div class=\"pad-back\"><button" + _vm._ssrAttr("disabled", _vm.recording) + " class=\"icon-btn\"><i class=\"fas fa-chevron-left\"></i>" + _vm._ssrEscape("\n        " + _vm._s(_vm.project.name) + "\n      ") + "</button></div> <div class=\"track-name center\"><span>" + _vm._ssrEscape(_vm._s(_vm.track.name)) + "</span></div> <div class=\"track-setting right\"><button" + _vm._ssrAttr("disabled", _vm.playing || _vm.recording) + _vm._ssrClass(null, {
    edit: _vm.editSampleMode
  }) + "><i class=\"fas fa-drum\"></i>\n        Edit Pad\n      </button></div></div> <div class=\"main\"><div class=\"pad-buttons\">" + _vm._ssrList(16, function (i) {
    return "<div" + _vm._ssrClass("pad-button", {
      active: _vm.isHitted[i - 1] || _vm.currentHits.includes(i - 1)
    }) + ">" + _vm._ssrEscape("\n        " + _vm._s(_vm.availableSamples.find(item => item.id === _vm.track.samples[i - 1]) ? _vm.availableSamples.find(item => item.id === _vm.track.samples[i - 1]).name : 'none') + "\n      ") + "</div>";
  }) + "</div> <div class=\"track-preview\">" + _vm._ssrList(_vm.project.measures, function (measure, mIdx) {
    return "<div" + _vm._ssrClass("measure", {
      active: mIdx === _vm.currentMeasure
    }) + ">" + _vm._ssrList(_vm.track.samples, function (sample, sIdx) {
      return "<div class=\"sample\">" + _vm._ssrList(_vm.track.hits.filter(hit => hit.sample === sIdx && hit.measure === measure - 1), function (hit, hIdx) {
        return "<div class=\"hit\"" + _vm._ssrStyle(null, `left: ${hit.pos * 100}%`, null) + "></div>";
      }) + "</div>";
    }) + "</div>";
  }) + "</div></div> "), _vm.editModalVisible ? _c('PopupModal', {
    attrs: {
      "title": "Edit Track"
    },
    on: {
      "close": function ($event) {
        return _vm.hideEditModal();
      }
    }
  }, [_c('div', {
    staticClass: "form edit-grid"
  }, [_c('div', {
    staticClass: "form-row"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("\n          Track Name\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.clonedTrack.name,
      expression: "clonedTrack.name"
    }],
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.clonedTrack.name
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.clonedTrack, "name", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c('template', {
    slot: "footer"
  }, [_c('button', {
    staticClass: "secondary",
    on: {
      "click": function ($event) {
        return _vm.hideEditModal();
      }
    }
  }, [_vm._v("\n        Cancel\n      ")]), _vm._v(" "), _c('button', {
    staticClass: "primary",
    on: {
      "click": function ($event) {
        return _vm.hideEditModal(true);
      }
    }
  }, [_vm._v("\n        OK\n      ")])])], 2) : _vm._e(), _vm._ssrNode(" "), _vm.editSampleModalVisible ? _c('PopupModal', {
    attrs: {
      "title": "Edit Pad"
    },
    on: {
      "close": function ($event) {
        return _vm.hideEditSampleModal();
      }
    }
  }, [_c('div', {
    staticClass: "instruments-form"
  }, [_c('div', {
    staticClass: "section-title"
  }, [_vm._v("\n        Category\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "tags"
  }, _vm._l(_vm.sampleTags, function (tag) {
    return _c('label', {
      key: tag
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.selectedSampleCategory,
        expression: "selectedSampleCategory"
      }],
      staticClass: "tag",
      attrs: {
        "type": "checkbox"
      },
      domProps: {
        "value": tag,
        "checked": Array.isArray(_vm.selectedSampleCategory) ? _vm._i(_vm.selectedSampleCategory, tag) > -1 : _vm.selectedSampleCategory
      },
      on: {
        "change": function ($event) {
          var $$a = _vm.selectedSampleCategory,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = tag,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && (_vm.selectedSampleCategory = $$a.concat([$$v]));
            } else {
              $$i > -1 && (_vm.selectedSampleCategory = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.selectedSampleCategory = $$c;
          }
        }
      }
    }), _vm._v("\n          " + _vm._s(tag) + "\n        ")]);
  }), 0), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
    staticClass: "section-title"
  }, [_vm._v("\n        Instruments\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "sample-select"
  }, [_c('div', {
    staticClass: "samples"
  }, _vm._l(_vm.samples, function (sample) {
    return _c('div', {
      key: `sample_${sample.id}`,
      staticClass: "sample",
      class: {
        active: sample.id === _vm.selectedSample
      },
      on: {
        "click": function ($event) {
          return _vm.selectSampleById(sample.id);
        }
      }
    }, [_c('div', {
      staticClass: "sample-name"
    }, [_vm._v("\n              " + _vm._s(sample.name) + "\n            ")]), _vm._v(" "), _c('div', {
      staticClass: "sample-preview"
    }, [_c('i', {
      staticClass: "fas fa-check"
    })])]);
  }), 0)])]), _vm._v(" "), _c('template', {
    slot: "footer"
  }, [_c('button', {
    staticClass: "secondary",
    on: {
      "click": function ($event) {
        return _vm.hideEditSampleModal();
      }
    }
  }, [_vm._v("\n        Cancel\n      ")]), _vm._v(" "), _c('button', {
    staticClass: "primary",
    on: {
      "click": function ($event) {
        return _vm.hideEditSampleModal(true);
      }
    }
  }, [_vm._v("\n        OK\n      ")])])], 2) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Pad.vue?vue&type=template&id=25aba824&

// EXTERNAL MODULE: ./assets/data/pad_config.js
var pad_config = __webpack_require__(36);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pad.vue?vue&type=script&lang=js&

/* harmony default export */ var Padvue_type_script_lang_js_ = ({
  props: {
    project: {
      type: Object,
      default: () => {}
    },
    playing: {
      type: Boolean,
      default: false
    },
    recording: {
      type: Boolean,
      default: false
    },
    contextCurrentTime: {
      type: Number,
      default: -1
    },
    track: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    const isHitted = {};
    for (let i = 0; i < 16; i++) {
      isHitted[i] = false;
    }
    return {
      availableSamples: pad_config["b" /* availableSamples */],
      isHitted,
      editModalVisible: false,
      editSampleMode: false,
      editSampleModalVisible: false,
      editBtnIdx: null,
      clonedTrack: {},
      selectedSample: null,
      selectedSampleCategory: []
    };
  },
  computed: {
    samples() {
      if (this.selectedSampleCategory.length) {
        return this.availableSamples.filter(item => {
          let hasTag = false;
          this.selectedSampleCategory.forEach(tag => {
            if (item.tags.includes(tag)) {
              hasTag = true;
            }
          });
          return hasTag;
        });
      } else {
        return this.availableSamples;
      }
    },
    sampleTags() {
      const tags = this.availableSamples.map(item => item.tags).flat();
      return tags.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []);
    },
    speed() {
      return 60 / this.project.speed;
    },
    measureTime() {
      return this.speed * this.project.beats;
    },
    totalTime() {
      return this.measureTime * this.project.measures;
    },
    currentMeasure() {
      return Math.floor(this.contextCurrentTime % this.totalTime / this.measureTime);
    },
    currentHits() {
      const currentPos = Math.floor(this.contextCurrentTime % this.measureTime / this.measureTime * 100) / 100;
      const currentHits = this.track.hits.filter(item => item.measure === this.currentMeasure && Math.floor(item.pos * 10) === Math.floor(currentPos * 10)).map(item => item.sample);
      return this.playing ? currentHits : [];
    }
  },
  watch: {
    recording(val) {
      if (val) {
        this.editSampleMode = false;
      }
    }
    // selectedSample (val) {
    //   this.$emit('preview', val)
    // }
  },

  mounted() {
    document.addEventListener('keydown', this.onKeyDown);
    document.addEventListener('keyup', this.onKeyUp);
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.onKeyDown);
    document.removeEventListener('keyup', this.onKeyUp);
  },
  methods: {
    hitStart(keyIdx) {
      if (this.editSampleMode) {
        this.editBtnIdx = keyIdx;
        this.showEditSampleModal();
        return;
      }
      this.$emit('hitStart', keyIdx);
      this.isHitted[keyIdx] = true;
    },
    hitEnd(keyIdx) {
      this.$emit('hitEnd', keyIdx);
      this.isHitted[keyIdx] = false;
    },
    // keyboard hendler
    onKeyDown($event) {
      if (this.editModalVisible || this.editSampleMode) {
        return;
      }
      const keyIdx = pad_config["a" /* availableKeys */].findIndex(item => item === $event.key);
      if (keyIdx > -1) {
        this.hitStart(keyIdx);
      }
    },
    onKeyUp($event) {
      if (this.editModalVisible || this.editSampleMode) {
        return;
      }
      const keyIdx = pad_config["a" /* availableKeys */].findIndex(item => item === $event.key);
      if (keyIdx > -1) {
        this.hitEnd(keyIdx);
      }
    },
    // switch edit btn handler
    switchEditSampleMode() {
      this.editSampleMode = !this.editSampleMode;
    },
    // edit modal visible
    showEditModal() {
      this.clonedTrack = JSON.parse(JSON.stringify(this.track));
      this.editModalVisible = true;
      this.editSampleMode = false;
    },
    hideEditModal(save) {
      this.editModalVisible = false;
      if (save) {
        /*eslint-disable */
        this.track.name = this.clonedTrack.name;
        /* eslint-enable */
      }
    },

    // edit sample modal visible
    showEditSampleModal() {
      this.clonedTrack = JSON.parse(JSON.stringify(this.track));
      // this.selectedSample = availableSamples[0].id
      this.selectedSample = this.track.samples[this.editBtnIdx];
      const matchedSample = this.availableSamples.find(item => item.id === this.track.samples[this.editBtnIdx]);
      this.selectedSampleCategory = matchedSample ? matchedSample.tags : [];
      this.editSampleModalVisible = true;
    },
    hideEditSampleModal(save) {
      this.editSampleModalVisible = false;
      if (save) {
        this.clonedTrack.samples[this.editBtnIdx] = this.selectedSample;
        /* eslint-disable */
        this.track.samples = this.clonedTrack.samples;
        /* eslint-enable */
      }
    },

    selectSampleById(sampleId) {
      this.selectedSample = sampleId;
      this.$emit('preview', sampleId);
    }
  }
});
// CONCATENATED MODULE: ./components/Pad.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Padvue_type_script_lang_js_ = (Padvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Pad.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(41)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Padvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "fac0c900"
  
)

/* harmony default export */ var Pad = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {PopupModal: __webpack_require__(29).default})


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Rec.vue?vue&type=template&id=5b70011e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "rec-bar footer-bar"
  }, [_c('style', {
    tag: "component"
  }, [_vm._v("\n    .rec-btn.active {\n    animation: breath " + _vm._s(_vm.recAnimationSpeed) + "s infinite;\n    }\n  ")]), _vm._ssrNode(" " + (_vm.playing || _vm.recording ? "<div" + _vm._ssrClass("progress-bar", {
    recording: _vm.recording
  }) + "><div class=\"progress\"" + _vm._ssrStyle(null, `width: ${_vm.recProgress}%;`, null) + "></div></div>" : "<!---->") + " <div class=\"rec-action\">" + (_vm.mode === 2 ? "<button" + _vm._ssrAttr("disabled", _vm.playing) + " title=\"Rec\"" + _vm._ssrClass("icon-btn rec-btn", {
    active: _vm.recording
  }) + ">" + (!_vm.recCountdownText ? "<i class=\"fas fa-record-vinyl\"></i>" : "<span class=\"countdown-text\">" + _vm._ssrEscape("\n        " + _vm._s(_vm.recCountdownText) + "\n      ") + "</span>") + "</button>" : "<!---->") + " " + (!_vm.playing && !_vm.recording ? "<button title=\"Play\" class=\"icon-btn\"><i class=\"fas fa-play\"></i></button>" : "<!---->") + " " + (_vm.playing || _vm.recording ? "<button title=\"Stop\" class=\"icon-btn\"><i class=\"fas fa-stop\"></i></button>" : "<!---->") + " " + (_vm.mode === 2 ? "<button" + _vm._ssrAttr("disabled", _vm.playing) + " title=\"Clear all\" class=\"icon-btn clean-rec-btn\"><i class=\"fas fa-eraser\"></i></button>" : "<!---->") + "</div> <div class=\"project-info right\"><button" + _vm._ssrAttr("disabled", _vm.playing || _vm.recording) + " class=\"icon-btn\">" + _vm._ssrEscape("\n      " + _vm._s(_vm.project.beats) + " Beats x " + _vm._s(_vm.project.measures) + "\n      Speed\n      " + _vm._s(_vm.project.speed) + "\n      ") + "<i class=\"far fa-edit\"></i></button></div> "), _vm.editModalVisible ? _c('PopupModal', {
    attrs: {
      "title": "Edit Project"
    },
    on: {
      "close": function ($event) {
        return _vm.hideEditModal();
      }
    }
  }, [_c('div', {
    staticClass: "form edit-grid"
  }, [_c('div', {
    staticClass: "form-row"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("\n          Measures\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: _vm.clonedProject.measures,
      expression: "clonedProject.measures",
      modifiers: {
        "number": true
      }
    }],
    attrs: {
      "type": "range",
      "min": "1",
      "max": "100",
      "step": "1"
    },
    domProps: {
      "value": _vm.clonedProject.measures
    },
    on: {
      "__r": function ($event) {
        _vm.$set(_vm.clonedProject, "measures", _vm._n($event.target.value));
      },
      "blur": function ($event) {
        return _vm.$forceUpdate();
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "field-val"
  }, [_vm._v("\n            " + _vm._s(_vm.clonedProject.measures) + "\n          ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-row"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("\n          Speed\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: _vm.clonedProject.speed,
      expression: "clonedProject.speed",
      modifiers: {
        "number": true
      }
    }],
    attrs: {
      "type": "range",
      "min": "50",
      "max": "400",
      "step": "1"
    },
    domProps: {
      "value": _vm.clonedProject.speed
    },
    on: {
      "__r": function ($event) {
        _vm.$set(_vm.clonedProject, "speed", _vm._n($event.target.value));
      },
      "blur": function ($event) {
        return _vm.$forceUpdate();
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "field-val"
  }, [_vm._v("\n            " + _vm._s(_vm.clonedProject.speed) + "\n          ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-row"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("\n          Beats\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: _vm.clonedProject.beats,
      expression: "clonedProject.beats",
      modifiers: {
        "number": true
      }
    }],
    attrs: {
      "type": "range",
      "min": "2",
      "max": "7",
      "step": "1"
    },
    domProps: {
      "value": _vm.clonedProject.beats
    },
    on: {
      "__r": function ($event) {
        _vm.$set(_vm.clonedProject, "beats", _vm._n($event.target.value));
      },
      "blur": function ($event) {
        return _vm.$forceUpdate();
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "field-val"
  }, [_vm._v("\n            " + _vm._s(_vm.clonedProject.beats) + "\n          ")])])])]), _vm._v(" "), _c('template', {
    slot: "footer"
  }, [_c('button', {
    staticClass: "secondary",
    on: {
      "click": function ($event) {
        return _vm.hideEditModal();
      }
    }
  }, [_vm._v("\n        Cancel\n      ")]), _vm._v(" "), _c('button', {
    staticClass: "primary",
    on: {
      "click": function ($event) {
        return _vm.hideEditModal(true);
      }
    }
  }, [_vm._v("\n        OK\n      ")])])], 2) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Rec.vue?vue&type=template&id=5b70011e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Rec.vue?vue&type=script&lang=js&
/* harmony default export */ var Recvue_type_script_lang_js_ = ({
  props: {
    mode: {
      type: Number,
      default: 0
    },
    playing: {
      type: Boolean,
      default: false
    },
    recording: {
      type: Boolean,
      default: false
    },
    project: {
      type: Object,
      default: () => {}
    },
    recCountdownText: {
      type: Number,
      default: 0
    },
    contextCurrentTime: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      editModalVisible: false,
      clonedProject: {}
    };
  },
  computed: {
    tracks() {
      return this.project.tracks;
    },
    recAnimationSpeed() {
      return 60 / this.project.speed;
    },
    recProgress() {
      const speed = 60 / this.project.speed;
      const totalTime = speed * this.project.beats * this.project.measures;
      return this.contextCurrentTime % totalTime / totalTime * 100;
    }
  },
  methods: {
    showEditModal() {
      this.clonedProject = JSON.parse(JSON.stringify(this.project));
      this.editModalVisible = true;
    },
    hideEditModal(save) {
      this.editModalVisible = false;
      if (save) {
        this.$emit('update', this.clonedProject);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/Rec.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Recvue_type_script_lang_js_ = (Recvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Rec.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(43)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Recvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "199d4606"
  
)

/* harmony default export */ var Rec = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {PopupModal: __webpack_require__(29).default})


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4fc48e8a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4fc48e8a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4fc48e8a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4fc48e8a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4fc48e8a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{--white:#f0f0f0;--black:#111;--dark-gray:#333;--gray:#666;--light-gray:#999;--red:#d11;--light-red:#f11;--green:#6ca;--primary:var(--green);--secondary:var(--light-gray);--warning:var(--light-red);--bg-color:var(--black);--font-color:var(--white);--grid-line-color:var(--dark-gray);--overlay-bg-color:rgba(0,0,0,.5);--modal-bg-color:var(--dark-gray);--modal-font-color:var(--light-gray);--modal-border-color:hsla(0,0%,100%,.1);--modal-border-radius:5px;--modal-header-border-color:var(--gray);--modal-footer-border-color:var(--gray);--modal-separator-color:var(--gray);--button-bg-color:var(--white);--button-font-color:var(--dark-gray);--primary-button-bg-color:var(--primary);--primary-button-border-color:var(--primary);--primary-button-font-color:var(--white);--secondary-button-bg-color:initial;--secondary-button-border-color:var(--secondary);--secondary-button-font-color:var(--secondary);--button-border-radius:5px;--icon-button-font-color:var(--white);--transition-sec:0.3s;--track-border-color:var(--gray);--track-bg-color:#161616;--pad-button-color--1:#a7e6d0;--pad-button-color--2:#deedc1;--pad-button-color--3:#fed4b8;--pad-button-color--4:#fdaba2;--pad-button-color--5:#fc8004;--pad-button-color--6:#f59d54;--pad-button-color--7:#ef8152;--pad-button-color--8:#fd8b93;--pad-button-color--9:#fda604;--pad-button-color--10:#fdcb00;--pad-button-color--11:#fee503;--pad-button-color--12:#faff02;--pad-button-color--13:#395a7a;--pad-button-color--14:#3d9a83;--pad-button-color--15:#e0e58e;--pad-button-color--16:#a0d072;background:#111;background:var(--bg-color);font-family:sans-serif}body{margin:75px 0 100px}.__dtb{background:#111;background:var(--bg-color);color:#f0f0f0;color:var(--font-color);-webkit-user-select:none;-moz-user-select:none;user-select:none}.__dtb label{display:inline-block;margin-right:15px}.__dtb hr{background:#666;background:var(--gray);border:0;height:1px;margin:20px 0}.__dtb button,.__dtb input[type=checkbox],.__dtb input[type=text],.__dtb select{-webkit-appearance:none;outline:none}.__dtb input[type=text],.__dtb select{background:#666;background:var(--gray);border:0;border-radius:5px;border-radius:var(--button-border-radius);box-sizing:border-box;color:#f0f0f0;color:var(--white);display:block;font-size:16px;padding:.5em 1em;width:100%}.__dtb select{background:#666 url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 140 140' width='12' height='12' xmlns='http://www.w3.org/2000/svg' fill='%23bfa78a'><path d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z'/></svg>\") no-repeat;background:var(--gray) url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 140 140' width='12' height='12' xmlns='http://www.w3.org/2000/svg' fill='%23bfa78a'><path d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z'/></svg>\") no-repeat;background-position:right 15px center}.__dtb button,.__dtb input[type=checkbox]{cursor:pointer}.__dtb button[disabled],.__dtb input[type=checkbox][disabled]{cursor:not-allowed}.__dtb button{background:#f0f0f0;background:var(--button-bg-color);border:0;border-radius:100px;color:#333;color:var(--button-font-color);padding:.2em 1em}.__dtb button[disabled]{opacity:.5}.__dtb button.icon-btn{background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:initial;border-radius:0;color:#f0f0f0;color:var(--icon-button-font-color);padding:0}.__dtb button.icon-btn i{font-size:1.2em;margin:0 .5em}.__dtb input[type=checkbox]{align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:1px solid #666;border:1px solid var(--gray);border-radius:13px;cursor:pointer;display:inline-flex;justify-content:center;margin-left:0;max-height:26px;max-width:50px;min-height:26px;min-width:50px;transition:.3s;transition:var(--transition-sec);vertical-align:middle}.__dtb input[type=checkbox]:before{background:#666;background:var(--gray);border-radius:10px;color:transparent;content:\".\";display:block;height:20px;left:-12px;position:relative;text-align:center;transition:.3s;transition:var(--transition-sec);width:20px}.__dtb input[type=checkbox]:checked:before{background:#6ca;background:var(--primary);left:12px}.__dtb input[type=range]{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-bottom:1px solid #999;border-bottom:1px solid var(--light-gray);box-sizing:border-box;display:inline-block;height:1px;vertical-align:middle;width:100%}.__dtb input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;background:#fff;border:1px solid #999;border:1px solid var(--light-gray);border-radius:5px;border-radius:var(--button-border-radius);cursor:pointer;max-height:20px;max-width:20px;min-height:20px;min-width:20px}.__dtb input[type=range]::-moz-range-thumb{-moz-appearance:none;appearance:none;background:hsla(0,0%,100%,.8);border:1px solid #999;border:1px solid var(--light-gray);border-radius:5px;border-radius:var(--button-border-radius);cursor:pointer;max-height:20px;max-width:20px;min-height:20px;min-width:20px}.__dtb .right{text-align:right}.__dtb .center{text-align:center}.__dtb .footer-bar,.__dtb .header-bar{grid-gap:5px;align-items:center;background:#111;background:var(--bg-color);border-bottom:1px solid #333;border-bottom:1px solid var(--grid-line-color);display:grid;left:0;padding:25px 10px;position:fixed;right:0;top:0;z-index:1}.__dtb .footer-bar.pad-info,.__dtb .footer-bar.project-info,.__dtb .footer-bar.project-list,.__dtb .header-bar.pad-info,.__dtb .header-bar.project-info,.__dtb .header-bar.project-list{grid-template-columns:30% 1fr 30%}.__dtb .footer-bar.pad-info button,.__dtb .footer-bar.pad-info>div,.__dtb .footer-bar.project-info button,.__dtb .footer-bar.project-info>div,.__dtb .footer-bar.project-list button,.__dtb .footer-bar.project-list>div,.__dtb .header-bar.pad-info button,.__dtb .header-bar.pad-info>div,.__dtb .header-bar.project-info button,.__dtb .header-bar.project-info>div,.__dtb .header-bar.project-list button,.__dtb .header-bar.project-list>div{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.__dtb .footer-bar.rec-bar,.__dtb .header-bar.rec-bar{grid-template-columns:1fr auto}.__dtb .footer-bar{border-bottom:initial;border-top:1px solid #333;border-top:1px solid var(--grid-line-color);bottom:0;position:fixed;top:auto}.__dtb .form .form-row{align-items:center;display:grid;grid-template-columns:150px 1fr;padding:5px 0}.__dtb .form .field{grid-gap:25px;align-items:center;display:grid;grid-template-columns:1fr auto}.__dtb .form .field-val{min-width:50px}.__dtb .main{padding:10px}.__dtb .track-preview{grid-gap:3px;display:grid;grid-auto-flow:column}.__dtb .track-preview .measure{background:hsla(0,0%,100%,.067);flex:1;padding:3px;transition:background .3s}.__dtb .track-preview .measure.active{background:hsla(0,0%,100%,.2)}.__dtb .track-preview .sample{background:rgba(0,0,0,.4);height:2px;margin-bottom:1px;position:relative}.__dtb .track-preview .sample:first-child .hit{background:#a7e6d0;background:var(--pad-button-color--1)}.__dtb .track-preview .sample:nth-child(2) .hit{background:#deedc1;background:var(--pad-button-color--2)}.__dtb .track-preview .sample:nth-child(3) .hit{background:#fed4b8;background:var(--pad-button-color--3)}.__dtb .track-preview .sample:nth-child(4) .hit{background:#fdaba2;background:var(--pad-button-color--4)}.__dtb .track-preview .sample:nth-child(5) .hit{background:#fc8004;background:var(--pad-button-color--5)}.__dtb .track-preview .sample:nth-child(6) .hit{background:#f59d54;background:var(--pad-button-color--6)}.__dtb .track-preview .sample:nth-child(7) .hit{background:#ef8152;background:var(--pad-button-color--7)}.__dtb .track-preview .sample:nth-child(8) .hit{background:#fd8b93;background:var(--pad-button-color--8)}.__dtb .track-preview .sample:nth-child(9) .hit{background:#fda604;background:var(--pad-button-color--9)}.__dtb .track-preview .sample:nth-child(10) .hit{background:#fdcb00;background:var(--pad-button-color--10)}.__dtb .track-preview .sample:nth-child(11) .hit{background:#fee503;background:var(--pad-button-color--11)}.__dtb .track-preview .sample:nth-child(12) .hit{background:#faff02;background:var(--pad-button-color--12)}.__dtb .track-preview .sample:nth-child(13) .hit{background:#395a7a;background:var(--pad-button-color--13)}.__dtb .track-preview .sample:nth-child(14) .hit{background:#3d9a83;background:var(--pad-button-color--14)}.__dtb .track-preview .sample:nth-child(15) .hit{background:#e0e58e;background:var(--pad-button-color--15)}.__dtb .track-preview .sample:nth-child(16) .hit{background:#a0d072;background:var(--pad-button-color--16)}.__dtb .track-preview .hit{background:red;border-radius:100px;height:2px;position:absolute;top:0;width:5px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=4fc48e8a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('div', {
    staticClass: "__dtb"
  }, [_vm.mode === 0 ? _c('ProjectList', {
    attrs: {
      "projects": _vm.projects
    },
    on: {
      "showProject": function ($event) {
        return _vm.showProject($event);
      },
      "back": function ($event) {
        return _vm.showProjects();
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm.mode === 1 ? _c('ProjectTracks', {
    attrs: {
      "project": _vm.project,
      "playing": _vm.playing,
      "recording": _vm.recording,
      "contextCurrentTime": _vm.contextCurrentTime
    },
    on: {
      "update": function ($event) {
        return _vm.updateProject($event);
      },
      "showPad": function ($event) {
        return _vm.showPad($event);
      },
      "back": function ($event) {
        return _vm.showProjects();
      },
      "removeHits": function ($event) {
        return _vm.removeHits();
      },
      "muteTrack": function ($event) {
        return _vm.muteTrack($event);
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm.mode === 2 ? _c('Pad', {
    attrs: {
      "project": _vm.project,
      "track": _vm.track,
      "playing": _vm.playing,
      "recording": _vm.recording,
      "contextCurrentTime": _vm.contextCurrentTime
    },
    on: {
      "hitStart": function ($event) {
        return _vm.hitStart($event);
      },
      "hitEnd": function ($event) {
        return _vm.hitEnd($event);
      },
      "close": function ($event) {
        return _vm.showProject();
      },
      "preview": function ($event) {
        return _vm.playSampleById($event);
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm.mode === 1 || _vm.mode === 2 ? _c('Rec', {
    attrs: {
      "mode": _vm.mode,
      "project": _vm.project,
      "playing": _vm.playing,
      "recording": _vm.recording,
      "recCountdownText": _vm.recCountdownText,
      "contextCurrentTime": _vm.contextCurrentTime
    },
    on: {
      "play": function ($event) {
        return _vm.play();
      },
      "stop": function ($event) {
        return _vm.stop();
      },
      "rec": function ($event) {
        return _vm.rec();
      },
      "update": function ($event) {
        return _vm.updateProject($event);
      },
      "removeHits": function ($event) {
        return _vm.removeHits();
      }
    }
  }) : _vm._e()], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=4fc48e8a&

// EXTERNAL MODULE: ./assets/data/pad_config.js
var pad_config = __webpack_require__(36);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  data() {
    const currentProjectIdx = 0;
    return {
      // mode: 0 => track mode, 1 => pad mode
      mode: 0,
      projects: [],
      currentProjectIdx,
      currentTrackIdx: 0,
      playing: false,
      recording: false,
      context: null,
      analyser: null,
      gainNode: null,
      contextCurrentTime: 0,
      // hittingSources: {}

      prewriteInterval: null,
      prewriteTime: 0,
      recCountdownText: 0,
      recCountdownPlayInterval: null,
      minusRecCountdownTextInterval: null
    };
  },
  head() {
    return {
      script: [{
        src: 'https://kit.fontawesome.com/89064da233.js'
      }]
    };
  },
  computed: {
    project() {
      return this.projects[this.currentProjectIdx];
    },
    tracks() {
      var _this$project;
      return ((_this$project = this.project) === null || _this$project === void 0 ? void 0 : _this$project.tracks) || [];
    },
    track() {
      return this.tracks[this.currentTrackIdx];
    }
  },
  watch: {
    projects: {
      deep: true,
      handler(val) {
        window.localStorage.setItem('projects', JSON.stringify(this.projects));
      }
    },
    playing: {
      immediate: true,
      handler(val) {
        if (val) {
          window.requestAnimationFrame(this.updateContextCurrentTime);
        }
      }
    }
  },
  async mounted() {
    this.projects = JSON.parse(window.localStorage.getItem('projects')) || JSON.parse(JSON.stringify(pad_config["d" /* defaultProjects */]));
    // this.projects = JSON.parse(JSON.stringify(defaultProjects))
    this.initAudio();
    await this.loadSamples();
  },
  methods: {
    // 這邊ios會在跳離app之後出現問題
    initAudio() {
      if (this.context) {
        this.context.suspend();
      }
      this.prewriteTime = 0;

      // audio api
      this.context = new (window.AudioContext || window.webkitAudioContext)();
      this.analyser = this.context.createAnalyser();
      this.gainNode = this.context.createGain();
      this.analyser.connect(this.context.destination);
      this.gainNode.gain.value = 0.25;
      this.gainNode.connect(this.analyser);
    },
    // 載入 project 需要的 samples
    async loadSamples() {
      // this.tracks
      for (const track of this.tracks) {
        for (const sampleId of track.samples) {
          if (sampleId) {
            await this.loadSample(sampleId);
          }
        }
      }
    },
    // 載入個別 sample
    loadSample(sampleId) {
      return new Promise((resolve, reject) => {
        const sample = pad_config["b" /* availableSamples */].find(item => item.id === sampleId);

        // 不重複載入
        if (sample && sample.body) {
          resolve(true);
          return;
        }
        const path = sample === null || sample === void 0 ? void 0 : sample.source;
        if (path) {
          // window.fetch(path)
          //   .then(response => response.arrayBuffer())
          //   .then(arrayBuffer => this.context.decodeAudioData(arrayBuffer))
          //   .then(audioBuffer => {
          //     sample['audioBuffer'] = audioBuffer
          //     resolve(true)
          //   })
          //   .catch(err => {
          //     reject(err)
          //   })

          // safari support
          window.fetch(path).then(response => response.arrayBuffer()).then(arrayBuffer => {
            this.context.decodeAudioData(arrayBuffer, audioBuffer => {
              sample.audioBuffer = audioBuffer;
              resolve(true);
            }, err => {
              reject(err);
            });
          }).catch(err => {
            reject(err);
          });
        } else {
          reject(new Error('no such sample'));
        }
      });
    },
    hitStart(keyIdx) {
      const sample = this.getSampleByKeyIdx(keyIdx);
      if (!sample) {
        return;
      }
      this.playSample(sample);
      if (this.recording) {
        const currentTime = this.contextCurrentTime;
        const speed = 60 / this.project.speed;
        const countdownTime = speed * this.project.beats;
        const measureTime = speed * this.project.beats;
        const numMeasures = Math.floor(currentTime / measureTime) % this.project.measures;
        const pos = currentTime % measureTime / measureTime;
        this.track.hits.push({
          sample: keyIdx,
          measure: numMeasures,
          pos
        });

        // 超過totalTime一半的話是沒有辦法被prewrite寫入的時間，因此需要手動補上
        // 雖然不是很好的解法，但目前看起來只能先這樣
        const totalTime = speed * this.project.beats * this.project.measures;
        if (currentTime % totalTime > totalTime / 2) {
          // this.playSampleById(sample.id, currentTime + totalTime)
          this.playSampleById(sample.id, currentTime + totalTime + countdownTime);
        }
      }

      // this.hittingSources[keyIdx] = source
    },

    hitEnd(keyIdx) {
      // 先不要放開就停的功能好了，效果不好
      // if (this.hittingSources[keyIdx]) {
      //   this.hittingSources[keyIdx].stop()
      //   delete this.hittingSources[keyIdx]
      // }
    },
    getSampleByKeyIdx(keyIdx) {
      const sampleId = this.track.samples[keyIdx];
      return pad_config["b" /* availableSamples */].find(item => item.id === sampleId);
    },
    playSampleById(sampleId, time) {
      if (sampleId) {
        const sample = pad_config["b" /* availableSamples */].find(item => item.id === sampleId);
        this.playSample(sample, time);
      }
    },
    async playSample(sample, time) {
      if (!sample.audioBuffer) {
        await this.loadSample(sample.id);
      }
      const audioBuffer = sample.audioBuffer;
      const source = this.context.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(this.context.destination);
      source.start(time);
    },
    showProjects() {
      this.mode = 0;
    },
    showProject(projectIdx) {
      this.mode = 1;
      if (!isNaN(projectIdx)) {
        this.currentProjectIdx = projectIdx;
      }
    },
    showPad(trackIdx) {
      this.currentTrackIdx = trackIdx;
      this.mode = 2;
    },
    updateProject(project) {
      this.projects[this.currentProjectIdx].name = project.name;
      this.projects[this.currentProjectIdx].measures = project.measures;
      this.projects[this.currentProjectIdx].speed = project.speed;
      this.projects[this.currentProjectIdx].beats = project.beats;
    },
    play() {
      // reset context to get current currentTime
      if (!this.recording) {
        this.initAudio();
      }
      // this.initAudio()

      this.playing = true;
      this.prewrite(true);
    },
    stop() {
      this.recording = this.playing = false;
      clearInterval(this.prewriteInterval);
      clearInterval(this.recCountdownPlayInterval);
      clearInterval(this.minusRecCountdownTextInterval);
      this.initAudio();
      this.recCountdownText = 0;
    },
    rec() {
      this.initAudio();
      this.countdownBeep();
      this.recording = true;
      // this.play()
    },

    updateContextCurrentTime() {
      if (this.recording) {
        const speed = 60 / this.project.speed;
        const recCountDownTime = speed * this.project.beats;
        this.contextCurrentTime = this.context.currentTime - recCountDownTime;
      } else {
        this.contextCurrentTime = this.context.currentTime;
      }
      if (this.playing) {
        window.requestAnimationFrame(this.updateContextCurrentTime);
      }
    },
    countdownBeep() {
      const speed = 60 / this.project.speed;
      const totalTime = speed * this.project.beats;

      // this.prewriteTime = totalTime

      // recording: write metronome with countdown beats
      const count = this.project.beats * this.project.measures;
      let i = 0;
      while (i < count) {
        this.beep(speed * i, i);
        i++;
      }
      this.recCountdownText = this.project.beats;
      this.minusRecCountdownText();

      // countdown ended, and start play
      this.recCountdownPlayInterval = setTimeout(() => {
        // this.recording = true
        this.play();
      }, totalTime * 1000);
    },
    minusRecCountdownText() {
      const speed = 60 / this.project.speed;
      this.minusRecCountdownTextInterval = setTimeout(() => {
        this.recCountdownText--;
        if (this.recCountdownText) {
          this.minusRecCountdownText();
        }
      }, speed * 1000);
    },
    prewrite(isFirstTime) {
      // 預先寫入整個 project tracks一次，再用setTimeout在演奏到一半時寫入後續
      // speed => 120 = 1 beat per 0.5s
      const speed = 60 / this.project.speed;
      // const countdownTime = speed * this.project.beats

      const totalTime = speed * this.project.beats * this.project.measures;
      const recCountDownTime = speed * this.project.beats;

      // recording: write metronome
      if (this.recording) {
        const count = this.project.beats * this.project.measures;
        let i = 0;
        while (i < count) {
          this.beep(speed * i + this.prewriteTime, i);
          i++;
        }
      }

      // write tracks
      this.tracks.filter(track => !track.muted).forEach(track => {
        const sampleIds = track.samples;
        track.hits.forEach(hit => {
          const sampleId = sampleIds[hit.sample];
          const time = this.prewriteTime + hit.measure * speed * this.project.beats + hit.pos * speed * this.project.beats + (this.recording ? recCountDownTime : 0);
          this.playSampleById(sampleId, time);
        });
      });
      this.prewriteTime += totalTime;
      const nextPrewriteTime = totalTime / (isFirstTime ? 2 : 1);
      this.prewriteInterval = setTimeout(() => {
        this.prewrite();
      }, nextPrewriteTime * 1000);
    },
    beep(startTime, idx) {
      const duration = 0.05;
      const i = idx % this.project.beats;
      const oscillator = this.context.createOscillator();
      oscillator.type = pad_config["c" /* beepSample */][i].type;
      oscillator.frequency.value = pad_config["c" /* beepSample */][i].freq;
      oscillator.connect(this.gainNode);
      oscillator.start(startTime);
      oscillator.stop(startTime + duration);
    },
    async removeHits() {
      if (await this.$confirm('Are you sure?')) {
        this.track.hits = [];
      }
    },
    muteTrack(idx) {
      this.tracks[idx].muted = !this.tracks[idx].muted;
      this.tracks.push({});
      this.tracks.pop();
    }
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(50)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2cd0d0b1"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ProjectList: __webpack_require__(46).default,ProjectTracks: __webpack_require__(47).default,Pad: __webpack_require__(48).default,Rec: __webpack_require__(49).default})


/***/ })
]);;
//# sourceMappingURL=index.js.map