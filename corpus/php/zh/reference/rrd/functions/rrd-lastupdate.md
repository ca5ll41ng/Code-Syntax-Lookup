---
id: "zh-php-function-function-rrd-lastupdate"
language: "php"
lang: "zh"
category: "function"
name: "rrd_lastupdate"
title: "获取有关上次更新数据的信息"
signature: "array rrd_lastupdate(string $filename)"
module: "rrd"
source_url: "https://www.php.net/manual/zh/function.rrd-lastupdate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取有关上次更新数据的信息

## 说明

```php
array rrd_lastupdate(string $filename)
```

从最近更新的 RRD 数据库文件中获取每个日期存储的 UNIX 时间戳和值的数组。

## 参数

- **`$file`** — RRD 数据库文件名。

## 返回值

最后更新的信息数组， 或者在失败时返回 `false`。
