---
id: "js-zh-syntax-web-javascript-reference-global_objects-intl-getcanonicallocales"
language: "js"
lang: "zh"
category: "syntax"
name: "Intl.getCanonicalLocales"
title: "Intl.getCanonicalLocales()"
module: "reference\\global_objects\\intl\\getcanonicallocales\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Intl.getCanonicalLocales()

**`Intl.getCanonicalLocales()`** 静态方法返回一个包含规范的区域设置名称的数组。重复的元素将会被去除，每一个元素都会被验证为格式有效的语言标签。

`JavaScript 演示：Intl.GetCanonicalLocales`

```js interactive-example
console.log(Intl.getCanonicalLocales("EN-US"));
// 期望的输出：Array ["en-US"]

console.log(Intl.getCanonicalLocales(["EN-US", "Fr"]));
// 期望的输出：Array ["en-US", "fr"]

try {
  Intl.getCanonicalLocales("EN_US");
} catch (err) {
  console.log(err.toString());
  // 期望的输出：RangeError: invalid language tag: "EN_US"
}
```

## 语法

```js-nolint
Intl.getCanonicalLocales(locales)
```

### 参数

- `locales`
  - : 想要规范化的区域设置名称的`String`数组。

### 返回值

一个包含规范区域设置名称的数组。

## 示例

```js
Intl.getCanonicalLocales("EN-US"); // ["en-US"]
Intl.getCanonicalLocales(["EN-US", "Fr"]); // ["en-US", "fr"]

Intl.getCanonicalLocales("EN_US");
// RangeError: invalid language tag: "EN_US"
```

## 规范

## 浏览器兼容性

## 参见

- [FormatJS 中 `Intl.getCanonicalLocales` 的 polyfill](https://formatjs.github.io/docs/polyfills/intl-getcanonicallocales/)
- {{jsxref("Intl/NumberFormat/supportedLocalesOf", "Intl.NumberFormat.supportedLocalesOf()")}}
- {{jsxref("Intl/DateTimeFormat/supportedLocalesOf", "Intl.DateTimeFormat.supportedLocalesOf()")}}
- `Intl/Collator/supportedLocalesOf`
