---
id: "zh-php-function-function-imagealphablending"
language: "php"
lang: "zh"
category: "function"
name: "imagealphablending"
title: "设定图像的混色模式"
signature: "true imagealphablending(GdImage $image, bool $enable)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagealphablending.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设定图像的混色模式

## 说明

```php
true imagealphablending(GdImage $image, bool $enable)
```

`imagealphablending()` 允许在真彩色图像上使用两种不同的绘画模式。在混色（blending）模式下，alpha 通道色彩成分提供给所有的绘画函数，例如 `imagesetpixel()` 决定底层的颜色应在何种程度上被允许照射透过。作为结果，GD 自动将该点现有的颜色和画笔颜色混合，并将结果储存在图像中。结果的像素是不透明的。在非混色模式下，画笔颜色连同其 alpha 通道信息一起被拷贝，替换掉目标像素。混色模式在画调色板图像时不可用。如果 `$blendmode` 为 `true`，则启用混色模式，否则关闭。成功时返回 `true`， 或者在失败时返回 `false`。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$enable`** — 是否启用混合模式。在真彩色图像上，默认值为 `true`，否则默认值为 `false`

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**`imagealphablending()` 用法示例**

```php


<?php
// 创建图像
$im = imagecreatetruecolor(100, 100);

// 设置 alphablending 为开启
imagealphablending($im, true);

// 画正方形
imagefilledrectangle($im, 30, 30, 70, 70, imagecolorallocate($im, 255, 0, 0));

// 输出
header('Content-Type: image/png');

imagepng($im);
?>

   
```
