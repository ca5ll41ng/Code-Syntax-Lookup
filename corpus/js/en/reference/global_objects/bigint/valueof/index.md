---
id: "js-en-function-web-javascript-reference-global_objects-bigint-valueof"
language: "js"
lang: "en"
category: "function"
name: "BigInt.prototype.valueOf"
title: "BigInt.prototype.valueOf()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\bigint\\valueof\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/BigInt/valueOf"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# BigInt.prototype.valueOf()

The **`valueOf()`** method of `BigInt` values returns the wrapped primitive value
of a `BigInt` object.

`JavaScript Demo: BigInt.prototype.valueOf()`

```js interactive-example
console.log(typeof Object(1n));
// Expected output: "object"

console.log(typeof Object(1n).valueOf());
// Expected output: "bigint"
```

## Syntax

```js-nolint
valueOf()
```

### Parameters

None.

### Return value

A BigInt representing the primitive value of the specified `BigInt` object.

## Examples

### Using `valueOf`

```js
typeof Object(1n); // object
typeof Object(1n).valueOf(); // bigint
```

## Specifications

## Browser compatibility

## See also

- `BigInt.prototype.toString()`
