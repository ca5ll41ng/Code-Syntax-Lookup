---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaintime-millisecond"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainTime.prototype.millisecond"
title: "Temporal.PlainTime.prototype.millisecond"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\plaintime\\millisecond\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/millisecond"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainTime.prototype.millisecond

The **`millisecond`** accessor property of `Temporal.PlainTime` instances returns an integer from 0 to 999 representing the millisecond (10<sup>-3</sup> second) component of this time.

The set accessor of `millisecond` is `undefined`. You cannot change this property directly. Use the `Temporal/PlainTime/with` method to create a new `Temporal.PlainTime` object with the desired new value.

## Examples

### Using millisecond

```js
const time = Temporal.PlainTime.from("12:34:56");
console.log(time.millisecond); // 0

const time2 = Temporal.PlainTime.from("12:34:56.123456789");
console.log(time2.millisecond); // 123
```

### Changing millisecond

```js
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.with({ millisecond: 100 });
console.log(newTime.toString()); // 12:34:56.1
```

You can also use `Temporal/PlainTime/add` or `Temporal/PlainTime/subtract` to move a certain number of milliseconds from the current time.

```js
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.add({ milliseconds: 100 });
console.log(newTime.toString()); // 12:34:56.1
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainTime`
- `Temporal/PlainTime/with`
- `Temporal/PlainTime/add`
- `Temporal/PlainTime/subtract`
- `Temporal/PlainTime/second`
- `Temporal/PlainTime/microsecond`
- `Temporal/PlainTime/nanosecond`
