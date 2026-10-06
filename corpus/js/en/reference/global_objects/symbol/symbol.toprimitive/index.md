---
id: "js-en-function-web-javascript-reference-global_objects-symbol-symbol-toprimitive"
language: "js"
lang: "en"
category: "function"
name: "Symbol.prototype[Symbol.toPrimitive]"
title: "Symbol.prototype[Symbol.toPrimitive]()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\symbol\\symbol.toprimitive\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Symbol.prototype[Symbol.toPrimitive]()

The **`[Symbol.toPrimitive]()`** method of `Symbol` values returns this symbol value.

## Syntax

```js-nolint
symbolValue[Symbol.toPrimitive](hint)
```

### Parameters

- `hint`
  - : A string value indicating the primitive value to return. The value is ignored.

### Return value

The primitive value of the specified `Symbol` object.

## Description

The `[Symbol.toPrimitive]()` method of `Symbol` returns the primitive
value of a Symbol object as a Symbol data type. The `hint`
argument is not used.

JavaScript calls the `[Symbol.toPrimitive]()` method to convert an object to a
primitive value. You rarely need to invoke the `[Symbol.toPrimitive]()` method
yourself; JavaScript automatically invokes it when encountering an object where a
primitive value is expected.

## Examples

### Using `[Symbol.toPrimitive]()`

```js
const sym = Symbol("example");
sym === sym[Symbol.toPrimitive](); // true
```

## Specifications

## Browser compatibility

## See also

- `Symbol.toPrimitive`
