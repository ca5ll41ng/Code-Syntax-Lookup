---
id: "zh-php-syntax-language-types-never"
language: "php"
lang: "zh"
category: "syntax"
name: "language.types.never"
title: "Never"
module: "language"
source_url: "https://www.php.net/manual/zh/language.types.never.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Never

`never` 是仅用于返回的类型，表示函数不会终止。这意味着它要么调用 `exit()`，要么抛出异常，要么无限循环。因此，它不能是联合类型声明的一部分。自 PHP 8.1.0 起可用。

`never` 是类型理论中的最底层类型。这意味着它是其它所有类型的子类型，并在可以在继承期间替换其它任何返回类型。
