---
id: "zh-php-function-imagick-cropthumbnailimage"
language: "php"
lang: "zh"
category: "function"
name: "Imagick::cropThumbnailImage"
title: "创建缩略图"
signature: "public bool Imagick::cropThumbnailImage(int $width, int $height, bool $legacy = false)"
module: "imagick"
source_url: "https://www.php.net/manual/zh/imagick.cropthumbnailimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建缩略图

## 说明

```php
public bool Imagick::cropThumbnailImage(int $width, int $height, bool $legacy = false)
```

首先将图片放大或者缩小，然后从图片的中间裁剪到指定的的大小。

## 参数

- **`$width`** — 缩略图的宽
- **`$height`** — 缩略图的高

## 返回值

成功时返回 `true`。

## 错误／异常

错误时抛出 ImagickException。
