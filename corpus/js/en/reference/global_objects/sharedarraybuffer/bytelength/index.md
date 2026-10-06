---
id: "js-en-function-web-javascript-reference-global_objects-sharedarraybuffer-bytelength"
language: "js"
lang: "en"
category: "function"
name: "SharedArrayBuffer.prototype.byteLength"
title: "SharedArrayBuffer.prototype.byteLength"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\sharedarraybuffer\\bytelength\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/byteLength"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# SharedArrayBuffer.prototype.byteLength

The **`byteLength`** accessor property of `SharedArrayBuffer` instances returns the length (in bytes) of this `SharedArrayBuffer`.

## Description

The `byteLength` property is an accessor property whose set accessor function is `undefined`, meaning that you can only read this property. The value is established when the shared array is constructed and cannot be changed.

## Examples

Note that these examples cannot be run directly from the console or an arbitrary web page, because `SharedArrayBuffer` is not defined unless its [security requirements](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) are met.

### Using byteLength

```js
const sab = new SharedArrayBuffer(1024);
sab.byteLength; // 1024
```

## Specifications

## Browser compatibility

## See also

- `SharedArrayBuffer`
