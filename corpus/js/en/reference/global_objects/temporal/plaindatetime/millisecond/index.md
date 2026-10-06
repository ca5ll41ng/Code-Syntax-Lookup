---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaindatetime-millisecond"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainDateTime.prototype.millisecond"
title: "Temporal.PlainDateTime.prototype.millisecond"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\plaindatetime\\millisecond\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/millisecond"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainDateTime.prototype.millisecond

The **`millisecond`** accessor property of `Temporal.PlainDateTime` instances returns an integer from 0 to 999 representing the millisecond (10<sup>-3</sup> second) component of this time.

The set accessor of `millisecond` is `undefined`. You cannot change this property directly. Use the `Temporal/PlainDateTime/with` method to create a new `Temporal.PlainDateTime` object with the desired new value.

For general information and more examples, see `Temporal/PlainTime/millisecond`.

## Examples

### Using millisecond

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T12:34:56.123456789");
console.log(dt.millisecond); // 123
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainDateTime`
- `Temporal/PlainDateTime/with`
- `Temporal/PlainDateTime/add`
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
- `Temporal/PlainDateTime/second`
- `Temporal/PlainDateTime/microsecond`
- `Temporal/PlainDateTime/nanosecond`
- `Temporal/PlainTime/millisecond`
