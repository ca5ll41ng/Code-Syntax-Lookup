---
id: "js-zh-syntax-web-javascript-reference-global_objects-map-get"
language: "js"
lang: "zh"
category: "syntax"
name: "Map.prototype.get"
title: "Map.prototype.get()"
module: "reference\\global_objects\\map\\get\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Map/get"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Map.prototype.get()

`Map` 实例的 **`get()`** 方法返回该 map 中的指定元素。如果与所提供的键相关联的值是一个对象，那么你将获得该对象的引用，对该对象所做的任何更改都会有效地在 `Map` 对象中修改它。

`JavaScript Demo: Map.prototype.get()`

```js interactive-example
const map1 = new Map();
map1.set("bar", "foo");

console.log(map1.get("bar"));
// Expected output: "foo"

console.log(map1.get("baz"));
// Expected output: undefined
```

## 语法

```js-nolint
get(key)
```

### 参数

- `key`
  - : 从 `Map` 对象返回的元素的键。

### 返回值

与指定键相关联的元素，如果键在 `Map` 对象中找不到，则返回 `undefined`。

## 示例

### 使用 get()

```js
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.get("bar")); // 返回 "foo"
console.log(myMap.get("baz")); // 返回 undefined
```

### 使用 get() 获取对对象的引用

```js
const arr = [];
const myMap = new Map();
myMap.set("bar", arr);

myMap.get("bar").push("foo");

console.log(arr); // ["foo"]
console.log(myMap.get("bar")); // ["foo"]
```

注意，持有原始对象引用的映射实际上意味着对象不能被垃圾回收，这可能会导致意外的内存问题。如果你希望存储在 map 中的对象具有与原始对象相同的生命周期，请考虑使用 `WeakMap`。

## 规范

## 浏览器兼容性

## 参见

- `Map`
- `Map.prototype.set()`
- `Map.prototype.has()`
