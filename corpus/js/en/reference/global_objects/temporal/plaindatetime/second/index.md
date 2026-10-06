---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaindatetime-second"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainDateTime.prototype.second"
title: "Temporal.PlainDateTime.prototype.second"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\plaindatetime\\second\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/second"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainDateTime.prototype.second

The **`second`** accessor property of `Temporal.PlainDateTime` instances returns an integer from 0 to 59 representing the second component of this time.

The set accessor of `second` is `undefined`. You cannot change this property directly. Use the `Temporal/PlainDateTime/with` method to create a new `Temporal.PlainDateTime` object with the desired new value.

For general information and more examples, see `Temporal/PlainTime/second`.

## Examples

### Using second

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T12:34:56.123456789");
console.log(dt.second); // 56
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainDateTime`
- `Temporal/PlainDateTime/with`
- `Temporal/PlainDateTime/add`
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
- `Temporal/PlainDateTime/millisecond`
- `Temporal/PlainDateTime/microsecond`
- `Temporal/PlainDateTime/nanosecond`
- `Temporal/PlainTime/second`
