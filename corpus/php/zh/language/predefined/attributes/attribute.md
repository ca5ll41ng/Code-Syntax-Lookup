---
id: "zh-php-syntax-class-attribute"
language: "php"
lang: "zh"
category: "syntax"
name: "class.attribute"
title: "Attribute 属性"
module: "language"
source_url: "https://www.php.net/manual/zh/class.attribute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Attribute 属性

Attribute

  简介  注解提供了向代码声明中添加结构化、机器可读的元数据信息的能力：类、方法、函数、参数、属性和类常量都可以作为注解的目标。然后可以在运行时使用反射 API 检查注解定义的元数据。因此，注解可以被看作是直接嵌入代码的配置语言。     类摘要   `#[\Attribute]` `final` `Attribute`  常量  `const` `int` `Attribute::TARGET_CLASS`   `const` `int` `Attribute::TARGET_FUNCTION`   `const` `int` `Attribute::TARGET_METHOD`   `const` `int` `Attribute::TARGET_PROPERTY`   `const` `int` `Attribute::TARGET_CLASS_CONSTANT`   `const` `int` `Attribute::TARGET_PARAMETER`   `const` `int` `Attribute::TARGET_CONSTANT`   `const` `int` `Attribute::TARGET_ALL`   `const` `int` `Attribute::IS_REPEATABLE`  属性  `public` `int` `flags`  方法     预定义常量 
- **`Attribute::TARGET_CLASS`**
- **`Attribute::TARGET_FUNCTION`**
- **`Attribute::TARGET_METHOD`**
- **`Attribute::TARGET_PROPERTY`**
- **`Attribute::TARGET_CLASS_CONSTANT`**
- **`Attribute::TARGET_PARAMETER`**
- **`Attribute::TARGET_CONSTANT`**
- **`Attribute::TARGET_ALL`**
- **`Attribute::IS_REPEATABLE`**

   属性 
- **`flags`**

   更新日志 
| 版本 | 说明 |
| --- | --- |
| 8.5.0 | 新增 `Attribute::TARGET_CONSTANT`。 |

   参见 注解概述
