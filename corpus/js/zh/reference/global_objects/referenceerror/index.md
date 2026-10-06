---
id: "js-zh-syntax-web-javascript-reference-global_objects-referenceerror"
language: "js"
lang: "zh"
category: "syntax"
name: "ReferenceError"
title: "ReferenceError"
module: "reference\\global_objects\\referenceerror\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# ReferenceError

**`ReferenceError`**（引用错误）对象代表当一个不存在（或尚未初始化）的变量被引用时发生的错误。

`ReferenceError` 是一个"serializable object", "可序列化对象"，所以可以使用 `Window.structuredClone` 对它进行克隆，也可以使用 `Worker/postMessage()` 在 [Worker](/zh-CN/docs/Web/API/Worker) 之间拷贝它。

## 构造函数

- `Global_Objects/ReferenceError/ReferenceError`
  - : 创建一个新的 `ReferenceError` 对象。

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

### 捕获一个 ReferenceError

```js
try {
  let a = undefinedVariable;
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "undefinedVariable is not defined"
  console.log(e.name); // "ReferenceError"
  console.log(e.fileName); // "Scratchpad/1"
  console.log(e.lineNumber); // 2
  console.log(e.columnNumber); // 6
  console.log(e.stack); // "@Scratchpad/2:2:7\n"
}
```

### 创建一个 ReferenceError

```js
try {
  throw new ReferenceError("Hello", "someFile.js", 10);
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "ReferenceError"
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
