---
id: "js-en-function-web-javascript-reference-global_objects-date-getfullyear"
language: "js"
lang: "en"
category: "function"
name: "Date.prototype.getFullYear"
title: "Date.prototype.getFullYear()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\date\\getfullyear\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Date.prototype.getFullYear()

The **`getFullYear()`** method of `Date` instances returns the year for this date according to local time.

Use this method instead of the `Date/getYear` method.

`JavaScript Demo: Date.prototype.getFullYear()`

```js interactive-example
const moonLanding = new Date("July 20, 69 00:20:18");

console.log(moonLanding.getFullYear());
// Expected output: 1969
```

## Syntax

```js-nolint
getFullYear()
```

### Parameters

None.

### Return value

An integer representing the year for the given date according to local time. Returns `NaN` if the date is [invalid](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

## Description

Unlike `Date/getYear`, the value returned by `getFullYear()` is an absolute number. For dates between the years 1000 and 9999, `getFullYear()` returns a four-digit number, for example, 1995. Use this function to make sure a year is compliant with years after 2000.

## Examples

### Using getFullYear()

The `fullYear` variable has value `1995`, based on the value of the `Date` object `xmas95`.

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const fullYear = xmas95.getFullYear();

console.log(fullYear); // 1995
```

## Specifications

## Browser compatibility

## See also

- `Date.prototype.getUTCFullYear()`
- `Date.prototype.setFullYear()`
- `Date.prototype.getYear()`
