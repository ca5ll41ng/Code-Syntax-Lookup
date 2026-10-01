---
id: "en-php-guide-class-reflectionclassconstant"
language: "php"
lang: "en"
category: "guide"
name: "class.reflectionclassconstant"
title: "The ReflectionClassConstant class"
module: "reflection"
source_url: "https://www.php.net/manual/en/class.reflectionclassconstant.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The ReflectionClassConstant class

ReflectionClassConstant

   Introduction  The `ReflectionClassConstant` class reports information about a class constant.      Class Synopsis    `ReflectionClassConstant`   `implements` Reflector    `public` `const` `int` `ReflectionClassConstant::IS_PUBLIC`   `public` `const` `int` `ReflectionClassConstant::IS_PROTECTED`   `public` `const` `int` `ReflectionClassConstant::IS_PRIVATE`   `public` `const` `int` `ReflectionClassConstant::IS_FINAL`    `public` `string` `name`   `public` `string` `class`          Properties 
- **`name`** — Name of the class constant. Read-only, throws `ReflectionException` in attempt to write.
- **`class`** — Name of the class where the class constant is defined. Read-only, throws `ReflectionException` in attempt to write.

     Predefined Constants  ReflectionClassConstant Modifiers 
- **`ReflectionClassConstant::IS_PUBLIC` `int`** — Indicates public constants. Prior to PHP 7.4.0, the value was `256`.
- **`ReflectionClassConstant::IS_PROTECTED` `int`** — Indicates protected constants. Prior to PHP 7.4.0, the value was `512`.
- **`ReflectionClassConstant::IS_PRIVATE` `int`** — Indicates private constants. Prior to PHP 7.4.0, the value was `1024`.
- **`ReflectionClassConstant::IS_FINAL` `int`** — Indicates final constants. Available as of PHP 8.1.0.

 
> The values of these constants may change between PHP versions. It is recommended to always use the constants and not rely on the values directly.

     Changelog 
|  |  |
| --- | --- |
| 8.4.0 | The class constants are now typed. |
| 8.0.0 | `ReflectionClassConstant::export()` was removed. |
