---
id: "js-en-function-web-javascript-reference-global_objects-temporal-zoneddatetime-daysinweek"
language: "js"
lang: "en"
category: "function"
name: "Temporal.ZonedDateTime.prototype.daysInWeek"
title: "Temporal.ZonedDateTime.prototype.daysInWeek"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\zoneddatetime\\daysinweek\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/daysInWeek"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.ZonedDateTime.prototype.daysInWeek

The **`daysInWeek`** accessor property of `Temporal.ZonedDateTime` instances returns a positive integer representing the number of days in the week of this date. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

The set accessor of `daysInWeek` is `undefined`. You cannot change this property directly.

For general information and more examples, see `Temporal/PlainDate/daysInWeek`.

## Examples

### Using daysInWeek

```js
const dt = Temporal.ZonedDateTime.from("2021-07-01[America/New_York]");
console.log(dt.daysInWeek); // 7
```

## Specifications

## Browser compatibility

## See also

- `Temporal.ZonedDateTime`
- `Temporal/ZonedDateTime/with`
- `Temporal/ZonedDateTime/add`
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- `Temporal/ZonedDateTime/yearOfWeek`
- `Temporal/ZonedDateTime/weekOfYear`
- `Temporal/ZonedDateTime/dayOfWeek`
- `Temporal/ZonedDateTime/daysInMonth`
- `Temporal/ZonedDateTime/daysInYear`
- `Temporal/PlainDate/daysInWeek`
