---
id: "zh-php-function-function-rrd-last"
language: "php"
lang: "zh"
category: "function"
name: "rrd_last"
title: "获取最后一个样本的 Unix 时间戳"
signature: "int rrd_last(string $filename)"
module: "rrd"
source_url: "https://www.php.net/manual/zh/function.rrd-last.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取最后一个样本的 Unix 时间戳

## 说明

```php
int rrd_last(string $filename)
```

返回 RRD 数据库最近更新的 UNIX 时间戳。

## 参数

- **`$filename`** — RRD 数据库文件名。

## 返回值

RRD 数据库中最新的整数 Unix 时间戳。
