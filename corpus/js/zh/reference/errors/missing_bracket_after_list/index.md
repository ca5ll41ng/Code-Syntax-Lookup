---
id: "js-zh-syntax-web-javascript-reference-errors-missing_bracket_after_list"
language: "js"
lang: "zh"
category: "syntax"
name: "SyntaxError: missing ] after element list"
title: "SyntaxError: missing ] after element list"
module: "reference\\errors\\missing_bracket_after_list\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Errors/Missing_bracket_after_list"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# SyntaxError: missing ] after element list

## 信息

```plain
SyntaxError: missing ] after element list
```

## 错误类型

`SyntaxError`.

## 哪里出错了？

数组初始化在某处出现了语法错误。比如缺少了右中括号 ("`]`") 或一个逗号 ("`,`")。

## 示例

### 不正确的数组初始化

```js example-bad
var list = [1, 2,

var instruments = [
  "Ukulele",
  "Guitar",
  "Piano"
};

var data = [{foo: "bar"} {bar: "foo"}];
```

正确的是：

```js example-good
var list = [1, 2];

var instruments = ["Ukulele", "Guitar", "Piano"];

var data = [{ foo: "bar" }, { bar: "foo" }];
```

## 相关

- `Array`
