---
id: "js-en-function-web-javascript-reference-global_objects-date-getmilliseconds"
language: "js"
lang: "en"
category: "function"
name: "Date.prototype.getMilliseconds"
title: "Date.prototype.getMilliseconds()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\date\\getmilliseconds\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Date.prototype.getMilliseconds()

The **`getMilliseconds()`** method of `Date` instances returns the milliseconds for this date according to local time.

{{InteractiveExample("JavaScript Demo: Date.prototype.getMilliseconds()", "shorter")}}

```js interactive-example
const moonLanding = new Date("July 20, 69 00:20:18");
moonLanding.setMilliseconds(123);

console.log(moonLanding.getMilliseconds());
// Expected output: 123
```

## Syntax

```js-nolint
getMilliseconds()
```

### Parameters

None.

### Return value

An integer, between 0 and 999, representing the milliseconds for the given date according to local time. Returns `NaN` if the date is [invalid](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

## Examples

### Using getMilliseconds()

The `milliseconds` variable has value `0`, based on the value of the `Date` object `xmas95`, which doesn't specify the milliseconds component, so it defaults to 0.

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const milliseconds = xmas95.getMilliseconds();

console.log(milliseconds); // 0
```

## Specifications

## Browser compatibility

## See also

- `Date.prototype.getUTCMilliseconds()`
- `Date.prototype.setMilliseconds()`
