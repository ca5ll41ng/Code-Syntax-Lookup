---
id: "js-en-function-web-javascript-reference-global_objects-date-getminutes"
language: "js"
lang: "en"
category: "function"
name: "Date.prototype.getMinutes"
title: "Date.prototype.getMinutes()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\date\\getminutes\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Date.prototype.getMinutes()

The **`getMinutes()`** method of `Date` instances returns the minutes for this date according to local time.

`JavaScript Demo: Date.prototype.getMinutes()`

```js interactive-example
const birthday = new Date("March 13, 08 04:20");

console.log(birthday.getMinutes());
// Expected output: 20
```

## Syntax

```js-nolint
getMinutes()
```

### Parameters

None.

### Return value

An integer, between 0 and 59, representing the minutes for the given date according to local time. Returns `NaN` if the date is [invalid](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

## Examples

### Using getMinutes()

The `minutes` variable has value `15`, based on the value of the `Date` object `xmas95`.

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const minutes = xmas95.getMinutes();

console.log(minutes); // 15
```

## Specifications

## Browser compatibility

## See also

- `Date.prototype.getUTCMinutes()`
- `Date.prototype.setMinutes()`
