---
id: "js-en-function-web-javascript-reference-global_objects-dataview-setint32"
language: "js"
lang: "en"
category: "function"
name: "DataView.prototype.setInt32"
title: "DataView.prototype.setInt32()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\dataview\\setint32\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt32"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# DataView.prototype.setInt32()

The **`setInt32()`** method of `DataView` instances takes a number and stores it as a 32-bit signed integer in the 4 bytes starting at the specified byte offset of this `DataView`. There is no alignment constraint; multi-byte values may be stored at any offset within bounds.

`JavaScript Demo: DataView.prototype.setInt32()`

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setInt32(1, 2147483647); // Max signed 32-bit integer

console.log(view.getInt32(1));
// Expected output: 2147483647
```

## Syntax

```js-nolint
setInt32(byteOffset, value)
setInt32(byteOffset, value, littleEndian)
```

### Parameters

- `byteOffset`
  - : The offset, in bytes, from the start of the view to store the data in.
- `value`
  - : The value to set. For how the value is encoded in bytes, see [Value encoding and normalization](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization).
- `littleEndian` 
  - : Indicates whether the data is stored in [little- or big-endian](/en-US/docs/Glossary/Endianness) format. If `false` or `undefined`, a big-endian value is written.

### Return value

`undefined`.

### Exceptions

- `RangeError`
  - : Thrown if the `byteOffset` is set such that it would store beyond the end of the view.

## Examples

### Using setInt32()

```js
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setInt32(0, 3);
dataview.getInt32(1); // 768
```

## Specifications

## Browser compatibility

## See also

- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) guide
- `DataView`
- `ArrayBuffer`
- `Int32Array`
