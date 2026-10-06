---
id: "js-en-function-web-javascript-reference-global_objects-number-valueof"
language: "js"
lang: "en"
category: "function"
name: "Number.prototype.valueOf"
title: "Number.prototype.valueOf()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\number\\valueof\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Number/valueOf"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Number.prototype.valueOf()

The **`valueOf()`** method of `Number` values returns the value of this number.

`JavaScript Demo: Number.prototype.valueOf()`

```js interactive-example
const numObj = new Number(42);
console.log(typeof numObj);
// Expected output: "object"

const num = numObj.valueOf();
console.log(num);
// Expected output: 42

console.log(typeof num);
// Expected output: "number"
```

## Syntax

```js-nolint
valueOf()
```

### Parameters

None.

### Return value

A number representing the primitive value of the specified `Number` object.

## Description

This method is usually called internally by JavaScript and not explicitly in web code.

## Examples

### Using valueOf

```js
const numObj = new Number(10);
console.log(typeof numObj); // object

const num = numObj.valueOf();
console.log(num); // 10
console.log(typeof num); // number
```

## Specifications

## Browser compatibility

## See also

- `Object.prototype.valueOf()`
