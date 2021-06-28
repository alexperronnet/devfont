# Devfont

[![Website](https://img.shields.io/website?down_color=red&style=flat-square&up_color=blue&url=https%3A%2F%2Fdevfont.com)](https://devfont.com)
[![npm](https://img.shields.io/npm/v/devfont?color=blue&style=flat-square)](https://www.npmjs.com/package/devfont)
[![npm](https://img.shields.io/npm/dm/devfont?color=blue&style=flat-square)](https://www.npmjs.com/package/devfont)
[![License](https://img.shields.io/github/license/alexperronnet/devfont?color=blue&style=flat-square)](/license.md)

Devfont is a premium, simply and beautiful set of 900+ open source icons for
designers and developers. Each icon is designed on a 24x24 grid with an emphasis
on readability, consistency, simplicity, flexibility and perfect pixels. Of
course, all the icons are free for both personal and commercial use.

Search, preview and download at [devfont.com](https://devfont.com)

```shell
npm install devfont
```

```shell
yarn add devfont
```

## Quick start

Simply copy and paste the following code snippet into a blank `html` file to
begin prototyping with Devfont.

```html
<!DOCTYPE html>
<html lang="en">
  <script src="https://unpkg.com/devfont"></script>
  <body>

    <!-- example icon -->
    <i data-devfont="circle"></i>

    <script>
      devfont.replace()
    </script>
  </body>
</html>
```

## Usage

At its core, Devfont is a collection of SVG files. This means that you can use Devfont in all the same ways you can use SVGs (e.g. img, background-image, inline, object, embed, iframe).

The following are additional ways you can use Devfont.

### Client-side JavaScript

1. Install

```shell
npm install devfont
```

```shell
yarn add devfont
```

Or just copy [devfont.js](https://unpkg.com/devfont/dist/devfont.js) or [devfont.min.js](https://unpkg.com/devfont/dist/devfont.min.js) into your project directory.

2. Include

```html
<script src="path/to/dist/devfont.js"></script>
```

Or load the script from a CDN provider.

```html
<script src="https://unpkg.com/devfont"></script>
```

After including the script, Devfont will be available as a global variable.

3. Use

To use an icon on your page, add a data-devfont attribute with the icon name to an element:

```html
<i data-devfont="circle"></i>
```

4. Replace

Call the devfont.replace() method:

```html
<script>
  devfont.replace()
</script>
```

All elements that have a data-devfont attribute will be replaced with SVG markup corresponding to their data-devfont attribute value.

### Node

1. Install

```shell
npm install devfont
```

```shell
yarn add devfont
```

2. Require

```js
const devfont = require("devfont")
```

3. Use

```js
devfont.icons.x
// {
//    name: "x",
//    contents: "<line ... /><line ... />",
//    tags: ["cancel", "close", "delete", "remove"],
//    attrs: {
//      class: "devfont devfont-x",
//      xmlns: "http://www.w3.org/2000/svg",
//      width: 24,
//      height: 24,
//      viewBox: "0 0 24 24",
//      fill: "none",
//      stroke: "currentColor",
//      "stroke-width": 2,
//      "stroke-linecap": "round",
//      "stroke-linejoin": "round",
//    },
//    toSvg: [Function],
// }

devfont.icons.x.toSvg()
// <svg class="devfont devfont-x" ...><line ... /><line ... /></svg>

devfont.icons.x.toSvg({ class: "foo bar", "stroke-width": 1, color: "red" })
// <svg class="devfont devfont-x foo bar" stroke-width="1" color="red" ...><line ... /><line ... /></svg>
```

### SVG Sprite

1. Install

```shell
npm install devfont
```

```shell
yarn add devfont
```

Or just copy [devfont-sprite.svg](https://unpkg.com/devfont/dist/devfont-sprite.svg) into your project directory.

2. Use

```html
<svg
  width="24"
  height="24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <use xlink:href="path/to/devfont-sprite.svg#circle" />
</svg>
```

However, this markup can be simplified using a simple CSS class to avoid repetition of SVG attributes between icons:

```css
.devfont {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}
```

```html
<svg class="devfont">
  <use xlink:href="path/to/dist/devfont-sprite.svg#circle" />
</svg>
```

## Contributing

For more info on how to contribute please see the
[contribution guidelines](https://github.com/alexperronnet/devfont/blob/master/contributing.md).

Caught a mistake or want to contribute to the documentation?
[Edit this page on Github](https://github.com/alexperronnet/devfont/blob/master/readme.md)

## Design

See all icons on
[Figma](https://www.figma.com/file/6UxYVimMRFLHuyPXBlxkkj/devfont-icons?node-id=4%3A154).

## License

Devfont is licensed under the
[MIT License](https://github.com/alexperronnet/devfont/blob/master/license.md).

## Credits

Based on Feather Icons. See the [Feather repo](https://github.com/feathericons/feather) and the [Feather website](https://feathericons.com)