---
id: "js-zh-syntax-web-javascript-reference-global_objects-escape"
language: "js"
lang: "zh"
category: "syntax"
name: "escape"
title: "escape()"
module: "reference\\global_objects\\escape\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/escape"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# escape()

## 概览

废弃的 **`escape()`** 方法生成新的由十六进制转义序列替换的字符串。使用 `Global_Objects/encodeURI` 或 `Global_Objects/encodeURIComponent` 代替。

## 语法

```js-nolint
escape(str)
```

### 参数

- `str`
  - : 待编码的字符串。

## 描述

`escape` 函数是全局对象的属性。特色字符如：`@*_+-./` 被排除在外。

字符的 16 进制格式值，当该值小于等于 0xFF 时，用一个 2 位转义序列：`%xx` 表示。大于的话则使用 4 位序列：%**u**xxxx 表示。

## 示例

```js
escape("abc123"); // "abc123"
escape("äöü"); // "%E4%F6%FC"
escape("ć"); // "%u0107"

// special characters
escape("@*_+-./"); // "@*_+-./"
```

## 规范

## 浏览器兼容性

## 其他链接

- `Global_Objects/encodeURI`
- `Global_Objects/encodeURIComponent`
