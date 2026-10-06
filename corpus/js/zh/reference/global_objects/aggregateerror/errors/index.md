---
id: "js-zh-syntax-web-javascript-reference-global_objects-aggregateerror-errors"
language: "js"
lang: "zh"
category: "syntax"
name: "AggregateError: errors"
title: "AggregateError: errors"
module: "reference\\global_objects\\aggregateerror\\errors\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/AggregateError/errors"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# AggregateError: errors

`AggregateError` 实例的 **`errors`** 数据属性包含一个表示已聚合的错误的数组。

## 值

`Array` 包含的值的顺序与作为 `AggregateError/AggregateError` 构造函数第一个参数传入的可迭代对象中值的顺序相同。

## 示例

### 使用 errors

```js
try {
  throw new AggregateError(
    // 一个 errors 可迭代对象
    new Set([new Error("某个错误"), new Error("另一个错误")]),
    "抛出多个错误",
  );
} catch (err) {
  console.log(err.errors);
  // [
  //   Error: 某个错误，
  //   Error: 另一个错误
  // ]
}
```

## 规范

## 浏览器兼容性

## 参见

- [控制流和错误处理](/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)指南
- `AggregateError`
- [`Error`：`cause`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/cause)
