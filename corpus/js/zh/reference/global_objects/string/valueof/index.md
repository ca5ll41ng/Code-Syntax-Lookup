---
id: "js-zh-syntax-web-javascript-reference-global_objects-string-valueof"
language: "js"
lang: "zh"
category: "syntax"
name: "String.prototype.valueOf"
title: "String.prototype.valueOf()"
module: "reference\\global_objects\\string\\valueof\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# String.prototype.valueOf()

**`valueOf()`** 方法返回 `String` 对象的字符串值。

`JavaScript Demo: String.valueOf()`

```js interactive-example
const stringObj = new String("foo");

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.valueOf());
// Expected output: "foo"
```

## 语法

```js-nolint
valueOf()
```

### 返回值

一个字符串，表示给定 `String` 对象的原始值。

## 描述

`String` 的 `valueOf()` 方法以字符串数据类型返回 `String` 对象的原始值。此值等价于 `String.prototype.toString()`。

此方法通常由 JavaScript 在内部调用，而不是在代码中显式调用。

## 示例

### 使用 `valueOf()`

```js
const x = new String("Hello world");
console.log(x.valueOf()); // 'Hello world'
```

## 规范

## 浏览器兼容性

## 参见

- `String.prototype.toString()`
- `Object.prototype.valueOf()`
