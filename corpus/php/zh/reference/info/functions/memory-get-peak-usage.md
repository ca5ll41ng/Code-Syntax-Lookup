---
id: "zh-php-function-function-memory-get-peak-usage"
language: "php"
lang: "zh"
category: "function"
name: "memory_get_peak_usage"
title: "返回分配给 PHP 内存的峰值"
signature: "int memory_get_peak_usage(bool $real_usage = false)"
module: "info"
source_url: "https://www.php.net/manual/zh/function.memory-get-peak-usage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回分配给 PHP 内存的峰值

## 说明

```php
int memory_get_peak_usage(bool $real_usage = false)
```

返回分配给你的 PHP 脚本的内存峰值字节数。

## 参数

- **`$real_usage`** — 如果设置为 `true` 可以获取从系统分配到的真实内存尺寸。 如果未设置，或者设置为 `false`，仅会报告 `emalloc()` 使用的内存。

## 返回值

返回内存峰值的字节数。

## 参见

`memory_get_usage()` `memory_reset_peak_usage()` memory_limit
