---
id: "zh-php-guide-class-reflectionproperty"
language: "php"
lang: "zh"
category: "guide"
name: "class.reflectionproperty"
title: "ReflectionProperty 类"
module: "reflection"
source_url: "https://www.php.net/manual/zh/class.reflectionproperty.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# ReflectionProperty 类

ReflectionProperty

   简介  `ReflectionProperty` 类报告有关类属性的信息。      类摘要    `ReflectionProperty`   `implements` Reflector  常量  `public` `const` `int` `ReflectionProperty::IS_STATIC`   `public` `const` `int` `ReflectionProperty::IS_READONLY`   `public` `const` `int` `ReflectionProperty::IS_PUBLIC`   `public` `const` `int` `ReflectionProperty::IS_PROTECTED`   `public` `const` `int` `ReflectionProperty::IS_PRIVATE`   `public` `const` `int` `ReflectionProperty::IS_ABSTRACT`   `public` `const` `int` `ReflectionProperty::IS_PROTECTED_SET`   `public` `const` `int` `ReflectionProperty::IS_PRIVATE_SET`   `public` `const` `int` `ReflectionProperty::IS_VIRTUAL`   `public` `const` `int` `ReflectionProperty::IS_FINAL`  属性  `public` `string` `name`   `public` `string` `class`  方法        属性 
- **`name`** — 属性名。只读，在尝试赋值的时候抛出 `ReflectionException`。
- **`class`** — 定义的属性所在的类。只读，在尝试赋值的时候抛出 `ReflectionException`。

     预定义常量  ReflectionProperty 修饰符 
- **`ReflectionProperty::IS_STATIC` `int`** — 表示 static 属性。在 PHP 7.4.0 之前，值为 `1`。
- **`ReflectionProperty::IS_READONLY` `int`** — 表示 readonly 属性。自 PHP 8.1.0 起可用。
- **`ReflectionProperty::IS_PUBLIC` `int`** — 表示 public 属性。在 PHP 7.4.0 之前，值为 `256`。
- **`ReflectionProperty::IS_PROTECTED` `int`** — 表示 protected 属性。在 PHP 7.4.0 之前，值为 `512`。
- **`ReflectionProperty::IS_PRIVATE` `int`** — 表示 private 属性。在 PHP 7.4.0 之前，值为 `1024`。
- **`ReflectionProperty::IS_ABSTRACT` `int`** — 表示属性是 abstract。自 PHP 8.4.0 起可用。
- **`ReflectionProperty::IS_PROTECTED_SET` `int`** — 自 PHP 8.4.0 起可用。
- **`ReflectionProperty::IS_PRIVATE_SET` `int`** — 自 PHP 8.4.0 起可用。
- **`ReflectionProperty::IS_VIRTUAL` `int`** — 自 PHP 8.4.0 起可用。
- **`ReflectionProperty::IS_FINAL` `int`** — 表示属性是 final。自 PHP 8.4.0 起可用。

 
> 这些常量的值可能会在不同 PHP 版本间发生更改。建议始终使用常量而不直接依赖值。

     更新日志 
| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 所有类常量现已类型化。 |
| 8.4.0 | 新增 `ReflectionProperty::IS_VIRTUAL`、`ReflectionProperty::IS_PRIVATE_SET`、`ReflectionProperty::IS_PROTECTED_SET`、`ReflectionProperty::IS_ABSTRACT`, 和 `ReflectionProperty::IS_FINAL`。 |
| 8.0.0 | 已移除 `ReflectionProperty::export()`。 |
