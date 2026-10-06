---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaindatetime-monthcode"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainDateTime.prototype.monthCode"
title: "Temporal.PlainDateTime.prototype.monthCode"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\plaindatetime\\monthcode\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/monthCode"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainDateTime.prototype.monthCode

The **`monthCode`** accessor property of `Temporal.PlainDateTime` instances returns a calendar-specific string representing the month of this date. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

Usually it is `M` plus a two-digit month number. For leap months, it is the previous month's code followed by `L` (even if it's conceptually a derivative of the following month; for example, in the Hebrew calendar, Adar I has code `M05L` but Adar II has code `M06`). If the leap month is the first month of the year, the code is `M00L`.

The set accessor of `monthCode` is `undefined`. You cannot change this property directly. Use the `Temporal/PlainDateTime/with` method to create a new `Temporal.PlainDateTime` object with the desired new value.

For general information and more examples, see `Temporal/PlainDate/monthCode`.

## Examples

### Using monthCode

```js
const date = Temporal.PlainDateTime.from("2021-07-01"); // ISO 8601 calendar
console.log(date.monthCode); // "M07"
console.log(date.month); // 7
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainDateTime`
- `Temporal/PlainDateTime/with`
- `Temporal/PlainDateTime/add`
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
- `Temporal/PlainDateTime/year`
- `Temporal/PlainDateTime/month`
- `Temporal/PlainDateTime/daysInMonth`
- `Temporal/PlainDateTime/monthsInYear`
- `Temporal/PlainDate/monthCode`
