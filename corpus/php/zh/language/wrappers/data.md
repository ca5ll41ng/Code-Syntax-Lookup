---
id: "zh-php-function-wrappers-data"
language: "php"
lang: "zh"
category: "function"
name: "data://"
title: "数据（RFC 2397）"
module: "language"
source_url: "https://www.php.net/manual/zh/wrappers.data.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 数据（RFC 2397）

## 说明

 {{{ 

`data:`（[RFC 2397](2397)）数据流封装器。

 }}} 

## 用法

 {{{ 

- `data://text/plain;base64,`

 }}} 

## 可选项

 {{{ 

| 属性 | 支持 |
| --- | --- |
| 受限于 allow_url_fopen | Yes |
| 受限于 allow_url_include | Yes |
| 允许读取 | Yes |
| 允许写入 | No |
| 允许追加 | No |
| 允许同时读写 | No |
| 支持 `stat()` | No |
| 支持 `unlink()` | No |
| 支持 `rename()` | No |
| 支持 `mkdir()` | No |
| 支持 `rmdir()` | No |

 }}} 

## 示例

 {{{ 

**打印 data:// 的内容**

```php


<?php
// 打印 "I love PHP"
echo file_get_contents('data://text/plain;base64,SSBsb3ZlIFBIUAo=');
?>

   
```

**获取媒体类型**

```php


<?php
$fp   = fopen('data://text/plain;base64,', 'r');
$meta = stream_get_meta_data($fp);

// 打印 "text/plain"
echo $meta['mediatype'];
?>

   
```

 }}}
