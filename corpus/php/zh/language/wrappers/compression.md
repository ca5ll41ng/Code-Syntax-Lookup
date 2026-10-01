---
id: "zh-php-function-wrappers-compression"
language: "php"
lang: "zh"
category: "function"
name: "zlib://"
aliases: ["bzip2://","zip://"]
title: "压缩流"
module: "language"
source_url: "https://www.php.net/manual/zh/wrappers.compression.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 压缩流

## 说明

 {{{ 

`compress.zlib://` and `compress.bzip2://`

`zlib:` 的功能类似 `gzopen()`，但是 其数据流还能被 `fread()` 和其他文件系统函数使用。 不建议使用，因为会和其他带“:”字符的文件名混淆； 请使用 `compress.zlib://` 替代。

`compress.zlib://`、 `compress.bzip2://` 和 `gzopen()`、`bzopen()` 是相等的。并且可以在不支持 fopencookie 的系统中使用。

ZIP 扩展 注册了 `zip:` 封装器。 自 PHP 7.2.0 和 libzip 1.2.0+ 起，加密归档开始支持密码，允许数据流中使用密码。 字节流上下文（stream contexts）中使用 `'password'` 选项设置密码。

 }}} 

## 可选项

 {{{ 

- `compress.zlib://file.gz`
- `compress.bzip2://file.bz2`
- `zip://archive.zip#dir/file.txt`

 }}} 

## 用法

 {{{ 

| 属性 | 支持 |
| --- | --- |
| 受限于 allow_url_fopen | No |
| 允许读取 | Yes |
| 允许写入 | Yes（除了 `zip://`） |
| 允许附加 | Yes（除了 `zip://`） |
| 允许同时读写 | No |
| 支持 `stat()` | No，请使用普通的 `file://` 封装器统计压缩文件。 |
| 支持 `unlink()` | No，请使用 `file://` 封装器删除压缩文件。 |
| 支持 `rename()` | No |
| 支持 `mkdir()` | No |
| 支持 `rmdir()` | No |

 }}} 

## 参见

 `context.zlib`
