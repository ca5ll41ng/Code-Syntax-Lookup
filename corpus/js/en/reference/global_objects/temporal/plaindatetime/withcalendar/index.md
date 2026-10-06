---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaindatetime-withcalendar"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainDateTime.prototype.withCalendar"
title: "Temporal.PlainDateTime.prototype.withCalendar()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\temporal\\plaindatetime\\withcalendar\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/withCalendar"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainDateTime.prototype.withCalendar()

The **`withCalendar()`** method of `Temporal.PlainDateTime` instances returns a new `Temporal.PlainDateTime` object representing this date-time interpreted in the new calendar system. Because all `Temporal` objects are designed to be immutable, this method essentially functions as the setter for the date-time's `Temporal/PlainDateTime/calendarId` property.

To replace the date-time component properties, use the `Temporal/PlainDateTime/with` method instead.

## Syntax

```js-nolint
withCalendar(calendar)
```

### Parameters

- `calendar`
  - : A string that corresponds to the `Temporal/PlainDateTime/calendarId` property. See [`Intl.supportedValuesOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) for a list of commonly supported calendar types.

### Return value

A new `Temporal.PlainDateTime` object, representing the date-time specified by the original `PlainDateTime`, interpreted in the new calendar system.

### Exceptions

- `TypeError`
  - : Thrown if `calendar` is not a string.
- `RangeError`
  - : Thrown if `calendar` is not a valid calendar identifier.

## Examples

### Using withCalendar()

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T12:34:56");
const newDT = dt.withCalendar("islamic-umalqura");
console.log(newDT.toLocaleString("en-US", { calendar: "islamic-umalqura" }));
// 11/21/1442 AH, 12:34:56 PM
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainDateTime`
- `Temporal/PlainDateTime/with`
- {{jsxref("Temporal/PlainDateTime/withPlainTime", "Temporal.PlainDateTime.prototype.withPlainTime()")}}
- `Temporal/PlainDateTime/from`
- `Temporal/PlainDateTime/calendarId`
