exports.ids = [3];
exports.modules = {

/***/ 32:
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

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_style_index_0_id_5075ee66_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_style_index_0_id_5075ee66_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_style_index_0_id_5075ee66_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_style_index_0_id_5075ee66_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_style_index_0_id_5075ee66_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 38:
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

/***/ 46:
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

/***/ })

};;
//# sourceMappingURL=project-list.js.map