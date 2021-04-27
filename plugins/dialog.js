import Vue from 'vue'
import Dialog from '../components/Dialog.vue'

const dialogPlugin = {
  install (Vue) {
    Vue.component('Dialog', Dialog)
  }
}

export default () => {
  Vue.use(dialogPlugin)
}
