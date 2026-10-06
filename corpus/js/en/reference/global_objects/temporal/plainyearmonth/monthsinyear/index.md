---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plainyearmonth-monthsinyear"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainYearMonth.prototype.monthsInYear"
title: "Temporal.PlainYearMonth.prototype.monthsInYear"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\plainyearmonth\\monthsinyear\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/monthsInYear"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainYearMonth.prototype.monthsInYear

The **`monthsInYear`** accessor property of `Temporal.PlainYearMonth` instances returns a positive integer representing the number of months in the year of this date. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

The set accessor of `monthsInYear` is `undefined`. You cannot change this property directly.

For general information and more examples, see `Temporal/PlainDate/monthsInYear`.

## Examples

### Using monthsInYear

```js
const ym = Temporal.PlainYearMonth.from("2021-07");
console.log(ym.monthsInYear); // 12
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
- `Temporal/PlainYearMonth/monthCode`
- `Temporal/PlainYearMonth/daysInMonth`
- `Temporal/PlainDate/monthsInYear`
