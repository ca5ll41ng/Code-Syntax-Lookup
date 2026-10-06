---
id: "js-en-function-web-javascript-reference-global_objects-generatorfunction"
language: "js"
lang: "en"
category: "function"
name: "GeneratorFunction"
title: "GeneratorFunction"
directive: "javascript-class"
module: "reference\\global_objects\\generatorfunction\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# GeneratorFunction

The **`GeneratorFunction`** object provides methods for [generator functions](/en-US/docs/Web/JavaScript/Reference/Statements/function*). In JavaScript, every generator function is actually a `GeneratorFunction` object.

Note that `GeneratorFunction` is _not_ a global object. It can be obtained with the following code:

```js
const GeneratorFunction = function* () {}.constructor;
```

`GeneratorFunction` is a subclass of `Function`.

`JavaScript Demo: GeneratorFunction`

```js interactive-example
const GeneratorFunction = function* () {}.constructor;

const foo = new GeneratorFunction(`
  yield 'a';
  yield 'b';
  yield 'c';
`);

let str = "";
for (const val of foo()) {
  str += val;
}

console.log(str);
// Expected output: "abc"
```

## Constructor

- `GeneratorFunction/GeneratorFunction`
  - : Creates a new `GeneratorFunction` object.

## Instance properties

_Also inherits instance properties from its parent `Function`_.

These properties are defined on `GeneratorFunction.prototype` and shared by all `GeneratorFunction` instances.

- `Object/constructor`
  - : The constructor function that created the instance object. For `GeneratorFunction` instances, the initial value is the `GeneratorFunction/GeneratorFunction` constructor.
- `GeneratorFunction.prototype.prototype`
  - : All generator functions share the same [`prototype`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) property, which is [`Generator.prototype`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator). Each generator function created with the `function*` syntax or the `GeneratorFunction()` constructor also has its own `prototype` property, whose prototype is `GeneratorFunction.prototype.prototype`. When the generator function is called, its `prototype` property becomes the prototype of the returned generator object.
- `GeneratorFunction.prototype[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"GeneratorFunction"`. This property is used in `Object.prototype.toString()`.

These properties are own properties of each `GeneratorFunction` instance.

- `GeneratorFunction/prototype`
  - : Used when the function is used as a constructor with the [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new) operator. It will become the new object's prototype.

## Instance methods

_Inherits instance methods from its parent `Function`_.

## Specifications

## Browser compatibility

## See also

- [`function*`](/en-US/docs/Web/JavaScript/Reference/Statements/function*)
- [`function*` expression](/en-US/docs/Web/JavaScript/Reference/Operators/function*)
- `Function`
- `AsyncFunction`
- `AsyncGeneratorFunction`
- `Functions`
