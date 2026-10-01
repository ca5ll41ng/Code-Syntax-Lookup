---
id: "zh-php-function-function-zip-entry-filesize"
language: "php"
lang: "zh"
category: "function"
name: "zip_entry_filesize"
title: "检索目录实体的实际大小"
signature: "#[\\Deprecated] int|false zip_entry_filesize(resource $zip_entry)"
module: "zip"
source_url: "https://www.php.net/manual/zh/function.zip-entry-filesize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检索目录实体的实际大小

## 说明

```php
#[\Deprecated] int|false zip_entry_filesize(resource $zip_entry)
```

返回指定目录实体的实际大小。

## 参数

- **`$zip_entry`** — 由函数`zip_read()` 返回的目录实体。

## 返回值

返回该目录实体的大小， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 弃用此函数，取而代之的是对象 API，请参阅 `ZipArchive::statIndex()`。 |

## 参见

`zip_open()` `zip_read()`
