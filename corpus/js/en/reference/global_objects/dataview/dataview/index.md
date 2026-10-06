---
id: "js-en-function-web-javascript-reference-global_objects-dataview-dataview"
language: "js"
lang: "en"
category: "function"
name: "DataView() constructor"
title: "DataView() constructor"
directive: "javascript-constructor"
module: "reference\\global_objects\\dataview\\dataview\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/DataView/DataView"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# DataView() constructor

The **`DataView()`** constructor creates `DataView` objects.

`JavaScript Demo: DataView() constructor`

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

// Create a couple of views
const view1 = new DataView(buffer);
const view2 = new DataView(buffer, 12, 4); // From byte 12 for the next 4 bytes
view1.setInt8(12, 42); // Put 42 in slot 12

console.log(view2.getInt8(0));
// Expected output: 42
```

## Syntax

```js-nolint
new DataView(buffer)
new DataView(buffer, byteOffset)
new DataView(buffer, byteOffset, byteLength)
```

> [!NOTE]
> `DataView()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a `TypeError`.

### Parameters

- `buffer`
  - : An existing `ArrayBuffer` or `SharedArrayBuffer` to use as
    the storage backing the new `DataView` object.
- `byteOffset` 
  - : The offset, in bytes, to the first byte in the above buffer for the new view to
    reference. If unspecified, the buffer view starts with the first byte.
- `byteLength` 
  - : The number of elements in the byte array. If unspecified, the view's length will
    match the buffer's length.

### Return value

A new `DataView` object representing the specified data buffer.

### Exceptions

- `RangeError`
  - : Thrown if the `byteOffset` or `byteLength` parameter values result in the view extending past the end of the buffer. In other words, `byteOffset + byteLength > buffer.byteLength`.

## Examples

### Using DataView

```js
const buffer = new ArrayBuffer(16);
const view = new DataView(buffer, 0);

view.setInt16(1, 42);
view.getInt16(1); // 42
```

## Specifications

## Browser compatibility

## See also

- [Polyfill of `DataView` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- `DataView`
