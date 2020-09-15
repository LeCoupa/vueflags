/**************************************************************************
 * IMPORTS
 ***************************************************************************/

// DATA
import continents from "./data/continents.js"
import countries from "./data/countries.js"

// COMPONENTS
import Flag from "./components/Flag.vue"

/**************************************************************************
 * ENVIRONMENT CONFIGURATIONS
 ***************************************************************************/

// install function executed by Vue.use()
function install(Vue, options) {
  if (install.installed) {
    return
  } else {
    install.installed = true
  }

  // Declare the component
  Vue.component("gb-flag", Flag)

  // Create growthbunker namespace
  if (!Vue.prototype.$gb) {
    Vue.prototype.$gb = {}
  }

  // Set global options for the package
  Vue.prototype.$gb.vueflags = {}
  Vue.prototype.$gb.vueflags.iconPath = (options || {}).iconPath || null
}

// Create module definition for Vue.use()
const plugin = {
  install
}

// To auto-install when vue is found
/* global window global */
let GlobalVue = null

if (typeof window !== "undefined") {
  GlobalVue = window.Vue
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue
}

if (GlobalVue) {
  GlobalVue.use(plugin)
}

// Default export is library as a whole, registered via Vue.use()
export default plugin

const countryCodes = countries.map(country => country.code)
const countryNames = countries.map(country => country.names)

// Export data files
export { continents, countries, countryCodes, countryNames }
