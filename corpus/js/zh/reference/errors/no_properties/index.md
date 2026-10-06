---
id: "js-zh-syntax-web-javascript-reference-errors-no_properties"
language: "js"
lang: "zh"
category: "syntax"
name: "'TypeError: \"x\" has no properties'"
title: "'TypeError: \"x\" has no properties'"
module: "reference\\errors\\no_properties\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Errors/No_properties"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# 'TypeError: "x" has no properties'

## 错误信息

```plain
TypeError: null has no properties
TypeError: undefined has no properties
```

## 错误类型

`TypeError`.

## 哪里出错了？

`null` 和 `undefined`中，没有你需要的属性。

## 示例

```js example-bad
null.foo;
// 错误类型：null 没有这个属性

undefined.bar;
// 错误类型：undefined 没有这个属性
```

## 参考

- `null`
- `undefined`
