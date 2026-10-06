---
id: "js-en-function-web-javascript-reference-global_objects-date-getutcseconds"
language: "js"
lang: "en"
category: "function"
name: "Date.prototype.getUTCSeconds"
title: "Date.prototype.getUTCSeconds()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\date\\getutcseconds\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Date.prototype.getUTCSeconds()

The **`getUTCSeconds()`** method of `Date` instances returns the seconds in the specified date according to universal time.

`JavaScript Demo: Date.prototype.getUTCSeconds()`

```js interactive-example
const moonLanding = new Date("July 20, 1969, 20:18:04 UTC");

console.log(moonLanding.getUTCSeconds());
// Expected output: 4
```

## Syntax

```js-nolint
getUTCSeconds()
```

### Parameters

None.

### Return value

An integer, between 0 and 59, representing the seconds for the given date according to universal time. Returns `NaN` if the date is [invalid](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

## Examples

### Using getUTCSeconds()

The following example assigns the seconds portion of the current time to the variable `seconds`.

```js
const today = new Date();
const seconds = today.getUTCSeconds();
```

## Specifications

## Browser compatibility

## See also

- `Date.prototype.getSeconds()`
- `Date.prototype.setUTCSeconds()`
