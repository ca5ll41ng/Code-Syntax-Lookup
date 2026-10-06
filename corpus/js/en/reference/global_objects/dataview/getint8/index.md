---
id: "js-en-function-web-javascript-reference-global_objects-dataview-getint8"
language: "js"
lang: "en"
category: "function"
name: "DataView.prototype.getInt8"
title: "DataView.prototype.getInt8()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\dataview\\getint8\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/DataView/getInt8"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# DataView.prototype.getInt8()

The **`getInt8()`** method of `DataView` instances reads 1 byte at the specified byte offset of this `DataView` and interprets it as an 8-bit signed integer.

`JavaScript Demo: DataView.prototype.getInt8()`

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
getInt8(byteOffset)
```

### Parameters

- `byteOffset`
  - : The offset, in bytes, from the start of the view to read the data from.

### Return value

An integer from -128 to 127, inclusive.

### Exceptions

- `RangeError`
  - : Thrown if the `byteOffset` is set such that it would read beyond the end of the view.

## Examples

### Using getInt8()

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getInt8(1)); // 1
```

## Specifications

## Browser compatibility

## See also

- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) guide
- `DataView`
- `ArrayBuffer`
- `Int8Array`
