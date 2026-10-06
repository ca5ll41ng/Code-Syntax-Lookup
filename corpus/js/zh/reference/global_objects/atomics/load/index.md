---
id: "js-zh-syntax-web-javascript-reference-global_objects-atomics-load"
language: "js"
lang: "zh"
category: "syntax"
name: "Atomics.load"
title: "Atomics.load()"
module: "reference\\global_objects\\atomics\\load\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Atomics/load"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Atomics.load()

**`Atomics.load()`** 静态方法返回数组中指定位置的值。

`JavaScript Demo: Atomics.load()`

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 5;

// 5 + 2 = 7
console.log(Atomics.add(uint8, 0, 2));
// Expected output: 5

console.log(Atomics.load(uint8, 0));
// Expected output: 7
```

## 语法

```js-nolint
Atomics.load(typedArray, index)
```

### 参数

- `typedArray`
  - : 一个整数类型数组。`Int8Array`、`Uint8Array`、`Int16Array`、`Uint16Array`、`Int32Array`、`Uint32Array`、`BigInt64Array` 或 `BigUint64Array` 之一。
- `index`
  - : `typedArray` 中的要加载的位置。

### 返回值

给定位置的值（`typedArray[index]`）。

### 异常

- `TypeError`
  - : 如果 `typedArray` 不是允许的整数类型数组之一，则抛出该异常。
- `RangeError`
  - : 如果 `index` 超出 `typedArray` 的范围，则抛出该异常。

## 示例

### 使用 load()

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

Atomics.add(ta, 0, 12);
Atomics.load(ta, 0); // 12
```

## 规范

## 浏览器兼容性

## 参见

- `Atomics`
- `Atomics.store()`
