---
id: "js-zh-syntax-web-javascript-reference-global_objects-map-delete"
language: "js"
lang: "zh"
category: "syntax"
name: "Map.prototype.delete"
title: "Map.prototype.delete()"
module: "reference\\global_objects\\map\\delete\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Map/delete"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Map.prototype.delete()

`Map` 实例的 **`delete()`** 方法从该 map 中删除指定键的元素。

`JavaScript Demo: Map.prototype.delete()`

```js interactive-example
const map1 = new Map();
map1.set("bar", "foo");

console.log(map1.delete("bar"));
// Expected result: true
// True indicates successful removal

console.log(map1.has("bar"));
// Expected result: false
```

## 语法

```js-nolint
mapInstance.delete(key)
```

### 参数

- `key`
  - : 要从 `Map` 对象中删除的元素的键。

### 返回值

如果 `Map` 对象中的元素存在并已被移除，则为 `true`；如果该元素不存在，则为 `false`。

## 示例

### 使用 delete()

```js
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.delete("bar")); // 返回 true。成功地移除元素
console.log(myMap.has("bar")); // 返回 false。"bar" 元素将不再存在于 Map 实例中
```

## 规范

## 浏览器兼容性

## 参见

- `Map`
