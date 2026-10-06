---
id: "js-zh-syntax-web-javascript-reference-global_objects-regexp-multiline"
language: "js"
lang: "zh"
category: "syntax"
name: "RegExp.prototype.multiline"
title: "RegExp.prototype.multiline"
module: "reference\\global_objects\\regexp\\multiline\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# RegExp.prototype.multiline

**`multiline`** 属性表明正则表达式是否使用了 "`m`" 标志。`multiline` 是正则表达式实例的一个只读属性。

## 描述

`multiline` 是一个布尔对象，如果使用了 "`m`" 标志，则返回 `true`；否则，返回 `false`。"`m`" 标志意味着一个多行输入字符串被看作多行。例如，使用 "`m`"，"`^`" 和 "`$`" 将会从只匹配正则字符串的开头或结尾，变为匹配字符串中任一行的开头或结尾。

你无法直接更改此属性。

## 示例

### 示例：使用 `multiline`

```js
var regex = new RegExp("foo", "m");

console.log(regex.multiline); // true
```

## 规范

## 浏览器兼容性

## 参见

- `RegExp.prototype.global`
- `RegExp.prototype.lastIndex`
- `RegExp.prototype.ignoreCase`
- `RegExp.prototype.source`
- `RegExp.prototype.sticky`
