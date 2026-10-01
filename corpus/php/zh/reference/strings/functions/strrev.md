---
id: "zh-php-function-function-strrev"
language: "php"
lang: "zh"
category: "function"
name: "strrev"
title: "反转字符串"
signature: "string strrev(string $string)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.strrev.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 反转字符串

## 说明

```php
string strrev(string $string)
```

返回 `$string` 反转后的字符串。

## 参数

- **`$string`** — 待反转的原始字符串。

## 返回值

返回反转后的字符串。

## 示例

**使用 `strrev()` 反转字符串**

```php


<?php
echo strrev("Hello world!"); // 输出 "!dlrow olleH"
?>

    
```
