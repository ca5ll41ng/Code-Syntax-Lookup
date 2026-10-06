---
id: "js-en-function-web-javascript-reference-global_objects-temporal-zoneddatetime-toplaindate"
language: "js"
lang: "en"
category: "function"
name: "Temporal.ZonedDateTime.prototype.toPlainDate"
title: "Temporal.ZonedDateTime.prototype.toPlainDate()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\temporal\\zoneddatetime\\toplaindate\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toPlainDate"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.ZonedDateTime.prototype.toPlainDate()

The **`toPlainDate()`** method of `Temporal.ZonedDateTime` instances returns a new `Temporal.PlainDate` object representing the date portion of this date-time.

## Syntax

```js-nolint
toPlainDate()
```

### Parameters

None.

### Return value

A new `Temporal.PlainDate` object representing the date portion of this date-time.

## Examples

### Using toPlainDate()

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.987654321-04:00[America/New_York]",
);
const plainDate = zdt.toPlainDate();
console.log(plainDate.toString()); // 2021-07-01
```

## Specifications

## Browser compatibility

## See also

- `Temporal.ZonedDateTime`
- `Temporal.PlainDate`
- {{jsxref("Temporal/ZonedDateTime/toPlainTime", "Temporal.ZonedDateTime.prototype.toPlainTime()")}}
- {{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "Temporal.ZonedDateTime.prototype.toPlainDateTime()")}}
- {{jsxref("Temporal/ZonedDateTime/toInstant", "Temporal.ZonedDateTime.prototype.toInstant()")}}
- {{jsxref("Temporal/PlainDate/toZonedDateTime", "Temporal.PlainDate.prototype.toZonedDateTime()")}}
