---
id: "zh-php-function-function-zip-open"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "zip_open"
title: "打开 ZIP 文件归档"
signature: "#[\\Deprecated] resource|int|false zip_open(string $filename)"
module: "zip"
source_url: "https://www.php.net/manual/zh/function.zip-open.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打开 ZIP 文件归档

## 说明

```php
#[\Deprecated] resource|int|false zip_open(string $filename)
```

打开一个新的ZIP归档文件进行读取。

## 参数

- **`$filename`** — 待打开ZIP归档的文件名。

## 返回值

成功的时候返回资源句柄供 `zip_read()` 和 `zip_close()` 后续使用；如果 `$filename` 文件不存在或者出现其他错误，则会返回 `false` 或相应的错误码。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 弃用此函数，取而代之的是对象 API，请参阅 `ZipArchive::open()`。 |

## 参见

`zip_read()` `zip_close()`
