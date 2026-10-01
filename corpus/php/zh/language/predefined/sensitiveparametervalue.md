---
id: "zh-php-syntax-class-sensitiveparametervalue"
language: "php"
lang: "zh"
category: "syntax"
name: "class.sensitiveparametervalue"
title: "SensitiveParameterValue 类"
module: "language"
source_url: "https://www.php.net/manual/zh/class.sensitiveparametervalue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# SensitiveParameterValue 类

SensitiveParameterValue

   简介  `SensitiveParameterValue` 类允许包装敏感值以防止意外暴露。    具有 `SensitiveParameter` 属性的参数值将在堆栈跟踪中自动包装在 `SensitiveParameterValue` 对象中。      类摘要    `final` `SensitiveParameterValue`  属性  `private` `readonly` `mixed` `value`  方法        属性 
- **`value`** — 需要防止意外暴露的敏感值。
