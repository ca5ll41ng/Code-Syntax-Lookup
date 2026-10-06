---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaindatetime-dayofweek"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainDateTime.prototype.dayOfWeek"
title: "Temporal.PlainDateTime.prototype.dayOfWeek"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\plaindatetime\\dayofweek\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/dayOfWeek"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainDateTime.prototype.dayOfWeek

The **`dayOfWeek`** accessor property of `Temporal.PlainDateTime` instances returns a positive integer representing the 1-based day index in the week of this date. Days in a week are numbered sequentially from `1` to `Temporal/PlainDateTime/daysInWeek`, with each number mapping to its name. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

The set accessor of `dayOfWeek` is `undefined`. You cannot change this property directly. To create a new `Temporal.PlainDateTime` object with the desired new `dayOfWeek` value, use the `Temporal/PlainDateTime/add` or `Temporal/PlainDateTime/subtract` method with the appropriate number of `days`.

For general information and more examples, see `Temporal/PlainDate/dayOfWeek`.

## Examples

### Using dayOfWeek

```js
const dt = Temporal.PlainDateTime.from("2021-07-01");
console.log(dt.dayOfWeek); // 4; Thursday
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainDateTime`
- `Temporal/PlainDateTime/with`
- `Temporal/PlainDateTime/add`
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
- `Temporal/PlainDateTime/day`
- `Temporal/PlainDateTime/dayOfYear`
- `Temporal/PlainDateTime/daysInWeek`
- `Temporal/PlainDateTime/weekOfYear`
- `Temporal/PlainDateTime/yearOfWeek`
- `Temporal/PlainDate/dayOfWeek`
