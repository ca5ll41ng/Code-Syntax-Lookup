---
id: "js-zh-syntax-web-javascript-reference-global_objects-symbol-hasinstance"
language: "js"
lang: "zh"
category: "syntax"
name: "Symbol.hasInstance"
title: "Symbol.hasInstance"
module: "reference\\global_objects\\symbol\\hasinstance\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Symbol.hasInstance

**`Symbol.hasInstance`** 用于判断某对象是否为某构造器的实例。因此你可以用它自定义 `instanceof` 操作符在某个类上的行为。

`JavaScript Demo: Symbol.hasInstance`

```js interactive-example
class Array1 {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}

console.log([] instanceof Array1);
// Expected output: true
```

## 示例

你可实现一个自定义的`instanceof` 行为，例如：

```js
class MyArray {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}
console.log([] instanceof MyArray); // true
```

## 规范

## 浏览器兼容性

## 参见

- `instanceof`
