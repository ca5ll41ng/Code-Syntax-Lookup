---
id: "js-en-function-web-javascript-reference-global_objects-infinity"
language: "js"
lang: "en"
category: "function"
name: "Infinity"
title: "Infinity"
directive: "javascript-global-property"
module: "reference\\global_objects\\infinity\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Infinity"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Infinity

The **`Infinity`** global property is a numeric value representing infinity.

`JavaScript Demo: Infinity`

```js interactive-example
const maxNumber = 10 ** 1000; // Max positive number

if (maxNumber === Infinity) {
  console.log("Let's call it Infinity!");
  // Expected output: "Let's call it Infinity!"
}

console.log(1 / maxNumber);
// Expected output: 0
```

## Value

The same number value as `Number.POSITIVE_INFINITY`.

## Description

`Infinity` is a property of the _global object_. In other words, it is a variable in global scope.

The value `Infinity` (positive infinity) is greater than any other number.

This value behaves slightly differently than mathematical infinity; see `Number.POSITIVE_INFINITY` for details.

## Examples

### Using Infinity

```js
console.log(Infinity); /* Infinity */
console.log(Infinity + 1); /* Infinity */
console.log(10 ** 1000); /* Infinity */
console.log(Math.log(0)); /* -Infinity */
console.log(1 / Infinity); /* 0 */
console.log(1 / 0); /* Infinity */
```

## Specifications

## Browser compatibility

## See also

- `Number.NEGATIVE_INFINITY`
- `Number.POSITIVE_INFINITY`
- `Number.isFinite`
