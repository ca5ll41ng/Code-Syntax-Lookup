---
id: "js-en-function-web-javascript-reference-global_objects-temporal-zoneddatetime-hour"
language: "js"
lang: "en"
category: "function"
name: "Temporal.ZonedDateTime.prototype.hour"
title: "Temporal.ZonedDateTime.prototype.hour"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\zoneddatetime\\hour\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/hour"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.ZonedDateTime.prototype.hour

The **`hour`** accessor property of `Temporal.ZonedDateTime` instances returns an integer from 0 to 23 representing the hour component of this time.

The set accessor of `hour` is `undefined`. You cannot change this property directly. Use the `Temporal/ZonedDateTime/with` method to create a new `Temporal.ZonedDateTime` object with the desired new value.

For general information and more examples, see `Temporal/PlainTime/hour`.

For `ZonedDateTime`, `hour` can be non-continuous due to offset changes such as daylight saving time transitions. In this case, the hour may be repeated or skipped.

## Examples

### Using hour

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.123456789-04:00[America/New_York]",
);
console.log(dt.hour); // 12
```

### Non-continuous hour

Non-continuous hour is very common due to daylight saving time transitions, which is explained more in [Ambiguity and gaps from local time to UTC time](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time).

```js
const dt = Temporal.ZonedDateTime.from(
  "2024-11-03T01:59:00-04:00[America/New_York]",
);
console.log(dt.hour); // 1
const dt2 = dt.add({ minutes: 1 });
console.log(dt2.hour); // 1
console.log(dt2.toString()); // 2024-11-03T01:00:00-05:00[America/New_York]

const dt3 = Temporal.ZonedDateTime.from(
  "2024-03-10T01:59:00-05:00[America/New_York]",
);
console.log(dt3.hour); // 1
const dt4 = dt3.add({ minutes: 1 });
console.log(dt4.hour); // 3
console.log(dt4.toString()); // 2024-03-10T03:00:00-04:00[America/New_York]
```

For this reason, you should always prefer `Temporal/ZonedDateTime/add` and `Temporal/ZonedDateTime/subtract` to manipulate dates and times, rather than directly changing the `hour` property.

## Specifications

## Browser compatibility

## See also

- `Temporal.ZonedDateTime`
- `Temporal/ZonedDateTime/with`
- `Temporal/ZonedDateTime/add`
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- `Temporal/PlainTime/hour`
