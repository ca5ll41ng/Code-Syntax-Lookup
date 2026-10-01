---
id: "zh-php-function-function-imagetruecolortopalette"
language: "php"
lang: "zh"
category: "function"
name: "imagetruecolortopalette"
title: "将真彩色图像转换为调色板图像"
signature: "bool imagetruecolortopalette(GdImage $image, bool $dither, int $num_colors)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagetruecolortopalette.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将真彩色图像转换为调色板图像

## 说明

```php
bool imagetruecolortopalette(GdImage $image, bool $dither, int $num_colors)
```

`imagetruecolortopalette()`将一幅真彩色图像转换为调色板图像。本函数的代码原本是从独立的 JPEG 小组库代码中提取出来的，非常出色。此代码被修改以在结果调色板中保留尽可能多的 alpha 通道信息以及尽可能多的颜色。但并没有达到期望的效果。通常最好生成真彩色图像输出，这样可以保证得到最高的输出质量。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$dither`** — 指明图像是否被抖动（dithered），如果为 `true` 则图像将被抖动使图像中的斑点更多但是颜色更接近。
- **`$num_colors`** — 设定调色板中被保留的颜色的最大数目。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**将真彩色图像转换为基于调色板的图像**

```php


<?php
// 创建新的真彩色图像
$im = imagecreatetruecolor(100, 100);

// 转换为基于调色板的无抖动和 255 种颜色
imagetruecolortopalette($im, false, 255);

// 保存图像
imagepng($im, './paletteimage.png');
?>

    
```
