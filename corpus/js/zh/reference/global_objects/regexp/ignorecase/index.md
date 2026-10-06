---
id: "js-zh-syntax-web-javascript-reference-global_objects-regexp-ignorecase"
language: "js"
lang: "zh"
category: "syntax"
name: "RegExp.prototype.ignoreCase"
title: "RegExp.prototype.ignoreCase"
module: "reference\\global_objects\\regexp\\ignorecase\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# RegExp.prototype.ignoreCase

**`ignoreCase`** 属性表明正则表达式是否使用了 "`i`" 标志。`ignoreCase` 是正则表达式实例的只读属性。

## 描述

`ignoreCase` 的值是布尔对象，如果使用了"`i`" 标志，则返回 `true`；否则，返回 `false`。"`i`" 标志意味着在字符串进行匹配时，应该忽略大小写。

你无法直接更改此属性。

## 示例

### 示例：使用 `ignoreCase`

```js
var regex = new RegExp("foo", "i");

console.log(regex.ignoreCase); // true
```

## 规范

## 浏览器兼容性

## 参见

- `RegExp.prototype.global`
- `RegExp.prototype.lastIndex`
- `RegExp.prototype.multiline`
- `RegExp.prototype.source`
- `RegExp.prototype.sticky`
