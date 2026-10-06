---
id: "js-zh-syntax-web-javascript-reference"
language: "js"
lang: "zh"
category: "syntax"
name: "JavaScript 参考"
title: "JavaScript 参考"
module: "reference\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# JavaScript 参考

JavaScript 参考提供了有关 JavaScript 语言的内容资料库。这里详细描述了整个语言。在编写 JavaScript 代码时，你经常会参考这些页面（因此，标题为“JavaScript 参考”）。

JavaScript 语言旨在用于更加广泛的环境，不论是浏览器、服务端脚本还是其他类似的环境。在大多数情况下，本参考与环境无关，且不针对 web 浏览器环境。

如果你对 JavaScript 不熟悉，请先阅读[指南](/zh-CN/docs/Web/JavaScript/Guide)。一旦你牢牢地掌握了基础知识，就可以使用参考资料，来获取有关各个对象和语言结构的更加详细的知识。

## 内置对象

[JavaScript 标准内置对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)，以及它们的方法和属性。

### 值属性

- `globalThis`
- `Infinity`
- `NaN`
- `undefined`

### Function 属性

- `Global_Objects/eval`
- `isFinite()`
- `isNaN()`
- `parseFloat()`
- `parseInt()`
- `decodeURI()`
- `decodeURIComponent()`
- `encodeURI()`
- `encodeURIComponent()`
- `escape()` 
- `unescape()` 

### 基本对象

- `Object`
- `Function`
- `Boolean`
- `Symbol`

### 错误对象

- `Error`
- `AggregateError`
- `EvalError`
- `RangeError`
- `ReferenceError`
- `SyntaxError`
- `TypeError`
- `URIError`
- `InternalError` 

### 数字和日期

- `Number`
- `BigInt`
- `Math`
- `Date`

### 文本处理

- `String`
- `RegExp`

### 索引集合

- `Array`
- `Int8Array`
- `Uint8Array`
- `Uint8ClampedArray`
- `Int16Array`
- `Uint16Array`
- `Int32Array`
- `Uint32Array`
- `BigInt64Array`
- `BigUint64Array`
- `Float32Array`
- `Float64Array`

### 键集合类

- `Map`
- `Set`
- `WeakMap`
- `WeakSet`

### 结构化数据

- `ArrayBuffer`
- `SharedArrayBuffer`
- `DataView`
- `Atomics`
- `JSON`

### 内存管理

- `WeakRef`
- `FinalizationRegistry`

### 控制抽象对象

- `Iterator`
- `AsyncIterator`
- `Promise`
- `GeneratorFunction`
- `AsyncGeneratorFunction`
- `Generator`
- `AsyncGenerator`
- `AsyncFunction`

### 反射

- `Reflect`
- `Proxy`

### 国际化

- `Intl`
- `Intl.Collator`
- `Intl.DateTimeFormat`
- `Intl.DisplayNames`
- `Intl.DurationFormat`
- `Intl.ListFormat`
- `Intl.Locale`
- `Intl.NumberFormat`
- `Intl.PluralRules`
- `Intl.RelativeTimeFormat`
- `Intl.Segmenter`

## 语句

[JavaScript 语句和声明](/zh-CN/docs/Web/JavaScript/Reference/Statements)

### 控制流

- `Statements/return`
- `Statements/break`
- `Statements/continue`
- `Statements/throw`
- `Statements/if...else`
- `Statements/switch`
- `Statements/try...catch`

### 声明变量

- `Statements/var`
- `Statements/let`
- `Statements/const`

### 函数和类

- `Statements/function`
- `Statements/function*`
- `Statements/async_function`
- `Statements/async_function*`
- `Statements/class`

### 迭代

- `Statements/do...while`
- `Statements/for`
- `Statements/for...in`
- `Statements/for...of`
- `Statements/for-await...of`
- `Statements/while`

### 其他

- `Statements/Empty`
- `Statements/block`
- `Statements/Expression_statement`
- `Statements/debugger`
- `Statements/export`
- `Statements/import`
- `Statements/label`
- `Statements/with` 

