---
id: "zh-php-function-function-rrd-xport"
language: "php"
lang: "zh"
category: "function"
name: "rrd_xport"
title: "导出 RRD 数据库的相关信息"
signature: "array rrd_xport(array $options)"
module: "rrd"
source_url: "https://www.php.net/manual/zh/function.rrd-xport.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 导出 RRD 数据库的相关信息

## 说明

```php
array rrd_xport(array $options)
```

导出 RRD 数据库文件的相关信息。这些数据可以通过用户空间的 PHP 脚本转换为 XML 文件，然后再恢复为 RRD 数据库文件。

## 参数

- **`$options`** — 导出的数组选项，可以通过 rrd xport 手册查看。

## 返回值

有关 RRD 数据库文件信息的数组， 或者在失败时返回 `false`。
