<template>
  <div class="popupModalWrapper">
    <div
      :class="modalClass"
      class="popupModal"
    >
      <div class="popupModalHeader">
        {{ title }}
        <div class="close-btn">
          <i
            class="fas fa-times"
            @click="$emit('close')"
          />
        </div>
      </div>

      <div class="popupModalBody">
        <slot />
      </div>

      <div class="popupModalFooter">
        <slot name="footer" />
      </div>
    </div>

    <component :is="'style'">
      body {
      overflow: hidden;
      }
    </component>
  </div>
</template>

<script>
export default {
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
}
</script>

<style lang="scss">
.popupModalWrapper {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--overlay-bg-color);
  backdrop-filter: blur(4px);
}

.popupModal {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  width: 100%;
  max-width: 90%;
  min-width: 300px;
  max-height: calc(100vh - 120px);
  background: var(--modal-bg-color);
  border: 1px solid var(--modal-border-color);
  border-radius: var(--modal-border-radius);
  box-shadow: 0 15px 15px rgba(0,0,0,0.1);
  box-sizing: border-box;
  color: var(--modal-font-color);

  @media (max-width: 767px) {
    animation: modalSlideUp .3s;
  }

  &Header {
    position: relative;
    padding: 20px;
    border-bottom: 1px solid var(--modal-header-border-color);
    font-weight: bold;
    text-align: center;

    .close-btn {
      position: absolute;
      right: 2px;
      top: 20px;
      cursor: pointer;
      transition: opacity .3s;

      &:hover {
        opacity: .7;
      }
    }
  }

  &Body {
    flex: 1;
    padding: 20px 0;
    overflow-y: auto;
  }

  &Footer {
    position: relative;
    border-top: 1px solid var(--modal-header-border-color);
    padding: 20px;
    text-align: center;

    button {
      max-width: 300px;
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

      &.primary {
        background: var(--primary-button-bg-color);
        border: 1px solid var(--primary-button-border-color);
        color: var(--primary-button-font-color);
        font-weight: bold;
      }

      &.secondary {
        background: var(--secondary-button-bg-color);
        border: 1px solid var(--secondary-button-border-color);
        color: var(--secondary-button-font-color);
      }
    }
  }
}

@keyframes modalSlideUp {
  0% {
    top: 500px;
  }
  100% {
    top: 0;
  }
}
</style>
