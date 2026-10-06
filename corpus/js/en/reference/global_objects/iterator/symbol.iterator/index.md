---
id: "js-en-function-web-javascript-reference-global_objects-iterator-symbol-iterator"
language: "js"
lang: "en"
category: "function"
name: "Iterator.prototype[Symbol.iterator]"
title: "Iterator.prototype[Symbol.iterator]()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\iterator\\symbol.iterator\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Iterator.prototype[Symbol.iterator]()

The **`[Symbol.iterator]()`** method of `Iterator` instances implements the [iterable protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) and allows built-in iterators to be consumed by most syntaxes expecting iterables, such as the [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) and `Statements/for...of` loops. It returns the value of [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this), which is the iterator object itself.

## Syntax

```js-nolint
iterator[Symbol.iterator]()
```

### Parameters

None.

### Return value

The value of [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this), which is the iterator object itself.

## Examples

### Iteration using for...of loop

Note that you seldom need to call this method directly. The existence of the `[Symbol.iterator]()` method makes built-in iterators [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), and iterating syntaxes like the `for...of` loop automatically call this method to obtain the iterator to loop over.

```js
const arrIterator = [1, 2, 3].values();
for (const value of arrIterator) {
  console.log(value);
}
// Logs: 1, 2, 3
```

## Specifications

## Browser compatibility

## See also

- `Iterator`
- `Symbol.iterator`
- [Iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
