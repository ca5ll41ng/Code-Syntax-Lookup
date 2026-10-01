---
id: "zh-php-function-function-readline-read-history"
language: "php"
lang: "zh"
category: "function"
name: "readline_read_history"
title: "读取历史"
signature: "bool readline_read_history(string|null $filename = null)"
module: "readline"
source_url: "https://www.php.net/manual/zh/function.readline-read-history.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 读取历史

## 说明

```php
bool readline_read_history(string|null $filename = null)
```

这个函数从文件中读取命令历史。

## 参数

- **`$filename`** — 包含命令行历史的文件路径。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$filename` 现在可为 null。 |
