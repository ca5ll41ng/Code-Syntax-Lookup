---
id: "js-zh-syntax-web-javascript-reference-errors-invalid_date"
language: "js"
lang: "zh"
category: "syntax"
name: "RangeError: invalid date"
title: "RangeError: invalid date"
module: "reference\\errors\\invalid_date\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Errors/Invalid_date"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# RangeError: invalid date

## 消息

```plain
范围错误：非法数据 (Firefox)
范围错误：非法时间值 (Chrome)
范围错误：提供的数据不是有效的 (Chrome)
```

## 错误类型

`RangeError`

## 哪里出错了？

为 `Date` 或 `Date.parse()` 提供了一个会导致无效日期的字符串。

## 示例

### 错误示例

ISO 格式化字符串中不可识别的字符串或者包含非法元素值的日期一般会返回 `NaN`。然而，根据实现的不同，不符合 ISO 格式的字符串可能也会抛出 `RangeError: invalid date`，比如在火狐浏览器中有以下情形：

```js example-bad
new Date("foo-bar 2014");
new Date("2014-25-23").toISOString();
new Date("foo-bar 2014").toString();
```

然而下面这种情形会返回 `NaN` ：

```js example-bad
Date.parse("foo-bar 2014"); // NaN
```

参见 `Date.parse()` 文档，了解更多详情。

### 正确示例

```js example-good
new Date("05 October 2011 14:48 UTC");
```

## 参见

- `Date`
- `Date.prototype.parse()`
- `Date.prototype.toISOString()`
