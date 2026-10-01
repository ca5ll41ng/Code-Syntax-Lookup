---
id: "zh-php-function-function-zip-entry-compressionmethod"
language: "php"
lang: "zh"
category: "function"
name: "zip_entry_compressionmethod"
title: "检索目录实体的压缩方法"
signature: "#[\\Deprecated] string|false zip_entry_compressionmethod(resource $zip_entry)"
module: "zip"
source_url: "https://www.php.net/manual/zh/function.zip-entry-compressionmethod.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检索目录实体的压缩方法

## 说明

```php
#[\Deprecated] string|false zip_entry_compressionmethod(resource $zip_entry)
```

返回由函数`$zip_entry`确定的目录实体的压缩方法。

## 参数

- **`$zip_entry`** — 由函数`zip_read()` 返回的目录实体。

## 返回值

压缩方法， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 弃用此函数，取而代之的是对象 API，请参阅 `ZipArchive::statIndex()`。 |

## 参见

`zip_open()` `zip_read()`
