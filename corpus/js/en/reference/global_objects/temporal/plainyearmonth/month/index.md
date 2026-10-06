---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plainyearmonth-month"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainYearMonth.prototype.month"
title: "Temporal.PlainYearMonth.prototype.month"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\plainyearmonth\\month\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/month"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainYearMonth.prototype.month

The **`month`** accessor property of `Temporal.PlainYearMonth` instances returns a positive integer representing the 1-based month index in the year of this year-month. The first month of this year is `1`, and the last month is the `Temporal/PlainYearMonth/monthsInYear`. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

The set accessor of `month` is `undefined`. You cannot change this property directly. Use the `Temporal/PlainYearMonth/with` method to create a new `Temporal.PlainYearMonth` object with the desired new value.

For general information and more examples, see `Temporal/PlainDate/month`.

## Examples

### Using month

```js
const ym = Temporal.PlainYearMonth.from("2021-07"); // ISO 8601 calendar
console.log(ym.monthCode); // "M07"
console.log(ym.month); // 7
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainYearMonth`
- {{jsxref("Temporal/PlainYearMonth/with", "Temporal.PlainYearMonth.prototype.with()")}}
- `Temporal/PlainYearMonth/add`
- {{jsxref("Temporal/PlainYearMonth/subtract", "Temporal.PlainYearMonth.prototype.subtract()")}}
- `Temporal/PlainYearMonth/year`
- `Temporal/PlainYearMonth/monthCode`
- `Temporal/PlainYearMonth/daysInMonth`
- `Temporal/PlainYearMonth/monthsInYear`
- `Temporal/PlainDate/month`
