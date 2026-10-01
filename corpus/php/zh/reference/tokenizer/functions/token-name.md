---
id: "zh-php-function-function-token-name"
language: "php"
lang: "zh"
category: "function"
name: "token_name"
title: "获取提供的 PHP 解析器代号的符号名称"
signature: "string token_name(int $id)"
module: "tokenizer"
source_url: "https://www.php.net/manual/zh/function.token-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取提供的 PHP 解析器代号的符号名称

## 说明

```php
string token_name(int $id)
```

`token_name()` 获取 PHP `$id` 的符号名称。

## 参数

- **`$id`** — 解析器记号的值。

## 返回值

提供的 `$id` 的符号名。

## 示例

**`token_name()` 示例**

```php


<?php
// 260 是 T_EVAL 记号的记号值
echo token_name(260);        // -> "T_EVAL"

// 记号常量映射到自己的名称
echo token_name(T_FUNCTION); // -> "T_FUNCTION"
?>

    
```

## 参见

 解析器记号列表 `PhpToken::getTokenName()`
