---
id: "zh-php-guide-class-reflectionmethod"
language: "php"
lang: "zh"
category: "guide"
name: "class.reflectionmethod"
title: "ReflectionMethod 类"
module: "reflection"
source_url: "https://www.php.net/manual/zh/class.reflectionmethod.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# ReflectionMethod 类

ReflectionMethod

   简介  `ReflectionMethod` 类报告有关方法的信息。      类摘要    `ReflectionMethod`   `extends` `ReflectionFunctionAbstract`  常量  `public` `const` `int` `ReflectionMethod::IS_STATIC`   `public` `const` `int` `ReflectionMethod::IS_PUBLIC`   `public` `const` `int` `ReflectionMethod::IS_PROTECTED`   `public` `const` `int` `ReflectionMethod::IS_PRIVATE`   `public` `const` `int` `ReflectionMethod::IS_ABSTRACT`   `public` `const` `int` `ReflectionMethod::IS_FINAL`  属性  `public` `string` `class`  继承的属性  方法   继承的方法       属性 
- **`name`** — 方法名
- **`class`** — 类名

     预定义常量  ReflectionMethod 修饰符 
- **`ReflectionMethod::IS_STATIC` `int`** — 表示该方法是 static。在 PHP 7.4.0 之前，值为 `1`。
- **`ReflectionMethod::IS_PUBLIC` `int`** — 表示该方法是 public。在 PHP 7.4.0 之前，值为 `256`。
- **`ReflectionMethod::IS_PROTECTED` `int`** — 表示该方法是 protected。在 PHP 7.4.0 之前，值为 `512`。
- **`ReflectionMethod::IS_PRIVATE` `int`** — 表示该方法是 private。在 PHP 7.4.0 之前，值为 `1024`。
- **`ReflectionMethod::IS_ABSTRACT` `int`** — 表示该方法是 abstract。PHP 7.4.0 之前，值为 `2`。
- **`ReflectionMethod::IS_FINAL` `int`** — 表示该方法是 final。PHP 7.4.0 之前，值为 `4`。

 
> 这些常量的值可能会在不同 PHP 版本间发生更改。建议始终使用常量而不直接依赖值。

     更新日志 
| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 所有类常量现已类型化。 |
| 8.0.0 | 已移除 `ReflectionMethod::export()`。 |
