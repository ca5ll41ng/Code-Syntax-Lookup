---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaindatetime-daysinweek"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainDateTime.prototype.daysInWeek"
title: "Temporal.PlainDateTime.prototype.daysInWeek"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\plaindatetime\\daysinweek\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/daysInWeek"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainDateTime.prototype.daysInWeek

The **`daysInWeek`** accessor property of `Temporal.PlainDateTime` instances returns a positive integer representing the number of days in the week of this date. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

The set accessor of `daysInWeek` is `undefined`. You cannot change this property directly.

For general information and more examples, see `Temporal/PlainDate/daysInWeek`.

## Examples

### Using daysInWeek

```js
const dt = Temporal.PlainDateTime.from("2021-07-01");
console.log(dt.daysInWeek); // 7
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainDateTime`
- `Temporal/PlainDateTime/with`
- `Temporal/PlainDateTime/add`
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
- `Temporal/PlainDateTime/yearOfWeek`
- `Temporal/PlainDateTime/weekOfYear`
- `Temporal/PlainDateTime/dayOfWeek`
- `Temporal/PlainDateTime/daysInMonth`
- `Temporal/PlainDateTime/daysInYear`
- `Temporal/PlainDate/daysInWeek`
