---
id: "js-zh-syntax-web-javascript-reference-global_objects-reflect-getownpropertydescriptor"
language: "js"
lang: "zh"
category: "syntax"
name: "Reflect.getOwnPropertyDescriptor"
title: "Reflect.getOwnPropertyDescriptor()"
module: "reference\\global_objects\\reflect\\getownpropertydescriptor\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Reflect.getOwnPropertyDescriptor()

静态方法 **`Reflect.getOwnPropertyDescriptor()`** 与 `Object.getOwnPropertyDescriptor()` 方法相似。如果在对象中存在，则返回给定的属性的属性描述符。否则返回 `undefined`。

## 语法

```js-nolint
Reflect.getOwnPropertyDescriptor(target, propertyKey)
```

### 参数

- `target`
  - : 需要寻找属性的目标对象。
- `propertyKey`
  - : 获取自己的属性描述符的属性的名称。

### 返回值

如果属性存在于给定的目标对象中，则返回属性描述符；否则，返回 `undefined`。

### 异常

抛出一个 `TypeError`，如果目标不是 `Object`。

## 描述

`Reflect.getOwnPropertyDescriptor`方法返回一个属性描述符，如果给定的属性存在于对象中，否则返回 `undefined` 。与 `Object.getOwnPropertyDescriptor()` 的唯一不同在于如何处理非对象目标。

## 示例

### 使用 `Reflect.getOwnPropertyDescriptor()`

```js
Reflect.getOwnPropertyDescriptor({ x: "hello" }, "x");
// {value: "hello", writable: true, enumerable: true, configurable: true}

Reflect.getOwnPropertyDescriptor({ x: "hello" }, "y");
// undefined

Reflect.getOwnPropertyDescriptor([], "length");
// {value: 0, writable: true, enumerable: false, configurable: false}
```

### 与 `Object.getOwnPropertyDescriptor() 的不同点`

如果该方法的第一个参数不是一个对象（一个原始值），那么将造成 `TypeError` 错误。而对于 `Object.getOwnPropertyDescriptor`，非对象的第一个参数将被强制转换为一个对象处理。

```js
Reflect.getOwnPropertyDescriptor("foo", 0);
// TypeError: "foo" is not non-null object

Object.getOwnPropertyDescriptor("foo", 0);
// { value: "f", writable: false, enumerable: true, configurable: false }
```

## 规范

## 浏览器兼容性

## 参见

- `Reflect`
- `Object.getOwnPropertyDescriptor()`
