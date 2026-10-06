---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaindatetime-daysinyear"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainDateTime.prototype.daysInYear"
title: "Temporal.PlainDateTime.prototype.daysInYear"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\plaindatetime\\daysinyear\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/daysInYear"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainDateTime.prototype.daysInYear

The **`daysInYear`** accessor property of `Temporal.PlainDateTime` instances returns a positive integer representing the number of days in the year of this date. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

The set accessor of `daysInYear` is `undefined`. You cannot change this property directly.

For general information and more examples, see `Temporal/PlainDate/daysInYear`.

## Examples

### Using daysInYear

```js
const dt = Temporal.PlainDateTime.from("2021-07-01");
console.log(dt.daysInYear); // 365
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainDateTime`
- `Temporal/PlainDateTime/with`
- `Temporal/PlainDateTime/add`
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
- `Temporal/PlainDateTime/year`
- `Temporal/PlainDateTime/dayOfYear`
- `Temporal/PlainDateTime/daysInMonth`
- `Temporal/PlainDateTime/daysInWeek`
- `Temporal/PlainDate/daysInYear`
