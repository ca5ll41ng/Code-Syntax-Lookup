---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaindatetime-until"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainDateTime.prototype.until"
title: "Temporal.PlainDateTime.prototype.until()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\temporal\\plaindatetime\\until\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/until"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainDateTime.prototype.until()

The **`until()`** method of `Temporal.PlainDateTime` instances returns a new `Temporal.Duration` object representing the duration from this date-time to another date-time (in a form convertible by `Temporal/PlainDateTime/from`). The duration is positive if the other date-time is after this date-time, and negative if before.

This method does `other - this`. To do `this - other`, use the `Temporal/PlainDateTime/since` method.

## Syntax

```js-nolint
until(other)
until(other, options)
```

### Parameters

- `other`
  - : A string, an object, or a `Temporal.PlainDateTime` instance representing a date-time to subtract this date-time from. It is converted to a `Temporal.PlainDateTime` object using the same algorithm as `Temporal/PlainDateTime/from`. It must have the same calendar as `this`.
- `options` 
  - : The same options as [`since()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/since#options).

### Return value

A new `Temporal.Duration` object representing the duration from this date-time _until_ `other`. The duration is positive if `other` is after this date-time, and negative if before.

### Exceptions

- `RangeError`
  - : Thrown in one of the following cases:
    - `other` has a different calendar than `this`.
    - Any of the options is invalid.

## Examples

### Using until()

```js
let nextBilling = Temporal.PlainDateTime.from({
  year: Temporal.Now.plainDateISO().year,
  month: 4,
  day: 1,
});
const now = Temporal.Now.plainDateTimeISO().round("second");
if (Temporal.PlainDateTime.compare(nextBilling, now) < 0) {
  nextBilling = nextBilling.add({ years: 1 });
}
const duration = now.until(nextBilling);
console.log(`${duration.toLocaleString("en-US")} until next billing`);
```

For more examples, see [`since()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/since).

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainDateTime`
- `Temporal.Duration`
- `Temporal/PlainDateTime/add`
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
- {{jsxref("Temporal/PlainDateTime/since", "Temporal.PlainDateTime.prototype.since()")}}
