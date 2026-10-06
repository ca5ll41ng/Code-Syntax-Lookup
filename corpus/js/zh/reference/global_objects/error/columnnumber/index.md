---
id: "js-zh-syntax-web-javascript-reference-global_objects-error-columnnumber"
language: "js"
lang: "zh"
category: "syntax"
name: "Error.prototype.columnNumber"
title: "Error.prototype.columnNumber"
module: "reference\\global_objects\\error\\columnnumber\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Error.prototype.columnNumber

`Error` 实例的 **`columnNumber`** 数据属性包含引发此错误的文件行中的列号。

## 值

正整数。

## 示例

### 使用 columnNumber

```js
try {
  throw new Error("无法解析输入");
} catch (err) {
  console.log(err.columnNumber); // 9
}
```

## 规范

不属于任何规范。

## 浏览器兼容性

## 参见

- `Error.prototype.stack`
- `Error.prototype.lineNumber`
- `Error.prototype.fileName`
