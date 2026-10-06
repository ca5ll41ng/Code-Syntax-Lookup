---
id: "js-en-function-web-javascript-reference-global_objects-math-sign"
language: "js"
lang: "en"
category: "function"
name: "Math.sign"
title: "Math.sign()"
directive: "javascript-static-method"
module: "reference\\global_objects\\math\\sign\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Math/sign"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Math.sign()

The **`Math.sign()`** static method returns 1 or -1, indicating the sign of the number passed as argument. If the input is 0 or -0, it will be returned as-is.

`JavaScript Demo: Math.sign()`

```js interactive-example
console.log(Math.sign(3));
// Expected output: 1

console.log(Math.sign(-3));
// Expected output: -1

console.log(Math.sign(0));
// Expected output: 0

console.log(Math.sign("-3"));
// Expected output: -1
```

## Syntax

```js-nolint
Math.sign(x)
```

### Parameters

- `x`
  - : A number.

### Return value

A number representing the sign of `x`:

- If `x` is positive, returns `1`.
- If `x` is negative, returns `-1`.
- If `x` is positive zero, returns `0`.
- If `x` is negative zero, returns `-0`.
- Otherwise, returns `NaN`.

## Description

Because `sign()` is a static method of `Math`, you always use it as `Math.sign()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.sign()

```js
Math.sign(3); // 1
Math.sign(-3); // -1
Math.sign("-3"); // -1
Math.sign(0); // 0
Math.sign(-0); // -0
Math.sign(NaN); // NaN
Math.sign("foo"); // NaN
Math.sign(); // NaN
```

## Specifications

## Browser compatibility

## See also

- [Polyfill of `Math.sign` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- [es-shims polyfill of `Math.sign`](https://www.npmjs.com/package/math.sign)
- `Math.abs()`
- `Math.ceil()`
- `Math.floor()`
- `Math.round()`
- `Math.trunc()`
