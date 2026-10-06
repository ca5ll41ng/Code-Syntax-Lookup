---
id: "js-zh-syntax-web-javascript-reference-global_objects-error-linenumber"
language: "js"
lang: "zh"
category: "syntax"
name: "Error: lineNumber"
title: "Error: lineNumber"
module: "reference\\global_objects\\error\\linenumber\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Error: lineNumber

`Error` 实例的 **`lineNumber`** 数据属性包含引发此错误的文件中的行号。

## 值

正整数。

## 示例

### 使用 lineNumber

```js
try {
  throw new Error("无法解析输入");
} catch (err) {
  console.log(err.lineNumber); // 2
}
```

### 使用 error 事件的替代示例

```js
window.addEventListener("error", (e) => {
  console.log(e.lineNumber); // 5
});
const e = new Error("无法解析输入");
throw e;
```

这不是标准特性，且缺乏广泛支持。参见下方的浏览器兼容性表。

## 规范

不属于任何规范。

## 浏览器兼容性

## 参见

- `Error.prototype.stack`
- `Error.prototype.columnNumber`
- `Error.prototype.fileName`
