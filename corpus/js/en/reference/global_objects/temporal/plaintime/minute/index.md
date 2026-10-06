---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaintime-minute"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainTime.prototype.minute"
title: "Temporal.PlainTime.prototype.minute"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\plaintime\\minute\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/minute"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainTime.prototype.minute

The **`minute`** accessor property of `Temporal.PlainTime` instances returns an integer from 0 to 59 representing the minute component of this time.

The set accessor of `minute` is `undefined`. You cannot change this property directly. Use the `Temporal/PlainTime/with` method to create a new `Temporal.PlainTime` object with the desired new value.

## Examples

### Using minute

```js
const time = Temporal.PlainTime.from("12:34:56");
console.log(time.minute); // 34
```

### Changing minute

```js
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.with({ minute: 58 });
console.log(newTime.toString()); // 12:58:56
```

You can also use `Temporal/PlainTime/add` or `Temporal/PlainTime/subtract` to move a certain number of minutes from the current time.

```js
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.add({ minutes: 24 });
console.log(newTime.toString()); // 12:58:56
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainTime`
- `Temporal/PlainTime/with`
- `Temporal/PlainTime/add`
- `Temporal/PlainTime/subtract`
