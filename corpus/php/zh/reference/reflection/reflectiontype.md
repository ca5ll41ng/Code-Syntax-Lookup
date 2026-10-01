---
id: "zh-php-guide-class-reflectiontype"
language: "php"
lang: "zh"
category: "guide"
name: "class.reflectiontype"
title: "ReflectionType 类"
module: "reflection"
source_url: "https://www.php.net/manual/zh/class.reflectiontype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# ReflectionType 类

ReflectionType

   简介  `ReflectionType` 类报告有关函数的参数/返回类型以及类的属性类型的信息。Reflection 扩展声明了以下子类型：  `ReflectionNamedType`（自 PHP 7.1.0 起） `ReflectionUnionType`（自 PHP 8.0.0 起） `ReflectionIntersectionType`（自 PHP 8.1.0 起）       类摘要    `abstract` `ReflectionType`   `implements` Stringable  方法      更新日志  
| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `ReflectionType` 已成为抽象类，`ReflectionType::isBuiltin()` 已移至 `ReflectionNamedType::isBuiltin()`。 |
