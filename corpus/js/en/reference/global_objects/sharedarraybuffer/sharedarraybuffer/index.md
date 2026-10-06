---
id: "js-en-function-web-javascript-reference-global_objects-sharedarraybuffer-sharedarraybuffer"
language: "js"
lang: "en"
category: "function"
name: "SharedArrayBuffer() constructor"
title: "SharedArrayBuffer() constructor"
directive: "javascript-constructor"
module: "reference\\global_objects\\sharedarraybuffer\\sharedarraybuffer\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# SharedArrayBuffer() constructor

> [!NOTE]
> The `SharedArrayBuffer` constructor may not always be globally available unless certain [security requirements](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) are met.

The **`SharedArrayBuffer()`** constructor creates `SharedArrayBuffer` objects.

## Syntax

```js-nolint
new SharedArrayBuffer(length)
new SharedArrayBuffer(length, options)
```

> [!NOTE]
> `SharedArrayBuffer()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a `TypeError`.

### Parameters

- `length`
  - : The size, in bytes, of the array buffer to create.
- `options` 
  - : An object, which can contain the following properties:
    - `maxByteLength` 
      - : The maximum size, in bytes, that the shared array buffer can be resized to.

### Return value

A new `SharedArrayBuffer` object of the specified size, with its `SharedArrayBuffer/maxByteLength` property set to the specified `maxByteLength` if one was specified. Its contents are initialized to 0.

## Examples

Note that these examples cannot be run directly from the console or an arbitrary web page, because `SharedArrayBuffer` is not defined unless its [security requirements](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) are met.

### Basic usage

Create a buffer specifying its size in bytes.

```js
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(8);

console.log(buffer.byteLength); // 8
```

### Always use the new operator to create a SharedArrayBuffer

`SharedArrayBuffer` constructors are required to be constructed with a `new` operator. Calling a `SharedArrayBuffer` constructor as a function without `new` will throw a `TypeError`.

```js example-bad
const sab = SharedArrayBuffer(1024);
// TypeError: calling a builtin SharedArrayBuffer constructor
// without new is forbidden
```

```js example-good
const sab = new SharedArrayBuffer(1024);
```

### Growing a growable SharedArrayBuffer

In this example, we create an 8-byte buffer that is growable to a max length of 16 bytes, then `SharedArrayBuffer/grow` it to 12 bytes:

```js
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

buffer.grow(12);
```

> [!NOTE]
> It is recommended that `maxByteLength` is set to the smallest value possible for your use case. It should never exceed `1073741824` (1GB), to reduce the risk of out-of-memory errors.

## Specifications

## Browser compatibility

## See also

- `Atomics`
- `ArrayBuffer`
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) guide
