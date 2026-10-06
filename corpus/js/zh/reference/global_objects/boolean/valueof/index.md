---
id: "js-zh-syntax-web-javascript-reference-global_objects-boolean-valueof"
language: "js"
lang: "zh"
category: "syntax"
name: "Boolean.prototype.valueOf"
title: "Boolean.prototype.valueOf()"
module: "reference\\global_objects\\boolean\\valueof\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Boolean/valueOf"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Boolean.prototype.valueOf()

`Boolean` 值的 **`valueOf()`** 方法返回 `Boolean` 对象的原始值。

`JavaScript Demo: Boolean.valueOf()`

```js interactive-example
const x = new Boolean();

console.log(x.valueOf());
// Expected output: false

const y = new Boolean("Mozilla");

console.log(y.valueOf());
// Expected output: true
```

## 语法

```js-nolint
valueOf()
```

### 参数

无。

### 返回值

给定 `Boolean` 对象的原始值。

## 描述

`Boolean` 的 `valueOf()` 方法以布尔数据类型返回 `Boolean` 对象或 `Boolean` 字面量的原始值。

该方法通常在 JavaScript 内部调用，而不是在代码中显式调用。

## 示例

### 使用 `valueOf()`

```js
const x = new Boolean();
const myVar = x.valueOf(); // 给 myVar 赋值 false
```

## 规范

## 浏览器兼容性

## 参见

- `Object.prototype.valueOf()`
