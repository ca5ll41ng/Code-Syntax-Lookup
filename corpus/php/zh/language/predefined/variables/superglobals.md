---
id: "zh-php-function-language-variables-superglobals"
language: "php"
lang: "zh"
category: "function"
name: "超全局变量"
title: "在全部作用域中始终可用的内置变量"
module: "language"
source_url: "https://www.php.net/manual/zh/language.variables.superglobals.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在全部作用域中始终可用的内置变量

## 说明

PHP 中的许多预定义变量都是“超全局的”，这意味着它们在一个脚本的全部作用域中都可用。在函数或方法中无需执行 global $variable; 就可以访问它们。

这些超全局变量是： `$GLOBALS` `$_SERVER` `$_GET` `$_POST` `$_FILES` `$_COOKIE` `$_SESSION` `$_REQUEST` `$_ENV`

## 注释

> 变量可用性
>
> 默认情况下，所有的超全局变量都是可用的。但是，有一些指令会影响这种可用性。更多信息，参见文档 variables_order.

> 可变变量
>
> 在函数或类方法中，超全局变量不能被用作可变变量。

## 参见

变量作用域 variables_order 指令 过滤器扩展
