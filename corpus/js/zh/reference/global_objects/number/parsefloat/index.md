---
id: "js-zh-syntax-web-javascript-reference-global_objects-number-parsefloat"
language: "js"
lang: "zh"
category: "syntax"
name: "Number.parseFloat"
title: "Number.parseFloat()"
module: "reference\\global_objects\\number\\parsefloat\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Number.parseFloat()

**`Number.parseFloat()`** 静态方法解析参数并返回浮点数。如果无法从参数中解析出一个数字，则返回 `NaN`。

`JavaScript Demo: Number.parseFloat()`

```js interactive-example
function circumference(r) {
  if (Number.isNaN(Number.parseFloat(r))) {
    return 0;
  }
  return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference("4.567abcdefgh"));
// Expected output: 28.695307297889173

console.log(circumference("abcdefgh"));
// Expected output: 0
```

## 语法

```js-nolint
Number.parseFloat(string)
```

### 参数

- `string`
  - : 要解析的值，会被[强制转换为字符串](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#字符串强制转换)。该参数开头的"whitespace", "空白"会被忽略。

### 返回值

由给定 `string` 解析得到的浮点数。

如果第一个非空白字符不能被转换为数字，则返回 `NaN`。

## 示例

### Number.parseFloat 与 parseFloat 对比

此方法与全局函数 `parseFloat` 具有相同的功能：

```js
Number.parseFloat === parseFloat; // true
```

其目的是全局的模块化。

有关更多详细信息和示例，请参见 `parseFloat`。

## 规范

## 浏览器兼容性

## 参见

- [`core-js` 中 `Number.parseFloat` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-number)
- `Number`
- `parseFloat`
