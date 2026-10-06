---
id: "js-en-function-web-javascript-reference-global_objects-asyncgenerator-throw"
language: "js"
lang: "en"
category: "function"
name: "AsyncGenerator.prototype.throw"
title: "AsyncGenerator.prototype.throw()"
directive: "javascript-instance-method"
module: "reference\\global_objects\\asyncgenerator\\throw\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator/throw"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# AsyncGenerator.prototype.throw()

The **`throw()`** method of `AsyncGenerator` instances acts as if a `throw` statement is inserted in the generator's body at the current suspended position, which informs the generator of an error condition and allows it to handle the error, or perform cleanup and close itself.

## Syntax

```js-nolint
asyncGeneratorInstance.throw(exception)
```

### Parameters

- `exception`
  - : The exception to throw. For debugging purposes, it is useful to make it an `instanceof` `Error`.

### Return value

If the thrown error is not caught, it will return a `Promise` which rejects with the exception passed in.

If the exception is caught by a [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) and the generator resumes to yield more values, it will return a `Promise` which resolves with an `Object` with two properties:

- `done`
  - : A boolean value:
    - `true` if the generator function's control flow has reached the end.
    - `false` if the generator function is able to produce more values.
- `value`
  - : The value yielded from the next `yield` expression.

## Examples

### Using throw()

The following example shows a generator and an error that is thrown using the `throw` method. An error can be caught by a `Statements/try...catch` block as usual.

```js
// An async task. Pretend it's doing something more useful
// in practice.
function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

async function* createAsyncGenerator() {
  while (true) {
    try {
      await sleep(500);
      yield 42;
    } catch (e) {
      console.error(e);
    }
  }
}

const asyncGen = createAsyncGenerator();
asyncGen.next(1).then((res) => console.log(res)); // { value: 42, done: false }
asyncGen
  .throw(new Error("Something went wrong")) // Error: Something went wrong
  .then((res) => console.log(res)); // { value: 42, done: false }
```

## Specifications

## Browser compatibility

## See also

- `Statements/async_function*`
- [Iterators and generators](/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators) guide
