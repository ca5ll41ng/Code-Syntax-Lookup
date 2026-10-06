---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaindate-month"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainDate.prototype.month"
title: "Temporal.PlainDate.prototype.month"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\plaindate\\month\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/month"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainDate.prototype.month

The **`month`** accessor property of `Temporal.PlainDate` instances returns a positive integer representing the 1-based month index in the year of this date. The first month of this year is `1`, and the last month is the `Temporal/PlainDate/monthsInYear`. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

Note that unlike `Date.prototype.getMonth()`, the index is 1-based. If the calendar has leap months, then the month with the same `Temporal/PlainDate/monthCode` may have different `month` indexes for different years.

> [!NOTE]
> Do not use this property to identify the actual month, including its name. Use `Temporal/PlainDate/monthCode` for that purpose. Use `month` only for identifying months within the context of a year, or to figure out their order.

The set accessor of `month` is `undefined`. You cannot change this property directly. Use the `Temporal/PlainDate/with` method to create a new `Temporal.PlainDate` object with the desired new value.

## Examples

### Using month

```js
const date = Temporal.PlainDate.from("2021-07-01"); // ISO 8601 calendar
console.log(date.monthCode); // "M07"
console.log(date.month); // 7

const date2 = Temporal.PlainDate.from("2021-05-01[u-ca=chinese]");
console.log(date2.monthCode); // "M03"
console.log(date2.month); // 3; it is March 20 in the Chinese calendar

const date3 = Temporal.PlainDate.from("2023-05-01[u-ca=chinese]");
console.log(date3.monthCode); // "M03"
console.log(date3.month); // 4, although it is also March (M03)!

const date4 = Temporal.PlainDate.from("2023-04-01[u-ca=chinese]");
console.log(date4.monthCode); // "M02L"
console.log(date4.month); // 3, this month is a leap month, i.e. a duplicate February
```

### Looping through all months in a year

```js
const year = Temporal.PlainDate.from("2021-07-14"); // An arbitrary date in the year
for (
  let month = year.with({ month: 1 });
  month.year === year.year;
  month = month.add({ months: 1 })
) {
  console.log(month.month);
}
```

Alternatively, this is also a safe way (unlike the [day example](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/day#looping_through_all_days_in_a_month)):

```js
for (let month = 1; month <= year.monthsInYear; month++) {
  const monthDate = year.with({ month });
}
```

### Changing month

```js
const date = Temporal.PlainDate.from("2021-07-01");
const newDate = date.with({ month: 2 });
console.log(newDate.toString()); // 2021-02-01
```

You can also use `Temporal/PlainDate/add` or `Temporal/PlainDate/subtract` to move a certain number of months from the current date.

```js
const date = Temporal.PlainDate.from("2021-07-01");
const newDate = date.add({ months: 3 });
console.log(newDate.toString()); // 2021-10-01
```

By default, `with()` constrains the day to the range of valid values. Both of the following will set the month to the last month of the year:

```js
const date = Temporal.PlainDate.from("2021-07-01");
const lastMonth = date.with({ month: date.monthsInYear }); // 2021-12-01
const lastMonth2 = date.with({ month: Number.MAX_VALUE }); // 2021-12-01
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainDate`
- `Temporal/PlainDate/with`
- `Temporal/PlainDate/add`
- `Temporal/PlainDate/subtract`
- `Temporal/PlainDate/year`
- `Temporal/PlainDate/day`
- `Temporal/PlainDate/monthCode`
- `Temporal/PlainDate/daysInMonth`
- `Temporal/PlainDate/monthsInYear`
