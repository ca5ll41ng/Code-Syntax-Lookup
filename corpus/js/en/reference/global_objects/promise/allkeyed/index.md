---
id: "js-en-function-web-javascript-reference-global_objects-promise-allkeyed"
language: "js"
lang: "en"
category: "function"
name: "Promise.allKeyed"
title: "Promise.allKeyed()"
directive: "javascript-static-method"
module: "reference\\global_objects\\promise\\allkeyed\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Promise/allKeyed"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Promise.allKeyed()

The **`Promise.allKeyed()`** static method is like `Promise.all()`, except that instead of using arrays/iterables as input/output, it uses objects. It takes an object where each own key is associated with a promise, and returns a single `Promise`. This returned promise fulfills when all of the input's promises fulfill, with an object of the same keys mapped to the corresponding fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.

Compared to `Promise.all()`, `Promise.allKeyed()` allows you to associate results with semantically meaningful keys, instead of arbitrary array ordering which can be difficult to maintain.

## Syntax

```js-nolint
Promise.allKeyed(object)
```

### Parameters

- `object`
  - : An object. All of its [own enumerable properties](/en-US/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties), whether the key is a string or a symbol, should have `Promise` values. These values are [awaited](/en-US/docs/Web/JavaScript/Reference/Operators/await), so other [thenables](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) are also resolved, while non-thenables are returned as-is.

### Return value

A `Promise` that is:

- **Already fulfilled**, if the `object` passed has no own enumerable properties.
- **Asynchronously fulfilled**, when all the promises in the given `object` fulfill. The fulfillment value is an object of fulfillment values, with the same keys in the same order as the given `object`, regardless of completion order. If the `object` passed is non-empty but contains no pending promises, the returned promise is still asynchronously (instead of synchronously) fulfilled.
- **Asynchronously rejected**, when any of the promises in the given `object` rejects. The rejection reason is the rejection reason of the first promise that was rejected.

## Description

The `Promise.allKeyed()` method is one of the [promise concurrency](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency) methods. It performs the same kind of task as `Promise.all()`. However, a lot of the times, you don't already have an array of promises and instead just have a few ad-hoc operations to batch up, so you put them in an array and then immediately destructure:

```js
const [resultA, resultB, resultC] = await Promise.all([getA(), getB(), getC()]);
```

The problem with this is that you need to maintain the consistency of ordering on both sides: if you accidentally write `[resultA, resultC, resultB]`, your code will break.

The keyed method mitigates the problem by associating each async operation with a semantic key:

```js
const {
  a: resultA,
  b: resultB,
  c: resultC,
} = await Promise.allKeyed({
  a: getA(),
  b: getB(),
  c: getC(),
});
```

This way, the ordering no longer matters, and any name mismatch is local: accidentally writing `b: resultC` is now much easier to catch!

## Examples

### Using Promise.allKeyed()

The `Promise.allKeyed()` method takes an object and processes all of its own enumerable properties.

```js
function delayed(value, timeout) {
  return new Promise((res) => setTimeout(() => res(value), timeout));
}

const sym = Symbol("example");

const promises = {
  a: delayed("a", 500),
  // Symbol properties are processed
  [sym]: delayed("symbol", 300),
  // Nested properties are not processed; this whole object is treated as
  // an already-resolved value and returned as-is
  nested: {
    b: delayed("b", 100),
  },
};

const result = await Promise.allKeyed(promises);
console.log(result);
// {
//   a: "a",
//   [sym]: "symbol",
//   nested: {
//     b: <Promise>,
//   },
// }
```

For more examples related to concurrency behavior common to `Promise.all()` and `Promise.allKeyed()`, see `Promise.all()`.

## Specifications

## Browser compatibility

## See also

- [Polyfill of `Promise.allKeyed` in `core-js`](https://core-js.io/docs/features/proposals/await-dictionary)
- [es-shims polyfill of `Promise.allKeyed`](https://www.npmjs.com/package/promise.allkeyed)
- `Promise`
- `Promise.allSettledKeyed()`
- `Promise.all()`
