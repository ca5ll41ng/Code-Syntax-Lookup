---
id: "js-zh-syntax-web-javascript-reference-global_objects-evalerror"
language: "js"
lang: "zh"
category: "syntax"
name: "EvalError"
title: "EvalError"
module: "reference\\global_objects\\evalerror\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/EvalError"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# EvalError

本对象代表了一个关于 `Global_Objects/eval` 全局函数的错误。此异常不再会被 JavaScript 抛出，但是 EvalError 对象仍然存在，以保持兼容性。

`EvalError` 是一个"serializable object", "可序列化对象"，所以可以使用 `Window.structuredClone` 对它进行克隆，也可以使用 `Worker/postMessage()` 在 [Worker](/zh-CN/docs/Web/API/Worker) 之间拷贝它。

## 构造函数

- `EvalError/EvalError`
  - : 创建一个新的 `EvalError` 对象。

## 实例属性

- `Error.prototype.message`
  - : 错误消息。继承自 `Error`。
- `Error.prototype.name`
  - : 错误名称。继承自 `Error`。
- `Error.prototype.cause`
  - : 表示导致当前错误被抛出的原因。继承自 `Error`。
- `Error.prototype.fileName` 
  - : 引发此错误的文件的路径。继承自 `Error`。
- `Error.prototype.lineNumber` 
  - : 引发此错误的代码所在的文件的行号。继承自 `Error`。
- `Error.prototype.columnNumber` 
  - : 引发此错误的代码在文件中所在行的列号。继承自 `Error`。
- `Error.prototype.stack` 
  - : 堆栈跟踪。继承自 `Error`。

## 示例

`EvalError` 不在当前的 ECMAScript 规范中使用，因此不会被运行时抛出。但是对象本身仍然与规范的早期版本向后兼容。

### 创建 EvalError

```js
try {
  throw new EvalError("Hello", "someFile.js", 10);
} catch (e) {
  console.log(e instanceof EvalError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "EvalError"
  console.log(e.fileName); // "someFile.js"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // "@Scratchpad/2:2:9\n"
}
```

## 规范

## 浏览器兼容性

## 参见

- `Error`
- `Global_Objects/eval`
