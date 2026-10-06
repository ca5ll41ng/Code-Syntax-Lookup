---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaindatetime-daysinmonth"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainDateTime.prototype.daysInMonth"
title: "Temporal.PlainDateTime.prototype.daysInMonth"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\plaindatetime\\daysinmonth\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/daysInMonth"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainDateTime.prototype.daysInMonth

The **`daysInMonth`** accessor property of `Temporal.PlainDateTime` instances returns a positive integer representing the number of days in the month of this date. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

The set accessor of `daysInMonth` is `undefined`. You cannot change this property directly.

For general information and more examples, see `Temporal/PlainDate/daysInMonth`.

## Examples

### Using daysInMonth

```js
const dt = Temporal.PlainDateTime.from("2021-07-01");
console.log(dt.daysInMonth); // 31
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
- `Temporal/PlainDateTime/day`
- `Temporal/PlainDateTime/daysInWeek`
- `Temporal/PlainDateTime/daysInYear`
- `Temporal/PlainDate/daysInMonth`
