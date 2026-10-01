---
id: "zh-php-function-function-zip-close"
language: "php"
lang: "zh"
category: "function"
name: "zip_close"
title: "关闭一个ZIP档案文件"
signature: "#[\\Deprecated] void zip_close(resource $zip)"
module: "zip"
source_url: "https://www.php.net/manual/zh/function.zip-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 关闭一个ZIP档案文件

## 说明

```php
#[\Deprecated] void zip_close(resource $zip)
```

关闭一个指定的ZIP档案文件。

## 参数

- **`$zip`** — 一个由`zip_open()`打开的ZIP文件资源。

## 返回值

没有返回值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 弃用此函数，取而代之的是对象 API，请参阅 `ZipArchive::close()`。 |

## 参见

`zip_open()` `zip_read()`
