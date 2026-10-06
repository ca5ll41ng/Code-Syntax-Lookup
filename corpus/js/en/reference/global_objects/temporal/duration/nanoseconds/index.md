---
id: "js-en-function-web-javascript-reference-global_objects-temporal-duration-nanoseconds"
language: "js"
lang: "en"
category: "function"
name: "Temporal.Duration.prototype.nanoseconds"
title: "Temporal.Duration.prototype.nanoseconds"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\duration\\nanoseconds\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/nanoseconds"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.Duration.prototype.nanoseconds

The **`nanoseconds`** accessor property of `Temporal.Duration` instances returns an integer representing the number of nanoseconds in the duration.

Unless the duration is [balanced](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing), you cannot assume the range of this value, but you can know its sign by checking the duration's [`sign`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/sign) property. If it is balanced to a unit above nanoseconds, the `nanoseconds` absolute value will be between 0 and 999, inclusive.

The set accessor of `nanoseconds` is `undefined`. You cannot change this property directly. Use the `Temporal/Duration/with` method to create a new `Temporal.Duration` object with the desired new value.

## Examples

### Using nanoseconds

```js
const d1 = Temporal.Duration.from({ microseconds: 1, nanoseconds: 500 });
const d2 = Temporal.Duration.from({ microseconds: -1, nanoseconds: -500 });
const d3 = Temporal.Duration.from({ microseconds: 1 });
const d4 = Temporal.Duration.from({ nanoseconds: 1000 });

console.log(d1.nanoseconds); // 500
console.log(d2.nanoseconds); // -500
console.log(d3.nanoseconds); // 0
console.log(d4.nanoseconds); // 1000

// Balance d4
const d4Balanced = d4.round({ largestUnit: "microseconds" });
console.log(d4Balanced.nanoseconds); // 0
console.log(d4Balanced.microseconds); // 1
```

## Specifications

## Browser compatibility

## See also

- `Temporal.Duration`
- `Temporal/Duration/years`
- `Temporal/Duration/months`
- `Temporal/Duration/weeks`
- `Temporal/Duration/days`
- `Temporal/Duration/hours`
- `Temporal/Duration/minutes`
- `Temporal/Duration/seconds`
- `Temporal/Duration/milliseconds`
- `Temporal/Duration/microseconds`
