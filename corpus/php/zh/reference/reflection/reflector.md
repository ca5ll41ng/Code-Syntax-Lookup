---
id: "zh-php-guide-class-reflector"
language: "php"
lang: "zh"
category: "guide"
name: "class.reflector"
title: "Reflector 接口"
module: "reflection"
source_url: "https://www.php.net/manual/zh/class.reflector.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Reflector 接口

Reflector

   简介  `Reflector` 是一个接口，被所有可导出的反射类所实现（implement）。      接口摘要    Reflector   `extends` Stringable  继承的方法      更新日志 
| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 已移除 `Reflector::export()`。 |
| 8.0.0 | 现在 `Reflector` 实现（implement）了 Stringable。继承了 `Stringable::__toString()`，从而取代 `Reflector::__toString()`。 |

   参见   `Reflector::export()`
