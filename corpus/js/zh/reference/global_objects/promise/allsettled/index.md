---
id: "js-zh-syntax-web-javascript-reference-global_objects-promise-allsettled"
language: "js"
lang: "zh"
category: "syntax"
name: "Promise.allSettled"
title: "Promise.allSettled()"
module: "reference\\global_objects\\promise\\allsettled\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Promise.allSettled()

**`Promise.allSettled()`** 静态方法将一个 Promise 可迭代对象作为输入，并返回一个单独的 `Promise`。当所有输入的 Promise 都已敲定时（包括传入空的可迭代对象时），返回的 Promise 将被兑现，并带有描述每个 Promise 结果的对象数组。

`JavaScript Demo: Promise.allSettled()`

```js interactive-example
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo"),
);
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status)),
);

// Expected output:
// "fulfilled"
// "rejected"
```

## 语法

```js-nolint
Promise.allSettled(iterable)
```

### 参数

- `iterable`
  - : 一个以 promise 组成的[可迭代对象](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)（例如 `Array`）对象。

### 返回值

一个 `Promise`，其状态为：

- **已兑现（already fulfilled）**，如果传入的 `iterable` 为空的话。
- **异步兑现（asynchronously fulfill）**，当给定的 `iterable` 中所有 promise 已经敲定时（要么已兑现，要么已拒绝）。兑现的值是一个对象数组，其中的对象按照 `iterable` 中传递的 promise 的顺序，描述每一个 promise 的结果，无论完成顺序如何。每个结果对象都有以下的属性：
  - `status`
    - : 一个字符串，要么是 `"fulfilled"`，要么是 `"rejected"`，表示 promise 的最终状态。
  - `value`
    - : 仅当 `status` 为 `"fulfilled"`，才存在。promise 兑现的值。
  - `reason`
    - : 仅当 `status` 为 `"rejected"`，才存在，promsie 拒绝的原因。

  如果传入的 `iterable` 是非空的，但不包含待定的（pending）promise，则返回的 promise 仍然是异步兑现的，而不是同步兑现。

## 描述

`Promise.allSettled()` 方法是 [promise 并发](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_并发)方法之一。在你有多个不依赖于彼此成功完成的异步任务时，或者你总是想知道每个 promise 的结果时，使用 `Promise.allSettled()` 。

相比之下，如果任务相互依赖，或者如果你想在任何 promise 被拒绝时立即拒绝，`Promise.all()` 返回的 Promise 可能更合适。

## 示例

### 使用 Promise.allSettled()

```js
Promise.allSettled([
  Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66), 0)),
  99,
  Promise.reject(new Error("一个错误")),
]).then((values) => console.log(values));

// [
//   { status: 'fulfilled', value: 33 },
//   { status: 'fulfilled', value: 66 },
//   { status: 'fulfilled', value: 99 },
//   { status: 'rejected', reason: Error: 一个错误 }
// ]
```

## 规范

## 浏览器兼容性

## 参见

- [`core-js` 中 `Promise.allSettled` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-promise)
- [使用 promise](/zh-CN/docs/Web/JavaScript/Guide/Using_promises)
- [使用 promise 的优雅异步编程](/zh-CN/docs/Learn_web_development/Extensions/Async_JS/Promises)
- `Promise`
- `Promise.all()`
- `Promise.any()`
- `Promise.race()`
