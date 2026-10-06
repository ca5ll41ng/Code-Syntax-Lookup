---
id: "js-en-function-web-javascript-reference-global_objects-temporal-now-instant"
language: "js"
lang: "en"
category: "function"
name: "Temporal.Now.instant"
title: "Temporal.Now.instant()"
directive: "javascript-static-method"
module: "reference\\global_objects\\temporal\\now\\instant\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Now/instant"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal.Now.instant()

The **`Temporal.Now.instant()`** static method returns the current time as a `Temporal.Instant` object.

## Syntax

```js-nolint
Temporal.Now.instant()
```

### Parameters

None.

### Return value

A `Temporal.Instant` object representing the current time, with potentially [reduced precision](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Now#reduced_time_precision).

## Examples

### Measuring time elapsed

The following example measures two instants in time and calculates the [duration](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration) between them, and gets the total duration in milliseconds:

```js
const start = Temporal.Now.instant();
// Do something that takes time
const end = Temporal.Now.instant();
const duration = end.since(start);
console.log(duration.total("milliseconds"));
```

## Specifications

## Browser compatibility

## See also

- `Temporal.Now`
- `Temporal.Instant`
