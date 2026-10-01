---
id: "zh-php-function-function-imagesetthickness"
language: "php"
lang: "zh"
category: "function"
name: "imagesetthickness"
title: "设定画线的粗细"
signature: "true imagesetthickness(GdImage $image, int $thickness)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagesetthickness.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设定画线的粗细

## 说明

```php
true imagesetthickness(GdImage $image, int $thickness)
```

`imagesetthickness()` 将绘制矩形、多边形、圆弧等绘制的线条粗细设置为 `$thickness` 像素。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$thickness`** — 粗细，以像素为单位。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**`imagesetthickness()` 示例**

```php


<?php
// 创建 200x100 图像
$im = imagecreatetruecolor(200, 100);
$white = imagecolorallocate($im, 0xFF, 0xFF, 0xFF);
$black = imagecolorallocate($im, 0x00, 0x00, 0x00);

// 设置背景为白色
imagefilledrectangle($im, 0, 0, 299, 99, $white);

// 将线条粗细设置为 5
imagesetthickness($im, 5);

// 绘制矩形
imagerectangle($im, 14, 14, 185, 85, $black);

// 输出图像到浏览器
header('Content-Type: image/png');

imagepng($im);
?>

    
```

以上示例的输出类似于：
