---
id: "zh-php-function-function-image-type-to-mime-type"
language: "php"
lang: "zh"
category: "function"
name: "image_type_to_mime_type"
title: "取得 getimagesize、exif_read_data、exif_thumbnail、exif_imagetype 所返回的图像类型的 MIME 类型"
signature: "string image_type_to_mime_type(int $image_type)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.image-type-to-mime-type.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得 getimagesize、exif_read_data、exif_thumbnail、exif_imagetype 所返回的图像类型的 MIME 类型

## 说明

```php
string image_type_to_mime_type(int $image_type)
```

`image_type_to_mime_type()` 函数将确定 IMAGETYPE 常量的 MIME 类型。

## 参数

- **`$image_type`** — `IMAGETYPE_{*}` 常量之一。

## 返回值

返回值如下：

| `$image_type` | 返回值 |
| --- | --- |
| `IMAGETYPE_GIF` | `image/gif` |
| `IMAGETYPE_JPEG` | `image/jpeg` |
| `IMAGETYPE_PNG` | `image/png` |
| `IMAGETYPE_SWF` | `application/x-shockwave-flash` |
| `IMAGETYPE_PSD` | `image/psd` |
| `IMAGETYPE_BMP` | `image/bmp` |
| `IMAGETYPE_TIFF_II`（小端字节顺序） | `image/tiff` |
| `IMAGETYPE_TIFF_MM`（大端字节顺序） | `image/tiff` |
| `IMAGETYPE_JPC` | `application/octet-stream` |
| `IMAGETYPE_JP2` | `image/jp2` |
| `IMAGETYPE_JPX` | `application/octet-stream` |
| `IMAGETYPE_JB2` | `application/octet-stream` |
| `IMAGETYPE_SWC` | `application/x-shockwave-flash` |
| `IMAGETYPE_IFF` | `image/iff` |
| `IMAGETYPE_WBMP` | `image/vnd.wap.wbmp` |
| `IMAGETYPE_XBM` | `image/xbm` |
| `IMAGETYPE_ICO` | `image/vnd.microsoft.icon` |
| `IMAGETYPE_WEBP` | `image/webp` |
| `IMAGETYPE_AVIF` | `image/avif` |

## 示例

**`image_type_to_mime_type()` 示例**

```php


<?php
header("Content-type: " . image_type_to_mime_type(IMAGETYPE_PNG));
?>

    
```

## 注释

> 此函数不需要 GD 图象库。

## 参见

 `getimagesize()` `exif_imagetype()` `exif_read_data()` `exif_thumbnail()`
