---
id: "js-en-function-web-javascript-reference-global_objects-date-setutcmilliseconds"
language: "js"
lang: "en"
category: "function"
name: "Date.prototype.setUTCMilliseconds"
title: "Date.prototype.setUTCMilliseconds()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\date\\setutcmilliseconds\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Date.prototype.setUTCMilliseconds()

The **`setUTCMilliseconds()`** method of `Date` instances changes the milliseconds for this date according to universal time.

`JavaScript Demo: Date.prototype.setUTCMilliseconds()`

```js interactive-example
const date = new Date("2018-01-24T12:38:29.069Z");

console.log(date.getUTCMilliseconds());
// Expected output: 69

date.setUTCMilliseconds(420);

console.log(date.getUTCMilliseconds());
// Expected output: 420
```

## Syntax

```js-nolint
setUTCMilliseconds(millisecondsValue)
```

### Parameters

- `millisecondsValue`
  - : An integer between 0 and 999 representing the milliseconds.

### Return value

Changes the `Date` object in place, and returns its new [timestamp](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date). If `millisecondsValue` is `NaN` (or other values that get [coerced](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) to `NaN`, such as `undefined`), the date is set to [Invalid Date](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) and `NaN` is returned.

## Description

If a parameter you specify is outside of the expected range,
`setUTCMilliseconds()` attempts to update the date information in the
`Date` object accordingly. For example, if you use 1100 for
`millisecondsValue`, the seconds stored in the `Date`
object will be incremented by 1, and 100 will be used for milliseconds.

## Examples

### Using setUTCMilliseconds()

```js
const theBigDay = new Date();
theBigDay.setUTCMilliseconds(500);
```

## Specifications

## Browser compatibility

## See also

- `Date.prototype.getUTCMilliseconds()`
- `Date.prototype.setMilliseconds()`
