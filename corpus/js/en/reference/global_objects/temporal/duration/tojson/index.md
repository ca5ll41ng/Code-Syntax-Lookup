---
id: "js-en-function-web-javascript-reference-global_objects-temporal-duration-tojson"
language: "js"
lang: "en"
category: "function"
name: "Temporal.Duration.prototype.toJSON"
title: "Temporal.Duration.prototype.toJSON()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\temporal\\duration\\tojson\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/toJSON"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.Duration.prototype.toJSON()

The **`toJSON()`** method of `Temporal.Duration` instances returns a string representing this duration in the same [ISO 8601 format](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#iso_8601_duration_format) as calling `Temporal/Duration/toString`. It is intended to be implicitly called by `JSON.stringify()`.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A string representing the given duration in the [ISO 8601 format](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#iso_8601_duration_format), with as much subsecond precision as necessary to represent the duration accurately.

## Description

The `toJSON()` method is automatically called by `JSON.stringify()` when a `Temporal.Duration` object is stringified. This method is generally intended to, by default, usefully serialize `Temporal.Duration` objects during [JSON](/en-US/docs/Glossary/JSON) serialization, which can then be deserialized using the `Temporal/Duration/from` function within the reviver of `JSON.parse()`.

## Examples

### Using toJSON()

```js
const duration = Temporal.Duration.from({ hours: 1, minutes: 30, seconds: 15 });
const durationStr = duration.toJSON(); // 'PT1H30M15S'
const d2 = Temporal.Duration.from(durationStr);
```

### JSON serialization and parsing

This example shows how `Temporal.Duration` can be serialized as JSON without extra effort, and how to parse it back.

```js
const duration = Temporal.Duration.from({ hours: 1, minutes: 30, seconds: 15 });
const jsonStr = JSON.stringify({ data: duration }); // '{"data":"PT1H30M15S"}'
const obj = JSON.parse(jsonStr, (key, value) => {
  if (key === "data") {
    return Temporal.Duration.from(value);
  }
  return value;
});
```

## Specifications

## Browser compatibility

## See also

- `Temporal.Duration`
- `Temporal/Duration/from`
- `Temporal/Duration/toString`
- {{jsxref("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}}
