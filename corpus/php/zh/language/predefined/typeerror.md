---
id: "zh-php-syntax-class-typeerror"
language: "php"
lang: "zh"
category: "syntax"
name: "class.typeerror"
title: "TypeError"
module: "language"
source_url: "https://www.php.net/manual/zh/class.typeerror.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# TypeError

TypeError

   简介  会抛出`TypeError` 的情况:   为类属性设置的值与该属性申明的类型不匹配。   传递给函数的参数类型与函数预期声明的参数类型不匹配。   函数返回的值与声明的函数返回类型不匹配        类摘要    TypeError   `extends` `Error`  继承的属性  继承的方法       更新日志 
| 版本 | 说明 |
| --- | --- |
| 7.1.0 | 在严格模式下，传递给内置 PHP 函数的参数数量不正确时，不再抛出通用的 `TypeError`。 相反，会抛出更具体的 `ArgumentCountError`，它是 `TypeError` 的子类。 |
