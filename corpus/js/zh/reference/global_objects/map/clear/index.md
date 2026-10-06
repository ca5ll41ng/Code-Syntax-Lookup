---
id: "js-zh-syntax-web-javascript-reference-global_objects-map-clear"
language: "js"
lang: "zh"
category: "syntax"
name: "Map.prototype.clear"
title: "Map.prototype.clear()"
module: "reference\\global_objects\\map\\clear\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Map/clear"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Map.prototype.clear()

`Map` 实例的 **`clear()`** 方法会移除该 map 中的所有元素。

`JavaScript Demo: Map.prototype.clear()`

```js interactive-example
const map1 = new Map();

map1.set("bar", "baz");
map1.set(1, "foo");

console.log(map1.size);
// Expected output: 2

map1.clear();

console.log(map1.size);
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

### 使用 clear()

```js
const myMap = new Map();
myMap.set("bar", "baz");
myMap.set(1, "foo");

console.log(myMap.size); // 2
console.log(myMap.has("bar")); // true

myMap.clear();

console.log(myMap.size); // 0
console.log(myMap.has("bar")); // false
```

## 规范

## 浏览器兼容性

## 参见

- `Map`
