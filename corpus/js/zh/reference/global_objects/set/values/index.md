---
id: "js-zh-syntax-web-javascript-reference-global_objects-set-values"
language: "js"
lang: "zh"
category: "syntax"
name: "Set.prototype.values"
title: "Set.prototype.values()"
module: "reference\\global_objects\\set\\values\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Set/values"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Set.prototype.values()

`Set` 实例的 **`values()`** 方法返回一个新的[_集合迭代器_](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators)对象，该对象包含此集合对象中每个元素的值，按插入顺序排列。

`JavaScript Demo: Set.prototype.values`

```js interactive-example
const set1 = new Set();
set1.add(42);
set1.add("forty two");

const iterator1 = set1.values();

console.log(iterator1.next().value);
// Expected output: 42

console.log(iterator1.next().value);
// Expected output: "forty two"
```

## 语法

```js-nolint
values()
```

### 参数

无。

### 返回值

一个新的[可迭代迭代器对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)。

## 示例

### 使用 values()

```js
const mySet = new Set();
mySet.add("foo");
mySet.add("bar");
mySet.add("baz");

const setIter = mySet.values();

console.log(setIter.next().value); // "foo"
console.log(setIter.next().value); // "bar"
console.log(setIter.next().value); // "baz"
```

## 规范

## 浏览器兼容性

## 参见

- `Set.prototype.entries()`
- `Set.prototype.keys()`
