---
id: "js-en-function-web-javascript-reference-global_objects-temporal-now-plaindateiso"
language: "js"
lang: "en"
category: "function"
name: "Temporal.Now.plainDateISO"
title: "Temporal.Now.plainDateISO()"
directive: "javascript-static-method"
module: "reference\\global_objects\\temporal\\now\\plaindateiso\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Now/plainDateISO"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.Now.plainDateISO()

The **`Temporal.Now.plainDateISO()`** static method returns the current date as a `Temporal.PlainDate` object, in the ISO 8601 calendar and the specified time zone.

## Syntax

```js-nolint
Temporal.Now.plainDateISO()
Temporal.Now.plainDateISO(timeZone)
```

### Parameters

- `timeZone` 
  - : Either a string or a `Temporal.ZonedDateTime` instance representing the time zone to interpret the system time in. If a `Temporal.ZonedDateTime` instance, its time zone is used. If a string, it can be a named time zone identifier, an offset time zone identifier, or a date-time string containing a time zone identifier or an offset (see [time zones and offsets](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) for more information).

### Return value

The current date in the specified time zone, as a `Temporal.PlainDate` object using the ISO 8601 calendar.

### Exceptions

- `RangeError`
  - : Thrown if the time zone is invalid.

## Examples

### Using Temporal.Now.plainDateISO()

```js
// The current date in the system's time zone
const date = Temporal.Now.plainDateISO();
console.log(date); // e.g.: 2021-10-01

// The current date in the "America/New_York" time zone
const dateInNewYork = Temporal.Now.plainDateISO("America/New_York");
console.log(dateInNewYork); // e.g.: 2021-09-30
```

## Specifications

## Browser compatibility

## See also

- `Temporal.Now`
- `Temporal.PlainDate`
