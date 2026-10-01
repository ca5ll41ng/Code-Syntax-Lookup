---
id: "zh-php-function-function-rrd-update"
language: "php"
lang: "zh"
category: "function"
name: "rrd_update"
title: "更新 RRD 数据库"
signature: "bool rrd_update(string $filename, array $options)"
module: "rrd"
source_url: "https://www.php.net/manual/zh/function.rrd-update.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 更新 RRD 数据库

## 说明

```php
bool rrd_update(string $filename, array $options)
```

更新 RRD 数据库文件。输入数据根据 RRD 数据库文件属性进行时间对齐。

## 参数

- **`$filename`** — RRD 数据库文件名。要更新的数据库。
- **`$options`** — 更新 RRD 数据库的可选项。是一个字符串列表。查看 rrd update 的 man 页面以获取完整的选项列表。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。
