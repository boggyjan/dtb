exports.ids = [1,2];
exports.modules = {

/***/ 28:
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

/***/ 29:
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

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopupModal_vue_vue_type_style_index_0_id_20a66f94_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopupModal_vue_vue_type_style_index_0_id_20a66f94_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopupModal_vue_vue_type_style_index_0_id_20a66f94_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopupModal_vue_vue_type_style_index_0_id_20a66f94_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopupModal_vue_vue_type_style_index_0_id_20a66f94_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 31:
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

/***/ 34:
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

/***/ 36:
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

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pad_vue_vue_type_style_index_0_id_25aba824_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pad_vue_vue_type_style_index_0_id_25aba824_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pad_vue_vue_type_style_index_0_id_25aba824_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pad_vue_vue_type_style_index_0_id_25aba824_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pad_vue_vue_type_style_index_0_id_25aba824_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 42:
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

/***/ 48:
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


/***/ })

};;
//# sourceMappingURL=pad.js.map