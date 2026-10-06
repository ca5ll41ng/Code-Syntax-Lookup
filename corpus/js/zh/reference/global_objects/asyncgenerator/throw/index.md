---
id: "js-zh-syntax-web-javascript-reference-global_objects-asyncgenerator-throw"
language: "js"
lang: "zh"
category: "syntax"
name: "AsyncGenerator.prototype.throw"
title: "AsyncGenerator.prototype.throw()"
module: "reference\\global_objects\\asyncgenerator\\throw\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator/throw"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# AsyncGenerator.prototype.throw()

`AsyncGenerator` 实例的 **`throw()`** 方法的作用就好像一个 `throw` 语句被插入到生成器主体的当前暂停位置，这会通知生成器错误的情况并允许其处理错误，或者执行清理和自行关闭。

## 语法

```js-nolint
asyncGeneratorInstance.throw(exception)
```

### 参数

- `exception`
  - : 要抛出的异常。使用 `Error` 实例对调试非常有帮助。

### 返回值

如果抛出的错误没有被捕获，它会返回一个以传入的异常拒绝的 `Promise`。

如果抛出的异常被 [`try...catch`](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch) 捕获并且生成器恢复生成更多的值，它将返回一个 `Promise`，其兑现为带有两个属性的 `Object`：

- `done`
  - : 一个布尔值：
    - 如果该生成器函数的控制流程已经结束，则为 `true`。
    - 如果该生成器函数还能产生更多的值，则为 `false`。
- `value`
  - : 下一个 `yeild` 表达式生成的值。

## 示例

### 使用 throw()

以下示例展示了一个简单生成器和使用 `throw` 方法抛出的错误。像往常一样，错误可以通过 `Statements/try...catch` 块捕获。

```js
// 异步任务。假设它在实践中做了一些更有用的事情。
function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

async function* createAsyncGenerator() {
  while (true) {
    try {
      await sleep(500);
      yield 42;
    } catch (e) {
      console.error(e);
    }
  }
}

const asyncGen = createAsyncGenerator();
asyncGen.next(1).then((res) => console.log(res)); // { value: 42, done: false }
asyncGen
  .throw(new Error("出了点问题")) // Error: 出了点问题
  .then((res) => console.log(res)); // { value: 42, done: false }
```

## 规范

## 浏览器兼容性

## 参见

- `Statements/async_function*`
- [迭代器和生成器](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators)指南
