---
id: "js-en-function-web-javascript-reference-global_objects-math-ln2"
language: "js"
lang: "en"
category: "function"
name: "Math.LN2"
title: "Math.LN2"
directive: "javascript-static-data-property"
module: "reference\\global_objects\\math\\ln2\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Math/LN2"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Math.LN2

The **`Math.LN2`** static data property represents the natural logarithm of 2, approximately 0.693:

`JavaScript Demo: Math.LN2`

```js interactive-example
function getNatLog2() {
  return Math.LN2;
}

console.log(getNatLog2());
// Expected output: 0.6931471805599453
```

## Value

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝙻𝙽𝟸</mi><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo>≈</mo><mn>0.693</mn></mrow><annotation encoding="TeX">\mathtt{Math.LN2} = \ln(2) \approx 0.693</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

## Description

Because `LN2` is a static property of `Math`, you always use it as `Math.LN2`, rather than as a property of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.LN2

The following function returns the natural log of 2:

```js
function getNatLog2() {
  return Math.LN2;
}

getNatLog2(); // 0.6931471805599453
```

## Specifications

## Browser compatibility

## See also

- `Math.exp()`
- `Math.log()`
- `Math.log2()`
