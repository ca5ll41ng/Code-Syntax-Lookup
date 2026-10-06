---
id: "js-en-function-web-javascript-reference-global_objects-temporal-zoneddatetime-dayofyear"
language: "js"
lang: "en"
category: "function"
name: "Temporal.ZonedDateTime.prototype.dayOfYear"
title: "Temporal.ZonedDateTime.prototype.dayOfYear"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\zoneddatetime\\dayofyear\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/dayOfYear"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.ZonedDateTime.prototype.dayOfYear

The **`dayOfYear`** accessor property of `Temporal.ZonedDateTime` instances returns a positive integer representing the 1-based day index in the year of this date. The first day of this year is `1`, and the last day is the `Temporal/ZonedDateTime/daysInYear`. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

The set accessor of `dayOfYear` is `undefined`. You cannot change this property directly. To create a new `Temporal.ZonedDateTime` object with the desired new `dayOfYear` value, use the `Temporal/ZonedDateTime/add` or `Temporal/ZonedDateTime/subtract` method with the appropriate number of `days`.

For general information and more examples, see `Temporal/PlainDate/dayOfYear`.

## Examples

### Using dayOfYear

```js
const dt = Temporal.ZonedDateTime.from("2021-07-01[America/New_York]");
console.log(dt.dayOfYear); // 182
```

## Specifications

## Browser compatibility

## See also

- `Temporal.ZonedDateTime`
- `Temporal/ZonedDateTime/with`
- `Temporal/ZonedDateTime/add`
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- `Temporal/ZonedDateTime/year`
- `Temporal/ZonedDateTime/day`
- `Temporal/ZonedDateTime/dayOfWeek`
- `Temporal/ZonedDateTime/daysInYear`
- `Temporal/PlainDate/dayOfYear`
