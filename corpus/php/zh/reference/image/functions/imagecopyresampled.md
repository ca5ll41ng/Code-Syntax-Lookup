---
id: "zh-php-function-function-imagecopyresampled"
language: "php"
lang: "zh"
category: "function"
name: "imagecopyresampled"
title: "重采样拷贝部分图像并调整大小"
signature: "true imagecopyresampled(GdImage $dst_image, GdImage $src_image, int $dst_x, int $dst_y, int $src_x, int $src_y, int $dst_width, int $dst_height, int $src_width, int $src_height)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagecopyresampled.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 重采样拷贝部分图像并调整大小

## 说明

```php
true imagecopyresampled(GdImage $dst_image, GdImage $src_image, int $dst_x, int $dst_y, int $src_x, int $src_y, int $dst_width, int $dst_height, int $src_width, int $src_height)
```

`imagecopyresampled()` 将一幅图像中的一块正方形区域拷贝到另一个图像中，平滑地插入像素值，因此，尤其是，减小了图像的大小而仍然保持了极大的清晰度。

换句话说，`imagecopyresampled()` 会从 `$src_image` 中取出一个宽度为 `$src_width` 高度为 `$src_height` 的矩形区域，在位置（`$src_x`、`$src_y`）并将其放置在 `$dst_image` 中宽度为 `$dst_width` 高度为 `$dst_height` 的矩形区域中，位置为（`$dst_x`、`$dst_y`）。

如果源和目标的宽度和高度不同，则会进行相应的图像收缩和拉伸。坐标指的是左上角。本函数可用来在同一幅图内部拷贝（如果 `$dst_image` 和 `$src_image` 相同的话）区域，但如果区域交迭的话则结果不可预知。

## 参数

- **`$dst_image`** — 目标图象资源。
- **`$src_image`** — 源图象资源。
- **`$dst_x`** — 目标 X 坐标点。
- **`$dst_y`** — 目标 Y 坐标点。
- **`$src_x`** — 源的 X 坐标点。
- **`$src_y`** — 源的 Y 坐标点。
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

**简单的示例**

这个例子会将图像调整为原有尺寸的一半。

```php


<?php
// 这个文件
$filename = 'test.jpg';
$percent = 0.5;

// 内容类型
header('Content-Type: image/jpeg');

// 获取新的尺寸
list($width, $height) = getimagesize($filename);
$new_width = $width * $percent;
$new_height = $height * $percent;

// 重新取样
$image_p = imagecreatetruecolor($new_width, $new_height);
$image = imagecreatefromjpeg($filename);
imagecopyresampled($image_p, $image, 0, 0, 0, 0, $new_width, $new_height, $width, $height);

// 输出
imagejpeg($image_p, null, 100);
?>

    
```

以上示例的输出类似于：

**按比例对图像重新采样**

这个例子会以最大宽度高度为 200 像素显示一个图像。

```php


<?php
// 源文件
$filename = 'test.jpg';

// 设置最大宽高
$width = 200;
$height = 200;

// Content type
header('Content-Type: image/jpeg');

// 获取新尺寸
list($width_orig, $height_orig) = getimagesize($filename);

$ratio_orig = $width_orig/$height_orig;

if ($width/$height > $ratio_orig) {
   $width = $height*$ratio_orig;
} else {
   $height = $width/$ratio_orig;
}

// 重新取样
$image_p = imagecreatetruecolor($width, $height);
$image = imagecreatefromjpeg($filename);
imagecopyresampled($image_p, $image, 0, 0, 0, 0, $width, $height, $width_orig, $height_orig);

// 输出
imagejpeg($image_p, null, 100);
?>

    
```

以上示例的输出类似于：

## 注释

> 因为调色板图像限制（255+1 种颜色）有个问题。重采样或过滤图像通常需要多于 255 种颜色，计算新的被重采样的像素及其颜色时采用了一种近似值。对调色板图像尝试分配一个新颜色时，如果失败我们选择了计算结果最接近（理论上）的颜色。这并不总是视觉上最接近的颜色。这可能会产生怪异的结果，例如空白（或者视觉上是空白）的图像。要跳过这个问题，请使用真彩色图像作为目标图像，例如用 `imagecreatetruecolor()` 创建的。

## 参见

 `imagecopyresized()` `imagescale()` `imagecrop()`
