---
id: "js-zh-syntax-web-javascript-reference-errors-deprecated_caller_or_arguments_usage"
language: "js"
lang: "zh"
category: "syntax"
name: "ReferenceError: deprecated caller or arguments usage"
title: "ReferenceError: deprecated caller or arguments usage"
module: "reference\\errors\\deprecated_caller_or_arguments_usage\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Errors/Deprecated_caller_or_arguments_usage"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# ReferenceError: deprecated caller or arguments usage

## 信息

```plain
Warning: ReferenceError: deprecated caller usage (Firefox)
Warning: ReferenceError: deprecated arguments usage (Firefox)
TypeError: 'callee' and 'caller' cannot be accessed in strict mode. (Safari)
```

## 错误类型

仅在严格模式下出现的 `ReferenceError` 警告。JavaScript 的执行将不会停止。

## 发生了什么？

在 [strict mode](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode) 中，`Function.caller` 和 `Function.arguments` 属性是不该使用的。它们都是已经被废弃的了，因为这两者泄露了函数的调用者，是不标准的，难于优化和有这潜在的性能问题。

## 实力

### 废弃的 `function.caller` or `arguments.callee.caller`

`Function.caller` 和 [`arguments.callee.caller`](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/callee) 都是已废弃的 (详见参考文章)。

```js example-bad
"use strict";

function myFunc() {
  if (myFunc.caller == null) {
    return "The function was called from the top!";
  } else {
    return "This function's caller was " + myFunc.caller;
  }
}

myFunc();
// Warning: ReferenceError: deprecated caller usage
// "The function was called from the top!"
```

### `Function.arguments`

`Function.arguments` 已被废弃。 (详见参考文章)。

```js example-bad
"use strict";

function f(n) {
  g(n - 1);
}

function g(n) {
  console.log("before: " + g.arguments[0]);
  if (n > 0) {
    f(n);
  }
  console.log("after: " + g.arguments[0]);
}

f(2);

console.log("returned: " + g.arguments);
// Warning: ReferenceError: deprecated arguments usage
```

## 相关

- [Deprecated and obsolete features](/zh-CN/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)
- [Strict mode](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)
- `Function.arguments`
- `Function.caller` and [`arguments.callee.caller`](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/callee)
