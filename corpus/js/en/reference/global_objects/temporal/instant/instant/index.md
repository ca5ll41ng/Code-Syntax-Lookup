---
id: "js-en-function-web-javascript-reference-global_objects-temporal-instant-instant"
language: "js"
lang: "en"
category: "function"
name: "Temporal.Instant() constructor"
title: "Temporal.Instant() constructor"
directive: "javascript-constructor"
module: "reference\\global_objects\\temporal\\instant\\instant\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/Instant"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.Instant() constructor

The **`Temporal.Instant()`** constructor creates `Temporal.Instant` objects.

This constructor is exactly equivalent to calling {{jsxref("Temporal/Instant/fromEpochNanoseconds", "Temporal.Instant.fromEpochNanoseconds()")}}.

## Syntax

```js-nolint
new Temporal.Instant(epochNanoseconds)
```

> [!NOTE]
> `Temporal.Instant()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a `TypeError`.

### Parameters

- `epochNanoseconds`
  - : A [BigInt](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) representing the number of nanoseconds since the Unix epoch.

### Return value

A new `Temporal.Instant` object representing the instant in time specified by `epochNanoseconds`.

### Exceptions

- `RangeError`
  - : Thrown if `epochNanoseconds` represents an instant outside the range of representable instants, which is ±10<sup>8</sup> days, or about ±273,972.6 years, from the Unix epoch.

## Examples

### Using Temporal.Instant()

```js
const instant = new Temporal.Instant(0n);
console.log(instant.toString()); // 1970-01-01T00:00:00Z
const vostok1Liftoff = new Temporal.Instant(-275248380000000000n);
console.log(vostok1Liftoff.toString()); // 1961-04-12T06:07:00Z
const sts1Liftoff = new Temporal.Instant(355924804000000000n);
console.log(sts1Liftoff.toString()); // 1981-04-12T12:00:04Z
```

## Specifications

## Browser compatibility

## See also

- `Temporal.Instant`
- `Temporal/Instant/epochNanoseconds`
- `Temporal/Instant/from`
- {{jsxref("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}}
- {{jsxref("Temporal/Instant/fromEpochNanoseconds", "Temporal.Instant.fromEpochNanoseconds()")}}
