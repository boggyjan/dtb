(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{300:function(t,o,e){var content=e(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(111).default)("4bb7bf3e",content,!1,{sourceMap:!1})},301:function(t,o,e){"use strict";e.r(o);var r={props:{modalClass:{type:String,default:""},title:{type:String,default:""}}},n=(e(302),e(35)),component=Object(n.a)(r,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"popupModalWrapper"},[o("div",{staticClass:"popupModal",class:t.modalClass},[o("div",{staticClass:"popupModalHeader"},[t._v("\n      "+t._s(t.title)+"\n      "),o("div",{staticClass:"close-btn"},[o("i",{staticClass:"fas fa-times",on:{click:function(o){return t.$emit("close")}}})])]),t._v(" "),o("div",{staticClass:"popupModalBody"},[t._t("default")],2),t._v(" "),o("div",{staticClass:"popupModalFooter"},[t._t("footer")],2)]),t._v(" "),o("style",{tag:"component"},[t._v("\n    body {\n    overflow: hidden;\n    }\n  ")])],1)}),[],!1,null,null,null);o.default=component.exports},302:function(t,o,e){"use strict";e(300)},303:function(t,o,e){var r=e(110)((function(i){return i[1]}));r.push([t.i,".popupModalWrapper{align-items:center;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:var(--overlay-bg-color);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:2000}.popupModal{background:var(--modal-bg-color);border:1px solid var(--modal-border-color);border-radius:var(--modal-border-radius);box-shadow:0 15px 15px rgba(0,0,0,.1);box-sizing:border-box;color:var(--modal-font-color);display:flex;flex-direction:column;max-height:calc(100vh - 120px);max-width:90%;min-width:300px;padding:0 20px;position:relative;width:100%}@media(max-width:767px){.popupModal{animation:modalSlideUp .3s}}.popupModalHeader{border-bottom:1px solid var(--modal-header-border-color);font-weight:700;padding:20px;position:relative;text-align:center}.popupModalHeader .close-btn{cursor:pointer;position:absolute;right:2px;top:20px;transition:opacity .3s}.popupModalHeader .close-btn:hover{opacity:.7}.popupModalBody{flex:1;overflow-y:auto;padding:20px 0}.popupModalFooter{border-top:1px solid var(--modal-header-border-color);padding:20px;position:relative;text-align:center}.popupModalFooter button{-webkit-appearance:none;background:#eee;border:1px solid #eee;border-radius:var(--button-border-radius);cursor:pointer;max-width:300px;outline:none;padding:10px 30px}.popupModalFooter button:hover{filter:brightness(.95)}.popupModalFooter button:active{filter:brightness(.9)}.popupModalFooter button.primary{background:var(--primary-button-bg-color);border:1px solid var(--primary-button-border-color);color:var(--primary-button-font-color);font-weight:700}.popupModalFooter button.secondary{background:var(--secondary-button-bg-color);border:1px solid var(--secondary-button-border-color);color:var(--secondary-button-font-color)}@keyframes modalSlideUp{0%{top:500px}to{top:0}}",""]),r.locals={},t.exports=r},305:function(t,o,e){var content=e(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(111).default)("4a160787",content,!1,{sourceMap:!1})},309:function(t,o,e){"use strict";e(305)},310:function(t,o,e){var r=e(110)((function(i){return i[1]}));r.push([t.i,".tracks .no-tracks,.tracks .track{margin:10px 0;padding:10px}.tracks .track{grid-gap:10px;align-items:center;background:var(--track-bg-color);border:1px solid var(--track-border-color);border-radius:var(--button-border-radius);display:grid;grid-template-columns:80px 25px 1fr auto;transition:background .3s,border .3s}.tracks .track .track-name{word-break:break-all}.tracks .track .track-mute .muted{color:var(--primary)}.tracks .track .track-action button{padding:.8em .5em!important}",""]),r.locals={},t.exports=r},317:function(t,o,e){"use strict";e.r(o);e(36),e(82),e(44),e(14);var r=e(10),n=(e(43),e(208),e(209),{props:{project:{type:Object,default:function(){}},playing:{type:Boolean,default:!1},recording:{type:Boolean,default:!1},contextCurrentTime:{type:Number,default:0}},data:function(){return{editModalVisible:!1,clonedProject:{}}},computed:{tracks:function(){return this.project.tracks},currentMeasure:function(){var t=60/this.project.speed,o=t*this.project.beats,e=t*this.project.beats*this.project.measures;return this.playing?Math.floor(this.contextCurrentTime%e/o):-1}},methods:{showEditModal:function(){this.clonedProject=JSON.parse(JSON.stringify(this.project)),this.editModalVisible=!0},hideEditModal:function(t){this.editModalVisible=!1,t&&this.$emit("update",this.clonedProject)},addTrack:function(){this.project.tracks.push({name:"New Track",samples:[],hits:[]})},removeTrack:function(t){var o=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.$confirm("Are you sure?");case 2:if(!e.sent){e.next=4;break}o.project.tracks.splice(t,1);case 4:case"end":return e.stop()}}),e)})))()}}}),c=(e(309),e(35)),component=Object(c.a)(n,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"tracks-mode"},[o("div",{staticClass:"header-bar project-info"},[o("div",{staticClass:"project-back"},[o("button",{staticClass:"icon-btn",attrs:{disabled:t.playing||t.recording},on:{click:function(o){return t.$emit("back")}}},[o("i",{staticClass:"fas fa-chevron-left"}),t._v("\n        Projects\n      ")])]),t._v(" "),o("div",{staticClass:"project-name center"},[o("span",{on:{click:function(o){return t.showEditModal()}}},[t._v(t._s(t.project.name))])]),t._v(" "),o("div",{staticClass:"add-track right"},[o("button",{attrs:{disabled:t.playing||t.recording},on:{click:function(o){return t.addTrack()}}},[o("i",{staticClass:"fas fa-plus"})])])]),t._v(" "),o("div",{staticClass:"main"},[o("div",{staticClass:"tracks"},[t.tracks.length?t._e():o("div",{staticClass:"no-tracks center"},[t._v("\n        No Tracks\n      ")]),t._v(" "),t._l(t.tracks,(function(track,e){return o("div",{key:"track_".concat(e),staticClass:"track",on:{click:function(o){return t.$emit("showPad",e)}}},[o("div",{staticClass:"track-name"},[t._v("\n          "+t._s(track.name)+"\n        ")]),t._v(" "),o("div",{staticClass:"track-mute"},[o("button",{staticClass:"icon-btn",class:{muted:track.muted},attrs:{disabled:t.playing,title:"mute"},on:{click:function(o){return o.preventDefault(),o.stopPropagation(),t.$emit("muteTrack",e)}}},[track.muted?o("i",{staticClass:"fas fa-volume-mute"}):o("i",{staticClass:"fas fa-volume-down"})])]),t._v(" "),o("div",{staticClass:"track-preview"},t._l(t.project.measures,(function(e,r){return o("div",{key:"measure_".concat(r),staticClass:"measure",class:{active:r===t.currentMeasure}},t._l(track.samples,(function(n,c){return o("div",{key:"sample_".concat(r,"_").concat(c),staticClass:"sample"},t._l(track.hits.filter((function(t){return t.sample===c&&t.measure===e-1})),(function(t,e){return o("div",{key:"hit_".concat(r,"_").concat(c,"_").concat(e),staticClass:"hit",style:"left: ".concat(100*t.pos,"%")})})),0)})),0)})),0),t._v(" "),o("div",{staticClass:"track-action"},[o("button",{staticClass:"icon-btn",attrs:{disabled:t.playing,title:"Remove"},on:{click:function(o){return o.preventDefault(),o.stopPropagation(),t.removeTrack(e)}}},[o("i",{staticClass:"far fa-trash-alt"})]),t._v(" "),o("button",{staticClass:"icon-btn clean-rec-btn",attrs:{disabled:t.playing,title:"Clear all"},on:{click:function(o){return o.preventDefault(),o.stopPropagation(),t.$emit("removeHits")}}},[o("i",{staticClass:"fas fa-eraser"})])])])}))],2)]),t._v(" "),t.editModalVisible?o("PopupModal",{attrs:{title:"Edit Project"},on:{close:function(o){return t.hideEditModal()}}},[o("div",{staticClass:"form edit-grid"},[o("div",{staticClass:"form-row"},[o("div",{staticClass:"label"},[t._v("\n          Project Name\n        ")]),t._v(" "),o("div",{staticClass:"field"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.clonedProject.name,expression:"clonedProject.name"}],attrs:{type:"text"},domProps:{value:t.clonedProject.name},on:{input:function(o){o.target.composing||t.$set(t.clonedProject,"name",o.target.value)}}})])])]),t._v(" "),o("template",{slot:"footer"},[o("button",{staticClass:"secondary",on:{click:function(o){return t.hideEditModal()}}},[t._v("\n        Cancel\n      ")]),t._v(" "),o("button",{staticClass:"primary",on:{click:function(o){return t.hideEditModal(!0)}}},[t._v("\n        OK\n      ")])])],2):t._e()],1)}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{PopupModal:e(301).default})}}]);