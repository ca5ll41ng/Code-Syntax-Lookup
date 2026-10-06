---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plainyearmonth-year"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainYearMonth.prototype.year"
title: "Temporal.PlainYearMonth.prototype.year"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\plainyearmonth\\year\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/year"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainYearMonth.prototype.year

The **`year`** accessor property of `Temporal.PlainYearMonth` instances returns an integer representing the number of years of this year-month relative to the start of a calendar-specific epoch year. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

The set accessor of `year` is `undefined`. You cannot change this property directly. Use the `Temporal/PlainYearMonth/with` method to create a new `Temporal.PlainYearMonth` object with the desired new value.

For general information and more examples, see `Temporal/PlainDate/year`.

## Examples

### Using year

```js
const ym = Temporal.PlainYearMonth.from("2021-07"); // ISO 8601 calendar
console.log(ym.year); // 2021
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainYearMonth`
- {{jsxref("Temporal/PlainYearMonth/with", "Temporal.PlainYearMonth.prototype.with()")}}
- `Temporal/PlainYearMonth/add`
- {{jsxref("Temporal/PlainYearMonth/subtract", "Temporal.PlainYearMonth.prototype.subtract()")}}
- `Temporal/PlainYearMonth/era`
- `Temporal/PlainYearMonth/eraYear`
- `Temporal/PlainYearMonth/month`
- `Temporal/PlainDate/year`
