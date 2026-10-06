---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plainyearmonth-monthcode"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainYearMonth.prototype.monthCode"
title: "Temporal.PlainYearMonth.prototype.monthCode"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\plainyearmonth\\monthcode\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/monthCode"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainYearMonth.prototype.monthCode

The **`monthCode`** accessor property of `Temporal.PlainYearMonth` instances returns a calendar-specific string representing the month of this year-month. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

Usually it is `M` plus a two-digit month number. For leap months, it is the previous month's code followed by `L` (even if it's conceptually a derivative of the following month; for example, in the Hebrew calendar, Adar I has code `M05L` but Adar II has code `M06`). If the leap month is the first month of the year, the code is `M00L`.

The set accessor of `monthCode` is `undefined`. You cannot change this property directly. Use the `Temporal/PlainYearMonth/with` method to create a new `Temporal.PlainYearMonth` object with the desired new value.

For general information and more examples, see `Temporal/PlainDate/monthCode`.

## Examples

### Using monthCode

```js
const date = Temporal.PlainYearMonth.from("2021-07-01"); // ISO 8601 calendar
console.log(date.monthCode); // "M07"
console.log(date.month); // 7
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
- `Temporal/PlainYearMonth/daysInMonth`
- `Temporal/PlainYearMonth/monthsInYear`
- `Temporal/PlainDate/monthCode`
