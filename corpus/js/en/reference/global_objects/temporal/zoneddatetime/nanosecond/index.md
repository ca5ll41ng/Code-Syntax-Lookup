---
id: "js-en-function-web-javascript-reference-global_objects-temporal-zoneddatetime-nanosecond"
language: "js"
lang: "en"
category: "function"
name: "Temporal.ZonedDateTime.prototype.nanosecond"
title: "Temporal.ZonedDateTime.prototype.nanosecond"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\zoneddatetime\\nanosecond\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/nanosecond"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.ZonedDateTime.prototype.nanosecond

The **`nanosecond`** accessor property of `Temporal.ZonedDateTime` instances returns an integer from 0 to 999 representing the nanosecond (10<sup>-9</sup> second) component of this time.

The set accessor of `nanosecond` is `undefined`. You cannot change this property directly. Use the `Temporal/ZonedDateTime/with` method to create a new `Temporal.ZonedDateTime` object with the desired new value.

For general information and more examples, see `Temporal/PlainTime/nanosecond`.

## Examples

### Using nanosecond

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.123456789-04:00[America/New_York]",
);
console.log(dt.nanosecond); // 789
```

## Specifications

## Browser compatibility

## See also

- `Temporal.ZonedDateTime`
- `Temporal/ZonedDateTime/with`
- `Temporal/ZonedDateTime/add`
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- `Temporal/ZonedDateTime/second`
- `Temporal/ZonedDateTime/millisecond`
- `Temporal/ZonedDateTime/microsecond`
- `Temporal/PlainTime/nanosecond`
