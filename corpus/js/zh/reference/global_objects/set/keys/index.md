---
id: "js-zh-syntax-web-javascript-reference-global_objects-set-keys"
language: "js"
lang: "zh"
category: "syntax"
name: "Set.prototype.keys"
title: "Set.prototype.keys()"
module: "reference\\global_objects\\set\\keys\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Set/keys"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Set.prototype.keys()

`Set` 实例的 **`keys()`** 方法是 [`values()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/values) 方法的别名。

## 语法

```js-nolint
keys()
```

### 参数

无。

### 返回值

一个新的[可迭代迭代器对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)。

## 示例

### 使用 keys()

`keys()` 方法完全等价于 `Set/values` 方法。

```js
const mySet = new Set();
mySet.add("foo");
mySet.add("bar");
mySet.add("baz");

const setIter = mySet.keys();

console.log(setIter.next().value); // "foo"
console.log(setIter.next().value); // "bar"
console.log(setIter.next().value); // "baz"
```

## 规范

## 浏览器兼容性

## 参见

- `Set.prototype.entries()`
- `Set.prototype.values()`
