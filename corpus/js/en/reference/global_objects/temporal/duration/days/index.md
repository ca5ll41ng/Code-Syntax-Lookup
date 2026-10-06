---
id: "js-en-function-web-javascript-reference-global_objects-temporal-duration-days"
language: "js"
lang: "en"
category: "function"
name: "Temporal.Duration.prototype.days"
title: "Temporal.Duration.prototype.days"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\duration\\days\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/days"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.Duration.prototype.days

The **`days`** accessor property of `Temporal.Duration` instances returns an integer representing the number of days in the duration.

Unless the duration is [balanced](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing), you cannot assume the range of this value, but you can know its sign by checking the duration's [`sign`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/sign) property. If it is balanced to a unit above days, the `days` absolute value's range depends on the calendar (how many days are in a week or month).

The set accessor of `days` is `undefined`. You cannot change this property directly. Use the `Temporal/Duration/with` method to create a new `Temporal.Duration` object with the desired new value.

## Examples

### Using days

```js
const d1 = Temporal.Duration.from({ weeks: 1, days: 1 });
const d2 = Temporal.Duration.from({ weeks: -1, days: -1 });
const d3 = Temporal.Duration.from({ weeks: 1 });
const d4 = Temporal.Duration.from({ days: 7 });

console.log(d1.days); // 1
console.log(d2.days); // -1
console.log(d3.days); // 0
console.log(d4.days); // 7

// Balance d4
const d4Balanced = d4.round({
  largestUnit: "weeks",
  relativeTo: Temporal.PlainDate.from("2021-01-01"), // ISO 8601 calendar
});
console.log(d4Balanced.days); // 0
console.log(d4Balanced.weeks); // 1
```

## Specifications

## Browser compatibility

## See also

- `Temporal.Duration`
- `Temporal/Duration/years`
- `Temporal/Duration/months`
- `Temporal/Duration/weeks`
- `Temporal/Duration/hours`
- `Temporal/Duration/minutes`
- `Temporal/Duration/seconds`
- `Temporal/Duration/milliseconds`
- `Temporal/Duration/microseconds`
- `Temporal/Duration/nanoseconds`
