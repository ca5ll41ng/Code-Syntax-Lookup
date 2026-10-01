---
id: "zh-php-function-function-zip-entry-name"
language: "php"
lang: "zh"
category: "function"
name: "zip_entry_name"
title: "检索目录项的名称"
signature: "#[\\Deprecated] string|false zip_entry_name(resource $zip_entry)"
module: "zip"
source_url: "https://www.php.net/manual/zh/function.zip-entry-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检索目录项的名称

## 说明

```php
#[\Deprecated] string|false zip_entry_name(resource $zip_entry)
```

返回指定目录项的名称。

## 参数

- **`$zip_entry`** — 由函数`zip_read()` 返回的目录项。

## 返回值

目录项的名称， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 弃用此函数，取而代之的是对象 API，请参阅 `ZipArchive::statIndex()`。 |

## 参见

`zip_open()` `zip_read()`
