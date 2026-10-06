---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaindate-toplainyearmonth"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainDate.prototype.toPlainYearMonth"
title: "Temporal.PlainDate.prototype.toPlainYearMonth()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\temporal\\plaindate\\toplainyearmonth\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toPlainYearMonth"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainDate.prototype.toPlainYearMonth()

The **`toPlainYearMonth()`** method of `Temporal.PlainDate` instances returns a new `Temporal.PlainYearMonth` object representing the `Temporal/PlainDate/year` and `Temporal/PlainDate/month` of this date in the same calendar system.

## Syntax

```js-nolint
toPlainYearMonth()
```

### Parameters

None.

### Return value

A new `Temporal.PlainYearMonth` object representing the `Temporal/PlainDate/year` and `Temporal/PlainDate/month` of this date in the same calendar system.

## Examples

### Using toPlainYearMonth()

```js
const date = Temporal.PlainDate.from("2021-07-01");
const yearMonth = date.toPlainYearMonth();
console.log(yearMonth.toString()); // 2021-07
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainDate`
- `Temporal.PlainYearMonth`
- {{jsxref("Temporal/PlainDate/toPlainDateTime", "Temporal.PlainDate.prototype.toPlainDateTime()")}}
- {{jsxref("Temporal/PlainDate/toPlainMonthDay", "Temporal.PlainDate.prototype.toPlainMonthDay()")}}
- {{jsxref("Temporal/PlainDate/toZonedDateTime", "Temporal.PlainDate.prototype.toZonedDateTime()")}}
- {{jsxref("Temporal/PlainYearMonth/toPlainDate", "Temporal.PlainYearMonth.prototype.toPlainDate()")}}
