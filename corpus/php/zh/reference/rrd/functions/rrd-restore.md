---
id: "zh-php-function-function-rrd-restore"
language: "php"
lang: "zh"
category: "function"
name: "rrd_restore"
title: "从 XML 转储中恢复 RRD 文件"
signature: "bool rrd_restore(string $xml_file, string $rrd_file, [array $options = ...])"
module: "rrd"
source_url: "https://www.php.net/manual/zh/function.rrd-restore.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从 XML 转储中恢复 RRD 文件

## 说明

```php
bool rrd_restore(string $xml_file, string $rrd_file, [array $options = ...])
```

从 XML 存储中恢复 RRD 文件。

## 参数

- **`$xml_file`** — 带有原始 RRD 数据库文件转储的 XML 文件名。
- **`$rrd_file`** — 要恢复的 RRD 数据库文件名称。
- **`$options`** — 恢复的选项数组。详情见 rrd restore 手册页。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。
