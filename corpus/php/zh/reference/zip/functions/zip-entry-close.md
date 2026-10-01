---
id: "zh-php-function-function-zip-entry-close"
language: "php"
lang: "zh"
category: "function"
name: "zip_entry_close"
title: "关闭目录项"
signature: "#[\\Deprecated] bool zip_entry_close(resource $zip_entry)"
module: "zip"
source_url: "https://www.php.net/manual/zh/function.zip-entry-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 关闭目录项

## 说明

```php
#[\Deprecated] bool zip_entry_close(resource $zip_entry)
```

关闭指定的目录项。

## 参数

- **`$zip_entry`** — 一个由`zip_entry_open()`打开的项目。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 弃用此函数，取而代之的是对象 API。 |

## 参见

`zip_entry_open()` `zip_entry_read()`
