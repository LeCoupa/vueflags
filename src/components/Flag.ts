/**
 * As the component is written from Vue 3,
 * all the @ts-ignore in this file are used to neglect
 * type errors that are forced to be working with Vue 2.
 */

import { computed, defineComponent, h, inject, isVue3, PropType } from "vue-demi"
import type { CountryCode, VueFlagsOptions } from "../"
import { countryCodes } from "../data"
import "../style.css"

const sizes = ["nano", "micro", "mini", "small", "default", "medium", "large", "huge"] as const

export type FlagSize = typeof sizes[number]

export default defineComponent({
  props: {
    code: {
      type: String as PropType<CountryCode>,
      required: true,
    },
    height: {
      type: String as PropType<String>,
      required: false,
    },
    width: {
      type: String as PropType<String>,
      required: false,
    },
    iconPath: {
      type: String as PropType<String>,
      required: false,
    },
    size: {
      type: String as PropType<FlagSize>,
      default: "default",
    },
  },
  setup(props, ctx) {
    let vueFlags: VueFlagsOptions

    // Resolve $vueflags for both versions
    if (isVue3) {
      vueFlags = inject("vueflags") as VueFlagsOptions
    } else {
      // @ts-ignore
      vueFlags = ctx.root.$vueflags as VueFlagsOptions
    }

    // Get `src` for the component
    const src = computed<string>(() => {
      let code = (props.code || "").toLowerCase() as CountryCode

      let path = vueFlags.iconPath || props["iconPath"] || ""

      // Remove last character if slash
      path = path.replace(/\/$/, "")

      if (!countryCodes.includes(code)) {
        code = "unknown"
      }

      return `${path}/${code}.svg`
    })

    return {
      src,
    }
  },
  render(ctx: any) {
    let attrs = {}

    if (isVue3) {
      // Compose element attrs for Vue 3
      attrs["src"] = ctx.src

      attrs["style"] = {
        width: ctx.width,
        height: ctx.height,
      }

      attrs["class"] = [
        "vueflag",
        "vueflag--" + ctx.size,
        {
          "vueflag--clickable": ctx.$attrs.onClick,
        },
      ]
    } else {
      // Compose element attrs for Vue 2
      attrs["class"] = [
        "vueflag",
        // @ts-ignore
        "vueflag--" + this.size,
        {
          // @ts-ignore
          "vueflag--clickable": this.$listeners.click,
        },
      ]

      attrs["style"] = {
        // @ts-ignore
        width: this.width,
        // @ts-ignore
        height: this.height,
      }

      attrs["attrs"] = {
        src: this.src,
      }
    }

    return h("img", attrs)
  },
})
