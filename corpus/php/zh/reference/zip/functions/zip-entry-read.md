---
id: "zh-php-function-function-zip-entry-read"
language: "php"
lang: "zh"
category: "function"
name: "zip_entry_read"
title: "读取一个打开了的压缩目录实体"
signature: "#[\\Deprecated] string|false zip_entry_read(resource $zip_entry, int $len = 1024)"
module: "zip"
source_url: "https://www.php.net/manual/zh/function.zip-entry-read.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 读取一个打开了的压缩目录实体

## 说明

```php
#[\Deprecated] string|false zip_entry_read(resource $zip_entry, int $len = 1024)
```

读取一个打开了的压缩目录实体。

## 参数

- **`$zip_entry`** — 由函数`zip_read()` 返回的目录实体。
- **`$len`** — 需要返回的字节数。
  > 这字节数应该是你所要读取的未压缩的字节数。



## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 弃用此函数，取而代之的是对象 API，请参阅 `ZipArchive::getFromIndex()`。 |

## 返回值

成功的时候返回读取到的数据；到达文件末尾的时候返回一个空的字符串； 读取出错的时候则会返回`false`

## 参见

`zip_entry_open()` `zip_entry_close()` `zip_entry_filesize()`
