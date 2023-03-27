export const Dialog = () => import('../../components/Dialog.vue' /* webpackChunkName: "components/dialog" */).then(c => wrapFunctional(c.default || c))
export const Pad = () => import('../../components/Pad.vue' /* webpackChunkName: "components/pad" */).then(c => wrapFunctional(c.default || c))
export const PopupModal = () => import('../../components/PopupModal.vue' /* webpackChunkName: "components/popup-modal" */).then(c => wrapFunctional(c.default || c))
export const ProjectList = () => import('../../components/ProjectList.vue' /* webpackChunkName: "components/project-list" */).then(c => wrapFunctional(c.default || c))
export const ProjectTracks = () => import('../../components/ProjectTracks.vue' /* webpackChunkName: "components/project-tracks" */).then(c => wrapFunctional(c.default || c))
export const Rec = () => import('../../components/Rec.vue' /* webpackChunkName: "components/rec" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
