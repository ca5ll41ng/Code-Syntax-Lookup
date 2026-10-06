---
id: "js-zh-syntax-web-javascript-reference-global_objects-map-size"
language: "js"
lang: "zh"
category: "syntax"
name: "Map.prototype.size"
title: "Map.prototype.size"
module: "reference\\global_objects\\map\\size\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Map/size"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Map.prototype.size

`Map` 实例的 **`size`** 访问器属性返回此 map 中元素的数量。

`JavaScript 演示：Map.prototype.size`

```js interactive-example
const map = new Map();

map.set("a", "alpha");
map.set("b", "beta");
map.set("g", "gamma");

console.log(map.size);
// 预期输出：3
```

## 描述

`size` 的值是一个整数，表示 `Map` 对象有多少个键值对。`size` 的设置访问器函数是 `undefined`；你无法更改此属性的值。

## 示例

### 使用 size

```js
const myMap = new Map();
myMap.set("a", "alpha");
myMap.set("b", "beta");
myMap.set("g", "gamma");

console.log(myMap.size); // 3
```

## 规范

## 浏览器兼容性

## 参见

- `Map`
