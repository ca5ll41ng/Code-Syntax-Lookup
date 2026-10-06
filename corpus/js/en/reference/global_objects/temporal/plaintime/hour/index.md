---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaintime-hour"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainTime.prototype.hour"
title: "Temporal.PlainTime.prototype.hour"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\plaintime\\hour\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/hour"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainTime.prototype.hour

The **`hour`** accessor property of `Temporal.PlainTime` instances returns an integer from 0 to 23 representing the hour component of this time.

The set accessor of `hour` is `undefined`. You cannot change this property directly. Use the `Temporal/PlainTime/with` method to create a new `Temporal.PlainTime` object with the desired new value.

## Examples

### Using hour

```js
const time = Temporal.PlainTime.from("12:34:56");
console.log(time.hour); // 12
```

### Changing hour

```js
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.with({ hour: 15 });
console.log(newTime.toString()); // 15:34:56
```

You can also use `Temporal/PlainTime/add` or `Temporal/PlainTime/subtract` to move a certain number of hours from the current time.

```js
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.add({ hours: 3 });
console.log(newTime.toString()); // 15:34:56
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainTime`
- `Temporal/PlainTime/with`
- `Temporal/PlainTime/add`
- `Temporal/PlainTime/subtract`
