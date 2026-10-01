---
id: "zh-php-function-function-memory-get-usage"
language: "php"
lang: "zh"
category: "function"
name: "memory_get_usage"
title: "返回分配给 PHP 的内存量"
signature: "int memory_get_usage(bool $real_usage = false)"
module: "info"
source_url: "https://www.php.net/manual/zh/function.memory-get-usage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回分配给 PHP 的内存量

## 说明

```php
int memory_get_usage(bool $real_usage = false)
```

返回当前分配给你的 PHP 脚本的内存量，单位是字节（byte）。

## 参数

- **`$real_usage`** — 如果设置为 `true`，获取系统分配总的内存尺寸，包括未使用的页。如果未设置或者设置为 `false`，仅仅报告实际使用的内存量。

> PHP 不跟踪非`emalloc()` 分配的内存

## 返回值

返回内存量字节数。

## 示例

**一个 `memory_get_usage()` 示例**

```php


<?php
//这只是个示例，下面的数字取决于你的系统

echo memory_get_usage() . "\n"; // 36640

$a = str_repeat("Hello", 4242);

echo memory_get_usage() . "\n"; // 57960

unset($a);

echo memory_get_usage() . "\n"; // 36744

?>

    
```

## 参见

`memory_get_peak_usage()` memory_limit
