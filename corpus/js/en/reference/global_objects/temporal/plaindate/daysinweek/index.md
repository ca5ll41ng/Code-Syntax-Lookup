---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaindate-daysinweek"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainDate.prototype.daysInWeek"
title: "Temporal.PlainDate.prototype.daysInWeek"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\plaindate\\daysinweek\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/daysInWeek"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainDate.prototype.daysInWeek

The **`daysInWeek`** accessor property of `Temporal.PlainDate` instances returns a positive integer representing the number of days in the week of this date. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

For the ISO 8601 calendar, this is always 7, but in other calendar systems it may differ from week to week. All commonly supported calendars use 7-day weeks.

The set accessor of `daysInWeek` is `undefined`. You cannot change this property directly.

## Examples

### Using daysInWeek

```js
const date = Temporal.PlainDate.from("2021-07-01");
console.log(date.daysInWeek); // 7

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=chinese]");
console.log(date2.daysInWeek); // 7
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainDate`
- `Temporal/PlainDate/with`
- `Temporal/PlainDate/add`
- `Temporal/PlainDate/subtract`
- `Temporal/PlainDate/yearOfWeek`
- `Temporal/PlainDate/weekOfYear`
- `Temporal/PlainDate/dayOfWeek`
- `Temporal/PlainDate/daysInMonth`
- `Temporal/PlainDate/daysInYear`
