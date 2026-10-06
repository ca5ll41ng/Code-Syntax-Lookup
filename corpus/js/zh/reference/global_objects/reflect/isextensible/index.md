---
id: "js-zh-syntax-web-javascript-reference-global_objects-reflect-isextensible"
language: "js"
lang: "zh"
category: "syntax"
name: "Reflect.isExtensible"
title: "Reflect.isExtensible()"
module: "reference\\global_objects\\reflect\\isextensible\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Reflect.isExtensible()

`静态方法 Reflect`**`.isExtensible()`** 判断一个对象是否可扩展（即是否能够添加新的属性）。与它 `Object.isExtensible()` 方法相似，但有一些不同，详情可见 [与 Object.isExtensible() 的不同点](#与_object.isextensible_的不同点)。

## 语法

```js-nolint
Reflect.isExtensible(target)
```

### 参数

- `target`
  - : 检查是否可扩展的目标对象。

### 返回值

返回一个 `Boolean` 值表明该对象是否可扩展。

### 异常

抛出一个 `TypeError`，如果对象不是 `Object`。

## 描述

`Reflect.isExtensible 判断`一个对象是否可扩展（即是否能够添加新的属性）。它与 `Object.isExtensible()` 方法一样。

## 示例

### 使用 `Reflect.isExtensible()`

详情可见 `Object.isExtensible()`。

```js
// New objects are extensible.
var empty = {};
Reflect.isExtensible(empty); // === true

// ...but that can be changed.
Reflect.preventExtensions(empty);
Reflect.isExtensible(empty); // === false

// Sealed objects are by definition non-extensible.
var sealed = Object.seal({});
Reflect.isExtensible(sealed); // === false

// Frozen objects are also by definition non-extensible.
var frozen = Object.freeze({});
Reflect.isExtensible(frozen); // === false
```

### 与 `Object.isExtensible()` 的不同点

如果该方法的第一个参数不是一个对象（原始值），那么将造成一个 `TypeError` 异常。对于 `Object.isExtensible()`，非对象的第一个参数会被强制转换为一个对象。

```js
Reflect.isExtensible(1);
// TypeError: 1 is not an object

Object.isExtensible(1);
// false
```

## 规范

## 浏览器兼容性

## 参见

- `Reflect`
- `Object.isExtensible()`
