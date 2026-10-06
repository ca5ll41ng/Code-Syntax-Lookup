---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaindate-toplaindatetime"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainDate.prototype.toPlainDateTime"
title: "Temporal.PlainDate.prototype.toPlainDateTime()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\temporal\\plaindate\\toplaindatetime\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toPlainDateTime"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainDate.prototype.toPlainDateTime()

The **`toPlainDateTime()`** method of `Temporal.PlainDate` instances returns a new `Temporal.PlainDateTime` object representing this date and a supplied time in the same calendar system.

## Syntax

```js-nolint
toPlainDateTime()
toPlainDateTime(plainTime)
```

### Parameters

- `plainTime` 
  - : A string, an object, or a `Temporal.PlainTime` instance representing the time component of the resulting `PlainDateTime`. It is converted to a `Temporal.PlainTime` object using the same algorithm as `Temporal/PlainTime/from`. Defaults to `"00:00:00"`.

### Return value

A new `Temporal.PlainDateTime` object representing the date and time specified by this date and `plainTime`, interpreted in the calendar system of this date.

## Examples

### Using toPlainDateTime()

```js
const date = Temporal.PlainDate.from("2021-07-01");
const dateTime = date.toPlainDateTime("12:34:56");
console.log(dateTime.toString()); // 2021-07-01T12:34:56

const midnight = date.toPlainDateTime();
console.log(midnight.toString()); // 2021-07-01T00:00:00

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=chinese]");
const dateTime2 = date2.toPlainDateTime("12:34:56");
console.log(dateTime2.toString()); // 2021-07-01T12:34:56[u-ca=chinese]
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainDate`
- `Temporal.PlainDateTime`
- `Temporal.PlainTime`
- {{jsxref("Temporal/PlainDate/toPlainMonthDay", "Temporal.PlainDate.prototype.toPlainMonthDay()")}}
- {{jsxref("Temporal/PlainDate/toPlainYearMonth", "Temporal.PlainDate.prototype.toPlainYearMonth()")}}
- {{jsxref("Temporal/PlainDate/toZonedDateTime", "Temporal.PlainDate.prototype.toZonedDateTime()")}}
- {{jsxref("Temporal/PlainDateTime/toPlainDate", "Temporal.PlainDateTime.prototype.toPlainDate()")}}
