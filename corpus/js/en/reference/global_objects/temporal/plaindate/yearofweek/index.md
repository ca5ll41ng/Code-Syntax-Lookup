---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaindate-yearofweek"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainDate.prototype.yearOfWeek"
title: "Temporal.PlainDate.prototype.yearOfWeek"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\plaindate\\yearofweek\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/yearOfWeek"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainDate.prototype.yearOfWeek

The **`yearOfWeek`** accessor property of `Temporal.PlainDate` instances returns an integer representing the year to be paired with the `Temporal/PlainDate/weekOfYear` of this date, or `undefined` if the calendar does not have a well-defined week system. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

Usually this is the year of the date, but for ISO 8601, the first and last few days of the year may be attributed to the last week of the previous year or the first week of the next year, causing the `yearOfWeek` to differ by 1. See `Temporal/PlainDate/weekOfYear` for more details.

The set accessor of `yearOfWeek` is `undefined`. You cannot change this property directly.

## Examples

See the examples in the `Temporal/PlainDate/weekOfYear` page.

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainDate`
- `Temporal/PlainDate/with`
- `Temporal/PlainDate/add`
- `Temporal/PlainDate/subtract`
- `Temporal/PlainDate/year`
- `Temporal/PlainDate/weekOfYear`
- `Temporal/PlainDate/dayOfWeek`
- `Temporal/PlainDate/daysInWeek`
- `Temporal/PlainDate/daysInYear`
