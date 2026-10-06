---
id: "js-zh-syntax-web-javascript-reference-global_objects-weakmap-get"
language: "js"
lang: "zh"
category: "syntax"
name: "WeakMap.prototype.get"
title: "WeakMap.prototype.get()"
module: "reference\\global_objects\\weakmap\\get\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/get"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# WeakMap.prototype.get()

`WeakMap` 实例的 **`get()`** 方法返回该 `WeakMap` 中的指定元素。

`JavaScript Demo: WeakMap.prototype.get()`

```js interactive-example
const weakmap1 = new WeakMap();
const object1 = {};
const object2 = {};

weakmap1.set(object1, 42);

console.log(weakmap1.get(object1));
// Expected output: 42

console.log(weakmap1.get(object2));
// Expected output: undefined
```

## 语法

```js-nolint
get(key)
```

### 参数

- `key`
  - : 要从 `WeakMap` 对象返回的元素的键。

### 返回值

该 `WeakMap` 对象中与指定键相关联的元素。如果找不到该键，则返回 `undefined`。如果 `key` 不是对象或[非全局注册的符号](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#全局共享的_symbol)，则始终返回 `undefined`。

## 示例

### 使用 get() 方法

```js
const wm = new WeakMap();
wm.set(window, "foo");

wm.get(window); // 返回 "foo"。
wm.get("baz"); // 返回 undefined。
```

## 规范

## 浏览器兼容性

## 参见

- `WeakMap`
- `WeakMap.set()`
- `WeakMap.has()`
