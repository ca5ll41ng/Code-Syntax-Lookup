---
id: "zh-php-function-function-exif-imagetype"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"source"}
name: "exif_imagetype"
title: "判断一个图像的类型"
signature: "int|false exif_imagetype(string $filename)"
module: "exif"
source_url: "https://www.php.net/manual/zh/function.exif-imagetype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 判断一个图像的类型

## 说明

```php
int|false exif_imagetype(string $filename)
```

`exif_imagetype()` 读取一个图像的第一个字节并检查其签名。

本函数可用来避免调用其它 exif 函数用到了不支持的文件类型上或和 `$_SERVER['HTTP_ACCEPT']` 结合使用来检查浏览器是否可以显示某个指定的图像。

## 参数

- **`$filename`** — 被检查的图像文件名。

## 返回值

如果发现了恰当的签名则返回一个对应的常量，否则返回 `false`。返回值和 `getimagesize()` 返回的数组中的索引 2 的值是一样的，但本函数快得多。

定义有以下常量，并代表了 `exif_imagetype()` 可能的返回值：

| 值 | 常量 |
| --- | --- |
| 1 | `IMAGETYPE_GIF` |
| 2 | `IMAGETYPE_JPEG` |
| 3 | `IMAGETYPE_PNG` |
| 4 | `IMAGETYPE_SWF` |
| 5 | `IMAGETYPE_PSD` |
| 6 | `IMAGETYPE_BMP` |
| 7 | `IMAGETYPE_TIFF_II`（小端字节顺序） |
| 8 | `IMAGETYPE_TIFF_MM`（大端字节顺序） |
| 9 | `IMAGETYPE_JPC` |
| 10 | `IMAGETYPE_JP2` |
| 11 | `IMAGETYPE_JPX` |
| 12 | `IMAGETYPE_JB2` |
| 13 | `IMAGETYPE_SWC` |
| 14 | `IMAGETYPE_IFF` |
| 15 | `IMAGETYPE_WBMP` |
| 16 | `IMAGETYPE_XBM` |
| 17 | `IMAGETYPE_ICO` |
| 18 | `IMAGETYPE_WEBP` |
| 19 | `IMAGETYPE_AVIF` |

> 如果无法从文件中读取足够的字节来确定图像类型，`exif_imagetype()` 将发出 `E_NOTICE` 并返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.1.0 | 新增 WebP 支持。 |
| 8.1.0 | 新增 AVIF 支持。 |

## 示例

**`exif_imagetype()` 示例**

```php


<?php

if (exif_imagetype("image.gif") != IMAGETYPE_GIF) {
    echo "The picture is not a gif";
}

?>

     
```

## 参见

 `image_type_to_mime_type()` `getimagesize()`
