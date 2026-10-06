---
id: "js-zh-syntax-web-javascript-reference-global_objects-set-size"
language: "js"
lang: "zh"
category: "syntax"
name: "Set.prototype.size"
title: "Set.prototype.size"
module: "reference\\global_objects\\set\\size\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Set/size"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Set.prototype.size

`Set` 实例的 **`size`** 访问器属性将返回该集合中（唯一的）元素的个数。

`JavaScript Demo: Set.prototype.size`

```js interactive-example
const set1 = new Set();
const object1 = {};

set1.add(42);
set1.add("forty two");
set1.add("forty two");
set1.add(object1);

console.log(set1.size);
// Expected output: 3
```

## 描述

`size` 的值是一个整数，表示 `Set` 对象有多少条目。`size` 的 set 访问函数是 `undefined`；你无法改变这个属性。

## 示例

### 使用 size

```js
const mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add("some text");

console.log(mySet.size); // 3
```

## 规范

## 浏览器兼容性

## 参见

- `Set`
