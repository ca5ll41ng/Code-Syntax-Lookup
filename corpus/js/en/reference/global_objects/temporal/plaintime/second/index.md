---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaintime-second"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainTime.prototype.second"
title: "Temporal.PlainTime.prototype.second"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\plaintime\\second\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/second"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainTime.prototype.second

The **`second`** accessor property of `Temporal.PlainTime` instances returns an integer from 0 to 59 representing the second component of this time.

The set accessor of `second` is `undefined`. You cannot change this property directly. Use the `Temporal/PlainTime/with` method to create a new `Temporal.PlainTime` object with the desired new value.

## Examples

### Using second

```js
const time = Temporal.PlainTime.from("12:34:56");
console.log(time.second); // 56
```

### Changing second

```js
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.with({ second: 15 });
console.log(newTime.toString()); // 12:34:15
```

You can also use `Temporal/PlainTime/add` or `Temporal/PlainTime/subtract` to move a certain number of seconds from the current time.

```js
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.subtract({ seconds: 41 });
console.log(newTime.toString()); // 12:34:15
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainTime`
- `Temporal/PlainTime/with`
- `Temporal/PlainTime/add`
- `Temporal/PlainTime/subtract`
- `Temporal/PlainTime/millisecond`
- `Temporal/PlainTime/microsecond`
- `Temporal/PlainTime/nanosecond`
