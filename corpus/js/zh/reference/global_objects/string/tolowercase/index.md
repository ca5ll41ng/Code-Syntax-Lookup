---
id: "js-zh-syntax-web-javascript-reference-global_objects-string-tolowercase"
language: "js"
lang: "zh"
category: "syntax"
name: "String.prototype.toLowerCase"
title: "String.prototype.toLowerCase()"
module: "reference\\global_objects\\string\\tolowercase\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# String.prototype.toLowerCase()

`String` 的 **`toLowerCase()`** 方法将该字符串转换为小写形式。

`JavaScript Demo: String.toLowerCase()`

```js interactive-example
const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.toLowerCase());
// Expected output: "the quick brown fox jumps over the lazy dog."
```

## 语法

```js-nolint
toLowerCase()
```

### 返回值

一个新的字符串，表示转换为小写的调用字符串。

## 描述

`toLowerCase()` 方法返回将字符串转换为小写形式后的值。`toLowerCase()` 不会影响字符串 `str` 本身的值。

## 示例

### 使用 `toLowerCase()`

```js
console.log("ALPHABET".toLowerCase()); // 'alphabet'
```

## 规范

## 浏览器兼容性

## 参见

- `String.prototype.toLocaleLowerCase()`
- `String.prototype.toLocaleUpperCase()`
- `String.prototype.toUpperCase()`
