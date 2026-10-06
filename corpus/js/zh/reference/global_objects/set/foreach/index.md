---
id: "js-zh-syntax-web-javascript-reference-global_objects-set-foreach"
language: "js"
lang: "zh"
category: "syntax"
name: "Set.prototype.forEach"
title: "Set.prototype.forEach()"
module: "reference\\global_objects\\set\\foreach\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Set.prototype.forEach()

`Set` 实例的 **`forEach()`** 方法按插入顺序为该集合中的每个值执行一次提供的函数。

`JavaScript Demo: Set.prototype.forEach()`

```js interactive-example
function logSetElements(value1, value2, set) {
  console.log(`s[${value1}] = ${value2}`);
}

new Set(["foo", "bar", undefined]).forEach(logSetElements);

// Expected output: "s[foo] = foo"
// Expected output: "s[bar] = bar"
// Expected output: "s[undefined] = undefined"
```

## 语法

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### 参数

- `callback`
  - : 为集合中每个元素执行的函数，使用以下参数调用该函数：
    - `value`
      - : 每次迭代的值。
    - `key`
      - : 每次迭代的键。始终与 `value` 相同。
    - `set`
      - : 正在迭代的集合。
- `thisArg` 
  - : 执行 `callbackFn` 时用作 `this` 的值。

### 返回值

无（`undefined`）。

## 描述

`forEach()` 方法对 `Set` 对象中实际存在的每个值执行一次提供的 `callback`。对于已删除的值，不会调用它。但是，它会对存在但值为 `undefined` 的值执行。

`callback` 被调用时带有**三个参数**：

- **元素的值**
- **元素的键**
- **被遍历的 `Set`**

`Set` 对象中没有键，所以前两个参数都是 `Set` 中包含的**值**。这是为了与 `Map/forEach` 和 `Array/forEach` 的 `forEach()` 方法保持一致。

如果提供了一个 `thisArg` 参数给 `forEach` 函数，则参数将会作为回调函数中的 `this`值。否则 `this` 值为 `undefined`。回调函数中 `this` 的绑定是根据[函数被调用时通用的 `this` 绑定规则来决定的](/zh-CN/docs/Web/JavaScript/Reference/Operators/this)。

每个值都访问一次，除非在 `forEach()` 完成之前删除并重新添加它。在访问之前删除的值不会调用 `callback`。在 `forEach()` 完成之前添加的新值将被访问。

`forEach()` 对 `Set` 对象中的每个元素执行一次 `callback` 函数；它没有返回值。

## 示例

### 输出集合对象的内容

以下代码依次打印 `Set` 对象的元素：

```js
function logSetElements(value1, value2, set) {
  console.log(`s[${value}] = ${value2}`);
}

new Set(["foo", "bar", undefined]).forEach(logSetElements);

// logs:
// "s[foo] = foo"
// "s[bar] = bar"
// "s[undefined] = undefined"
```

## 规范

## 浏览器兼容性

## 参见

- `Array.prototype.forEach()`
- `Map.prototype.forEach()`
