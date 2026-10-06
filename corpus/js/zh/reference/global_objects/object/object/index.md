---
id: "js-zh-syntax-web-javascript-reference-global_objects-object-object"
language: "js"
lang: "zh"
category: "syntax"
name: "Object() 构造函数"
title: "Object() 构造函数"
module: "reference\\global_objects\\object\\object\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Object/Object"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Object() 构造函数

**`Object()`** 构造函数将输入转换为一个对象。它的行为取决于输入的类型。

## 语法

```js-nolint
new Object(value)
Object(value)
```

> [!NOTE]
> `Object()` 可以在带有或者不带有 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 的情况下调用，但有时会产生不同的效果。参见[返回值](#返回值)。

### 参数

- `value`
  - : 任意值。

### 返回值

当调用或者构造 `Object()` 构造函数本身时，其返回值是一个对象：

- 如果该值是 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null) 或者 `undefined`，它会生成并返回一个空对象。
- 如果该值已经是一个对象，则返回该值。
- 否则，它将返回与给定值对应的类型的对象。例如，传递 `BigInt` 基本类型会返回一个 `BigInt` 封装对象。

当通过[继承 `Object`](/zh-CN/docs/Web/JavaScript/Reference/Classes/extends#扩展对象) 的类的构造函数中的 [`super()`](/zh-CN/docs/Web/JavaScript/Reference/Operators/super) 隐式调用 `Object()` 时，它以 `new.target.prototype` 为原型初始化一个新对象。传递给 `super()` 的任意值都将被忽略——例如，即使你传递一个数字，构造函数中的 `this` 值也不会变成 `Number` 实例。

## 示例

### 创建一个新对象

```js
const o = new Object();
o.foo = 42;

console.log(o);
// { foo: 42 }
```

### 使用 undefined 和 null 类型调用 Object

以下示例在 `o` 中存储一个空 `Object` 对象：

```js
const o = new Object();
```

```js
const o = new Object(undefined);
```

```js
const o = new Object(null);
```

### 获取 BigInt 和 Symbol 的封装对象

当用 `new` 调用 `BigInt/BigInt` 和 `Symbol/Symbol` 构造函数时会抛出一个错误，以阻止创建封装对象而不是基本类型值的常见错误。为这些类型创建封装对象的唯一方法是使用它们调用 `Object()`：

```js
const numberObj = new Number(1);
console.log(typeof numberObj); // "object"

const bigintObj = Object(1n);
console.log(typeof bigintObj); // "object"

const symbolObj = Object(Symbol("foo"));
console.log(typeof symbolObj); // "object"
```

## 规范

## 浏览器兼容性

## 参见

- [对象初始化](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer)
