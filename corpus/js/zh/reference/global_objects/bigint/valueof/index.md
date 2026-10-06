---
id: "js-zh-syntax-web-javascript-reference-global_objects-bigint-valueof"
language: "js"
lang: "zh"
category: "syntax"
name: "BigInt.prototype.valueOf"
title: "BigInt.prototype.valueOf()"
module: "reference\\global_objects\\bigint\\valueof\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/BigInt/valueOf"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# BigInt.prototype.valueOf()

**`valueOf()`** 方法返回 `BigInt` 对象包装的原始值。

`JavaScript Demo: BigInt.valueOf()`

```js interactive-example
console.log(typeof Object(1n));
// Expected output: "object"

console.log(typeof Object(1n).valueOf());
// Expected output: "bigint"
```

## 语法

```plain
bigIntObj.valueOf()
```

### 返回值

表示指定 `BigInt` 对象的原始 BigInt 值。

## 示例

### Using `valueOf`

```js
typeof Object(1n); // object
typeof Object(1n).valueOf(); // bigint
```

## 规范

## 浏览器兼容性

## 请参阅

- `BigInt.prototype.toString()`
