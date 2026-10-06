---
id: "js-zh-syntax-web-javascript-reference-global_objects-regexp-global"
language: "js"
lang: "zh"
category: "syntax"
name: "RegExp.prototype.global"
title: "RegExp.prototype.global"
module: "reference\\global_objects\\regexp\\global\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# RegExp.prototype.global

**`global`** 属性表明正则表达式是否使用了 "`g`" 标志。`global` 是一个正则表达式实例的只读属性。

## 描述

`global` 的值是布尔对象，如果使用了 "`g`" 标志，则返回 `true`；否则返回 `false`。 "`g`" 标志意味着正则表达式应该测试字符串中所有可能的匹配。

你无法直接更改此属性。

## 示例

### 示例：使用 `global`

```js
var regex = new RegExp("foo", "g");

console.log(regex.global); // true
```

## 规范

## 浏览器兼容性

## 参见

- `RegExp.prototype.lastIndex`
- `RegExp.prototype.dotAll`
- `RegExp.prototype.hasIndices`
- `RegExp.prototype.ignoreCase`
- `RegExp.prototype.multiline`
- `RegExp.prototype.source`
- `RegExp.prototype.sticky`
- `RegExp.prototype.unicode`
