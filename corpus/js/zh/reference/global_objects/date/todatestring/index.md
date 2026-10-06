---
id: "js-zh-syntax-web-javascript-reference-global_objects-date-todatestring"
language: "js"
lang: "zh"
category: "syntax"
name: "Date.prototype.toDateString"
title: "Date.prototype.toDateString()"
module: "reference\\global_objects\\date\\todatestring\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Date.prototype.toDateString()

**`toDateString()`** 方法以美式英语和人类易读的形式返回一个日期对象日期部分的字符串。

`JavaScript Demo: Date.toDateString()`

```js interactive-example
const event = new Date(1993, 6, 28, 14, 39, 7);

console.log(event.toString());
// Expected output: "Wed Jul 28 1993 14:39:07 GMT+0200 (CEST)"
// Note: your timezone may vary

console.log(event.toDateString());
// Expected output: "Wed Jul 28 1993"
```

## 语法

```js-nolint
dateObj.toDateString()
```

## 描述

`Global_Objects/Date` 对象实例引用一个具体的时间点。调用 `Date.toString` 方法会以美式英语和人类易读的形式返回日期对象的格式化字符串。在 [SpiderMonkey](/zh-CN/docs/SpiderMonkey) 里，该字符串由日期部分（年月日）和其后的时间部分（时分秒及时区）组成。有时需要获取日期部分的字符串，这可以由 `toDateString` 方法完成。

The `toDateString` method is especially useful because compliant engines implementing [ECMA-262](/zh-CN/docs/Web/JavaScript/Reference/JavaScript_technologies_overview) may differ in the string obtained from `toString` for `Date` objects, as the format is implementation-dependent and simple string slicing approaches may not produce consistent results across multiple engines.

## 示例

### 示例：`toDateString` 方法的简单使用

```js
var d = new Date(1993, 6, 28, 14, 39, 7);

println(d.toString()); // prints Wed Jul 28 1993 14:39:07 GMT-0600 (PDT)
println(d.toDateString()); // prints Wed Jul 28 1993
```

## 规范

## 浏览器兼容性

## 参见

- `Date.prototype.toLocaleDateString()`
- `Date.prototype.toTimeString()`
- `Date.prototype.toString()`
