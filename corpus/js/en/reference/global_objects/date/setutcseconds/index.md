---
id: "js-en-function-web-javascript-reference-global_objects-date-setutcseconds"
language: "js"
lang: "en"
category: "function"
name: "Date.prototype.setUTCSeconds"
title: "Date.prototype.setUTCSeconds()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\date\\setutcseconds\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Date.prototype.setUTCSeconds()

The **`setUTCSeconds()`** method of `Date` instances changes the seconds and/or milliseconds for this date according to universal time.

`JavaScript Demo: Date.prototype.setUTCSeconds()`

```js interactive-example
const date = new Date("December 31, 1975, 23:15:30 GMT+11:00");

console.log(date.getUTCSeconds());
// Expected output: 30

date.setUTCSeconds(39);

console.log(date.getUTCSeconds());
// Expected output: 39
```

## Syntax

```js-nolint
setUTCSeconds(secondsValue)
setUTCSeconds(secondsValue, msValue)
```

### Parameters

- `secondsValue`
  - : An integer between 0 and 59 representing the seconds.
- `msValue` 
  - : An integer between 0 and 999 representing the milliseconds.

### Return value

Changes the `Date` object in place, and returns its new [timestamp](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date). If a parameter is `NaN` (or other values that get [coerced](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) to `NaN`, such as `undefined`), the date is set to [Invalid Date](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) and `NaN` is returned.

## Description

If you do not specify the `msValue` parameter, the value returned from the
`Date/getUTCMilliseconds` method is
used.

If a parameter you specify is outside of the expected range,
`setUTCSeconds()` attempts to update the date information in the
`Date` object accordingly. For example, if you use 100 for
`secondsValue`, the minutes stored in the `Date` object will be
incremented by 1, and 40 will be used for seconds.

## Examples

### Using setUTCSeconds()

```js
const theBigDay = new Date();
theBigDay.setUTCSeconds(20);
```

## Specifications

## Browser compatibility

## See also

- `Date.prototype.getUTCSeconds()`
- `Date.prototype.setSeconds()`
