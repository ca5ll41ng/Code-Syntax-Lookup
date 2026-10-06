---
id: "js-zh-syntax-web-javascript-reference-global_objects-generatorfunction-generatorfunction"
language: "js"
lang: "zh"
category: "syntax"
name: "GeneratorFunction() 构造函数"
title: "GeneratorFunction() 构造函数"
module: "reference\\global_objects\\generatorfunction\\generatorfunction\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction/GeneratorFunction"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# GeneratorFunction() 构造函数

**`GeneratorFunction()`** 构造函数创建 `GeneratorFunction` 对象。

请注意，`GeneratorFunction` *不是*全局对象。可以通过以下代码来获取它：

```js
const GeneratorFunction = function* () {}.constructor;
```

`GeneratorFunction()` 构造函数不能直接使用，并且所有在 `Function/Function` 描述中提到的注意事项都适用于 `GeneratorFunction()`。

## 语法

```js-nolint
new GeneratorFunction(functionBody)
new GeneratorFunction(arg1, functionBody)
new GeneratorFunction(arg1, arg2, functionBody)
new GeneratorFunction(arg1, arg2, /* …, */ argN, functionBody)

GeneratorFunction(functionBody)
GeneratorFunction(arg1, functionBody)
GeneratorFunction(arg1, arg2, functionBody)
GeneratorFunction(arg1, arg2, /* …, */ argN, functionBody)
```

> [!NOTE]
> 无论是否使用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 调用 `GeneratorFunction()`，都可以创建一个新的 `GeneratorFunction` 实例。

### 参数

参见 `Function/Function`。

## 示例

### 创建和使用 GeneratorFunction() 构造函数

```js
const GeneratorFunction = function* () {}.constructor;
const g = new GeneratorFunction("a", "yield a * 2");
const iterator = g(10);
console.log(iterator.next().value); // 20
```

## 规范

## 浏览器兼容性

## 参见

- [`function*`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)
- [`function*` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function*)
- [`Function()` 构造函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
- [迭代器和生成器](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators)指南
- `Functions`
