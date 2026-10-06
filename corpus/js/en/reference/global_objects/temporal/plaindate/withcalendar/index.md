---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaindate-withcalendar"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainDate.prototype.withCalendar"
title: "Temporal.PlainDate.prototype.withCalendar()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\temporal\\plaindate\\withcalendar\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/withCalendar"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainDate.prototype.withCalendar()

The **`withCalendar()`** method of `Temporal.PlainDate` instances returns a new `Temporal.PlainDate` object representing this date interpreted in the new calendar system. Because all `Temporal` objects are designed to be immutable, this method essentially functions as the setter for the date's `Temporal/PlainDate/calendarId` property.

To replace the date component properties, use the `Temporal/PlainDate/with` method instead.

## Syntax

```js-nolint
withCalendar(calendar)
```

### Parameters

- `calendar`
  - : A string that corresponds to the `Temporal/PlainDate/calendarId` property. See [`Intl.supportedValuesOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) for a list of commonly supported calendar types.

### Return value

A new `Temporal.PlainDate` object, representing the date specified by the original `PlainDate`, interpreted in the new calendar system.

### Exceptions

- `TypeError`
  - : Thrown if `calendar` is not a string.
- `RangeError`
  - : Thrown if `calendar` is not a valid calendar identifier.

## Examples

### Using withCalendar()

```js
const date = Temporal.PlainDate.from("2021-07-01");
const newDate = date.withCalendar("islamic-umalqura");
console.log(newDate.toLocaleString("en-US", { calendar: "islamic-umalqura" }));
// 11/21/1442 AH
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainDate`
- `Temporal/PlainDate/with`
- `Temporal/PlainDate/from`
- `Temporal/PlainDate/calendarId`
