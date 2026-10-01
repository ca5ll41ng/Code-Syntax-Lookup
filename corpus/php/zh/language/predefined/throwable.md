---
id: "zh-php-syntax-class-throwable"
language: "php"
lang: "zh"
category: "syntax"
name: "class.throwable"
title: "Throwable"
module: "language"
source_url: "https://www.php.net/manual/zh/class.throwable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Throwable

Throwable

   简介  `Throwable` 是能被  语句抛出的最基本的接口（interface），包含了 `Error` 和 `Exception` 。   
> PHP 类无法直接实现 （implement） `Throwable` 接口，而应当去继承 `Exception`。

    接口摘要    Throwable   `extends` Stringable  方法  继承的方法      更新日志 
| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `Throwable` 实现了 Stringable。 |
