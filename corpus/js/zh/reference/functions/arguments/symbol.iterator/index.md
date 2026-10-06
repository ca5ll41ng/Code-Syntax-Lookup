---
id: "js-zh-syntax-web-javascript-reference-functions-arguments-symbol-iterator"
language: "js"
lang: "zh"
category: "syntax"
name: "arguments[Symbol.iterator]"
title: "arguments[Symbol.iterator]()"
module: "reference\\functions\\arguments\\symbol.iterator\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# arguments[Symbol.iterator]()

`Functions/arguments` 对象的 **`[Symbol.iterator]()`** 方法实现了[可迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)并允许 `arguments` 对象被大多数期望可迭代对象的语法消费，例如[展开语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)和 `Statements/for...of` 循环。它返回一个[数组迭代器对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)，该对象会产生 `arguments` 对象中每个索引的值。

## 语法

```js-nolint
arguments[Symbol.iterator]()
```

## 示例

### 使用 for...of 循环的迭代

```js
function f() {
  // 你的浏览器必须支持 for..of 循环
  // 以及 for 循环中的 let 区域变量
  for (let letter of arguments) {
    console.log(letter);
  }
}
f("w", "y", "k", "o", "p");
```

## 规范

## 浏览器兼容性

## 参见

- `Array.prototype.values()`
