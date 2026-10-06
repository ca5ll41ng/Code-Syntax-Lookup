---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaindate-tostring"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainDate.prototype.toString"
title: "Temporal.PlainDate.prototype.toString()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\temporal\\plaindate\\tostring\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toString"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainDate.prototype.toString()

The **`toString()`** method of `Temporal.PlainDate` instances returns a string representing this date in the [RFC 9557 format](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#rfc_9557_format).

## Syntax

```js-nolint
toString()
toString(options)
```

### Parameters

- `options` 
  - : An object containing the following property:
    - `calendarName` 
      - : Whether to show the calendar annotation (`[u-ca=calendar_id]`) in the return value. Possible values are:
        - `"auto"` (default)
          - : Include the calendar annotation if the calendar is not `"iso8601"`.
        - `"always"`
          - : Always include the calendar annotation.
        - `"never"`
          - : Never include the calendar annotation. This makes the returned string not recoverable to the same `Temporal.PlainDate` instance, although the date value still remains the same.
        - `"critical"`
          - : Always include the calendar annotation, and add a critical flag: `[!u-ca=calendar_id]`. Useful when sending the string to certain systems, but not useful for Temporal itself.

### Return value

A string in the [RFC 9557 format](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#rfc_9557_format) representing this date. The calendar annotation is included as specified.

### Exceptions

- `RangeError`
  - : Thrown if any of the options is invalid.
- `TypeError`
  - : Thrown if `options` is not an object or `undefined`.

## Examples

### Using toString()

```js
const date = Temporal.PlainDate.from("2021-08-01");
console.log(date.toString()); // '2021-08-01'
```

### Using options

```js
const isoDate = Temporal.PlainDate.from({ year: 2021, month: 8, day: 1 });
const date = Temporal.PlainDate.from({
  year: 2021,
  month: 8,
  day: 1,
  calendar: "islamic-umalqura",
});
console.log(isoDate.toString({ calendarName: "auto" })); // '2021-08-01'
console.log(date.toString({ calendarName: "auto" })); // '2582-12-17[u-ca=islamic-umalqura]'
console.log(isoDate.toString({ calendarName: "always" })); // '2021-08-01[u-ca=iso8601]'
console.log(date.toString({ calendarName: "always" })); // '2582-12-17[u-ca=islamic-umalqura]'
console.log(date.toString({ calendarName: "never" })); // '2582-12-17'
console.log(isoDate.toString({ calendarName: "critical" })); // '2021-08-01[!u-ca=iso8601]'
console.log(date.toString({ calendarName: "critical" })); // '2582-12-17[!u-ca=islamic-umalqura]'
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainDate`
- `Temporal/PlainDate/from`
- `Temporal/PlainDate/toJSON`
- {{jsxref("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}
