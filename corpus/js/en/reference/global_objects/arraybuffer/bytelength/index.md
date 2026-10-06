---
id: "js-en-function-web-javascript-reference-global_objects-arraybuffer-bytelength"
language: "js"
lang: "en"
category: "function"
name: "ArrayBuffer.prototype.byteLength"
title: "ArrayBuffer.prototype.byteLength"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\arraybuffer\\bytelength\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# ArrayBuffer.prototype.byteLength

The **`byteLength`** accessor property of `ArrayBuffer` instances returns the length (in bytes) of this array buffer.

`JavaScript Demo: ArrayBuffer.prototype.byteLength`

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(8);

// Use byteLength to check the size
const bytes = buffer.byteLength;

console.log(bytes);
// Expected output: 8
```

## Description

The `byteLength` property is an accessor property whose set accessor function is `undefined`, meaning that you can only read this property. The value is established when the array is constructed and cannot be changed. This property returns 0 if this `ArrayBuffer` has been detached.

## Examples

### Using byteLength

```js
const buffer = new ArrayBuffer(8);
buffer.byteLength; // 8
```

## Specifications

## Browser compatibility

## See also

- `ArrayBuffer`
