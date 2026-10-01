---
id: "zh-php-function-function-imagefilledellipse"
language: "php"
lang: "zh"
category: "function"
name: "imagefilledellipse"
title: "绘制椭圆并填充"
signature: "true imagefilledellipse(GdImage $image, int $center_x, int $center_y, int $width, int $height, int $color)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagefilledellipse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 绘制椭圆并填充

## 说明

```php
true imagefilledellipse(GdImage $image, int $center_x, int $center_y, int $width, int $height, int $color)
```

在指定 `$image` 上以指定坐标为中心绘制椭圆。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$center_x`** — 中央的 x 坐标。
- **`$center_y`** — 中央的 y 坐标。
- **`$width`** — 椭圆的宽度。
- **`$height`** — 椭圆的高度。
- **`$color`** — 填充颜色。颜色标识符使用 `imagecolorallocate()` 创建。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**`imagefilledellipse()` 示例**

```php


<?php

// create a blank image
$image = imagecreatetruecolor(400, 300);

// fill the background color
$bg = imagecolorallocate($image, 0, 0, 0);

// choose a color for the ellipse
$col_ellipse = imagecolorallocate($image, 255, 255, 255);

// draw the white ellipse
imagefilledellipse($image, 200, 150, 300, 200, $col_ellipse);

// output the picture
header("Content-type: image/png");
imagepng($image);

?>

    
```

以上示例的输出类似于：

## 注释

> `imagefilledellipse()` 忽略 `imagesetthickness()`。

## 参见

 `imageellipse()` `imagefilledarc()`
