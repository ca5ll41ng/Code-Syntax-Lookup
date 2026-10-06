---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaintime-nanosecond"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainTime.prototype.nanosecond"
title: "Temporal.PlainTime.prototype.nanosecond"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\plaintime\\nanosecond\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/nanosecond"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainTime.prototype.nanosecond

The **`nanosecond`** accessor property of `Temporal.PlainTime` instances returns an integer from 0 to 999 representing the nanosecond (10<sup>-9</sup> second) component of this time.

The set accessor of `nanosecond` is `undefined`. You cannot change this property directly. Use the `Temporal/PlainTime/with` method to create a new `Temporal.PlainTime` object with the desired new value.

## Examples

### Using nanosecond

```js
const time = Temporal.PlainTime.from("12:34:56");
console.log(time.nanosecond); // 0

const time2 = Temporal.PlainTime.from("12:34:56.123456789");
console.log(time2.nanosecond); // 789
```

### Changing nanosecond

```js
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.with({ nanosecond: 100 });
console.log(newTime.toString()); // 12:34:56.0000001
```

You can also use `Temporal/PlainTime/add` or `Temporal/PlainTime/subtract` to move a certain number of nanoseconds from the current time.

```js
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.add({ nanoseconds: 100 });
console.log(newTime.toString()); // 12:34:56.0000001
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainTime`
- `Temporal/PlainTime/with`
- `Temporal/PlainTime/add`
- `Temporal/PlainTime/subtract`
- `Temporal/PlainTime/second`
- `Temporal/PlainTime/millisecond`
- `Temporal/PlainTime/microsecond`
