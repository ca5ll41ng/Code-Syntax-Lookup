---
id: "zh-php-function-function-md5"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "md5"
title: "计算字符串的 MD5 散列值"
signature: "string md5(string $string, bool $binary = false)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.md5.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 计算字符串的 MD5 散列值

## 说明

```php
string md5(string $string, bool $binary = false)
```

使用 [RSA 数据安全公司的 MD5 消息摘要算法](1321) 计算 `$string` 的 MD5 散列值，并返回该散列值。

## 参数

- **`$string`** — 要计算的字符串。
- **`$binary`** — 如果可选的 `$binary` 被设置为 `true`，那么 md5 摘要将以 16 字符长度的原始二进制格式返回。

## 返回值

以 32 字符的十六进制数形式返回散列值。

## 示例

**`md5()` 示例**

```php


<?php
$str = 'apple';

if (md5($str) === '1f3870be274f6c49b3e31a0c6728957f') {
    echo "Would you like a green or red apple?";
}
?>

    
```

## 参见

`hash()` `password_hash()`
