---
id: "js-zh-syntax-web-javascript-reference-global_objects-regexp-source"
language: "js"
lang: "zh"
category: "syntax"
name: "RegExp.prototype.source"
title: "RegExp.prototype.source"
module: "reference\\global_objects\\regexp\\source\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# RegExp.prototype.source

**`source`** 属性返回一个值为当前正则表达式对象的模式文本的字符串，该字符串不会包含正则字面量两边的斜杠以及任何的标志字符。

## 示例

### 使用 source

```js
const regex = /fooBar/gi;

console.log(regex.source); // “fooBar”，不包含 /.../ 和“gi”。
```

### 空正则表达式和转义

```js
new RegExp().source; // “(?:)”

new RegExp("\n").source === "\\n"; // true，从 ES5 开始
```

## 规范

## 浏览器兼容性

## 参见

- `RegExp.prototype.flags`
