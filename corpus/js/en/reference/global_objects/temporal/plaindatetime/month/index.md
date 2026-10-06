---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaindatetime-month"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainDateTime.prototype.month"
title: "Temporal.PlainDateTime.prototype.month"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\plaindatetime\\month\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/month"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainDateTime.prototype.month

The **`month`** accessor property of `Temporal.PlainDateTime` instances returns a positive integer representing the 1-based month index in the year of this date. The first month of this year is `1`, and the last month is the `Temporal/PlainDateTime/monthsInYear`. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

The set accessor of `month` is `undefined`. You cannot change this property directly. Use the `Temporal/PlainDateTime/with` method to create a new `Temporal.PlainDateTime` object with the desired new value.

For general information and more examples, see `Temporal/PlainDate/month`.

## Examples

### Using month

```js
const dt = Temporal.PlainDateTime.from("2021-07-01"); // ISO 8601 calendar
console.log(dt.monthCode); // "M07"
console.log(dt.month); // 7
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
- `Temporal/PlainDateTime/monthCode`
- `Temporal/PlainDateTime/daysInMonth`
- `Temporal/PlainDateTime/monthsInYear`
- `Temporal/PlainDate/month`
