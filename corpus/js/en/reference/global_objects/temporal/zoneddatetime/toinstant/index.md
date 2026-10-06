---
id: "js-en-function-web-javascript-reference-global_objects-temporal-zoneddatetime-toinstant"
language: "js"
lang: "en"
category: "function"
name: "Temporal.ZonedDateTime.prototype.toInstant"
title: "Temporal.ZonedDateTime.prototype.toInstant()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\temporal\\zoneddatetime\\toinstant\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toInstant"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.ZonedDateTime.prototype.toInstant()

The **`toInstant()`** method of `Temporal.ZonedDateTime` instances returns a new `Temporal.Instant` object representing the instant of this date-time.

## Syntax

```js-nolint
toInstant()
```

### Parameters

None.

### Return value

A new `Temporal.Instant` object representing the instant of this date-time.

## Examples

### Using toInstant()

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.987654321-04:00[America/New_York]",
);
const instant = zdt.toInstant();
console.log(instant.toString()); // 2021-07-01T16:34:56.987654321Z
```

## Specifications

## Browser compatibility

## See also

- `Temporal.ZonedDateTime`
- `Temporal.Instant`
- {{jsxref("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}}
- {{jsxref("Temporal/ZonedDateTime/toPlainTime", "Temporal.ZonedDateTime.prototype.toPlainTime()")}}
- {{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "Temporal.ZonedDateTime.prototype.toPlainDateTime()")}}
- {{jsxref("Temporal/Instant/toZonedDateTimeISO", "Temporal.Instant.prototype.toZonedDateTimeISO()")}}
