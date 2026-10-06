---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaindate-daysinyear"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainDate.prototype.daysInYear"
title: "Temporal.PlainDate.prototype.daysInYear"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\plaindate\\daysinyear\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/daysInYear"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainDate.prototype.daysInYear

The **`daysInYear`** accessor property of `Temporal.PlainDate` instances returns a positive integer representing the number of days in the year of this date. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

For the ISO 8601 calendar, this is 365, or 366 in a leap year. In other calendar systems, it likely differs, especially in non-solar calendars.

The set accessor of `daysInWeek` is `undefined`. You cannot change this property directly.

## Examples

### Using daysInYear

```js
const date = Temporal.PlainDate.from("2021-07-01");
console.log(date.daysInYear); // 365

const date2 = Temporal.PlainDate.from("2020-07-01");
console.log(date2.daysInYear); // 366; 2020 is a leap year

const date3 = Temporal.PlainDate.from("2021-07-01[u-ca=chinese]");
console.log(date3.daysInYear); // 354

const date4 = Temporal.PlainDate.from("2023-07-01[u-ca=chinese]");
console.log(date4.daysInYear); // 384; 2023 is a Chinese leap year
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainDate`
- `Temporal/PlainDate/with`
- `Temporal/PlainDate/add`
- `Temporal/PlainDate/subtract`
- `Temporal/PlainDate/year`
- `Temporal/PlainDate/dayOfYear`
- `Temporal/PlainDate/daysInMonth`
- `Temporal/PlainDate/daysInWeek`
