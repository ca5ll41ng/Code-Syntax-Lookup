---
id: "js-en-function-web-javascript-reference-global_objects-temporal-zoneddatetime-inleapyear"
language: "js"
lang: "en"
category: "function"
name: "Temporal.ZonedDateTime.prototype.inLeapYear"
title: "Temporal.ZonedDateTime.prototype.inLeapYear"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\zoneddatetime\\inleapyear\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/inLeapYear"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.ZonedDateTime.prototype.inLeapYear

The **`inLeapYear`** accessor property of `Temporal.ZonedDateTime` instances returns a boolean indicating whether this date is in a leap year. A leap year is a year that has more days (due to a leap day or leap month) than a common year. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

The set accessor of `inLeapYear` is `undefined`. You cannot change this property directly.

For general information and more examples, see `Temporal/PlainDate/inLeapYear`.

## Examples

### Using inLeapYear

```js
const dt = Temporal.ZonedDateTime.from("2021-07-01[America/New_York]");
console.log(dt.inLeapYear); // false
console.log(dt.daysInYear); // 365
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
- `Temporal/ZonedDateTime/daysInYear`
- `Temporal/ZonedDateTime/monthsInYear`
- `Temporal/PlainDate/inLeapYear`
