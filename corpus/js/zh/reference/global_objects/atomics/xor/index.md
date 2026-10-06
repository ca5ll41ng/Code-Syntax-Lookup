---
id: "js-zh-syntax-web-javascript-reference-global_objects-atomics-xor"
language: "js"
lang: "zh"
category: "syntax"
name: "Atomics.xor"
title: "Atomics.xor()"
module: "reference\\global_objects\\atomics\\xor\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Atomics/xor"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Atomics.xor()

**`Atomics.xor()`** 静态方法会将给定的值与数组指定位置上的值进行按位异或运算，并返回该位置的旧值。此原子操作保证在修改后的值写回之前不会发生其他写操作。

`JavaScript Demo: Atomics.xor()`

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 7;

// 7 (0111) XOR 2 (0010) = 5 (0101)
console.log(Atomics.xor(uint8, 0, 2));
// Expected output: 7

console.log(Atomics.load(uint8, 0));
// Expected output: 5
```

## 语法

```js-nolint
Atomics.xor(typedArray, index, value)
```

### 参数

- `typedArray`
  - : 一个整数类型数组。`Int8Array`、`Uint8Array`、`Int16Array`、`Uint16Array`、`Int32Array`、`Uint32Array`、`BigInt64Array` 或 `BigUint64Array` 之一。
- `index`
  - : `typedArray` 中要进行按位异或运算的位置。
- `value`
  - : 要进行按位异或运算的值。

### 返回值

给定位置的旧值（`typedArray[index]`）。

### 异常

- `TypeError`
  - : 如果 `typedArray` 不是允许的整数类型数组之一，则抛出该异常。
- `RangeError`
  - : 如果 `index` 超出 `typedArray` 的范围，则抛出该异常。

## 描述

当 `a` 和 `b` 不同时，按位异或运算结果为 1。异或运算的真值表如下：

| `a` | `b` | `a ^ b` |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 1       |
| 1   | 0   | 1       |
| 1   | 1   | 0       |

例如，`5 ^ 1` 按位异或运算的结果是 `0100`，也就是十进制的 4。

```plain
5  0101
1  0001
   ----

4  0100
```

### 使用 xor()

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 5;

Atomics.xor(ta, 0, 1); // 返回 5，即旧的值
Atomics.load(ta, 0); // 4
```

## 规范

## 浏览器兼容性

## 参见

- `Atomics`
- `Atomics.and()`
- `Atomics.or()`
