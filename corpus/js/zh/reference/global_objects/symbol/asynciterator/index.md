---
id: "js-zh-syntax-web-javascript-reference-global_objects-symbol-asynciterator"
language: "js"
lang: "zh"
category: "syntax"
name: "Symbol.asyncIterator"
title: "Symbol.asyncIterator"
module: "reference\\global_objects\\symbol\\asynciterator\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Symbol.asyncIterator

**`Symbol.asyncIterator`** 符号指定了一个对象的默认异步迭代器。如果一个对象设置了这个属性，它就是异步可迭代对象，可用于[`for await...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for-await...of)循环。

## 描述

`Symbol.asyncIterator` 是一个用于访问对象的 `[Symbol.asyncIterator]()` 方法的内建符号。一个异步可迭代对象必须要有 `Symbol.asyncIterator` 属性。

## 示例

### 自定义异步可迭代对象

你可以通过设置`[Symbol.asyncIterator]`属性来自定义异步可迭代对象。

```js
const myAsyncIterable = new Object();
myAsyncIterable[Symbol.asyncIterator] = async function* () {
  yield "hello";
  yield "async";
  yield "iteration!";
};

(async () => {
  for await (const x of myAsyncIterable) {
    console.log(x);
    // expected output:
    //    "hello"
    //    "async"
    //    "iteration!"
  }
})();
```

### 内建异步可迭代对象

目前没有默认设定了`[Symbol.asyncIterator]`属性的 JavaScript 内建的对象。不过，WHATWG（网页超文本应用技术工作小组）Streams 会被设定为第一批异步可迭代对象，`[Symbol.asyncIterator]` 最近已在设计规范中落地。

## 规范

## 浏览器兼容性

## 参见

- [Iteration protocols](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)
- [for await... of](/zh-CN/docs/Web/JavaScript/Reference/Statements/for-await...of)
