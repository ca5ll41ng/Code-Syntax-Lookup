---
id: "js-en-function-web-javascript-reference-global_objects-temporal-zoneddatetime-weekofyear"
language: "js"
lang: "en"
category: "function"
name: "Temporal.ZonedDateTime.prototype.weekOfYear"
title: "Temporal.ZonedDateTime.prototype.weekOfYear"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\zoneddatetime\\weekofyear\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/weekOfYear"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.ZonedDateTime.prototype.weekOfYear

The **`weekOfYear`** accessor property of `Temporal.ZonedDateTime` instances returns a positive integer representing the 1-based week index in the `Temporal/ZonedDateTime/yearOfWeek` of this date, or `undefined` if the calendar does not have a well-defined week system. The first week of the year is `1`. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

The set accessor of `weekOfYear` is `undefined`. You cannot change this property directly. To create a new `Temporal.ZonedDateTime` object with the desired new `weekOfYear` value, use the `Temporal/ZonedDateTime/add` or `Temporal/ZonedDateTime/subtract` method with the appropriate number of `weeks`.

For general information and more examples, see `Temporal/PlainDate/weekOfYear`.

## Examples

### Using weekOfYear

```js
const dt = Temporal.ZonedDateTime.from("2021-07-01[America/New_York]");
console.log(dt.weekOfYear); // 26
```

## Specifications

## Browser compatibility

## See also

- `Temporal.ZonedDateTime`
- `Temporal/ZonedDateTime/with`
- `Temporal/ZonedDateTime/add`
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- `Temporal/ZonedDateTime/yearOfWeek`
- `Temporal/ZonedDateTime/dayOfWeek`
- `Temporal/ZonedDateTime/daysInWeek`
- `Temporal/ZonedDateTime/daysInYear`
- `Temporal/PlainDate/weekOfYear`
