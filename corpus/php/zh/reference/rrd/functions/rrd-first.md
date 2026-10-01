---
id: "zh-php-function-function-rrd-first"
language: "php"
lang: "zh"
category: "function"
name: "rrd_first"
title: "从 rrd 文件中获取第一个样本的时间戳"
signature: "int rrd_first(string $file, int $raaindex = 0)"
module: "rrd"
source_url: "https://www.php.net/manual/zh/function.rrd-first.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从 rrd 文件中获取第一个样本的时间戳

## 说明

```php
int rrd_first(string $file, int $raaindex = 0)
```

从 RRD 文件中指定的 RRA 返回第一个数据样本。

## 参数

- **`$file`** — RRD 数据库文件名。
- **`$raaindex`** — 要检索的 RRA 索引。默认值为 0。

## 返回值

Unix 时间戳整数， 或者在失败时返回 `false`。
