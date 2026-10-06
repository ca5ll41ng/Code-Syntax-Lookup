---
id: "js-en-function-web-javascript-reference-global_objects-temporal-zoneddatetime-millisecond"
language: "js"
lang: "en"
category: "function"
name: "Temporal.ZonedDateTime.prototype.millisecond"
title: "Temporal.ZonedDateTime.prototype.millisecond"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\zoneddatetime\\millisecond\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/millisecond"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.ZonedDateTime.prototype.millisecond

The **`millisecond`** accessor property of `Temporal.ZonedDateTime` instances returns an integer from 0 to 999 representing the millisecond (10<sup>-3</sup> second) component of this time.

The set accessor of `millisecond` is `undefined`. You cannot change this property directly. Use the `Temporal/ZonedDateTime/with` method to create a new `Temporal.ZonedDateTime` object with the desired new value.

For general information and more examples, see `Temporal/PlainTime/millisecond`.

## Examples

### Using millisecond

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.123456789-04:00[America/New_York]",
);
console.log(dt.millisecond); // 123
```

## Specifications

## Browser compatibility

## See also

- `Temporal.ZonedDateTime`
- `Temporal/ZonedDateTime/with`
- `Temporal/ZonedDateTime/add`
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- `Temporal/ZonedDateTime/second`
- `Temporal/ZonedDateTime/microsecond`
- `Temporal/ZonedDateTime/nanosecond`
- `Temporal/PlainTime/millisecond`
