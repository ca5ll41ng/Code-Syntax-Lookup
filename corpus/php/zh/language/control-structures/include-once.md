---
id: "zh-php-syntax-function-include-once"
language: "php"
lang: "zh"
category: "syntax"
name: "function.include-once"
title: "include_once"
module: "language"
source_url: "https://www.php.net/manual/zh/function.include-once.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# include_once

`include_once` 表达在脚本执行期间包含并运行指定文件。此行为和 `include()` 表达类似， 唯一区别是如果该文件中已经被包含过，则不会再次包含，且 include_once 会返回 `true`。 顾名思义，include_once，文件仅仅包含（include）一次。

`include_once` 可以用于在脚本执行期间同一个文件有可能被包含超过一次的情况下，想确保它只被包含一次以避免函数重定义，变量重新赋值等问题。

更多信息参见 `include()` 文档。
