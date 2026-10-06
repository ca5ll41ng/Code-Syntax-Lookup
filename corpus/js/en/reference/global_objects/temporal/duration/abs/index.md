---
id: "js-en-function-web-javascript-reference-global_objects-temporal-duration-abs"
language: "js"
lang: "en"
category: "function"
name: "Temporal.Duration.prototype.abs"
title: "Temporal.Duration.prototype.abs()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\temporal\\duration\\abs\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/abs"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.Duration.prototype.abs()

The **`abs()`** method of `Temporal.Duration` instances returns a new `Temporal.Duration` object with the absolute value of this duration (all fields have the same magnitude, but sign becomes positive).

## Syntax

```js-nolint
abs()
```

### Parameters

None.

### Return value

A new `Temporal.Duration` object with the absolute value of this duration, which is either the same as this duration if it is already positive, or its [negation](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated) if it is negative.

## Examples

### Using abs()

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ hours: -1, minutes: -30 });

console.log(d1.abs().toString()); // "PT1H30M"
console.log(d2.abs().toString()); // "PT1H30M"
```

## Specifications

## Browser compatibility

## See also

- `Temporal.Duration`
- `Temporal/Duration/negated`
- `Temporal/Duration/sign`
