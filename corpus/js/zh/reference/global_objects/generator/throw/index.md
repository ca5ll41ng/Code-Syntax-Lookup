---
id: "js-zh-syntax-web-javascript-reference-global_objects-generator-throw"
language: "js"
lang: "zh"
category: "syntax"
name: "Generator.prototype.throw"
title: "Generator.prototype.throw()"
module: "reference\\global_objects\\generator\\throw\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Generator/throw"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Generator.prototype.throw()

`Generator` 实例的 **`throw()`** 方法的作用就好像一个 `throw` 语句被插入到生成器主体的当前暂停位置，这会通知生成器错误的情况并允许其处理错误，或者执行清理和自行关闭。

## 语法

```js-nolint
generatorInstance.throw(exception)
```

### 参数

- `exception`
  - : 要抛出的异常。使用 `Error` 实例对调试非常有帮助。

### 返回值

如果抛出的异常被 [`try...catch`](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch) 捕获并且生成器恢复生成更多的值，它将返回一个 `Object`，带有两个属性：

- `done`
  - : 一个布尔值：
    - 如果该生成器函数的控制流程已经结束，则为 `true`。
    - 如果该生成器函数还能产生更多的值，则为 `false`。
- `value`
  - : 下一个 `yeild` 表达式生成的值。

### 异常

如果抛出的错误没有被 `try...catch` 捕获，则传给 `throw()` 的 `exception` 将从生成器函数中抛出。

## 描述

`throw()` 方法在被调用时，可以看作是在生成器主体当前暂停的位置插入了一个 `throw exception;` 语句，其中 `exception` 是传入给 `throw()` 方法的异常。因此，在典型的流程中，调用 `throw(exception)` 将会导致生成器抛出异常。然而，如果 `yield` 表达式被包含在 `try...finally` 块中，错误可能会被捕获，并且控制流可以在错误处理后恢复，或者正常退出。

## 示例

### 使用 throw()

以下示例展示了一个简单生成器和使用 `throw` 方法抛出的错误。像往常一样，错误可以通过 `Statements/try...catch` 块捕获。

```js
function* gen() {
  while (true) {
    try {
      yield 42;
    } catch (e) {
      console.log("捕获到错误！");
    }
  }
}

const g = gen();
g.next();
// { value: 42, done: false }
g.throw(new Error("出现了些问题"));
// "捕获到错误！"
// { value: 42, done: false }
```

## 规范

## 浏览器兼容性

## 参见

- `Statements/function*`
