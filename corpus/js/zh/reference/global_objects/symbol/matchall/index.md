---
id: "js-zh-syntax-web-javascript-reference-global_objects-symbol-matchall"
language: "js"
lang: "zh"
category: "syntax"
name: "Symbol.matchAll"
title: "Symbol.matchAll"
module: "reference\\global_objects\\symbol\\matchall\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Symbol/matchAll"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Symbol.matchAll

**`Symbol.matchAll`** 内置通用（well-known）符号指定方法返回一个迭代器，该迭代器根据字符串生成正则表达式的匹配项。此函数可以被 `String.prototype.matchAll()` 方法调用。

详细信息请参阅 [`RegExp.prototype[Symbol.matchAll]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) 和 `String.prototype.matchAll()`。

`JavaScript Demo: Symbol.matchAll`

```js interactive-example
const re = /[0-9]+/g;
const str = "2016-01-02|2019-03-07";
const result = re[Symbol.matchAll](str);

console.log(Array.from(result, (x) => x[0]));
// Expected output: Array ["2016", "01", "02", "2019", "03", "07"]
```

## 值

内置通用符号 `Symbol.matchAll`。

## 示例

### 使用 Symbol.matchAll

```js
const str = "2016-01-02|2019-03-07";
const numbers = {
  *[Symbol.matchAll](str) {
    for (const n of str.matchAll(/[0-9]+/g)) yield n[0];
  },
};
console.log(Array.from(str.matchAll(numbers)));
// ["2016", "01", "02", "2019", "03", "07"]
```

## 规范

## 浏览器兼容性

## 参见

- [`core-js` 中 `Symbol.matchAll` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-symbol)
- `Symbol.match`
- `Symbol.replace`
- `Symbol.search`
- `Symbol.split`
- `String.prototype.matchAll()`
- [`RegExp.prototype[Symbol.matchAll]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
