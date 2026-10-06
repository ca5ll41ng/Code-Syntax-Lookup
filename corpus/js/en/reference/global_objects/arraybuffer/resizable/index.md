---
id: "js-en-function-web-javascript-reference-global_objects-arraybuffer-resizable"
language: "js"
lang: "en"
category: "function"
name: "ArrayBuffer.prototype.resizable"
title: "ArrayBuffer.prototype.resizable"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\arraybuffer\\resizable\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resizable"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# ArrayBuffer.prototype.resizable

The **`resizable`** accessor property of `ArrayBuffer` instances returns whether this array buffer can be resized or not.

`JavaScript Demo: ArrayBuffer.prototype.resizable`

```js interactive-example
const buffer1 = new ArrayBuffer(8, { maxByteLength: 16 });
const buffer2 = new ArrayBuffer(8);

console.log(buffer1.resizable);
// Expected output: true

console.log(buffer2.resizable);
// Expected output: false
```

## Description

The `resizable` property is an accessor property whose set accessor function is `undefined`, meaning that you can only read this property. The value is established when the array is constructed. If the `maxByteLength` option was set in the constructor, `resizable` will return `true`; if not, it will return `false`.

## Examples

### Using resizable

In this example, we create a 8-byte buffer that is resizable to a max length of 16 bytes, then check its `resizable` property, resizing it if `resizable` returns `true`:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

if (buffer.resizable) {
  console.log("Buffer is resizable!");
  buffer.resize(12);
}
```

## Specifications

## Browser compatibility

## See also

- `ArrayBuffer`
- `ArrayBuffer.prototype.maxByteLength`
- `ArrayBuffer.prototype.resize()`
