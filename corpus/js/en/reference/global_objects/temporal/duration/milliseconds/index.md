---
id: "js-en-function-web-javascript-reference-global_objects-temporal-duration-milliseconds"
language: "js"
lang: "en"
category: "function"
name: "Temporal.Duration.prototype.milliseconds"
title: "Temporal.Duration.prototype.milliseconds"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\duration\\milliseconds\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/milliseconds"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.Duration.prototype.milliseconds

The **`milliseconds`** accessor property of `Temporal.Duration` instances returns an integer representing the number of milliseconds in the duration.

Unless the duration is [balanced](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing), you cannot assume the range of this value, but you can know its sign by checking the duration's [`sign`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/sign) property. If it is balanced to a unit above milliseconds, the `milliseconds` absolute value will be between 0 and 999, inclusive.

The set accessor of `milliseconds` is `undefined`. You cannot change this property directly. Use the `Temporal/Duration/with` method to create a new `Temporal.Duration` object with the desired new value.

## Examples

### Using milliseconds

```js
const d1 = Temporal.Duration.from({ seconds: 1, milliseconds: 500 });
const d2 = Temporal.Duration.from({ seconds: -1, milliseconds: -500 });
const d3 = Temporal.Duration.from({ seconds: 1 });
const d4 = Temporal.Duration.from({ milliseconds: 1000 });

console.log(d1.milliseconds); // 500
console.log(d2.milliseconds); // -500
console.log(d3.milliseconds); // 0
console.log(d4.milliseconds); // 1000

// Balance d4
const d4Balanced = d4.round({ largestUnit: "seconds" });
console.log(d4Balanced.milliseconds); // 0
console.log(d4Balanced.seconds); // 1
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
- `Temporal/Duration/microseconds`
- `Temporal/Duration/nanoseconds`
