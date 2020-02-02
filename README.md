<p align="center" style="background: #1b2431; padding: 20px 0;">
  <a href="https://www.growthbunker.dev/vueflags" target="_blank">
    <img width="100%" src="https://raw.githubusercontent.com/growthbunker/vueflags/master/vueflags_dark.jpg">
  </a>
</p>

[![npm](https://img.shields.io/npm/v/@growthbunker/vueflags.svg)](https://www.npmjs.com/package/@growthbunker/vueflags)
[![npm](https://img.shields.io/npm/dm/@growthbunker/vueflags.svg)](https://npm-stat.com/charts.html?package=@growthbunker/vueflags)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/growthbunker/vueflags.svg)](http://isitmaintained.com/project/growthbunker/vueflags "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/growthbunker/vueflags.svg)](http://isitmaintained.com/project/growthbunker/vueflags "Percentage of issues still open")
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/growthbunker/vueflags/blob/master/LICENSE)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ae3d4112-1c84-4868-b4eb-271c3136ede6/deploy-status)](https://app.netlify.com/sites/growthbunker/deploys)

## Documentation

You can browse the documentation for Vue Flags [on the website](https://www.growthbunker.dev/vueflags).

## Installation

```
npm install @growthbunker/vueflags

# Or if you prefer using yarn
yarn add @growthbunker/vueflags
```

### Vue.js

In your `main.js` file:

```js
import Vue from "vue"
import VueFlags from "@growthbunker/vueflags"

Vue.use(VueFlags)
```

### Nuxt.js

Create a new plugin in `plugins/vueflags.js`:

```js
import Vue from "vue"
import VueFlags from "@growthbunker/vueflags"

Vue.use(VueFlags)
```

Add this new plugin to `nuxt.config.js`.

```js
module.exports = {
  // ...
  plugins: [{ src: "@/plugins/vueflags.js" }];
}
```

### CDN

Get the latest version from [jsdelivr](https://www.jsdelivr.com/), and import the JavaScript file in your page.

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.5/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@growthbunker/vueflags@latest/dist/vueflags.min.js"></script>
```

We recommend our users to lock Vue Flags's version when using CDN. Requesting the latest version (as opposed to "latest major" or "latest minor") is dangerous because major versions usually come with breaking changes. Only do this if you really know what you are doing. [Please refer to jsdelivr.com](https://www.jsdelivr.com/features) for more information.

## Icons

<a href="https://github.com/growthbunker/vueflags/tree/master/assets/flags" target="_blank">All the flags are available here</a>. Copy them somewhere in your somewhere in your "public" or "static" folder. You will also have to set the icon path for the component to be able to find them (see package options and component props).

A huge thank you to <a href="https://www.flaticon.com/packs/countrys-flags" target="_blank">the author for designing these flags</a>.

## Example

Once the plugin is installed, you can use the component like this:

```html
<template>
  <gb-flag code="fr" size="small" />
</template>
```

## Contributing

You are more than welcome to contribute to Vue Flags. Just submit changes via pull request and I will review them before merging.

1. Fork it! 🤙

2. Create your feature branch: `git checkout -b my-new-feature`

3. Commit your changes: `git commit -am "Add some feature"`

4. Push to the branch: `git push origin my-new-feature`

5. Submit a pull request 👍

The documentation is available in the `docs` folder. The Vue Flags components are available in the `lib` folder.

## License

Vue Flags is [MIT licensed](LICENSE).
