---
id: "js-en-function-web-javascript-reference-global_objects-temporal-zoneddatetime-dayofweek"
language: "js"
lang: "en"
category: "function"
name: "Temporal.ZonedDateTime.prototype.dayOfWeek"
title: "Temporal.ZonedDateTime.prototype.dayOfWeek"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\zoneddatetime\\dayofweek\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/dayOfWeek"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.ZonedDateTime.prototype.dayOfWeek

The **`dayOfWeek`** accessor property of `Temporal.ZonedDateTime` instances returns a positive integer representing the 1-based day index in the week of this date. Days in a week are numbered sequentially from `1` to `Temporal/ZonedDateTime/daysInWeek`, with each number mapping to its name. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

The set accessor of `dayOfWeek` is `undefined`. You cannot change this property directly. To create a new `Temporal.ZonedDateTime` object with the desired new `dayOfWeek` value, use the `Temporal/ZonedDateTime/add` or `Temporal/ZonedDateTime/subtract` method with the appropriate number of `days`.

For general information and more examples, see `Temporal/PlainDate/dayOfWeek`.

## Examples

### Using dayOfWeek

```js
const dt = Temporal.ZonedDateTime.from("2021-07-01[America/New_York]");
console.log(dt.dayOfWeek); // 4; Thursday
```

## Specifications

## Browser compatibility

## See also

- `Temporal.ZonedDateTime`
- `Temporal/ZonedDateTime/with`
- `Temporal/ZonedDateTime/add`
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- `Temporal/ZonedDateTime/day`
- `Temporal/ZonedDateTime/dayOfYear`
- `Temporal/ZonedDateTime/daysInWeek`
- `Temporal/ZonedDateTime/weekOfYear`
- `Temporal/ZonedDateTime/yearOfWeek`
- `Temporal/PlainDate/dayOfWeek`
