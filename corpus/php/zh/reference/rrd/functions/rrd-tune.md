---
id: "zh-php-function-function-rrd-tune"
language: "php"
lang: "zh"
category: "function"
name: "rrd_tune"
title: "调整 RRD 数据库文件头选项"
signature: "bool rrd_tune(string $filename, array $options)"
module: "rrd"
source_url: "https://www.php.net/manual/zh/function.rrd-tune.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 调整 RRD 数据库文件头选项

## 说明

```php
bool rrd_tune(string $filename, array $options)
```

更改 RRD 数据库头文件中的一些选项，例如：重命名数据源等。

## 参数

- **`$filename`** — RRD 数据库文件名。
- **`$options`** — 要修改的 RRD 数据库文件属性选项。请参阅 rrd tune 手册页获取详细信息。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。
