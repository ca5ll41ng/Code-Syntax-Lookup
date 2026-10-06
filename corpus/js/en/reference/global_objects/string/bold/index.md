---
id: "js-en-function-web-javascript-reference-global_objects-string-bold"
language: "js"
lang: "en"
category: "function"
name: "String.prototype.bold"
title: "String.prototype.bold()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\string\\bold\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/String/bold"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# String.prototype.bold()

The **`bold()`** method of `String` values creates a string that embeds this string in a `b` element (`<b>str</b>`), which causes this string to be displayed as bold.

> [!NOTE]
> All [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) are deprecated and only standardized for compatibility purposes. Use [DOM APIs](/en-US/docs/Web/API/Document_Object_Model) such as [`document.createElement()`](/en-US/docs/Web/API/Document/createElement) instead.

## Syntax

```js-nolint
bold()
```

### Parameters

None.

### Return value

A string beginning with a `<b>` start tag, then the text `str`, and then a `</b>` end tag.

## Examples

### Using bold()

The code below creates an HTML string and then replaces the document's body with it:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.bold();
```

This will create the following HTML:

```html
<b>Hello, world</b>
```

Instead of using `bold()` and creating HTML text directly, you should use DOM APIs such as [`document.createElement()`](/en-US/docs/Web/API/Document/createElement). For example:

```js
const contentString = "Hello, world";
const elem = document.createElement("b");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## Specifications

## Browser compatibility

## See also

- [Polyfill of `String.prototype.bold` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims polyfill of `String.prototype.bold`](https://www.npmjs.com/package/es-string-html-methods)
- [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- `b`
