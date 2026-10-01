---
id: "zh-php-function-function-sha1-file"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "sha1_file"
title: "计算文件的 sha1 散列值"
signature: "string|false sha1_file(string $filename, bool $binary = false)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.sha1-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 计算文件的 sha1 散列值

## 说明

```php
string|false sha1_file(string $filename, bool $binary = false)
```

使用 [美国安全散列算法 1](3174) 计算 `$filename` 指定的文件的 sha1 散列值，并返回该散列值。 该散列值为 40 字符长度的十六进制数。

## 参数

- **`$filename`** — 要散列的文件的文件名。
- **`$binary`** — 为 `true` 时，返回 20 字符长度的原始二进制格式摘要。

## 返回值

成功返回字符串，否则返回 `false`。

## 示例

**`sha1_file()` 示例**

```php


<?php
foreach (glob('/examples/*.xml') as $ent)
{
    if (is_dir($ent)) {
        continue;
    }

    echo $ent . ' (SHA1: ' . sha1_file($ent) . ')', PHP_EOL;
}
?>

    
```

## 参见

`hash_file()` `hash_init()` `sha1()`
