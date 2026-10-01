---
id: "zh-php-syntax-function-require"
language: "php"
lang: "zh"
category: "syntax"
name: "function.require"
title: "require"
module: "language"
source_url: "https://www.php.net/manual/zh/function.require.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# require

`require` 跟 `include()` 相同，只是在失败时还会产生 `Error` 异常（PHP 8.0.0 之前为 `E_COMPILE_ERROR` 级别错误），而 `include()` 只会产生警告（`E_WARNING` 级别错误）。

参见 `include()` 文档了解详情。
