---
id: "zh-php-function-function-zip-entry-compressedsize"
language: "php"
lang: "zh"
category: "function"
name: "zip_entry_compressedsize"
title: "检索目录项压缩过后的大小"
signature: "#[\\Deprecated] int|false zip_entry_compressedsize(resource $zip_entry)"
module: "zip"
source_url: "https://www.php.net/manual/zh/function.zip-entry-compressedsize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检索目录项压缩过后的大小

## 说明

```php
#[\Deprecated] int|false zip_entry_compressedsize(resource $zip_entry)
```

返回指定目录项压缩过后的大小。

## 参数

- **`$zip_entry`** — 由函数`zip_read()` 返回的目录项。

## 返回值

压缩后的大小， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 弃用此函数，取而代之的是对象 API，请参阅 `ZipArchive::statIndex()`。 |

## 参见

`zip_open()` `zip_read()`
