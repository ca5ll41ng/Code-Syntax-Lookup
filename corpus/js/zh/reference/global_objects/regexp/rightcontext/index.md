---
id: "js-zh-syntax-web-javascript-reference-global_objects-regexp-rightcontext"
language: "js"
lang: "zh"
category: "syntax"
name: "RegExp.rightContext ($')"
title: "RegExp.rightContext ($')"
module: "reference\\global_objects\\regexp\\rightcontext\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# RegExp.rightContext ($')

**rightContext** 非标准属性是正则表达式的静态和只读属性，含有最新匹配的右侧子串。 `RegExp.$'` 是这个属性的别名。

## 语法

```plain
RegExp.rightContext
RegExp["$'"]
```

## 描述

`rightContext` 属性是静态的，不是正则表达式独立对象的属性。反之，你应始终将其使用为 `RegExp.rightContext` 或者 `RegExp["$'"]`。

`rightContext` 属性的值是只读的，并且会在匹配成功时修改。

你不能使用属性访问器 (`RegExp.$'`) 来使用简写的别名，因为解析器在这里会将其看做字符串的开始，并抛出 `SyntaxError`。使用 [方括号符号](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors)来访问属性。

## 示例

### 使用 `rightContext` 和 `$'`

```js
var re = /hello/g;
re.test("hello world!");
RegExp.rightContext; // " world!"
RegExp["$'"]; // " world!"
```

## 规范

非标准。并不是任何现行规范的一部分。

## 浏览器兼容性

## 参见

-  `RegExp.input`
-  `RegExp.lastMatch`
-  `RegExp.lastParen`
-  `RegExp.leftContext`
-  `RegExp.n`
