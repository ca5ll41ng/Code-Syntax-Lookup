---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaindatetime-calendarid"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainDateTime.prototype.calendarId"
title: "Temporal.PlainDateTime.prototype.calendarId"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\plaindatetime\\calendarid\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/calendarId"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainDateTime.prototype.calendarId

The **`calendarId`** accessor property of `Temporal.PlainDateTime` instances returns a string representing the [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) used to interpret the internal ISO 8601 date.

See [`Intl.supportedValuesOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) for a list of commonly supported calendar types.

The set accessor of `calendarId` is `undefined`. You cannot change this property directly. Use the `Temporal/PlainDateTime/withCalendar` method to create a new `Temporal.PlainDateTime` object with the desired new value.

## Examples

### Using calendarId

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T08:00:00");
console.log(dt.calendarId); // "iso8601"; default

const dt2 = Temporal.PlainDateTime.from("2021-07-01T08:00:00[u-ca=chinese]");
console.log(dt2.calendarId); // "chinese"

const dt3 = dt2.withCalendar("hebrew");
console.log(dt3.calendarId); // "hebrew"
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainDateTime`
