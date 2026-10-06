---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaindate-toplainmonthday"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainDate.prototype.toPlainMonthDay"
title: "Temporal.PlainDate.prototype.toPlainMonthDay()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\temporal\\plaindate\\toplainmonthday\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toPlainMonthDay"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainDate.prototype.toPlainMonthDay()

The **`toPlainMonthDay()`** method of `Temporal.PlainDate` instances returns a new `Temporal.PlainMonthDay` object representing the `Temporal/PlainDate/monthCode` and `Temporal/PlainDate/day` of this date in the same calendar system.

Note that `PlainMonthDay` objects do not have a `month` component, because months with the same name can have different `month` indexes in different years due to leap months.

## Syntax

```js-nolint
toPlainMonthDay()
```

### Parameters

None.

### Return value

A new `Temporal.PlainMonthDay` object representing the `Temporal/PlainDate/monthCode` and `Temporal/PlainDate/day` of this date in the same calendar system.

## Examples

### Using toPlainMonthDay()

```js
const date = Temporal.PlainDate.from("2021-07-01");
const monthDay = date.toPlainMonthDay();
console.log(monthDay.toString()); // 07-01
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainDate`
- `Temporal.PlainMonthDay`
- {{jsxref("Temporal/PlainDate/toPlainDateTime", "Temporal.PlainDate.prototype.toPlainDateTime()")}}
- {{jsxref("Temporal/PlainDate/toPlainYearMonth", "Temporal.PlainDate.prototype.toPlainYearMonth()")}}
- {{jsxref("Temporal/PlainDate/toZonedDateTime", "Temporal.PlainDate.prototype.toZonedDateTime()")}}
- {{jsxref("Temporal/PlainMonthDay/toPlainDate", "Temporal.PlainMonthDay.prototype.toPlainDate()")}}
