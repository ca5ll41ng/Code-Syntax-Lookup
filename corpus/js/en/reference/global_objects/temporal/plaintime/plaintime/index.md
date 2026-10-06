---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plaintime-plaintime"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainTime() constructor"
title: "Temporal.PlainTime() constructor"
directive: "javascript-constructor"
module: "reference\\global_objects\\temporal\\plaintime\\plaintime\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/PlainTime"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainTime() constructor

The **`Temporal.PlainTime()`** constructor creates `Temporal.PlainTime` objects.

This constructor allows you to create instances by directly supplying the underlying data. Like all other `Temporal` classes, you should usually construct `Temporal.PlainTime` objects using the `Temporal/PlainTime/from` static method, which can handle a variety of input types.

## Syntax

```js-nolint
new Temporal.PlainTime()
new Temporal.PlainTime(hour)
new Temporal.PlainTime(hour, minute)
new Temporal.PlainTime(hour, minute, second)
new Temporal.PlainTime(hour, minute, second, millisecond)
new Temporal.PlainTime(hour, minute, second, millisecond, microsecond)
new Temporal.PlainTime(hour, minute, second, millisecond, microsecond, nanosecond)
```

> [!NOTE]
> `Temporal.PlainTime()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a `TypeError`.

### Parameters

- `hour` 
  - : A number, truncated to an integer, representing the hour component.
- `minute` 
  - : A number, truncated to an integer, representing the minute component.
- `second` 
  - : A number, truncated to an integer, representing the second component.
- `millisecond` 
  - : A number, truncated to an integer, representing the millisecond component.
- `microsecond` 
  - : A number, truncated to an integer, representing the microsecond component.
- `nanosecond` 
  - : A number, truncated to an integer, representing the nanosecond component.

### Return value

A new `Temporal.PlainTime` object, representing the time specified by the parameters.

### Exceptions

- `RangeError`
  - : Thrown if any of the components is not a finite number, or they don't represent a valid time.

## Examples

### Using Temporal.PlainTime()

```js
const time = new Temporal.PlainTime(12, 34, 56, 123, 456, 789);
console.log(time.toString()); // 12:34:56.123456789
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainTime`
- `Temporal/PlainTime/from`
