---
id: "js-en-function-web-javascript-reference-global_objects-dataview-setint16"
language: "js"
lang: "en"
category: "function"
name: "DataView.prototype.setInt16"
title: "DataView.prototype.setInt16()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\dataview\\setint16\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt16"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# DataView.prototype.setInt16()

The **`setInt16()`** method of `DataView` instances takes a number and stores it as a 16-bit signed integer in the 2 bytes starting at the specified byte offset of this `DataView`. There is no alignment constraint; multi-byte values may be stored at any offset within bounds.

`JavaScript Demo: DataView.prototype.setInt16()`

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setInt16(1, 32767); // Max signed 16-bit integer

console.log(view.getInt16(1));
// Expected output: 32767
```

## Syntax

```js-nolint
setInt16(byteOffset, value)
setInt16(byteOffset, value, littleEndian)
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

### Using setInt16()

```js
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setInt16(0, 3);
dataview.getInt16(1); // 768
```

## Specifications

## Browser compatibility

## See also

- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) guide
- `DataView`
- `ArrayBuffer`
- `Int16Array`
