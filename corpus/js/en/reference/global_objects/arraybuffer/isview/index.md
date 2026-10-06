---
id: "js-en-function-web-javascript-reference-global_objects-arraybuffer-isview"
language: "js"
lang: "en"
category: "function"
name: "ArrayBuffer.isView"
title: "ArrayBuffer.isView()"
directive: "javascript-static-method"
module: "reference\\global_objects\\arraybuffer\\isview\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# ArrayBuffer.isView()

The **`ArrayBuffer.isView()`** static method determines whether the
passed value is one of the `ArrayBuffer` views,
such as [typed array objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
or a `DataView`.

`JavaScript Demo: ArrayBuffer.isView()`

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

console.log(ArrayBuffer.isView(new Int32Array()));
// Expected output: true
```

## Syntax

```js-nolint
ArrayBuffer.isView(value)
```

### Parameters

- `value`
  - : The value to be checked.

### Return value

`true` if the given argument is one of the `ArrayBuffer` views;
otherwise, `false`.

## Examples

### Using isView

```js
ArrayBuffer.isView(); // false
ArrayBuffer.isView([]); // false
ArrayBuffer.isView({}); // false
ArrayBuffer.isView(null); // false
ArrayBuffer.isView(undefined); // false
ArrayBuffer.isView(new ArrayBuffer(10)); // false

ArrayBuffer.isView(new Uint8Array()); // true
ArrayBuffer.isView(new Float32Array()); // true
ArrayBuffer.isView(new Int8Array(10).subarray(0, 3)); // true

const buffer = new ArrayBuffer(2);
const dv = new DataView(buffer);
ArrayBuffer.isView(dv); // true
```

## Specifications

## Browser compatibility

## See also

- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) guide
