import { isVue3, Plugin, Vue2 } from "vue-demi"
// Export component
import Flag from "./components/Flag"
export type { FlagSize } from "./components/Flag"
// Export data files
export * from "./data"
export { Flag }

export type VueFlagsOptions = {
  iconPath?: string
}

// Type component globally
declare global {
  interface __VLS_GlobalComponents {
    VueFlag: typeof Flag
    "vue-flag": typeof Flag
  }
}

const plugin: Plugin = {
  install(app, options?: VueFlagsOptions) {
    // Declare the component
    app.component("vue-flag", Flag)

    if (isVue3) {
      // Provide with app.provide from Vue 3 plugins
      app.provide("vueflags", options || {})
    } else {
      // Regular old Vue 2 injection
      Vue2.prototype.$vueflags = options || {}
    }
  },
}

// Auto install plugin when Vue is loaded from window.
/* global window global */
let GlobalVue = null

if (typeof window !== "undefined") {
  GlobalVue = (window as any).Vue
} else if (typeof global !== "undefined") {
  GlobalVue = (global as any).Vue
}

if (GlobalVue) {
  GlobalVue.use(plugin)
}

// Default export is library as a whole, registered via Vue.use()
export default plugin
