---
id: "js-zh-syntax-web-javascript-reference-global_objects-atomics-store"
language: "js"
lang: "zh"
category: "syntax"
name: "Atomics.store"
title: "Atomics.store()"
module: "reference\\global_objects\\atomics\\store\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Atomics/store"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Atomics.store()

**`Atomics.store()`** 静态方法将给定的值存储在数组中的指定位置，并返回该值。

`JavaScript Demo: Atomics.store()`

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 5;

console.log(Atomics.store(uint8, 0, 2));
// Expected output: 2

console.log(Atomics.load(uint8, 0));
// Expected output: 2
```

## 语法

```js-nolint
Atomics.store(typedArray, index, value)
```

### 参数

- `typedArray`
  - : 一个整数类型数组。`Int8Array`、`Uint8Array`、`Int16Array`、`Uint16Array`、`Int32Array`、`Uint32Array`、`BigInt64Array` 或 `BigUint64Array` 之一。
- `index`
  - : `typedArray` 中的要存储 `value` 的位置。
- `value`
  - : 要存储的数字。

### 返回值

已存储的值。

### 异常

- `TypeError`
  - : 如果 `typedArray` 不是允许的整数类型数组之一，则抛出该异常。
- `RangeError`
  - : 如果 `index` 超出 `typedArray` 的范围，则抛出该异常。

## 示例

### 使用 store()

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

Atomics.store(ta, 0, 12); // 12
```

## 规范

## 浏览器兼容性

## 参见

- `Atomics`
- `Atomics.load()`
