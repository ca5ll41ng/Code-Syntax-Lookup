---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaindatetime-toplaindate"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainDateTime.prototype.toPlainDate"
title: "Temporal.PlainDateTime.prototype.toPlainDate()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\temporal\\plaindatetime\\toplaindate\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/toPlainDate"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainDateTime.prototype.toPlainDate()

The **`toPlainDate()`** method of `Temporal.PlainDateTime` instances returns a new `Temporal.PlainDate` object representing the date part (year, month, day) of this date-time in the same calendar system.

## Syntax

```js-nolint
toPlainDate()
```

### Parameters

None.

### Return value

A new `Temporal.PlainDate` object representing the date part (year, month, day) of this date-time in the same calendar system.

## Examples

### Using toPlainDate()

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T12:34:56");
const date = dt.toPlainDate();
console.log(date.toString()); // '2021-07-01'
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainDateTime`
- `Temporal.PlainDate`
- {{jsxref("Temporal/PlainDateTime/toPlainTime", "Temporal.PlainDateTime.prototype.toPlainTime()")}}
- {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDate.prototype.toZonedDateTime()")}}
- {{jsxref("Temporal/PlainDate/toPlainDateTime", "Temporal.PlainDate.prototype.toPlainDateTime()")}}
