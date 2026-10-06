---
id: "js-zh-syntax-web-javascript-reference-global_objects-error-filename"
language: "js"
lang: "zh"
category: "syntax"
name: "Error.prototype.fileName"
title: "Error.prototype.fileName"
module: "reference\\global_objects\\error\\filename\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Error.prototype.fileName

**`fileName`** 属性包含引发此错误的文件的路径。

## 描述

此非标准属性包含引发此错误的文件的路径。如果从调试器上下文调用，例如 Firefox Developer Tools，将会返回“debugger eval code”.

## 示例

### 使用 `fileName`

```js
var e = new Error("Could not parse input");
throw e;
// e.fileName could look like "file:///C:/example.html"
```

## 规范

## 浏览器兼容性

## 参见

- `Error.prototype.stack` 
- `Error.prototype.columnNumber` 
- `Error.prototype.lineNumber`
