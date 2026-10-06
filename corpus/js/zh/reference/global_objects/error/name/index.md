---
id: "js-zh-syntax-web-javascript-reference-global_objects-error-name"
language: "js"
lang: "zh"
category: "syntax"
name: "Error.prototype.name"
title: "Error.prototype.name"
module: "reference\\global_objects\\error\\name\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Error/name"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Error.prototype.name

`Error.prototype` 的 **`name`** 数据属性是所有 `Error` 实例所共享的。它表示当前错误类型的名称。对于 `Error.prototype.name`，其初始值为 `"Error"`。像 `TypeError` 和 `SyntaxError` 这样的子类会提供它们自己的 `name` 属性。

## 值

字符串。对于 `Error.prototype.name`，其初始值为 `"Error"`。

## 描述

默认情况下，为 `Error` 实例提供的名称为“Error”。`Error.prototype.toString()` 方法会同时使用 `name` 和 `Error/message` 属性来创建错误信息的字符串表示。

## 示例

### 抛出一个自定义错误

```js
const e = new Error("Malformed input"); // e.name 为“Error”

e.name = "ParseError";
throw e;
// e.toString() 会返回“ParseError: Malformed input”
```

## 规范

## 浏览器兼容性

## 参见

- `Error.prototype.message`
- `Error.prototype.toString()`
