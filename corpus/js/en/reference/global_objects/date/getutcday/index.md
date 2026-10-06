---
id: "js-en-function-web-javascript-reference-global_objects-date-getutcday"
language: "js"
lang: "en"
category: "function"
name: "Date.prototype.getUTCDay"
title: "Date.prototype.getUTCDay()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\date\\getutcday\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Date.prototype.getUTCDay()

The **`getUTCDay()`** method of `Date` instances returns the day of the week for this date according to universal time, where 0 represents Sunday.

`JavaScript Demo: Date.prototype.getUTCDay()`

```js interactive-example
const date1 = new Date("August 19, 1975 23:15:30 GMT+11:00");
const date2 = new Date("August 19, 1975 23:15:30 GMT-11:00");

// Tuesday
console.log(date1.getUTCDay());
// Expected output: 2

// Wednesday
console.log(date2.getUTCDay());
// Expected output: 3
```

## Syntax

```js-nolint
getUTCDay()
```

### Parameters

None.

### Return value

An integer corresponding to the day of the week for the given date according to universal time: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on. Returns `NaN` if the date is [invalid](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

## Examples

### Using getUTCDay()

The following example assigns the weekday portion of the current date to the variable `weekday`.

```js
const today = new Date();
const weekday = today.getUTCDay();
```

## Specifications

## Browser compatibility

## See also

- `Date.prototype.getUTCDate()`
- `Date.prototype.getDay()`
- `Date.prototype.setUTCDate()`
