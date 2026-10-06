---
id: "js-en-function-web-javascript-reference-global_objects-number-nan"
language: "js"
lang: "en"
category: "function"
name: "Number.NaN"
title: "Number.NaN"
directive: "javascript-static-data-property"
module: "reference\\global_objects\\number\\nan\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Number.NaN

The **`Number.NaN`** static data property represents Not-A-Number, which is equivalent to `NaN`. For more information about the behaviors of `NaN`, see the [description for the global property](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN).

`JavaScript Demo: Number.NaN`

```js interactive-example
function clean(x) {
  if (x === Number.NaN) {
    // Can never be true
    return null;
  }
  if (isNaN(x)) {
    return 0;
  }
}

console.log(clean(Number.NaN));
// Expected output: 0
```

## Value

The number value `NaN`.

## Description

Because `NaN` is a static property of `Number`, you always use it as `Number.NaN`, rather than as a property of a number value.

## Examples

### Checking whether values are numeric

```js
function sanitize(x) {
  if (isNaN(x)) {
    return Number.NaN;
  }
  return x;
}
```

## Specifications

## Browser compatibility

## See also

- `NaN`
- `Number.isNaN()`
