---
id: "js-zh-syntax-web-javascript-reference-global_objects-map-values"
language: "js"
lang: "zh"
category: "syntax"
name: "Map.prototype.values"
title: "Map.prototype.values()"
module: "reference\\global_objects\\map\\values\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Map/values"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Map.prototype.values()

`Map` 实例的 **`values()`** 方法返回一个新的 [_map 迭代器_](/zh-CN/docs/Web/JavaScript/Reference/Iteration)对象，该对象包含此 map 中每个元素的值，按插入顺序排列。

`JavaScript Demo: Map.prototype.values`

```js interactive-example
const map1 = new Map();

map1.set("0", "foo");
map1.set(1, "bar");

const iterator1 = map1.values();

console.log(iterator1.next().value);
// Expected output: "foo"

console.log(iterator1.next().value);
// Expected output: "bar"
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
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap.values();

console.log(mapIter.next().value); // "foo"
console.log(mapIter.next().value); // "bar"
console.log(mapIter.next().value); // "baz"
```

## 规范

## 浏览器兼容性

## 参见

- `Map.prototype.entries()`
- `Map.prototype.keys()`
