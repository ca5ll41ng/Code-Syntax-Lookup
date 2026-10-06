---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaindatetime-weekofyear"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainDateTime.prototype.weekOfYear"
title: "Temporal.PlainDateTime.prototype.weekOfYear"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\plaindatetime\\weekofyear\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/weekOfYear"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainDateTime.prototype.weekOfYear

The **`weekOfYear`** accessor property of `Temporal.PlainDateTime` instances returns a positive integer representing the 1-based week index in the `Temporal/PlainDateTime/yearOfWeek` of this date, or `undefined` if the calendar does not have a well-defined week system. The first week of the year is `1`. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

The set accessor of `weekOfYear` is `undefined`. You cannot change this property directly. To create a new `Temporal.PlainDateTime` object with the desired new `weekOfYear` value, use the `Temporal/PlainDateTime/add` or `Temporal/PlainDateTime/subtract` method with the appropriate number of `weeks`.

For general information and more examples, see `Temporal/PlainDate/weekOfYear`.

## Examples

### Using weekOfYear

```js
const dt = Temporal.PlainDateTime.from("2021-07-01");
console.log(dt.weekOfYear); // 26
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainDateTime`
- `Temporal/PlainDateTime/with`
- `Temporal/PlainDateTime/add`
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
- `Temporal/PlainDateTime/yearOfWeek`
- `Temporal/PlainDateTime/dayOfWeek`
- `Temporal/PlainDateTime/daysInWeek`
- `Temporal/PlainDateTime/daysInYear`
- `Temporal/PlainDate/weekOfYear`
