<template>
  <div v-if="visible" class="dialog">
    <div class="dialog__body">
      <div class="dialog__text">
        {{ text }}
      </div>
      <div class="dialog__action">
        <button
          v-if="type === DIALOG_TYPE.CONFIRM"
          ref="cancelBtn"
          class="dialog__btn dialog__btn--secondary"
        >
          {{ dialogCancelLabel }}
        </button>
        <button
          ref="okBtn"
          class="dialog__btn dialog__btn--primary"
        >
          {{ dialogOkLabel }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
//
const DIALOG_TYPE = {
  ALERT: 'alert',
  CONFIRM: 'confirm'
}
const DIALOG_STRING = {
  DIALOG_CANCEL: 'Cancel',
  DIALOG_OK: 'OK'
}
//
export default {
  props: {
    okLabel: {
      type: String,
      default: ''
    },
    cancelLabel: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      visible: false,
      text: '',
      type: '',
      //
      DIALOG_TYPE,
      DIALOG_STRING
    }
  },
  computed: {
    dialogCancelLabel () {
      return this.cancelLabel || DIALOG_STRING.DIALOG_CANCEL
    },
    dialogOkLabel () {
      return this.okLabel || DIALOG_STRING.DIALOG_OK
    }
  },
  created () {
    Vue.prototype.$alert = Vuex.Store.prototype.$alert = this.alert
    Vue.prototype.$confirm = Vuex.Store.prototype.$confirm = this.confirm
  },
  mounted () {
    if (window) {
      window.addEventListener('popstate', this.hide)
    }
  },
  beforeDestroy () {
    if (window) {
      window.removeEventListener('popstate', this.hide)
    }
  },
  methods: {
    alert (text) {
      return new Promise((resolve, reject) => {
        this.visible = true
        this.text = text
        this.type = this.DIALOG_TYPE.ALERT
        this.$nextTick(() => {
          const onOK = () => {
            this.$refs.okBtn.removeEventListener('click', onOK)
            this.visible = false
            resolve(true)
          }
          this.$refs.okBtn.addEventListener('click', onOK)
        })
      })
    },
    confirm (text) {
      return new Promise((resolve, reject) => {
        this.visible = true
        this.text = text
        this.type = this.DIALOG_TYPE.CONFIRM
        this.$nextTick(() => {
          const onOK = () => {
            this.$refs.okBtn.removeEventListener('click', onOK)
            this.visible = false
            resolve(true)
          }
          this.$refs.okBtn.addEventListener('click', onOK)
          const onCancel = () => {
            this.$refs.cancelBtn.removeEventListener('click', onCancel)
            this.visible = false
            resolve(false)
          }
          this.$refs.cancelBtn.addEventListener('click', onCancel)
        })
      })
    },
    hide () {
      this.visible = false
    }
  }
}
</script>

<style lang="scss">
.dialog {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 80000;
  display: flex;
  padding: 0 50px;
  justify-content: center;
  align-items: center;
  background: var(--overlay-bg-color);
  backdrop-filter: blur(4px);

  &__body {
    min-width: 300px;
    max-width: 450px;
    padding: 20px 30px;
    background: var(--modal-bg-color);
    border: 1px solid var(--modal-border-color);
    border-radius: var(--modal-border-radius);
    box-shadow: 0 15px 15px rgba(0,0,0,0.1);
    color: var(--modal-font-color);
    text-align: center;
  }

  &__text {
    margin-bottom: 20px;
  }

  &__btn {
    margin-bottom: 5px;
    padding: 10px 30px;
    -webkit-appearance: none;
    border: 1px solid #eee;
    background: #eee;
    border-radius: var(--button-border-radius);
    cursor: pointer;
    outline: none;

    &:hover {
      filter: brightness(.95);
    }

    &:active {
      filter: brightness(.9);
    }
  }

  &__btn--primary {
    background: var(--primary-button-bg-color);
    border: 1px solid var(--primary-button-border-color);
    color: var(--primary-button-font-color);
    font-weight: bold;
  }

  &__btn--secondary {
    background: var(--secondary-button-bg-color);
    border: 1px solid var(--secondary-button-border-color);
    color: var(--secondary-button-font-color);
  }
}
</style>
