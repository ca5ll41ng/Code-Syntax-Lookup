---
id: "js-en-function-web-javascript-reference-global_objects-temporal-duration-years"
language: "js"
lang: "en"
category: "function"
name: "Temporal.Duration.prototype.years"
title: "Temporal.Duration.prototype.years"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\duration\\years\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/years"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.Duration.prototype.years

The **`years`** accessor property of `Temporal.Duration` instances returns an integer representing the number of years in the duration.

You can know the sign of `years` by checking the duration's [`sign`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/sign) property.

The set accessor of `years` is `undefined`. You cannot change this property directly. Use the `Temporal/Duration/with` method to create a new `Temporal.Duration` object with the desired new value.

## Examples

### Using years

```js
const d1 = Temporal.Duration.from({ years: 1, months: 1 });
const d2 = Temporal.Duration.from({ years: -1, months: -1 });
const d3 = Temporal.Duration.from({ years: 1 });
const d4 = Temporal.Duration.from({ months: 12 });

console.log(d1.years); // 1
console.log(d2.years); // -1
console.log(d3.years); // 1
console.log(d4.years); // 0

// Balance d4
const d4Balanced = d4.round({
  largestUnit: "years",
  relativeTo: Temporal.PlainDate.from("2021-01-01"), // ISO 8601 calendar
});
console.log(d4Balanced.years); // 1
console.log(d4Balanced.months); // 0
```

## Specifications

## Browser compatibility

## See also

- `Temporal.Duration`
- `Temporal/Duration/months`
- `Temporal/Duration/weeks`
- `Temporal/Duration/days`
- `Temporal/Duration/hours`
- `Temporal/Duration/minutes`
- `Temporal/Duration/seconds`
- `Temporal/Duration/milliseconds`
- `Temporal/Duration/microseconds`
- `Temporal/Duration/nanoseconds`
