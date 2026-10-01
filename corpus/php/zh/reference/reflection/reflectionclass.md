---
id: "zh-php-guide-class-reflectionclass"
language: "php"
lang: "zh"
category: "guide"
name: "class.reflectionclass"
title: "ReflectionClass 类"
module: "reflection"
source_url: "https://www.php.net/manual/zh/class.reflectionclass.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# ReflectionClass 类

ReflectionClass

   简介  `ReflectionClass` 类报告了一个类的有关信息。      类摘要    `ReflectionClass`   `implements` Reflector  常量  `public` `const` `int` `ReflectionClass::IS_IMPLICIT_ABSTRACT`   `public` `const` `int` `ReflectionClass::IS_EXPLICIT_ABSTRACT`   `public` `const` `int` `ReflectionClass::IS_FINAL`   `public` `const` `int` `ReflectionClass::IS_READONLY`   `public` `const` `int` `ReflectionClass::SKIP_INITIALIZATION_ON_SERIALIZE`   `public` `const` `int` `ReflectionClass::SKIP_DESTRUCTOR`  属性  `public` `string` `name`  方法        属性 
- **`name`** — 类名。只读，尝试赋值时抛出 `ReflectionException`。

     预定义常量  ReflectionClass 修饰符 
- **`ReflectionClass::IS_IMPLICIT_ABSTRACT` `int`** — 表示该类是 abstract，因为有一些抽象方法。
- **`ReflectionClass::IS_EXPLICIT_ABSTRACT` `int`** — 表示该类是 abstract，因为已明确定义。
- **`ReflectionClass::IS_FINAL` `int`** — 表示该类是 final。
- **`ReflectionClass::IS_READONLY` `int`** — 表示该类是 readonly。
- **`ReflectionClass::SKIP_INITIALIZATION_ON_SERIALIZE` `int`** — 表示 `serialize()` 不应触发延迟对象的初始化。
- **`ReflectionClass::SKIP_DESTRUCTOR` `int`** — 表示将对象重置为延迟时不应调用对象析构方法。

     更新日志 
| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 所有类常量现已类型化。 |
| 8.0.0 | 移除 `ReflectionClass::export()`。 |
