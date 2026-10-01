---
id: "zh-php-function-function-imageellipse"
language: "php"
lang: "zh"
category: "function"
name: "imageellipse"
title: "画椭圆"
signature: "true imageellipse(GdImage $image, int $center_x, int $center_y, int $width, int $height, int $color)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imageellipse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 画椭圆

## 说明

```php
true imageellipse(GdImage $image, int $center_x, int $center_y, int $width, int $height, int $color)
```

绘制以指定坐标为中心的椭圆。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$center_x`** — 中间的 x 坐标。
- **`$center_y`** — 中间的 y 坐标。
- **`$width`** — 椭圆的宽度。
- **`$height`** — 椭圆的高度。
- **`$color`** — 椭圆的颜色。颜色标识符使用 `imagecolorallocate()` 创建。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**`imageellipse()` 示例**

```php


<?php

// 新建一个空白图像
$image = imagecreatetruecolor(400, 300);

// 填充背景色
$bg = imagecolorallocate($image, 0, 0, 0);

// 选择椭圆的颜色
$col_ellipse = imagecolorallocate($image, 255, 255, 255);

// 画一个椭圆
imageellipse($image, 200, 150, 300, 200, $col_ellipse);

// 输出图像
header("Content-type: image/png");
imagepng($image);


?>

    
```

以上示例的输出类似于：

## 注释

> `imageellipse()` 忽略 `imagesetthickness()`。

## 参见

 `imagefilledellipse()` `imagearc()`
