---
id: "js-en-function-web-javascript-reference-global_objects-dataview-buffer"
language: "js"
lang: "en"
category: "function"
name: "DataView.prototype.buffer"
title: "DataView.prototype.buffer"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\dataview\\buffer\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/DataView/buffer"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# DataView.prototype.buffer

The **`buffer`** accessor property of `DataView` instances returns the `ArrayBuffer` or `SharedArrayBuffer` referenced by this view at construction time.

`JavaScript Demo: DataView.prototype.buffer`

```js interactive-example
// Create an ArrayBuffer
const buffer = new ArrayBuffer(123);

// Create a view
const view = new DataView(buffer);

console.log(view.buffer.byteLength);
// Expected output: 123
```

## Description

The `buffer` property is an accessor property whose set accessor function is `undefined`, meaning that you can only read this property. The value is established when the `DataView` is constructed and cannot be changed.

## Examples

### Using the buffer property

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.buffer; // ArrayBuffer { byteLength: 8 }
```

## Specifications

## Browser compatibility

## See also

- `DataView`
- `ArrayBuffer`
- `SharedArrayBuffer`
