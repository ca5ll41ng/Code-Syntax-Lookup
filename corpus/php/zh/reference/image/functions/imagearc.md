---
id: "zh-php-function-function-imagearc"
language: "php"
lang: "zh"
category: "function"
name: "imagearc"
title: "画弧线"
signature: "true imagearc(GdImage $image, int $center_x, int $center_y, int $width, int $height, int $start_angle, int $end_angle, int $color)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagearc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 画弧线

## 说明

```php
true imagearc(GdImage $image, int $center_x, int $center_y, int $width, int $height, int $start_angle, int $end_angle, int $color)
```

`imagearc()` 绘制以指定坐标为中心的弧线。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$center_x`** — 中心的 x 坐标。
- **`$center_y`** — 中心的 y 坐标。
- **`$width`** — 弧宽。
- **`$height`** — 弧高。
- **`$start_angle`** — 弧线起始角度，以度为单位。
- **`$end_angle`** — 弧线结束角度，以度为单位。0° 位于三点钟位置，顺时针绘制弧线。
- **`$color`** — 颜色标识符使用 `imagecolorallocate()` 创建。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**使用 `imagearc()` 画圆**

```php


<?php

// 创建 200*200 图像
$img = imagecreatetruecolor(200, 200);

// 分配一些颜色
$white = imagecolorallocate($img, 255, 255, 255);
$red   = imagecolorallocate($img, 255,   0,   0);
$green = imagecolorallocate($img,   0, 255,   0);
$blue  = imagecolorallocate($img,   0,   0, 255);

// 画头
imagearc($img, 100, 100, 200, 200,  0, 360, $white);
// 嘴
imagearc($img, 100, 100, 150, 150, 25, 155, $red);
// 先左眼，然后右眼
imagearc($img,  60,  75,  50,  50,  0, 360, $green);
imagearc($img, 140,  75,  50,  50,  0, 360, $blue);

// 在浏览器中输出图像
header("Content-type: image/png");
imagepng($img);

?>

    
```

以上示例的输出类似于：

## 参见

 `imagefilledarc()` `imageellipse()` `imagefilledellipse()`
