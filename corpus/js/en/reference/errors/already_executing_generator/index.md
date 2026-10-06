---
id: "js-en-function-web-javascript-reference-errors-already_executing_generator"
language: "js"
lang: "en"
category: "function"
name: "TypeError: already executing generator"
title: "TypeError: already executing generator"
directive: "javascript-error"
module: "reference\\errors\\already_executing_generator\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Errors/Already_executing_generator"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# TypeError: already executing generator

The JavaScript exception "TypeError: already executing generator" occurs when a [generator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) is continued using one of its methods (such as `Generator/next`) while executing the generator function's body itself.

## Message

```plain
TypeError: Generator is already running (V8-based)
TypeError: already executing generator (Firefox)
TypeError: Generator is executing (Safari)
```

## Error type

`TypeError`

## What went wrong?

The generator's methods, `Generator/next`, `Generator/return`, and `Generator/throw`, are meant to continue the execution of a generator function when it's paused after a `yield` expression or before the first statement. If a call to one of these methods is made while executing the generator function, the error is thrown. If you want to return or throw within the generator function, use the `Statements/return` statement or the `Statements/throw` statement, respectively.

## Examples

```js example-bad
let it;
function* getNumbers(times) {
  if (times <= 0) {
    it.throw(new Error("times must be greater than 0"));
  }
  for (let i = 0; i < times; i++) {
    yield i;
  }
}
it = getNumbers(3);
it.next();
```

```js example-good
let it;
function* getNumbers(times) {
  if (times <= 0) {
    throw new Error("times must be greater than 0");
  }
  for (let i = 0; i < times; i++) {
    yield i;
  }
}
it = getNumbers(3);
it.next(); // { value: 0, done: false }
```

## See also

- [Iterators and generators](/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators)
- [Iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- `Statements/function*`
- `Generator`
