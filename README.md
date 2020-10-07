# Tailwind CSS WordPress Utility Classes

Tailwind CSS plugin for generating WordPress utility classes - for block editor, accessibility, alignment and image captions.

This plugin currently includes:

- Block editor colour palette classes: `.has-[color]-text-color` and `.has-[color]-background-color`
- Block editor font size classes: `.has-[size]-font-size`
- Accessibility class: `.screen-reader-text`
- Alignment classes: `.alignnone`
- Image caption classes: `.wp-caption`

Props to [@knowler](https://github.com/knowler/tailwindcss-wordpress) and [@brettsmason](https://github.com/brettsmason/tailwindcss-wordpress#readme).
I've basically combined their work.

## Install

1. Install the plugin:

  ```bash
  # Using npm
  npm install @mattrad/tailwindcss-wordpress --save-dev

  # Using Yarn
  yarn add @mattrad/tailwindcss-wordpress -D
  ```

2. Add it to your `tailwind.config.js` file:

  ```js
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      require('@mattrad/tailwindcss-wordpress')
    ]
  }
  ```

## Usage

Block editor classes use the keys `editorColorPalette` and `editorFontSizes` in your Tailwind config’s `theme` object to generate the utilities. Here is an example:

```js
// tailwind.config.js
{
  theme: {
    editorColorPalette: {
      'primary': '#f2f2f2',
      'secondary': '#ccc',
    },
    editorFontSizes: {
      'small': '16px',
      'medium': '22px',
    },
  },
  plugins: [
    require('@mattrad/tailwindcss-wordpress')(),
  ],
}
```

## To do

- Add support for `.alignfull` and `.alignwide`