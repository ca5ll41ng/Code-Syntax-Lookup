---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaindatetime-year"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainDateTime.prototype.year"
title: "Temporal.PlainDateTime.prototype.year"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\plaindatetime\\year\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/year"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainDateTime.prototype.year

The **`year`** accessor property of `Temporal.PlainDateTime` instances returns an integer representing the number of years of this date relative to the start of a calendar-specific epoch year. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

The set accessor of `year` is `undefined`. You cannot change this property directly. Use the `Temporal/PlainDateTime/with` method to create a new `Temporal.PlainDateTime` object with the desired new value.

For general information and more examples, see `Temporal/PlainDate/year`.

## Examples

### Using year

```js
const dt = Temporal.PlainDateTime.from("2021-07-01"); // ISO 8601 calendar
console.log(dt.year); // 2021
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainDateTime`
- `Temporal/PlainDateTime/with`
- `Temporal/PlainDateTime/add`
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
- `Temporal/PlainDateTime/era`
- `Temporal/PlainDateTime/eraYear`
- `Temporal/PlainDateTime/yearOfWeek`
- `Temporal/PlainDateTime/month`
- `Temporal/PlainDateTime/day`
- `Temporal/PlainDate/year`
