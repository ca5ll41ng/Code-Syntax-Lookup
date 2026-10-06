---
id: "js-zh-syntax-web-javascript-reference-errors-missing_curly_after_function_body"
language: "js"
lang: "zh"
category: "syntax"
name: "SyntaxError: missing } after function body"
title: "SyntaxError: missing } after function body"
module: "reference\\errors\\missing_curly_after_function_body\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Errors/Missing_curly_after_function_body"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# SyntaxError: missing } after function body

## 错误提示

```plain
SyntaxError: missing } after function body
```

## 错误类型

`SyntaxError`

## 哪里出错了？

在创建函数的时候出现了语法错误。检查一下闭合花括号以及括号的顺序是否正确。将代码进行缩进或者美化可以让你更容易找到问题之所在。

## 示例

### 遗漏的闭合花括号

通常是因为在函数声明中遗漏了花括号：

```js example-bad
var charge = function() {
  if (sunny) {
    useSolarCells();
  } else {
    promptBikeRide();
};
```

正确的应该是这样的：

```js example-good
var charge = function () {
  if (sunny) {
    useSolarCells();
  } else {
    promptBikeRide();
  }
};
```

当使用立即调用函数表达式（"IIFE"）、[闭包](/zh-CN/docs/Web/JavaScript/Guide/Closures)或者其他使用了大量的花括号以及括号的结构体的时候，问题会更加隐蔽。

```js example-bad
(function() { if (true) { return false; } );
```

通常将代码语句按照层级缩进以及对缩进进行复核会有助于错误的发现。

```js example-good
(function () {
  if (true) {
    return false;
  }
});
```

## 相关内容

- [Functions](/zh-CN/docs/Web/JavaScript/Guide/Functions)
