---
id: "js-zh-syntax-web-javascript-reference-global_objects-map-keys"
language: "js"
lang: "zh"
category: "syntax"
name: "Map.prototype.keys"
title: "Map.prototype.keys()"
module: "reference\\global_objects\\map\\keys\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Map/keys"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Map.prototype.keys()

`Map` 实例的 **`keys()`** 方法返回一个新的 [_map 迭代器_](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)对象，该对象包含了此 map 中每个元素的键，按插入顺序排列。

`JavaScript Demo: Map.prototype.keys()`

```js interactive-example
const map1 = new Map();

map1.set("0", "foo");
map1.set(1, "bar");

const iterator1 = map1.keys();

console.log(iterator1.next().value);
// Expected output: "0"

console.log(iterator1.next().value);
// Expected output: 1
```

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

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap.keys();

console.log(mapIter.next().value); // "0"
console.log(mapIter.next().value); // 1
console.log(mapIter.next().value); // {}
```

## 规范

## 浏览器兼容性

## 参见

- `Map.prototype.entries()`
- `Map.prototype.values()`
