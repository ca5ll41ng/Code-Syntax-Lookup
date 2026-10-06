---
id: "js-zh-syntax-web-javascript-reference-global_objects-symbol-tostring"
language: "js"
lang: "zh"
category: "syntax"
name: "Symbol.prototype.toString"
title: "Symbol.prototype.toString()"
module: "reference\\global_objects\\symbol\\tostring\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Symbol.prototype.toString()

**`toString()`** 方法返回当前 symbol 对象的字符串表示。

## 语法

```js-nolint
symbol.toString();
```

## 描述

`Symbol` 对象拥有自己的 `toString` 方法，因而遮蔽了原型链上的 `Object.prototype.toString()`。

### symbol 原始值不能转换为字符串

symbol 原始值不能转换为字符串，所以只能先转换成它的包装对象，再调用 `toString()` 方法：

```js
Symbol("foo") + "bar";
// TypeError: Can't convert symbol to string
Symbol("foo").toString() + "bar";
// "Symbol(foo)bar"，就相当于下面的：
Object(Symbol("foo")).toString() + "bar";
// "Symbol(foo)bar"
```

## 示例

```js
Symbol("desc").toString(); // "Symbol(desc)"

// 内置通用（well-known）symbol
Symbol.iterator.toString(); // "Symbol(Symbol.iterator)

// global symbols
Symbol.for("foo").toString(); // "Symbol(foo)"
```

## 规范

## 浏览器兼容性

## 参见

- `Object.prototype.toString()`
