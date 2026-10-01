---
id: "zh-php-function-imagick-cropimage"
language: "php"
lang: "zh"
category: "function"
name: "Imagick::cropImage"
title: "截图图片的一块区域"
signature: "public bool Imagick::cropImage(int $width, int $height, int $x, int $y)"
module: "imagick"
source_url: "https://www.php.net/manual/zh/imagick.cropimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 截图图片的一块区域

## 说明

```php
public bool Imagick::cropImage(int $width, int $height, int $x, int $y)
```

截图图片的一块区域

## 参数

- **`$width`** — 截图的宽度
- **`$height`** — 截图的高度
- **`$x`** — 裁剪区域左上角的 X 轴坐标（以原图的左上角为原点）
- **`$y`** — 裁剪区域左上角的 X 轴坐标（以原图的左上角为原点）

## 返回值

成功时返回 `true`。

## 错误／异常

错误时抛出 ImagickException。

## 示例

**`Imagick::cropImage()`**

```php

      
<?php
function cropImage($imagePath, $startX, $startY, $width, $height) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->cropImage($width, $height, $startX, $startY);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
