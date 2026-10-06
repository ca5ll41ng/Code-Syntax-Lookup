---
id: "js-zh-syntax-web-javascript-reference-global_objects-symbol-match"
language: "js"
lang: "zh"
category: "syntax"
name: "Symbol.match"
title: "Symbol.match"
module: "reference\\global_objects\\symbol\\match\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Symbol.match

**`Symbol.match`** 指定了匹配的是正则表达式而不是字符串。`String.prototype.match()` 方法会调用此函数。

`JavaScript Demo: Symbol.match`

```js interactive-example
const regexp1 = /foo/;
// console.log('/foo/'.startsWith(regexp1));
// Expected output (Chrome): Error: First argument to String.prototype.startsWith must not be a regular expression
// Expected output (Firefox): Error: Invalid type: first can't be a Regular Expression
// Expected output (Safari): Error: Argument to String.prototype.startsWith cannot be a RegExp

regexp1[Symbol.match] = false;

console.log("/foo/".startsWith(regexp1));
// Expected output: true

console.log("/baz/".endsWith(regexp1));
// Expected output: false
```

## 描述

此函数还用于标识对象是否具有正则表达式的行为。比如， `String.prototype.startsWith()`，`String.prototype.endsWith()` 和 `String.prototype.includes()` 这些方法会检查其第一个参数是否是正则表达式，是正则表达式就抛出一个`TypeError`。现在，如果 `match` symbol 设置为 `false`（或者一个 "Falsy", "假值"），就表示该对象不打算用作正则表达式对象。

## 示例

### 禁止表达式检查

下面代码会抛出一个 `TypeError`：

```js
"/bar/".startsWith(/bar/);

// Throws TypeError，因为 /bar/ 是一个正则表达式
// 且 Symbol.match 没有修改。
```

但是，如果你将 `Symbol.match` 置为 `false`，使用 `match` 属性的表达式检查会认为该对象不是正则表达式对象。`startsWith` 和 `endsWith` 方法将不会抛出 `TypeError`。

```js
var re = /foo/;
re[Symbol.match] = false;
"/foo/".startsWith(re); // true
"/baz/".endsWith(re); // false
```

## 规范

## 浏览器兼容性

## 参见

- [`core-js` 中 `Symbol.match` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-symbol)
- `Symbol.matchAll`
- `Symbol.replace`
- `Symbol.search`
- `Symbol.split`
- `String.prototype.match()`
- [`RegExp.prototype[Symbol.match]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
