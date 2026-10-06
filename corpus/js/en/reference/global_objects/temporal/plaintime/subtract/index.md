---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaintime-subtract"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainTime.prototype.subtract"
title: "Temporal.PlainTime.prototype.subtract()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\temporal\\plaintime\\subtract\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/subtract"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainTime.prototype.subtract()

The **`subtract()`** method of `Temporal.PlainTime` instances returns a new `Temporal.PlainTime` object representing this time moved backward by a given duration (in a form convertible by `Temporal/Duration/from`), wrapping around the clock if necessary.

If you want to subtract two times and get a duration, use `Temporal/PlainTime/since` or `Temporal/PlainTime/until` instead.

## Syntax

```js-nolint
subtract(duration)
```

### Parameters

- `duration`
  - : A string, an object, or a `Temporal.Duration` instance representing a duration to subtract from this time. It is converted to a `Temporal.Duration` object using the same algorithm as `Temporal/Duration/from`.

### Return value

A new `Temporal.PlainTime` object representing the time specified by the original `PlainTime`, minus the duration.

Subtracting a duration is equivalent to [adding](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/add) its [negation](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated), so all the same considerations apply.

## Examples

### Subtracting a duration

```js
const start = Temporal.PlainTime.from("12:34:56");
const end = start.subtract({ hours: 1, minutes: 30 });
console.log(end.toString()); // 11:04:56
```

For more examples, see `Temporal/PlainTime/add`.

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainTime`
- `Temporal.Duration`
- `Temporal/PlainTime/add`
- `Temporal/PlainTime/since`
- `Temporal/PlainTime/until`
