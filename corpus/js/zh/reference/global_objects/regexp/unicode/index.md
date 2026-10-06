---
id: "js-zh-syntax-web-javascript-reference-global_objects-regexp-unicode"
language: "js"
lang: "zh"
category: "syntax"
name: "RegExp.prototype.unicode"
title: "RegExp.prototype.unicode"
module: "reference\\global_objects\\regexp\\unicode\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# RegExp.prototype.unicode

**`unicode`** 属性表明正则表达式带有"`u`" 标志。 `unicode` 是正则表达式独立实例的只读属性。

## 描述

`unicode` 的值是 `Boolean`，并且如果使用了 "`u`" 标志则为 `true`；否则为 `false`。"`u`" 标志开启了多种 Unicode 相关的特性。使用 "u" 标志，任何 Unicode 代码点的转义都会被解释。

你不能直接修改这个属性，它是只读的。

## 示例

### 使用 `unicode` 属性

```js
var regex = new RegExp("\u{61}", "u");

console.log(regex.unicode); // true
```

## 规范

## 浏览器兼容性

## 参见

- `RegExp.lastIndex`
- `RegExp.prototype.global`
- `RegExp.prototype.ignoreCase`
- `RegExp.prototype.multiline`
- `RegExp.prototype.source`
- `RegExp.prototype.sticky`
