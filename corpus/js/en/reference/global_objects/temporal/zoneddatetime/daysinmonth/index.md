---
id: "js-en-function-web-javascript-reference-global_objects-temporal-zoneddatetime-daysinmonth"
language: "js"
lang: "en"
category: "function"
name: "Temporal.ZonedDateTime.prototype.daysInMonth"
title: "Temporal.ZonedDateTime.prototype.daysInMonth"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\zoneddatetime\\daysinmonth\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/daysInMonth"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.ZonedDateTime.prototype.daysInMonth

The **`daysInMonth`** accessor property of `Temporal.ZonedDateTime` instances returns a positive integer representing the number of days in the month of this date. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

The set accessor of `daysInMonth` is `undefined`. You cannot change this property directly.

For general information and more examples, see `Temporal/PlainDate/daysInMonth`.

## Examples

### Using daysInMonth

```js
const dt = Temporal.ZonedDateTime.from("2021-07-01[America/New_York]");
console.log(dt.daysInMonth); // 31
```

## Specifications

## Browser compatibility

## See also

- `Temporal.ZonedDateTime`
- `Temporal/ZonedDateTime/with`
- `Temporal/ZonedDateTime/add`
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- `Temporal/ZonedDateTime/year`
- `Temporal/ZonedDateTime/month`
- `Temporal/ZonedDateTime/day`
- `Temporal/ZonedDateTime/daysInWeek`
- `Temporal/ZonedDateTime/daysInYear`
- `Temporal/PlainDate/daysInMonth`
