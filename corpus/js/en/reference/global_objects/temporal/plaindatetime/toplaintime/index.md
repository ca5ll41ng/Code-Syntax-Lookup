---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaindatetime-toplaintime"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainDateTime.prototype.toPlainTime"
title: "Temporal.PlainDateTime.prototype.toPlainTime()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\temporal\\plaindatetime\\toplaintime\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/toPlainTime"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainDateTime.prototype.toPlainTime()

The **`toPlainTime()`** method of `Temporal.PlainDateTime` instances returns a new `Temporal.PlainTime` object representing the time part (hour, minute, second, and subsecond components) of this date-time.

## Syntax

```js-nolint
toPlainTime()
```

### Parameters

None.

### Return value

A new `Temporal.PlainTime` object representing the time part (hour, minute, second, and subsecond components) of this date-time.

## Examples

### Using toPlainTime()

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T12:34:56");
const time = dt.toPlainTime();
console.log(time.toString()); // '12:34:56'
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainDateTime`
- `Temporal.PlainTime`
- {{jsxref("Temporal/PlainDateTime/toPlainDate", "Temporal.PlainDateTime.prototype.toPlainDate()")}}
- {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}}
