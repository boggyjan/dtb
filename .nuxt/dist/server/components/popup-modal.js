exports.ids = [2];
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


/***/ })

};;
//# sourceMappingURL=popup-modal.js.map