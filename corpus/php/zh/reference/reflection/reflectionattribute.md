---
id: "zh-php-guide-class-reflectionattribute"
language: "php"
lang: "zh"
category: "guide"
name: "class.reflectionattribute"
title: "ReflectionAttribute 类"
module: "reflection"
source_url: "https://www.php.net/manual/zh/class.reflectionattribute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# ReflectionAttribute 类

ReflectionAttribute

   简介  `ReflectionAttribute` 类提供有关 注解 的信息。      类摘要    `ReflectionAttribute`   `implements` Reflector  常量  `public` `const` `int` `ReflectionAttribute::IS_INSTANCEOF`  属性  `public` `string` `name`  方法       属性 
- **`name`** — 属性的名称。

    预定义常量  ReflectionAttribute Flags 
- **`ReflectionAttribute::IS_INSTANCEOF` `int`** — 使用 `$instanceof` 检索属性。

 
> 这些常量的值可能会在不同 PHP 版本间发生更改。建议始终使用常量而不直接依赖值。

     更新日志 
| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 所有类常量现已类型化。 |
| 8.4.0 | 添加了 ReflectionAttribute::$name。 |
