---
id: "js-en-function-web-javascript-reference-global_objects-dataview-getuint16"
language: "js"
lang: "en"
category: "function"
name: "DataView.prototype.getUint16"
title: "DataView.prototype.getUint16()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\dataview\\getuint16\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint16"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# DataView.prototype.getUint16()

The **`getUint16()`** method of `DataView` instances reads 2 bytes starting at the specified byte offset of this `DataView` and interprets them as a 16-bit unsigned integer. There is no alignment constraint; multi-byte values may be fetched from any offset within bounds.

`JavaScript Demo: DataView.prototype.getUint16()`

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setUint16(1, 65535); // Max unsigned 16-bit integer

console.log(view.getUint16(1));
// Expected output: 65535
```

## Syntax

```js-nolint
getUint16(byteOffset)
getUint16(byteOffset, littleEndian)
```

### Parameters

- `byteOffset`
  - : The offset, in bytes, from the start of the view to read the data from.
- `littleEndian` 
  - : Indicates whether the data is stored in [little- or big-endian](/en-US/docs/Glossary/Endianness) format. If `false` or `undefined`, a big-endian value is read.

### Return value

An integer from 0 to 65535, inclusive.

### Exceptions

- `RangeError`
  - : Thrown if the `byteOffset` is set such that it would read beyond the end of the view.

## Examples

### Using getUint16()

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getUint16(1)); // 258
```

## Specifications

## Browser compatibility

## See also

- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) guide
- `DataView`
- `ArrayBuffer`
- `Uint16Array`
