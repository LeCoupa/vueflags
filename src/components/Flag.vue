<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
  img(
    :class=`[
      "gb-flag",
      "gb-flag--" + size,
      {
        "gb-flag--clickable": $listeners.click
      }
    ]`
    :src="path"
    :style=`{
      height: height,
      width: width
    }`
  )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT: DATA
import flags from "../data/flags.js"

export default {
  props: {
    code: {
      type: String,
      required: true
    },
    height: {
      type: String,
      default: null
    },
    iconPath: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: "default",
      validator(x) {
        return ["nano", "micro", "mini", "small", "default", "medium", "large", "huge"].includes(x)
      }
    },
    width: {
      type: String,
      default: null
    }
  },

  computed: {
    path() {
      let code = (this.code || "").toLowerCase()
      let path = this.$gb.vueflags.iconPath || this.iconPath || ""

      // Remove last character if slash
      path = path.replace(/\/$/, "")

      // Use fallback flag
      if (!flags.includes(code)) {
        code = "unknown"
      }

      return `${path}/${code}.svg`
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onClick(event) {
      this.$emit("click", event)
    }
  }
}
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
// VARIABLES
$c: ".gb-flag";
$sizes: "nano", "micro", "mini", "small", "default", "medium", "large", "huge";

#{$c} {
  display: inline-block;
  background-size: cover;
  background-repeat: no-repeat;
  user-select: none;

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      height: 10px + ($i * 5);
    }
  }

  // --> BOOLEANS <--

  &--clickable {
    cursor: pointer;
  }
}
</style>
