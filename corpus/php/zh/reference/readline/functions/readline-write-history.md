---
id: "zh-php-function-function-readline-write-history"
language: "php"
lang: "zh"
category: "function"
name: "readline_write_history"
title: "写入历史记录"
signature: "bool readline_write_history(string|null $filename = null)"
module: "readline"
source_url: "https://www.php.net/manual/zh/function.readline-write-history.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 写入历史记录

## 说明

```php
bool readline_write_history(string|null $filename = null)
```

这个函数将命令历史写入到文件。

## 参数

- **`$filename`** — 保存文件的路径.

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$filename` 现在可为 null。 |
