---
id: "zh-php-function-function-rrd-fetch"
language: "php"
lang: "zh"
category: "function"
name: "rrd_fetch"
title: "获取图表数据数组"
signature: "array rrd_fetch(string $filename, array $options)"
module: "rrd"
source_url: "https://www.php.net/manual/zh/function.rrd-fetch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取图表数据数组

## 说明

```php
array rrd_fetch(string $filename, array $options)
```

从 RRD 数据库文件获取图表输出的数据数组。此函数与 `rrd_graph()` 结果相同，但仅返回数据数组，不会生成图像文件。

## 参数

- **`$filename`** — RRD 数据库文件名。
- **`$options`** — 数据间隔规范的数组选项。

## 返回值

返回检索到的相关图形信息数据。
