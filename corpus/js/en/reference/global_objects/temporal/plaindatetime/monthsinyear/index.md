---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaindatetime-monthsinyear"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainDateTime.prototype.monthsInYear"
title: "Temporal.PlainDateTime.prototype.monthsInYear"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\plaindatetime\\monthsinyear\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/monthsInYear"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainDateTime.prototype.monthsInYear

The **`monthsInYear`** accessor property of `Temporal.PlainDateTime` instances returns a positive integer representing the number of months in the year of this date. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

The set accessor of `monthsInYear` is `undefined`. You cannot change this property directly.

For general information and more examples, see `Temporal/PlainDate/monthsInYear`.

## Examples

### Using monthsInYear

```js
const dt = Temporal.PlainDateTime.from("2021-07-01");
console.log(dt.monthsInYear); // 12
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainDateTime`
- `Temporal/PlainDateTime/with`
- `Temporal/PlainDateTime/add`
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
- `Temporal/PlainDateTime/year`
- `Temporal/PlainDateTime/month`
- `Temporal/PlainDateTime/monthCode`
- `Temporal/PlainDateTime/daysInMonth`
- `Temporal/PlainDate/monthsInYear`
