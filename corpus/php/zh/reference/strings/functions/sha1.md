---
id: "zh-php-function-function-sha1"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "sha1"
title: "计算字符串的 sha1 散列值"
signature: "string sha1(string $string, bool $binary = false)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.sha1.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 计算字符串的 sha1 散列值

## 说明

```php
string sha1(string $string, bool $binary = false)
```

使用 [美国安全散列算法 1](3174) 计算字符串的 sha1 散列值。

## 参数

- **`$string`** — 输入字符串。
- **`$binary`** — 如果可选的 `$binary` 参数被设置为 `true`， 那么 sha1 摘要将以 20 字符长度的原始二进制格式返回， 否则返回值为 40 字符长度的十六进制数。

## 返回值

以字符串形式返回 sha1 散列值。

## 示例

**`sha1()` 示例**

```php


<?php
$str = 'apple';

if (sha1($str) === 'd0be2dc421be4fcd0172e5afceea3970e2f3d940') {
    echo "Would you like a green or red apple?";
}
?>

    
```

## 参见

`hash()` `password_hash()`
