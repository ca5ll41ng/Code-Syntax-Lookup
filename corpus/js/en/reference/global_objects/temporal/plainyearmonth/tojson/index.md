---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plainyearmonth-tojson"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainYearMonth.prototype.toJSON"
title: "Temporal.PlainYearMonth.prototype.toJSON()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\temporal\\plainyearmonth\\tojson\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/toJSON"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainYearMonth.prototype.toJSON()

The **`toJSON()`** method of `Temporal.PlainYearMonth` instances returns a string representing this year-month in the same [RFC 9557 format](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#rfc_9557_format) as calling `Temporal/PlainYearMonth/toString`. It is intended to be implicitly called by `JSON.stringify()`.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A string representing the given date in the [RFC 9557 format](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#rfc_9557_format), with the calendar annotation included if it is not `"iso8601"`.

## Description

The `toJSON()` method is automatically called by `JSON.stringify()` when a `Temporal.PlainYearMonth` object is stringified. This method is generally intended to, by default, usefully serialize `Temporal.PlainYearMonth` objects during [JSON](/en-US/docs/Glossary/JSON) serialization, which can then be deserialized using the `Temporal/PlainYearMonth/from` function within the reviver of `JSON.parse()`.

## Examples

### Using toJSON()

```js
const ym = Temporal.PlainYearMonth.from({ year: 2021, month: 8 });
const ymStr = ym.toJSON(); // '2021-08'
const ym2 = Temporal.PlainYearMonth.from(ymStr);
```

### JSON serialization and parsing

This example shows how `Temporal.PlainYearMonth` can be serialized as JSON without extra effort, and how to parse it back.

```js
const ym = Temporal.PlainYearMonth.from({ year: 2021, month: 8 });
const ymStr = JSON.stringify({ event: ym }); // '{"event":"2021-08"}'
const obj = JSON.parse(ymStr, (key, value) => {
  if (key === "event") {
    return Temporal.PlainYearMonth.from(value);
  }
  return value;
});
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainYearMonth`
- `Temporal/PlainYearMonth/from`
- {{jsxref("Temporal/PlainYearMonth/toString", "Temporal.PlainYearMonth.prototype.toString()")}}
- {{jsxref("Temporal/PlainYearMonth/toLocaleString", "Temporal.PlainYearMonth.prototype.toLocaleString()")}}
