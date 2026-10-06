---
id: "js-en-function-web-javascript-reference-global_objects-temporal-duration-negated"
language: "js"
lang: "en"
category: "function"
name: "Temporal.Duration.prototype.negated"
title: "Temporal.Duration.prototype.negated()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\temporal\\duration\\negated\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.Duration.prototype.negated()

The **`negated()`** method of `Temporal.Duration` instances returns a new `Temporal.Duration` object with the negated value of this duration (all fields keep the same magnitude, but sign becomes reversed).

## Syntax

```js-nolint
negated()
```

### Parameters

None.

### Return value

A new `Temporal.Duration` object, where all fields have the same magnitude as this duration, but the sign is reversed (positive fields become negative, and vice versa).

## Examples

### Using negated()

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ hours: -1, minutes: -30 });

console.log(d1.negated().toString()); // "-PT1H30M"
console.log(d2.negated().toString()); // "PT1H30M"
```

## Specifications

## Browser compatibility

## See also

- `Temporal.Duration`
- `Temporal/Duration/abs`
- `Temporal/Duration/sign`
