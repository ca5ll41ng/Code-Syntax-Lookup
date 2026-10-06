---
id: "js-en-function-web-javascript-reference-global_objects-set-add"
language: "js"
lang: "en"
category: "function"
name: "Set.prototype.add"
title: "Set.prototype.add()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\set\\add\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Set/add"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Set.prototype.add()

The **`add()`** method of `Set` instances inserts the specified value into this set, if it is not already present.

`JavaScript Demo: Set.prototype.add()`

```js interactive-example
const set = new Set();

set.add(42);
set.add(42);
set.add(13);

for (const item of set) {
  console.log(item);
  // Expected output: 42
  // Expected output: 13
}
```

## Syntax

```js-nolint
add(value)
```

### Parameters

- `value`
  - : The value to add to the `Set` object. Objects are compared by [reference](/en-US/docs/Glossary/Object_reference), not by value.

### Return value

The `Set` object.

## Examples

### Using add()

```js
const mySet = new Set();

mySet.add(1);
mySet.add(5).add("some text"); // chainable

console.log(mySet);
// Set [1, 5, "some text"]
```

## Specifications

## Browser compatibility

## See also

- `Set`
- `Set.prototype.delete()`
- `Set.prototype.has()`
