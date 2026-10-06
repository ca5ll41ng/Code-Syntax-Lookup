---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaindatetime-withplaintime"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainDateTime.prototype.withPlainTime"
title: "Temporal.PlainDateTime.prototype.withPlainTime()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\temporal\\plaindatetime\\withplaintime\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/withPlainTime"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainDateTime.prototype.withPlainTime()

The **`withPlainTime()`** method of `Temporal.PlainDateTime` instances returns a new `Temporal.PlainDateTime` object representing this date-time with the time part entirely replaced by the new time (in a form convertible by `Temporal/PlainTime/from`)

This method will replace all time properties, defaulting to `0` where properties are unspecified. If you only want to replace some of the time properties, use the `Temporal/PlainDateTime/with` method instead.

## Syntax

```js-nolint
withPlainTime()
withPlainTime(plainTime)
```

### Parameters

- `plainTime` 
  - : A string, an object, or a `Temporal.PlainTime` instance representing the new time. It is converted to a `Temporal.PlainTime` object using the same algorithm as `Temporal/PlainTime/from`. If not specified, the time part is set to `00:00:00`.

### Return value

A new `Temporal.PlainDateTime` object, with the date part copied from the original date-time and the time part replaced by the new time.

## Examples

### Using withPlainTime()

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T12:34:56");

// You can pass a string
const newDT = dt.withPlainTime("13:45:00");
console.log(newDT.toString()); // "2021-07-01T13:45:00"

// You can only specify some time properties, and the rest default to 0;
// for the with() method, they would be copied from the original date-time
const newDT2 = dt.withPlainTime({ hour: 13 });
console.log(newDT2.toString()); // "2021-07-01T13:00:00"

// You can pass nothing to set the time to midnight
const newDT3 = dt.withPlainTime();
console.log(newDT3.toString()); // "2021-07-01T00:00:00"
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainDateTime`
- `Temporal/PlainDateTime/with`
- {{jsxref("Temporal/PlainDateTime/withCalendar", "Temporal.PlainDateTime.prototype.withCalendar()")}}
- {{jsxref("Temporal/PlainDateTime/toPlainTime", "Temporal.PlainDateTime.prototype.toPlainTime()")}}
- `Temporal/PlainDateTime/from`
