---
id: "js-en-function-web-javascript-reference-global_objects-number-positive_infinity"
language: "js"
lang: "en"
category: "function"
name: "Number.POSITIVE_INFINITY"
title: "Number.POSITIVE_INFINITY"
directive: "javascript-static-data-property"
module: "reference\\global_objects\\number\\positive_infinity\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Number.POSITIVE_INFINITY

The **`Number.POSITIVE_INFINITY`** static data property represents the positive Infinity value.

`JavaScript Demo: Number.POSITIVE_INFINITY`

```js interactive-example
function checkNumber(bigNumber) {
  if (bigNumber === Number.POSITIVE_INFINITY) {
    return "Process number as Infinity";
  }
  return bigNumber;
}

console.log(checkNumber(Number.MAX_VALUE));
// Expected output: 1.7976931348623157e+308

console.log(checkNumber(Number.MAX_VALUE * 2));
// Expected output: "Process number as Infinity"
```

## Value

The same as the value of the global `Infinity` property.

## Description

The `Number.POSITIVE_INFINITY` value behaves slightly differently than mathematical infinity:

- Any positive value, including `POSITIVE_INFINITY`, multiplied by `POSITIVE_INFINITY` is `POSITIVE_INFINITY`.
- Any negative value, including `Number/NEGATIVE_INFINITY`, multiplied by `POSITIVE_INFINITY` is `Number/NEGATIVE_INFINITY`.
- Any positive number divided by `POSITIVE_INFINITY` is [positive zero](https://en.wikipedia.org/wiki/Signed_zero) (as defined in [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754)).
- Any negative number divided by `POSITIVE_INFINITY` is [negative zero](https://en.wikipedia.org/wiki/Signed_zero) (as defined in [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754).
- Zero multiplied by `POSITIVE_INFINITY` is `NaN`.
- `NaN` multiplied by `POSITIVE_INFINITY` is `NaN`.
- `POSITIVE_INFINITY`, divided by any negative value except `Number/NEGATIVE_INFINITY`, is `Number/NEGATIVE_INFINITY`.
- `POSITIVE_INFINITY`, divided by any positive value except `POSITIVE_INFINITY`, is `POSITIVE_INFINITY`.
- `POSITIVE_INFINITY`, divided by either `Number/NEGATIVE_INFINITY` or `POSITIVE_INFINITY`, is `NaN`.
- `Number.POSITIVE_INFINITY > x` is true for any number _x_ that isn't `POSITIVE_INFINITY`.

You might use the `Number.POSITIVE_INFINITY` property to indicate an error condition that returns a finite number in case of success. Note, however, that `NaN` would be more appropriate in such a case.

Because `POSITIVE_INFINITY` is a static property of `Number`, you always use it as `Number.POSITIVE_INFINITY`, rather than as a property of a number value.

## Examples

### Using POSITIVE_INFINITY

In the following example, the variable `bigNumber` is assigned a value that is larger than the maximum value. When the `Statements/if...else` statement executes, `bigNumber` has the value `Infinity`, so `bigNumber` is set to a more manageable value before continuing.

```js
let bigNumber = Number.MAX_VALUE * 2;

if (bigNumber === Number.POSITIVE_INFINITY) {
  bigNumber = returnFinite();
}
```

## Specifications

## Browser compatibility

## See also

- `Number.NEGATIVE_INFINITY`
- `Number.isFinite()`
- `Infinity`
- `isFinite()`
