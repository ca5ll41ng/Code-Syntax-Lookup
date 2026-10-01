---
id: "zh-php-function-function-rrd-info"
language: "php"
lang: "zh"
category: "function"
name: "rrd_info"
title: "获取 rrd 文件有关信息"
signature: "array rrd_info(string $filename)"
module: "rrd"
source_url: "https://www.php.net/manual/zh/function.rrd-info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 rrd 文件有关信息

## 说明

```php
array rrd_info(string $filename)
```

返回有关 RRD 数据库文件的特定信息。

## 参数

- **`$file`** — RRD 数据库文件名。

## 返回值

有关请求的 RRD 文件的信息数组， 或者在失败时返回 `false`。
