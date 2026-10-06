---
id: "js-en-function-web-javascript-reference-global_objects-dataview-setint8"
language: "js"
lang: "en"
category: "function"
name: "DataView.prototype.setInt8"
title: "DataView.prototype.setInt8()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\dataview\\setint8\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt8"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# DataView.prototype.setInt8()

The **`setInt8()`** method of `DataView` instances takes a number and stores it as an 8-bit signed integer in the byte at the specified byte offset of this `DataView`.

`JavaScript Demo: DataView.prototype.setInt8()`

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setInt8(1, 127); // Max signed 8-bit integer

console.log(view.getInt8(1));
// Expected output: 127
```

## Syntax

```js-nolint
setInt8(byteOffset, value)
```

### Parameters

- `byteOffset`
  - : The offset, in bytes, from the start of the view to store the data in.
- `value`
  - : The value to set. For how the value is encoded in bytes, see [Value encoding and normalization](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization).

### Return value

`undefined`.

### Exceptions

- `RangeError`
  - : Thrown if the `byteOffset` is set such that it would store beyond the end of the view.

## Examples

### Using setInt8()

```js
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setInt8(0, 3);
dataview.getInt8(0); // 3
```

## Specifications

## Browser compatibility

## See also

- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) guide
- `DataView`
- `ArrayBuffer`
- `Int8Array`
