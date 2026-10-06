---
id: "js-en-function-web-javascript-reference-global_objects-temporal-zoneddatetime-daysinyear"
language: "js"
lang: "en"
category: "function"
name: "Temporal.ZonedDateTime.prototype.daysInYear"
title: "Temporal.ZonedDateTime.prototype.daysInYear"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\zoneddatetime\\daysinyear\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/daysInYear"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.ZonedDateTime.prototype.daysInYear

The **`daysInYear`** accessor property of `Temporal.ZonedDateTime` instances returns a positive integer representing the number of days in the year of this date. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

The set accessor of `daysInYear` is `undefined`. You cannot change this property directly.

For general information and more examples, see `Temporal/PlainDate/daysInYear`.

## Examples

### Using daysInYear

```js
const dt = Temporal.ZonedDateTime.from("2021-07-01[America/New_York]");
console.log(dt.daysInYear); // 365
```

## Specifications

## Browser compatibility

## See also

- `Temporal.ZonedDateTime`
- `Temporal/ZonedDateTime/with`
- `Temporal/ZonedDateTime/add`
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- `Temporal/ZonedDateTime/year`
- `Temporal/ZonedDateTime/dayOfYear`
- `Temporal/ZonedDateTime/daysInMonth`
- `Temporal/ZonedDateTime/daysInWeek`
- `Temporal/PlainDate/daysInYear`
