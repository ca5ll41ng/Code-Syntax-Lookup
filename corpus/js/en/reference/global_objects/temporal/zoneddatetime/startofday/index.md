---
id: "js-en-function-web-javascript-reference-global_objects-temporal-zoneddatetime-startofday"
language: "js"
lang: "en"
category: "function"
name: "Temporal.ZonedDateTime.prototype.startOfDay"
title: "Temporal.ZonedDateTime.prototype.startOfDay()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\temporal\\zoneddatetime\\startofday\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/startOfDay"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.ZonedDateTime.prototype.startOfDay()

The **`startOfDay()`** method of `Temporal.ZonedDateTime` instances returns a `Temporal.ZonedDateTime` object representing the first instant of this date in the time zone. It usually has a time of `00:00:00`, but may be different if the midnight doesn't exist due to offset changes, in which case the first time that exists is returned.

It is equivalent to calling `Temporal/ZonedDateTime/withPlainTime` with no arguments.

## Syntax

```js-nolint
startOfDay()
```

### Parameters

None.

### Return value

A `Temporal.ZonedDateTime` object with instant `t`, such that:

- The date at `t` is different from the date one nanosecond before `t`.
- The date at `t` is the same as the date of `this`.

## Examples

### Using startOfDay()

```js
// In the US, DST transitions happen at 2am, so the midnight exists
const dt = Temporal.ZonedDateTime.from(
  "2024-03-10T12:00:00-04:00[America/New_York]",
);
console.log(dt.startOfDay().toString()); // "2024-03-10T00:00:00-05:00[America/New_York]"

// In Brazil, DST transitions happened at midnight, so the midnight didn't exist
const dt2 = Temporal.ZonedDateTime.from(
  "2015-10-18T12:00-02:00[America/Sao_Paulo]",
);
console.log(dt2.startOfDay().toString()); // "2015-10-18T01:00:00-02:00[America/Sao_Paulo]"
```

## Specifications

## Browser compatibility

## See also

- `Temporal.ZonedDateTime`
- `Temporal/ZonedDateTime/with`
- `Temporal/ZonedDateTime/add`
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- `Temporal/ZonedDateTime/hour`
- `Temporal/ZonedDateTime/hoursInDay`
- `Temporal/ZonedDateTime/timeZoneId`
- {{jsxref("Temporal/ZonedDateTime/getTimeZoneTransition", "Temporal.ZonedDateTime.prototype.getTimeZoneTransition()")}}
