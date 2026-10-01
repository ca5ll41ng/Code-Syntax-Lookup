---
id: "zh-php-function-imagick-setimagecompressionquality"
language: "php"
lang: "zh"
category: "function"
name: "Imagick::setImageCompressionQuality"
title: "设置图片压缩的质量"
signature: "public bool Imagick::setImageCompressionQuality(int $quality)"
module: "imagick"
source_url: "https://www.php.net/manual/zh/imagick.setimagecompressionquality.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置图片压缩的质量

## 说明

```php
public bool Imagick::setImageCompressionQuality(int $quality)
```

设置图片压缩的质量

## 参数

- **`$quality`** — 配置压缩质量的整数

## 返回值

成功时返回 `true`。

## 错误／异常

错误时抛出 ImagickException。

## 示例

**`Imagick::setImageCompressionQuality()`**

```php

      
<?php
function setImageCompressionQuality($imagePath, $quality) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->setImageCompressionQuality($quality);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
