---
id: "js-en-function-web-javascript-reference-global_objects-temporal-duration-blank"
language: "js"
lang: "en"
category: "function"
name: "Temporal.Duration.prototype.blank"
title: "Temporal.Duration.prototype.blank"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\duration\\blank\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/blank"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.Duration.prototype.blank

The **`blank`** accessor property of `Temporal.Duration` instances returns a boolean that is `true` if this duration represents a zero duration, and `false` otherwise. It is equivalent to `duration.sign === 0`.

## Examples

### Using blank

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ hours: -1, minutes: -30 });
const d3 = Temporal.Duration.from({ hours: 0 });

console.log(d1.blank); // false
console.log(d2.blank); // false
console.log(d3.blank); // true
```

## Specifications

## Browser compatibility

## See also

- `Temporal.Duration`
- `Temporal/Duration/sign`
