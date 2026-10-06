---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaindate-monthsinyear"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainDate.prototype.monthsInYear"
title: "Temporal.PlainDate.prototype.monthsInYear"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\plaindate\\monthsinyear\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/monthsInYear"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainDate.prototype.monthsInYear

The **`monthsInYear`** accessor property of `Temporal.PlainDate` instances returns a positive integer representing the number of months in the year of this date. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

For the ISO 8601 calendar, this is always 12, but in other calendar systems it may differ. For example, in calendars using leap months, leap years will have one more month than common years.

The set accessor of `monthsInYear` is `undefined`. You cannot change this property directly.

## Examples

### Using monthsInYear

```js
const date = Temporal.PlainDate.from("2021-07-01");
console.log(date.monthsInYear); // 12

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=chinese]");
console.log(date2.monthsInYear); // 12

const date3 = Temporal.PlainDate.from("2023-07-01[u-ca=chinese]");
console.log(date3.monthsInYear); // 13; 2023 is a Chinese leap year
```

### Changing to the second last month of the year

You can use `monthsInYear` to change to the second last month of the year:

```js
const date = Temporal.PlainDate.from("2021-07-01");
const secondLastMonth = date.with({ month: date.monthsInYear - 1 });
console.log(secondLastMonth.toString()); // 2021-11-01
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainDate`
- `Temporal/PlainDate/with`
- `Temporal/PlainDate/add`
- `Temporal/PlainDate/subtract`
- `Temporal/PlainDate/year`
- `Temporal/PlainDate/month`
- `Temporal/PlainDate/monthCode`
- `Temporal/PlainDate/daysInMonth`
