---
id: "zh-php-function-function-imagefilltoborder"
language: "php"
lang: "zh"
category: "function"
name: "imagefilltoborder"
title: "漫水填充特定颜色"
signature: "true imagefilltoborder(GdImage $image, int $x, int $y, int $border_color, int $color)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagefilltoborder.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 漫水填充特定颜色

## 说明

```php
true imagefilltoborder(GdImage $image, int $x, int $y, int $border_color, int $color)
```

`imagefilltoborder()` 执行漫水填充，其边框颜色由 `$border_color` 定义。填充的起点是 `$x`, `$y`（左上角是0, 0），区域用颜色 `$color` 填充。【注：边界内的所有颜色都会被填充。如果指定的边界色和该点颜色相同，则没有填充。如果图像中没有该边界色，则整幅图像都会被填充。】

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$x`** — 起点的 x 坐标。
- **`$y`** — 起点的 y 坐标。
- **`$border_color`** — 边框颜色。颜色标识符使用 `imagecolorallocate()` 创建。
- **`$color`** — 填充颜色。颜色标识符使用 `imagecolorallocate()` 创建。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**用颜色填充椭圆**

```php


<?php
// 创建图像句柄，并将背景设置为白色
$im = imagecreatetruecolor(100, 100);
imagefilledrectangle($im, 0, 0, 100, 100, imagecolorallocate($im, 255, 255, 255));

// 绘制椭圆，并用黑色边框填充
imageellipse($im, 50, 50, 50, 50, imagecolorallocate($im, 0, 0, 0));

// 设置边框和填充颜色
$border = imagecolorallocate($im, 0, 0, 0);
$fill = imagecolorallocate($im, 255, 0, 0);

// 填充选区
imagefilltoborder($im, 50, 50, $border, $fill);

// 输出
header('Content-type: image/png');
imagepng($im);
?>

    
```

以上示例的输出类似于：

## 注释

算法不会明确记住已经设置哪些像素，而是从像素的颜色判断，所以无法区分新设置的元素和已经存在的元素。这意味着选择任何图像中已经使用的填充颜色都可能会产生不期望的结果。
