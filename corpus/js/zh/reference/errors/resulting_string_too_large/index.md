---
id: "js-zh-syntax-web-javascript-reference-errors-resulting_string_too_large"
language: "js"
lang: "zh"
category: "syntax"
name: "RangeError: repeat count must be less than infinity"
title: "RangeError: repeat count must be less than infinity"
module: "reference\\errors\\resulting_string_too_large\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Errors/Resulting_string_too_large"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# RangeError: repeat count must be less than infinity

## 信息

```plain
RangeError: repeat count must be less than infinity and not overflow maximum string size (Firefox)

RangeError: Invalid count value (Chrome)
```

## 错误类型

`RangeError`

## 发生了什么？

代码中使用了 `String.prototype.repeat()`方法。它有一个计数参数，表示重复该字符串的次数。该参数必须在 0 及正 `Infinity` 之间，且不能为负数。该值的合法范围可以这样表示： \[0, +∞)。

其结果字符串也不能长于最大字符串，不同 JavaScript 引擎中可能有所不同。在 Firefox (SpiderMonkey) 里最大字符串大小为 2^28 -1 (`0xFFFFFFF`)。

## 示例

### 无效的

```js example-bad
"abc".repeat(Infinity); // RangeError
"a".repeat(2 ** 28); // RangeError
```

### 有效的

```js example-good
"abc".repeat(0); // ''
"abc".repeat(1); // 'abc'
"abc".repeat(2); // 'abcabc'
"abc".repeat(3.5); // 'abcabcabc' (count will be converted to integer)
```

## See also

- `String.prototype.repeat()`
