---
id: "js-en-function-web-javascript-reference-global_objects-temporal-instant-epochnanoseconds"
language: "js"
lang: "en"
category: "function"
name: "Temporal.Instant.prototype.epochNanoseconds"
title: "Temporal.Instant.prototype.epochNanoseconds"
directive: "javascript-instance-accessor-property"
module: "reference\\global_objects\\temporal\\instant\\epochnanoseconds\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/epochNanoseconds"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.Instant.prototype.epochNanoseconds

The **`epochNanoseconds`** accessor property of `Temporal.Instant` instances returns a `BigInt` representing the number of nanoseconds elapsed since the Unix epoch (midnight at the beginning of January 1, 1970, UTC) to this instant.

The set accessor of `epochNanoseconds` is `undefined`. You cannot change this property directly. To create a new `Temporal.Instant` object with the desired new `epochNanoseconds` value, use the {{jsxref("Temporal/Instant/fromEpochNanoseconds", "Temporal.Instant.fromEpochNanoseconds()")}} static method instead.

An instant can only represent ±10<sup>8</sup> days (about ±273,972.6 years) around the epoch, which is ±8.64e21 nanoseconds. Attempting to set `epochNanoseconds` beyond this boundary throws a `RangeError`.

## Examples

### Using epochNanoseconds

```js
const instant = Temporal.Instant.from("2021-08-01T12:34:56.789Z");
console.log(instant.epochNanoseconds); // 1627821296789000000n

const instant2 = Temporal.Instant.from("1969-08-01T12:34:56.789Z");
console.log(instant2.epochNanoseconds); // -13173903211000000n
```

### Changing epochNanoseconds

This is the method that allows you to move by any amount of time:

```js
const instant = Temporal.Instant.from("2021-08-01T12:34:56.789Z");
const instant1hourLater = instant.add({ hours: 1 });
console.log(instant1hourLater.epochNanoseconds); // 1627824896789000000n
```

If you already know the change in nanoseconds, you can also directly construct a new `Temporal.Instant` object:

```js
const instant = Temporal.Instant.from("2021-08-01T12:34:56.789Z");
const instant1hourLater = Temporal.Instant.fromEpochNanoseconds(
  instant.epochNanoseconds + 3600000000000n,
);
console.log(instant1hourLater.epochNanoseconds); // 1627824896789000000n
```

## Specifications

## Browser compatibility

## See also

- `Temporal.Instant`
- `Temporal/Instant/epochMilliseconds`
- {{jsxref("Temporal/Instant/fromEpochNanoseconds", "Temporal.Instant.fromEpochNanoseconds()")}}
