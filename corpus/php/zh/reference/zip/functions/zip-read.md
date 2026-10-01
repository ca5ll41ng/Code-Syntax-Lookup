---
id: "zh-php-function-function-zip-read"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"source"}
name: "zip_read"
title: "读取 ZIP 文件归档中下一项"
signature: "#[\\Deprecated] resource|false zip_read(resource $zip)"
module: "zip"
source_url: "https://www.php.net/manual/zh/function.zip-read.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 读取 ZIP 文件归档中下一项

## 说明

```php
#[\Deprecated] resource|false zip_read(resource $zip)
```

读取 ZIP 文件归档中下一项。

## 参数

- **`$zip`** — 一个ZIP压缩文件,该ZIP归档文件之前应由函数 `zip_open()` 打开。

## 返回值

成功的时候返回该当前实体资源供`zip_entry_...` 系列函数后续使用; 如果没有更多的读取项，则会返回 `false` 如果遇到错误则会返回相应的错误码。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 弃用此函数，取而代之的是对象 API，请参阅 `ZipArchive::statIndex()`。 |

## 参见

`zip_open()` `zip_close()` `zip_entry_open()` `zip_entry_read()`
