---
id: "zh-php-function-function-rrd-create"
language: "php"
lang: "zh"
category: "function"
name: "rrd_create"
title: "创建 rrd 数据库文件"
signature: "bool rrd_create(string $filename, array $options)"
module: "rrd"
source_url: "https://www.php.net/manual/zh/function.rrd-create.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建 rrd 数据库文件

## 说明

```php
bool rrd_create(string $filename, array $options)
```

创建 rrd 数据库文件。

## 参数

- **`$filename`** — 新创建的 rrd 文件名。
- **`$options`** — rrd 创建选项 - 字符串列表。全部列表项请参阅创建 rrd 的手册页。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。
