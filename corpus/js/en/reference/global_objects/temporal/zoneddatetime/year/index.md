---
id: "js-en-function-web-javascript-reference-global_objects-temporal-zoneddatetime-year"
language: "js"
lang: "en"
category: "function"
name: "Temporal.ZonedDateTime.prototype.year"
title: "Temporal.ZonedDateTime.prototype.year"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\zoneddatetime\\year\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/year"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.ZonedDateTime.prototype.year

The **`year`** accessor property of `Temporal.ZonedDateTime` instances returns an integer representing the number of years of this date relative to the start of a calendar-specific epoch year. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

The set accessor of `year` is `undefined`. You cannot change this property directly. Use the `Temporal/ZonedDateTime/with` method to create a new `Temporal.ZonedDateTime` object with the desired new value.

For general information and more examples, see `Temporal/PlainDate/year`.

## Examples

### Using year

```js
const dt = Temporal.ZonedDateTime.from("2021-07-01[America/New_York]"); // ISO 8601 calendar
console.log(dt.year); // 2021
```

## Specifications

## Browser compatibility

## See also

- `Temporal.ZonedDateTime`
- `Temporal/ZonedDateTime/with`
- `Temporal/ZonedDateTime/add`
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- `Temporal/ZonedDateTime/era`
- `Temporal/ZonedDateTime/eraYear`
- `Temporal/ZonedDateTime/yearOfWeek`
- `Temporal/ZonedDateTime/month`
- `Temporal/ZonedDateTime/day`
- `Temporal/PlainDate/year`
