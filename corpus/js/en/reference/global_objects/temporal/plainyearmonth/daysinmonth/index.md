---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plainyearmonth-daysinmonth"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainYearMonth.prototype.daysInMonth"
title: "Temporal.PlainYearMonth.prototype.daysInMonth"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\plainyearmonth\\daysinmonth\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/daysInMonth"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainYearMonth.prototype.daysInMonth

The **`daysInMonth`** accessor property of `Temporal.PlainYearMonth` instances returns a positive integer representing the number of days in the month of this date. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

The set accessor of `daysInMonth` is `undefined`. You cannot change this property directly.

For general information and more examples, see `Temporal/PlainDate/daysInMonth`.

## Examples

### Using daysInMonth

```js
const ym = Temporal.PlainYearMonth.from("2021-07");
console.log(ym.daysInMonth); // 31
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainYearMonth`
- {{jsxref("Temporal/PlainYearMonth/with", "Temporal.PlainYearMonth.prototype.with()")}}
- `Temporal/PlainYearMonth/add`
- {{jsxref("Temporal/PlainYearMonth/subtract", "Temporal.PlainYearMonth.prototype.subtract()")}}
- `Temporal/PlainYearMonth/year`
- `Temporal/PlainYearMonth/month`
- `Temporal/PlainYearMonth/daysInYear`
- `Temporal/PlainDate/daysInMonth`
