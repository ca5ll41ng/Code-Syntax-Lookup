---
id: "js-en-function-web-javascript-reference-global_objects-temporal-zoneddatetime-microsecond"
language: "js"
lang: "en"
category: "function"
name: "Temporal.ZonedDateTime.prototype.microsecond"
title: "Temporal.ZonedDateTime.prototype.microsecond"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\zoneddatetime\\microsecond\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/microsecond"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.ZonedDateTime.prototype.microsecond

The **`microsecond`** accessor property of `Temporal.ZonedDateTime` instances returns an integer from 0 to 999 representing the microsecond (10<sup>-6</sup> second) component of this time.

The set accessor of `microsecond` is `undefined`. You cannot change this property directly. Use the `Temporal/ZonedDateTime/with` method to create a new `Temporal.ZonedDateTime` object with the desired new value.

For general information and more examples, see `Temporal/PlainTime/microsecond`.

## Examples

### Using microsecond

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.123456789-04:00[America/New_York]",
);
console.log(dt.microsecond); // 456
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
- `Temporal/ZonedDateTime/nanosecond`
- `Temporal/PlainTime/microsecond`
