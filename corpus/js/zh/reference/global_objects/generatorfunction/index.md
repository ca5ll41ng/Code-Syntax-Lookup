---
id: "js-zh-syntax-web-javascript-reference-global_objects-generatorfunction"
language: "js"
lang: "zh"
category: "syntax"
name: "GeneratorFunction"
title: "GeneratorFunction"
module: "reference\\global_objects\\generatorfunction\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# GeneratorFunction

**`GeneratorFunction`** 对象为[生成器函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)提供了方法。在 JavaScript 中，每个生成器函数实际上都是一个 `GeneratorFunction` 对象。

请注意，`GeneratorFunction` *不是*全局对象。可以通过以下代码来获取它：

```js
const GeneratorFunction = function* () {}.constructor;
```

`GeneratorFunction` 是 `Function` 的子类。

`JavaScript Demo: GeneratorFunction()`

```js interactive-example
const GeneratorFunction = function* () {}.constructor;

const foo = new GeneratorFunction(`
  yield 'a';
  yield 'b';
  yield 'c';
`);

let str = "";
for (const val of foo()) {
  str = str + val;
}

console.log(str);
// Expected output: "abc"
```

## 构造函数

- `GeneratorFunction/GeneratorFunction`
  - : 创建一个新的 `GeneratorFunction` 对象。

## 实例属性

_也从其父类 `Function` 继承实例属性_。

这些属性定义于 `GeneratorFunction.prototype` 并由所有 `GeneratorFunction` 实例所共享。

- `Object/constructor`
  - : 创建实例对象的构造函数。对于 `GeneratorFunction` 实例，其初始值是 `GeneratorFunction/GeneratorFunction` 构造函数。
- `GeneratorFunction.prototype.prototype`
  - : 所有生成器函数共享同一个 [`prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) 属性，即 [`Generator.prototype`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator)。每个生成器函数实例也有自己的 `prototype` 属性。当生成器函数被调用时，返回的生成器对象从生成器函数继承 `prototype` 属性，而该属性又继承自 `GeneratorFunction.prototype.prototype`。
- `GeneratorFunction.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 属性的初始值是字符串 `"GeneratorFunction"`。该属性被 `Object.prototype.toString()` 使用。

## 实例方法

_从其父类 `Function` 继承实例方法_。

## 规范

## 浏览器兼容性

## 参见

- [`function*`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)
- [`function*` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function*)
- `Function`
- `AsyncFunction`
- `AsyncGeneratorFunction`
- `Functions`
