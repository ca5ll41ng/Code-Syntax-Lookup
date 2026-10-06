---
id: "js-zh-syntax-web-javascript-reference-errors-missing_curly_after_property_list"
language: "js"
lang: "zh"
category: "syntax"
name: "SyntaxError: missing } after property list"
title: "SyntaxError: missing } after property list"
module: "reference\\errors\\missing_curly_after_property_list\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Errors/Missing_curly_after_property_list"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# SyntaxError: missing } after property list

JavaScript 异常 **`missing } after property list`** 会在[对象初始化器](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer)语法某处出错时发生。实际上可能是少了花括号，也可能是少了逗号。

## 错误信息

```plain
SyntaxError: missing } after property list (Firefox)
SyntaxError: Unexpected identifier 'c'. Expected '}' to end an object literal. (Safari)
```

## 错误类型

`SyntaxError`

## 什么地方出错了？

[对象初始化器](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer)语法某处出错了。实际上可能是少了花括号，但也可能是少了逗号。另外请检查右花括号或圆括号的顺序是否正确。把代码缩进或格式化得更整齐一些，也有助于看清结构。

## 示例

### 遗漏逗号

对象初始化器代码里常常少了一个逗号：

```js-nolint example-bad
const obj = {
  a: 1,
  b: { myProp: 2 }
  c: 3
};
```

正确写法是：

```js example-good
const obj = {
  a: 1,
  b: { myProp: 2 },
  c: 3,
};
```

## 参见

- [对象初始化器](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer)
