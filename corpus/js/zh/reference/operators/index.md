---
id: "js-zh-syntax-web-javascript-reference-operators"
language: "js"
lang: "zh"
category: "syntax"
name: "表达式和运算符"
title: "表达式和运算符"
module: "reference\\operators\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Operators"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# 表达式和运算符

该章节说明了 JavaScript 语言所有的运算符、表达式和关键字。

## 表达式和运算符分类

要查看按字母顺序排列的列表，请参阅左边的侧边栏。

### 主要表达式

JavaScript 中的基本关键字和常用表达式。这些表达式具有最高的优先级（高于[运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_precedence)）。

- `this`
  - : `this` 关键字指向执行上下文的特殊属性。
- [字面量](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#字面量)
  - : 基本的 `null`、布尔、数字和字符串字面量。
- `Array`
  - : 数组初始化或字面量语法。
- `Operators/Object_initializer`
  - : 对象初始化或字面量语法。
- `Operators/function`
  - : `function` 关键字定义了函数表达式。
- `Operators/class`
  - : `class` 关键字定义了类表达式。
- `Operators/function*`
  - : `function*` 关键字定义了一个生成器函数表达式。
- `Operators/async_function`
  - : `async function` 定义一个异步函数表达式。
- `Operators/async_function*`
  - : `async function*` 定义了一个异步生成器函数表达式。
- `RegExp`
  - : 正则表达式字面量语法。
- `Template_literals`
  - : 模版字面量语法。
- `Operators/Grouping`
  - : 分组运算符。

### 左表达式

左边的值是赋值的目标。

- `Operators/Property_accessors`
  - : 成员运算符用于访问对象的属性或方法（`object.property` 和 `object["property"]`）。
- `Operators/Optional_chaining`
  - : 如果引用是[空值](/zh-CN/docs/Glossary/Nullish)（[`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null) 或 [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)），可选链运算符将返回 `undefined` 而不是导致错误。
- `new`
  - : `new` 运算符创建了构造函数实例。
- `Operators/new.target`
  - : 在构造函数中，`new.target` 指向 `new` 调用的构造函数。
- `Operators/import.meta`
  - : 向 JavaScript 模块暴露特定上下文的元数据属性的对象。
- `Operators/super`
  - : `super` 关键字调用父类的构造函数或用于访问父类对象的属性。
- `Operators/import`
  - : `import()` 语法允许将模块异步且动态地加载到可能为非模块环境的上下文中。

### 自增和自减

前置或后置自增运算符和前置或后置自减运算符。

- `Operators/Increment`
  - : 后置自增运算符。
- `Operators/Decrement`
  - : 后置自减运算符。
- `Operators/Increment`
  - : 前置自增运算符。
- `Operators/Decrement`
  - : 前置自减运算符。

### 一元运算符

一元运算符只有一个操作数。

- `delete`
  - : `delete` 运算符用来删除对象的属性。
- `Operators/void`
  - : `void` 运算符执行表达式并丢弃其返回值。
- `Operators/typeof`
  - : `typeof` 运算符用来判断给定对象的类型。
- `Operators/Unary_plus`
  - : 一元加运算符将操作数转换为 Number 类型。
- `Operators/Unary_negation`
  - : 一元减运算符将操作数转换为 Number 类型并取反。
- `Operators/Bitwise_NOT`
  - : 按位非运算符。
- `Operators/Logical_NOT`
  - : 逻辑非运算符。
- `Operators/await`
  - : 暂停或恢复执行异步函数，并等待 promise 的兑现或拒绝。

### 算术运算符

算术运算符以二个数值（字面量或变量）作为操作数，并返回单个数值。

- `Operators/Exponentiation`
  - : 求幂运算符。
- `Operators/Multiplication`
  - : 乘法运算符。
- `Operators/Division`
  - : 除法运算符。
- `Operators/Remainder`
  - : 取模运算符。
- `Operators/Addition`（加）
  - : 加法运算符。
- `Operators/Subtraction`
  - : 减法运算符。

### 关系运算符

比较运算符比较两个操作数并返回基于比较结果的布尔值。

- `Operators/Less_than`（小于）
  - : 小于运算符。
- `Operators/Greater_than`（大于）
  - : 大于运算符。
- `Operators/Less_than_or_equal`
  - : 小于等于运算符。
- `Operators/Greater_than_or_equal`
  - : 大于等于运算符。
- `instanceof`
  - : `instanceof` 运算符判断一个对象是否是另一个对象的实例。
- `Operators/in`
  - : `in` 运算符用来判断对象是否拥有给定属性。

> [!NOTE]
> `=>` 不是运算符，而是[箭头函数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)的表示符。

### 相等运算符

相等运算符的求值结果始终是布尔类型（基于比较是否为 true）。

- `Operators/Equality`
  - : 相等运算符。
- `Operators/Inequality`
  - : 不等运算符。
- `Operators/Strict_equality`
  - : 严格相等运算符。
- `Operators/Strict_inequality`
  - : 严格不相等运算符。

### 位移运算符

对操作数的所有二进制位进行移动操作。

- `Operators/Left_shift`
  - : 按位左移运算符。
- `Operators/Right_shift`
  - : 按位右移运算符。
- `Operators/Unsigned_right_shift`
  - : 按位无符号右移运算符。

### 二进制位运算符

二进制运算符将它们的操作数作为 32 个二进制位（0 或 1）的集合，并返回标准的 JavaScript 数值。

- `Operators/Bitwise_AND`
  - : 按位与（AND）。
- `Operators/Bitwise_OR`
  - : 按位或（OR）。
- `Operators/Bitwise_XOR`
  - : 按位异或（XOR）。

### 二元逻辑运算符

逻辑运算符实现布尔（逻辑）值运算，并具有[短路](/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_precedence#短路)行为。

- `Operators/Logical_AND`
  - : 逻辑与（AND）。
- `Operators/Logical_OR`
  - : 逻辑或（OR）。
- `Operators/Nullish_coalescing`
  - : 空值合并运算符。

### 条件（三元）运算符

- `Operators/Conditional_operator`
  - : 条件运算符返回两个值中符合条件逻辑值的那个值。

### 赋值运算符

赋值运算符将右边的操作数的值赋给左边的操作数。

- `Operators/Assignment`
  - : 赋值运算符。
- `Operators/Multiplication_assignment`
  - : 赋值乘积。
- `Operators/Division_assignment`
  - : 赋值商。
- `Operators/Remainder_assignment`
  - : 赋值求余。
- `Operators/Addition_assignment`
  - : 赋值求和。
- `Operators/Subtraction_assignment`
  - : 赋值求差。
- `Operators/Left_shift_assignment`
  - : 左位移。
- `Operators/Right_shift_assignment`
  - : 右位移。
- `Operators/Unsigned_right_shift_assignment`
  - : 无符号右位移。
- `Operators/Bitwise_AND_assignment`
  - : 赋值与（AND）。
- `Operators/Bitwise_XOR_assignment`
  - : 赋值按位异或（XOR）。
- `Operators/Bitwise_OR_assignment`
  - : 赋值或（OR）。
- `Operators/Exponentiation_assignment`
  - : 求幂赋值。
- `Operators/Logical_AND_assignment`
  - : 逻辑和赋值运算符。
- `Operators/Logical_OR_assignment`
  - : 逻辑或赋值运算符。
- `Operators/Nullish_coalescing_assignment`
  - : 逻辑空赋值运算符。
- [`[a, b] = arr`、`{ a, b } = obj`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring)
  - : 解构允许你使用类似于数组或对象字面量的语法将数组或对象的属性赋值给变量。

### Yield 运算符

- `Operators/yield`
  - : 暂停和恢复生成器函数。
- `Operators/yield*`
  - : 委派给另外一个生成器函数或可迭代对象。

### 展开语法

- `Operators/Spread_syntax`
  - : 展开语法允许在需要零个或多个参数（对于函数调用）或者元素（对于数组字面量）的地方展开可迭代对象（例如，数组或字符串）。而在对象字面量中，展开语法枚举对象的属性，并将其键值对添加到正在创建的对象中。

### 逗号运算符

- `Operators/Comma_operator`
  - : 逗号运算符允许在单个语句中对多个表达式进行求值，并返回最后一个表达式的结果。

## 规范

## 浏览器兼容性

## 参见

- [运算符优先级](/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
