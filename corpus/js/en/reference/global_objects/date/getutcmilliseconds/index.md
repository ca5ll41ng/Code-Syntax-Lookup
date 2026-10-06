---
id: "js-en-function-web-javascript-reference-global_objects-date-getutcmilliseconds"
language: "js"
lang: "en"
category: "function"
name: "Date.prototype.getUTCMilliseconds"
title: "Date.prototype.getUTCMilliseconds()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\date\\getutcmilliseconds\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Date.prototype.getUTCMilliseconds()

The **`getUTCMilliseconds()`** method of `Date` instances returns the milliseconds for this date according to universal time.

{{InteractiveExample("JavaScript Demo: Date.prototype.getUTCMilliseconds()", "shorter")}}

```js interactive-example
const exampleDate = new Date("2018-01-02T03:04:05.678Z"); // 2 January 2018, 03:04:05.678 (UTC)

console.log(exampleDate.getUTCMilliseconds());
// Expected output: 678
```

## Syntax

```js-nolint
getUTCMilliseconds()
```

### Parameters

None.

### Return value

An integer, between 0 and 999, representing the milliseconds for the given date according to universal time. Returns `NaN` if the date is [invalid](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

Not to be confused with the timestamp. To get the total milliseconds since the epoch, use the [`getTime()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime) method.

## Examples

### Using getUTCMilliseconds()

The following example assigns the milliseconds portion of the current time to the variable `milliseconds`.

```js
const today = new Date();
const milliseconds = today.getUTCMilliseconds();
```

## Specifications

## Browser compatibility

## See also

- `Date.prototype.getMilliseconds()`
- `Date.prototype.setUTCMilliseconds()`
