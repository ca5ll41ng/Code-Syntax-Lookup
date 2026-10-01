---
id: "zh-php-syntax-language-types-type-system"
language: "php"
lang: "zh"
category: "syntax"
name: "language.types.type-system"
title: "类型系统"
module: "language"
source_url: "https://www.php.net/manual/zh/language.types.type-system.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 类型系统

PHP 采用名义类型系统，并具有强行为的子类型关系。子类型关系在编译时检查，而类型验证则在运行时动态进行。

PHP 的类型系统支持各种原子类型，可以组合在一起创建更加复杂的类型。其中一些类型可以写成类型声明。

### 原子类型

一些原子类型是内置类型，跟语言紧密集成，不能用用户定义类型重现（reproduced）。

基础类型列表是：

- 内置类型 - 标量类型： - `bool` 类型 - `int` 类型 - `float` 类型 - `string` 类型 - `array` 类型 - `object` 类型 - `resource` 类型 - `never` 类型 - `void` 类型 - 相对类类型：`self`、`parent` 和 `static` - 单例类型 - `false` - `true` - 单值类型 - `null`
- 用户定义的类型（通常称为类类型） - 接口 - 类 - 枚举
- `callable` 类型

#### 标量类型

如果值是 `int`、`float`、`string` 或 `bool` 类型，则视该值为标量。

#### 用户定义类型

可以使用 interface、类和枚举定义自定义类型。这些被视为用户定义类型或类类型。例如，可以定义名为 `Elephant` 的类，然后可以实例化 `Elephant` 类型的对象，并且函数可以请求 `Elephant` 类型的参数。

### 复合类型

可以将多个原子类型组合为复合类型。PHP 允许使用以下方式组合类型：

- 类类型（接口和类名）的交集。
- 类型联合。

#### 交集类型

交集类型接受满足多个类类型声明的值，而不是单个值。交集类型中的每个类型由 `&` 符号连接。因此，类型 `T`、`U` 和 `V` 组成的交集类型将写成 `T&U&V`。

#### 联合类型

联合类型接受多个不同类型的值，而不是单个类型。联合类型中的每个类型由 `|` 符号连接。因此类型 `T`、`U` 和 `V` 的联合类型写成 `T|U|V`。如果其中一种类型是交集类型，需要使用括号括起来，在 DNF 中写成：`T|(X&Y)`。

### 类型别名

PHP 支持两种类型别名 `mixed` 和 `iterable`，分别对应 `object|resource|array|string|float|int|bool|null` 和 `Traversable|array` 的联合类型。

> PHP 不支持用户定义类型别名。
