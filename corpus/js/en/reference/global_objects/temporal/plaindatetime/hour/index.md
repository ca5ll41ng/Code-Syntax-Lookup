---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaindatetime-hour"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainDateTime.prototype.hour"
title: "Temporal.PlainDateTime.prototype.hour"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\plaindatetime\\hour\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/hour"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainDateTime.prototype.hour

The **`hour`** accessor property of `Temporal.PlainDateTime` instances returns an integer from 0 to 23 representing the hour component of this time.

The set accessor of `hour` is `undefined`. You cannot change this property directly. Use the `Temporal/PlainDateTime/with` method to create a new `Temporal.PlainDateTime` object with the desired new value.

For general information and more examples, see `Temporal/PlainTime/hour`.

## Examples

### Using hour

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T12:34:56.123456789");
console.log(dt.hour); // 12
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainDateTime`
- `Temporal/PlainDateTime/with`
- `Temporal/PlainDateTime/add`
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
- `Temporal/PlainTime/hour`
