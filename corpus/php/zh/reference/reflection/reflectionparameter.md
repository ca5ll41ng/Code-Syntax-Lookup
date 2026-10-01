---
id: "zh-php-guide-class-reflectionparameter"
language: "php"
lang: "zh"
category: "guide"
name: "class.reflectionparameter"
title: "ReflectionParameter 类"
module: "reflection"
source_url: "https://www.php.net/manual/zh/class.reflectionparameter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# ReflectionParameter 类

ReflectionParameter

   简介  `ReflectionParameter` 检索函数或方法参数的相关信息。    要自行检查函数的参数，首先创建 `ReflectionFunction` 或 `ReflectionMethod` 的实例，然后使用它们的 `ReflectionFunctionAbstract::getParameters()` 方法来检索参数的数组。      类摘要    `ReflectionParameter`   `implements` Reflector  属性  `public` `string` `name`  方法        属性 
- **`name`** — 参数名。只读，在尝试赋值的时候会抛出 `ReflectionException`。

    更新日志 
| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 已移除 `ReflectionParameter::export()`。 |
