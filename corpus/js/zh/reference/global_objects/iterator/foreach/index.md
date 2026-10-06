---
id: "js-zh-syntax-web-javascript-reference-global_objects-iterator-foreach"
language: "js"
lang: "zh"
category: "syntax"
name: "Iterator.prototype.forEach"
title: "Iterator.prototype.forEach()"
module: "reference\\global_objects\\iterator\\foreach\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Iterator/forEach"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Iterator.prototype.forEach()

`Iterator` 实例的 **`forEach()`** 方法与 `Array.prototype.forEach()` 类似：它对迭代器生成的每个元素执行一次提供的函数。

## 语法

```js-nolint
forEach(callbackFn)
```

### 参数

- `callbackFn`
  - : 为迭代器生成的每个元素执行的函数。它的返回值会被丢弃。该函数被调用时将传入以下参数：
    - `element`
      - : 当前正在处理的元素。
    - `index`
      - : 当前正在处理的元素的索引。

### 返回值

`undefined`。

## 描述

`forEach()` 迭代该迭代器，并对每个元素调用一次 `callbackFn` 函数。与大多数其他迭代器帮助方法不同，`forEach()` 不能很好地处理无限迭代器，因为它不是惰性的。

## 示例

### 使用 forEach()

```js
new Set([1, 2, 3]).values().forEach((v) => console.log(v));

// 输出：
// 1
// 2
// 3
```

等价于：

```js
for (const v of new Set([1, 2, 3]).values()) {
  console.log(v);
}
```

## 规范

## 浏览器兼容性

## 参见

- [`core-js` 中 `Iterator.prototype.forEach` 的 polyfiil](https://github.com/zloirock/core-js#iterator-helpers)
- `Iterator`
- `Iterator.prototype.find()`
- `Iterator.prototype.map()`
- `Iterator.prototype.filter()`
- `Iterator.prototype.every()`
- `Iterator.prototype.some()`
- `Array.prototype.forEach()`
