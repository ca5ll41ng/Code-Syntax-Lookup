---
id: "js-zh-syntax-web-javascript-reference-global_objects-regexp-tostring"
language: "js"
lang: "zh"
category: "syntax"
name: "RegExp.prototype.toString"
title: "RegExp.prototype.toString()"
module: "reference\\global_objects\\regexp\\tostring\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toString"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# RegExp.prototype.toString()

**`toString()`** 返回一个表示该正则表达式的字符串。

## 语法

```js
regexObj.toString();
```

### 参数

无

## 描述

`Global_Objects/RegExp` 对象覆盖了 `Global_Objects/Object` 对象的 `toString()` 方法，并没有继承 `Object.prototype.toString()`。对于 `RegExp` 对象，`toString` 方法返回一个该正则表达式的字符串形式。

## 示例

### 示例：使用 `toString`

下例输出 `RegExp` 对象的字符串值：

```plain
myExp = new RegExp("a+b+c");
alert(myExp.toString());       // 显示 "/a+b+c/"

foo = new RegExp("bar", "g");
alert(foo.toString());         // 显示 "/bar/g"
```

## 规范

## 浏览器兼容性

## 参见

- `Object.prototype.toString()`
