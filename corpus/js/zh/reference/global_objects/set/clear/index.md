---
id: "js-zh-syntax-web-javascript-reference-global_objects-set-clear"
language: "js"
lang: "zh"
category: "syntax"
name: "Set.prototype.clear"
title: "Set.prototype.clear()"
module: "reference\\global_objects\\set\\clear\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Set/clear"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Set.prototype.clear()

`Set` 实例的 **`clear()`** 方法移除该集合中的所有元素。

`JavaScript Demo: Set.prototype.clear()`

```js interactive-example
const set1 = new Set();
set1.add(1);
set1.add("foo");

console.log(set1.size);
// Expected output: 2

set1.clear();

console.log(set1.size);
// Expected output: 0
```

## 语法

```js-nolint
clear()
```

### 参数

无。

### 返回值

无（`undefined`）。

## 示例

### 使用 clear() 方法

```js
const mySet = new Set();
mySet.add(1);
mySet.add("foo");

console.log(mySet.size); // 2
console.log(mySet.has("foo")); // true

mySet.clear();

console.log(mySet.size); // 0
console.log(mySet.has("foo")); // false
```

## 规范

## 浏览器兼容性

## 参见

- `Set`
- `Set.prototype.delete()`
