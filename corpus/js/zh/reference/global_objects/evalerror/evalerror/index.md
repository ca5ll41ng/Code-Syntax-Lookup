---
id: "js-zh-syntax-web-javascript-reference-global_objects-evalerror-evalerror"
language: "js"
lang: "zh"
category: "syntax"
name: "EvalError() 构造函数"
title: "EvalError() 构造函数"
module: "reference\\global_objects\\evalerror\\evalerror\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/EvalError/EvalError"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# EvalError() 构造函数

`EvalError` 构造函数用于创建 `EvalError` 对象。

## 语法

```js-nolint
new EvalError()
new EvalError(message)
new EvalError(message, options)
new EvalError(message, fileName)
new EvalError(message, fileName, lineNumber)

EvalError()
EvalError(message)
EvalError(message, options)
EvalError(message, fileName)
EvalError(message, fileName, lineNumber)
```

> [!NOTE]
> `EvalError()` 在使用或不使用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 的情况下都可以调用。两种方式都会创建一个新的 `EvalError` 实例。

## 参数

- `message` 
  - : 人类可理解的错误描述。
- `options` 
  - : 一个包含以下属性的对象：
    - `cause` 
      - : 一个用于指示错误具体原因的属性。当捕获并重新抛出一个具有更具体或更有用错误信息的错误时，可以使用此属性来传递原始错误。
- `fileName`  
  - : 导致该异常的代码的文件名。
- `lineNumber`  
  - : 导致该异常的代码所在的行号。

## 示例

`EvalError` 对象在当前的 ECMAScript 规范中已不再使用，因此运行时不会再抛出这种错误。不过，为了与早期版本的规范保持向后兼容，该对象本身仍然被保留了下来。

### 创建 EvalError

```js
try {
  throw new EvalError("Hello");
} catch (e) {
  console.log(e instanceof EvalError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "EvalError"
  console.log(e.stack); // 错误的堆栈
}
```

## 规范

## 浏览器兼容性

## 参见

- `Error`
- `Global_Objects/eval`
