---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plainyearmonth-inleapyear"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainYearMonth.prototype.inLeapYear"
title: "Temporal.PlainYearMonth.prototype.inLeapYear"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\plainyearmonth\\inleapyear\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/inLeapYear"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainYearMonth.prototype.inLeapYear

The **`inLeapYear`** accessor property of `Temporal.PlainYearMonth` instances returns a boolean indicating whether this year-month is in a leap year. A leap year is a year that has more days (due to a leap day or leap month) than a common year. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

The set accessor of `inLeapYear` is `undefined`. You cannot change this property directly.

For general information and more examples, see `Temporal/PlainDate/inLeapYear`.

## Examples

### Using inLeapYear

```js
const ym = Temporal.PlainYearMonth.from("2021-07");
console.log(ym.inLeapYear); // false
console.log(ym.daysInYear); // 365
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
- `Temporal/PlainYearMonth/daysInYear`
- `Temporal/PlainYearMonth/monthsInYear`
- `Temporal/PlainDate/inLeapYear`
