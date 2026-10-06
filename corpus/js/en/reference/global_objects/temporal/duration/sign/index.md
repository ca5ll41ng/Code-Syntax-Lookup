---
id: "js-en-function-web-javascript-reference-global_objects-temporal-duration-sign"
language: "js"
lang: "en"
category: "function"
name: "Temporal.Duration.prototype.sign"
title: "Temporal.Duration.prototype.sign"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\duration\\sign\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/sign"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.Duration.prototype.sign

The **`sign`** accessor property of `Temporal.Duration` instances returns `1` if this duration is positive, `-1` if negative, and `0` if zero. Because [a duration never has mixed signs](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_sign), the sign of a duration is determined by the sign of any of its non-zero fields.

## Examples

### Using sign

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ hours: -1, minutes: -30 });
const d3 = Temporal.Duration.from({ hours: 0 });

console.log(d1.sign); // 1
console.log(d2.sign); // -1
console.log(d3.sign); // 0

console.log(d1.abs().sign); // 1
console.log(d2.abs().sign); // 1
console.log(d3.abs().sign); // 0

console.log(d1.negated().sign); // -1
console.log(d2.negated().sign); // 1
console.log(d3.negated().sign); // 0
```

## Specifications

## Browser compatibility

## See also

- `Temporal.Duration`
- `Temporal/Duration/abs`
- `Temporal/Duration/negated`
- `Temporal/Duration/blank`
