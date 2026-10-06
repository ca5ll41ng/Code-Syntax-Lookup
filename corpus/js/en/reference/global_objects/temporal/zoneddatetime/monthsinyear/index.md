---
id: "js-en-function-web-javascript-reference-global_objects-temporal-zoneddatetime-monthsinyear"
language: "js"
lang: "en"
category: "function"
name: "Temporal.ZonedDateTime.prototype.monthsInYear"
title: "Temporal.ZonedDateTime.prototype.monthsInYear"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\zoneddatetime\\monthsinyear\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/monthsInYear"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.ZonedDateTime.prototype.monthsInYear

The **`monthsInYear`** accessor property of `Temporal.ZonedDateTime` instances returns a positive integer representing the number of months in the year of this date. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

The set accessor of `monthsInYear` is `undefined`. You cannot change this property directly.

For general information and more examples, see `Temporal/PlainDate/monthsInYear`.

## Examples

### Using monthsInYear

```js
const dt = Temporal.ZonedDateTime.from("2021-07-01[America/New_York]");
console.log(dt.monthsInYear); // 12
```

## Specifications

## Browser compatibility

## See also

- `Temporal.ZonedDateTime`
- `Temporal/ZonedDateTime/with`
- `Temporal/ZonedDateTime/add`
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- `Temporal/ZonedDateTime/year`
- `Temporal/ZonedDateTime/month`
- `Temporal/ZonedDateTime/monthCode`
- `Temporal/ZonedDateTime/daysInMonth`
- `Temporal/PlainDate/monthsInYear`
