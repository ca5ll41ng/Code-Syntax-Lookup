---
id: "js-en-function-web-javascript-reference-global_objects-temporal-plainmonthday-tojson"
language: "js"
lang: "en"
category: "function"
name: "Temporal.PlainMonthDay.prototype.toJSON"
title: "Temporal.PlainMonthDay.prototype.toJSON()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\temporal\\plainmonthday\\tojson\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/toJSON"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.PlainMonthDay.prototype.toJSON()

The **`toJSON()`** method of `Temporal.PlainMonthDay` instances returns a string representing this month-day in the same [RFC 9557 format](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay#rfc_9557_format) as calling `Temporal/PlainMonthDay/toString`. It is intended to be implicitly called by `JSON.stringify()`.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A string representing the given month-day in the [RFC 9557 format](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay#rfc_9557_format), with the year and calendar annotation included if it is not `"iso8601"`.

## Description

The `toJSON()` method is automatically called by `JSON.stringify()` when a `Temporal.PlainMonthDay` object is stringified. This method is generally intended to, by default, usefully serialize `Temporal.PlainMonthDay` objects during [JSON](/en-US/docs/Glossary/JSON) serialization, which can then be deserialized using the `Temporal/PlainMonthDay/from` function within the reviver of `JSON.parse()`.

## Examples

### Using toJSON()

```js
const md = Temporal.PlainMonthDay.from({ month: 8, day: 1 });
const mdStr = md.toJSON(); // '08-01'
const md2 = Temporal.PlainMonthDay.from(mdStr);
```

### JSON serialization and parsing

This example shows how `Temporal.PlainMonthDay` can be serialized as JSON without extra effort, and how to parse it back.

```js
const md = Temporal.PlainMonthDay.from({ month: 8, day: 1 });
const jsonStr = JSON.stringify({ birthday: md }); // '{"birthday":"08-01"}'
const obj = JSON.parse(jsonStr, (key, value) => {
  if (key === "birthday") {
    return Temporal.PlainMonthDay.from(value);
  }
  return value;
});
```

## Specifications

## Browser compatibility

## See also

- `Temporal.PlainMonthDay`
- `Temporal/PlainMonthDay/from`
- {{jsxref("Temporal/PlainMonthDay/toString", "Temporal.PlainMonthDay.prototype.toString()")}}
- {{jsxref("Temporal/PlainMonthDay/toLocaleString", "Temporal.PlainMonthDay.prototype.toLocaleString()")}}
