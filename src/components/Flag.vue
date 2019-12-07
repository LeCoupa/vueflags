<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
  img(
    :class=`[
      "gb-flag",
      "gb-flag--" + size
    ]`
    :src="filePath"
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
// PROJECT: MIXINS
import ThemeMixin from "../mixins/ThemeMixin.js"

export default {
  mixins: [ThemeMixin],

  props: {
    codeAlpha2: {
      type: String,
      default: null
    },
    codeAlpha3: {
      type: String,
      default: null
    },
    codeName: {
      type: String,
      default: null
    },
    codeNumeric: {
      type: String,
      default: null
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
        return ["nano", "micro", "mini", "small", "default", "medium", "large"].includes(x)
      }
    },
    width: {
      type: String,
      default: null
    }
  },

  computed: {
    fileName() {
      if (this.codeName) {
        return this.codeName
      } else if (this.codeAlpha2) {
        return this.codeAlpha2
      } else if (this.codeAlpha3) {
        return this.codeAlpha3
      } else if (this.codeNumeric) {
        return this.codeNumeric
      }

      console.error(
        "One of the following prop is missing: code-name, code-alpha2, code-alpha3 or code-numeric."
      )

      return ""
    },

    filePath() {
      let path = this.$gb.vueflags.iconPath || this.iconPath || ""

      // Remove last character if slash
      path = path.replace(/\/$/, "")

      return `${path}/${this.fileName}.svg`
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
// IMPORTS
@import "node_modules/@growthbunker/stylesheets/settings/_colors.scss";
@import "node_modules/@growthbunker/stylesheets/settings/_maps.scss";
@import "node_modules/@growthbunker/stylesheets/settings/_themes.scss";
@import "node_modules/@growthbunker/stylesheets/tools/_functions.scss";
@import "node_modules/@growthbunker/stylesheets/tools/_mixins.scss";

// VARIABLES
$c: ".gb-flag";
$sizes: "nano", "micro", "mini", "small", "default", "medium", "large";

#{$c} {
  display: inline-block;
  background-size: cover;
  background-repeat: no-repeat;
  user-select: none;

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      height: 14px + ($i * 6);
    }
  }
}
</style>