## 表达式和运算符

[JavaScript 表达式和运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators)。

### 主要表达式

- `this`
- [字面量](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#字面量)
- `Array`
- `Operators/Object_initializer`
- `Operators/function`
- `Operators/class`
- `Operators/function*`
- `Operators/async_function`
- `Operators/async_function*`
- `RegExp`
- `Template_literals`
- `Operators/Grouping`

### 左值表达式

- `Operators/Property_accessors`
- `Operators/Optional_chaining`
- `new`
- `Operators/new.target`
- `Operators/import.meta`
- `Operators/super`
- `Operators/import`

### 自增和自减

- `Operators/Increment`
- `Operators/Decrement`
- `Operators/Increment`
- `Operators/Decrement`

### 一元运算符

- `delete`
- `Operators/void`
- `Operators/typeof`
- `Operators/Unary_plus`
- `Operators/Unary_negation`
- `Operators/Bitwise_NOT`
- `Operators/Logical_NOT`
- `Operators/await`

### 算术运算符

- `Operators/Exponentiation`
- `Operators/Multiplication`
- `Operators/Division`
- `Operators/Remainder`
- `Operators/Addition`（加法）
- `Operators/Subtraction`

### 关系运算符

- `Operators/Less_than`（小于）
- `Operators/Greater_than`（大于）
- `Operators/Less_than_or_equal`
- `Operators/Greater_than_or_equal`
- `instanceof`
- `Operators/in`

### 相等运算符

- `Operators/Equality`
- `Operators/Inequality`
- `Operators/Strict_equality`
- `Operators/Strict_inequality`

### 位移运算符

- `Operators/Left_shift`
- `Operators/Right_shift`
- `Operators/Unsigned_right_shift`

### 二进制运算符

- `Operators/Bitwise_AND`
- `Operators/Bitwise_OR`
- `Operators/Bitwise_XOR`

### 二元运算符

- `Operators/Logical_AND`
- `Operators/Logical_OR`
- `Operators/Nullish_coalescing`

### 条件（三元）运算符

- `Operators/Conditional_operator`

### 赋值运算符

- `Operators/Assignment`
- `Operators/Multiplication_assignment`
- `Operators/Division_assignment`
- `Operators/Remainder_assignment`
- `Operators/Addition_assignment`
- `Operators/Subtraction_assignment`
- `Operators/Left_shift_assignment`
- `Operators/Right_shift_assignment`
- `Operators/Unsigned_right_shift_assignment`
- `Operators/Bitwise_AND_assignment`
- `Operators/Bitwise_XOR_assignment`
- `Operators/Bitwise_OR_assignment`
- `Operators/Exponentiation_assignment`
- `Operators/Logical_AND_assignment`
- `Operators/Logical_OR_assignment`
- `Operators/Nullish_coalescing_assignment`
- [`[a, b] = arr`, `{ a, b } = obj`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring)

### Yield 运算符

- `Operators/yield`
- `Operators/yield*`

### 展开语法

- `Operators/Spread_syntax`

### 逗号运算符

- `Operators/Comma_operator`

## 函数

[JavaScript 函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)。

- `Functions/Arrow_functions`
- `Functions/Default_parameters`
- `Functions/rest_parameters`
- `Functions/arguments`
- `Functions/Method_definitions`
- `Functions/get`
- `Functions/set`

## 类

[JavaScript 类](/zh-CN/docs/Web/JavaScript/Reference/Classes)。

- `Classes/constructor`
- `Classes/extends`
- [私有元素](/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_elements)
- [公有类字段](/zh-CN/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- `Classes/static`
- [静态初始化块](/zh-CN/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

## 附加参考页面

- `Lexical_grammar`
- [数据类型和数据结构](/zh-CN/docs/Web/JavaScript/Guide/Data_structures)
- [迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)
- [尾后逗号](/zh-CN/docs/Web/JavaScript/Reference/Trailing_commas)
- [错误参考](/zh-CN/docs/Web/JavaScript/Reference/Errors)
- `Strict_mode`
- `Deprecated_and_obsolete_features`
