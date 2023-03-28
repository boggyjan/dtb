exports.ids = [5,2];
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

/***/ 35:
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

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rec_vue_vue_type_style_index_0_id_5b70011e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rec_vue_vue_type_style_index_0_id_5b70011e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rec_vue_vue_type_style_index_0_id_5b70011e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rec_vue_vue_type_style_index_0_id_5b70011e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Rec_vue_vue_type_style_index_0_id_5b70011e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 44:
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

/***/ 49:
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


/***/ })

};;
//# sourceMappingURL=rec.js.map