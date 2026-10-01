---
id: "zh-php-function-function-imagecopyresized"
language: "php"
lang: "zh"
category: "function"
name: "imagecopyresized"
title: "拷贝部分图像并调整大小"
signature: "true imagecopyresized(GdImage $dst_image, GdImage $src_image, int $dst_x, int $dst_y, int $src_x, int $src_y, int $dst_width, int $dst_height, int $src_width, int $src_height)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagecopyresized.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 拷贝部分图像并调整大小

## 说明

```php
true imagecopyresized(GdImage $dst_image, GdImage $src_image, int $dst_x, int $dst_y, int $src_x, int $src_y, int $dst_width, int $dst_height, int $src_width, int $src_height)
```

`imagecopyresized()` 将一幅图像中的一块矩形区域拷贝到另一个图像中。`$dst_image` 和 `$src_image` 分别是目标图像和源图像的标识符。

换句话说，`imagecopyresized()` 会从 `$src_image` 中取出一个宽度为 `$src_width` 高度为 `$src_height` 的矩形区域，在位置（`$src_x`、`$src_y`）并将其放置在 `$dst_image` 中宽度为 `$dst_width` 高度为 `$dst_height` 的矩形区域中，位置为（`$dst_x`、`$dst_y`）。

如果源和目标的宽度和高度不同，则会进行相应的图像收缩和拉伸。坐标指的是左上角。本函数可用来在同一幅图内部拷贝（如果 `$dst_image` 和 `$src_image` 相同的话）区域，但如果区域交迭的话则结果不可预知。

## 参数

- **`$dst_image`** — 目标图象资源。
- **`$src_image`** — 源图象资源。
- **`$dst_x`** — 目标点的 x 坐标。
- **`$dst_y`** — 目标点的 y 坐标。
- **`$src_x`** — 源点的 x 坐标。
- **`$src_y`** — 源点的 y 坐标。
- **`$dst_width`** — 目标宽度。
- **`$dst_height`** — 目标高度。
- **`$src_width`** — 源图象的宽度。
- **`$src_height`** — 源图象的高度。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$dst_image` 和 `$src_image` 现在需要 `GdImage` 实例，之前需要 `resource`。 |

## 示例

**缩放图像**

此示例将以一半大小显示图像。

```php


<?php
// File and new size
$filename = 'test.jpg';
$percent = 0.5;

// Content type
header('Content-Type: image/jpeg');

// Get new sizes
list($width, $height) = getimagesize($filename);
$newwidth = $width * $percent;
$newheight = $height * $percent;

// Load
$thumb = imagecreatetruecolor($newwidth, $newheight);
$source = imagecreatefromjpeg($filename);

// Resize
imagecopyresized($thumb, $source, 0, 0, 0, 0, $newwidth, $newheight, $width, $height);

// Output
imagejpeg($thumb);
?>

    
```

以上示例的输出类似于：

图像将以一半大小输出，但使用 `imagecopyresampled()` 可以获得更好的质量。

## 注释

> 因为调色板图像限制（255+1 种颜色）有个问题。重采样或过滤图像通常需要多于 255 种颜色，计算新的被重采样的像素及其颜色时采用了一种近似值。对调色板图像尝试分配一个新颜色时，如果失败我们选择了计算结果最接近（理论上）的颜色。这并不总是视觉上最接近的颜色。这可能会产生怪异的结果，例如空白（或者视觉上是空白）的图像。要跳过这个问题，请使用真彩色图像作为目标图像，例如用 `imagecreatetruecolor()` 创建的。

## 参见

 `imagecopyresized()` `imagescale()` `imagecrop()`
