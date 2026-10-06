---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaintime-until"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainTime.prototype.until"
title: "Temporal.PlainTime.prototype.until()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\temporal\\plaintime\\until\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/until"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainTime.prototype.until()

The **`until()`** method of `Temporal.PlainTime` instances returns a new `Temporal.Duration` object representing the duration from this time to another time (in a form convertible by `Temporal/PlainTime/from`). The duration is positive if the other time is after this time, and negative if before.

This method does `other - this`. To do `this - other`, use the `Temporal/PlainTime/since` method.

## Syntax

```js-nolint
until(other)
until(other, options)
```

### Parameters

- `other`
  - : A string, an object, or a `Temporal.PlainTime` instance representing a time to subtract this time from. It is converted to a `Temporal.PlainTime` object using the same algorithm as `Temporal/PlainTime/from`. It must have the same calendar as `this`.
- `options` 
  - : The same options as [`since()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/since#options).

### Return value

A new `Temporal.Duration` object representing the duration from this time _until_ `other`. The duration is positive if `other` is after this time, and negative if before.

### Exceptions

- `RangeError`
  - : Thrown if any of the options is invalid.

## Examples

### Using until()

```js
const lunchTime = Temporal.PlainTime.from("12:30:00");
const now = Temporal.Now.plainTimeISO();
const duration = now.until(lunchTime);
console.log(`It will be ${duration.toLocaleString("en-US")} until lunch`);
// Example output: "It will be 3 hr, 42 min, 21 sec, 343 ms, 131 μs, 718 ns until lunch"
```

For more examples, see [`since()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/since).

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainTime`
- `Temporal.Duration`
- `Temporal/PlainTime/add`
- `Temporal/PlainTime/subtract`
- `Temporal/PlainTime/since`
