---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaindatetime-nanosecond"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainDateTime.prototype.nanosecond"
title: "Temporal.PlainDateTime.prototype.nanosecond"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\plaindatetime\\nanosecond\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/nanosecond"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainDateTime.prototype.nanosecond

The **`nanosecond`** accessor property of `Temporal.PlainDateTime` instances returns an integer from 0 to 999 representing the nanosecond (10<sup>-9</sup> second) component of this time.

The set accessor of `nanosecond` is `undefined`. You cannot change this property directly. Use the `Temporal/PlainDateTime/with` method to create a new `Temporal.PlainDateTime` object with the desired new value.

For general information and more examples, see `Temporal/PlainTime/nanosecond`.

## Examples

### Using nanosecond

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T12:34:56.123456789");
console.log(dt.nanosecond); // 789
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainDateTime`
- `Temporal/PlainDateTime/with`
- `Temporal/PlainDateTime/add`
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
- `Temporal/PlainDateTime/second`
- `Temporal/PlainDateTime/millisecond`
- `Temporal/PlainDateTime/microsecond`
- `Temporal/PlainTime/nanosecond`
