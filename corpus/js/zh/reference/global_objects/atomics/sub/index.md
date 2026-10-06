---
id: "js-zh-syntax-web-javascript-reference-global_objects-atomics-sub"
language: "js"
lang: "zh"
category: "syntax"
name: "Atomics.sub"
title: "Atomics.sub()"
module: "reference\\global_objects\\atomics\\sub\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Atomics/sub"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Atomics.sub()

**`Atomics.sub()`** 静态方法对数组中的指定位置减去给定的值，并返回该位置的旧值。此原子操作保证在修改后的值写回之前不会发生其他写操作。

`JavaScript Demo: Atomics.sub()`

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 7;

// 7 - 2 = 5
console.log(Atomics.sub(uint8, 0, 2));
// Expected output: 7

console.log(Atomics.load(uint8, 0));
// Expected output: 5
```

## 语法

```js-nolint
Atomics.sub(typedArray, index, value)
```

### 参数

- `typedArray`
  - : 一个整数类型数组。`Int8Array`、`Uint8Array`、`Int16Array`、`Uint16Array`、`Int32Array`、`Uint32Array`、`BigInt64Array` 或 `BigUint64Array` 之一。
- `index`
  - : `typedArray` 中的要减去 `value` 的位置。
- `value`
  - : 要减去的数字。

### 返回值

给定位置的旧值 (`typedArray[index]`)。

### 异常

- `TypeError`
  - : 如果 `typedArray` 不是允许的整数类型数组之一，则抛出该异常。
- `RangeError`
  - : 如果 `index` 超出 `typedArray` 的范围，则抛出该异常。

## 示例

### 使用 sub()

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 48;

Atomics.sub(ta, 0, 12); // 返回 48，即旧的值
Atomics.load(ta, 0); // 36
```

## 规范

## 浏览器兼容性

## 参见

- `Atomics`
- `Atomics.add()`
