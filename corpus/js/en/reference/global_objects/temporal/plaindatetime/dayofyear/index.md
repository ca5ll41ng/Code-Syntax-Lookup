---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaindatetime-dayofyear"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainDateTime.prototype.dayOfYear"
title: "Temporal.PlainDateTime.prototype.dayOfYear"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\plaindatetime\\dayofyear\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/dayOfYear"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainDateTime.prototype.dayOfYear

The **`dayOfYear`** accessor property of `Temporal.PlainDateTime` instances returns a positive integer representing the 1-based day index in the year of this date. The first day of this year is `1`, and the last day is the `Temporal/PlainDateTime/daysInYear`. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

The set accessor of `dayOfYear` is `undefined`. You cannot change this property directly. To create a new `Temporal.PlainDateTime` object with the desired new `dayOfYear` value, use the `Temporal/PlainDateTime/add` or `Temporal/PlainDateTime/subtract` method with the appropriate number of `days`.

For general information and more examples, see `Temporal/PlainDate/dayOfYear`.

## Examples

### Using dayOfYear

```js
const dt = Temporal.PlainDateTime.from("2021-07-01");
console.log(dt.dayOfYear); // 182
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainDateTime`
- `Temporal/PlainDateTime/with`
- `Temporal/PlainDateTime/add`
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
- `Temporal/PlainDateTime/year`
- `Temporal/PlainDateTime/day`
- `Temporal/PlainDateTime/dayOfWeek`
- `Temporal/PlainDateTime/daysInYear`
- `Temporal/PlainDate/dayOfYear`
