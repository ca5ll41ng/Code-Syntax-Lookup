---
id: "js-en-function-web-javascript-reference-global_objects-temporal-zoneddatetime-minute"
language: "js"
lang: "en"
category: "function"
name: "Temporal.ZonedDateTime.prototype.minute"
title: "Temporal.ZonedDateTime.prototype.minute"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\zoneddatetime\\minute\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/minute"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.ZonedDateTime.prototype.minute

The **`minute`** accessor property of `Temporal.ZonedDateTime` instances returns an integer from 0 to 59 representing the minute component of this time.

The set accessor of `minute` is `undefined`. You cannot change this property directly. Use the `Temporal/ZonedDateTime/with` method to create a new `Temporal.ZonedDateTime` object with the desired new value.

For general information and more examples, see `Temporal/PlainTime/minute`.

For `ZonedDateTime`, `minute` can be non-continuous due to offset changes. While much rarer than `hour` changes (because daylight saving time shifts are usually by whole hours), it can still happen.

## Examples

### Using minute

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.123456789-04:00[America/New_York]",
);
console.log(dt.minute); // 34
```

### Non-continuous minute

Typically, `minute` always goes from 0 to 59 and then back to 0, even when passing through a daylight saving time transition. There's one particular case where DST has a 30-minute offset: Lord Howe Island in Australia, which shifts between +10:30 and +11:00. In this case, the minute can be non-continuous.

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-10-03T01:59:00+10:30[Australia/Lord_Howe]",
);
console.log(dt.minute); // 59
const dt2 = dt.add({ minutes: 1 });
console.log(dt2.minute); // 30
console.log(dt2.toString()); // 2021-10-03T02:30:00+11:00[Australia/Lord_Howe]
```

There's a second peculiar case where the minute can be non-continuous: the standardization of hourly time zones. In the early 20th century, most countries were using their own time zones which were often not a whole hour offset from UTC. For example, Paris used to have an offset of UTC+0:09:21, which was changed to UTC+0 on March 11, 1911.

```js
const dt = Temporal.ZonedDateTime.from(
  "1911-03-10T23:59:00+00:09:21[Europe/Paris]",
);
console.log(dt.minute); // 59
const dt2 = dt.add({ minutes: 1 });
console.log(dt2.minute); // 50
console.log(dt2.toString()); // 1911-03-10T23:50:39+00:00[Europe/Paris]
```

For this reason, you should always prefer `Temporal/ZonedDateTime/add` and `Temporal/ZonedDateTime/subtract` to manipulate dates and times, rather than directly changing the `minute` property.

## Specifications

## Browser compatibility

## See also

- `Temporal.ZonedDateTime`
- `Temporal/ZonedDateTime/with`
- `Temporal/ZonedDateTime/add`
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- `Temporal/PlainTime/minute`
