---
id: "zh-php-function-function-imagecreatefromgd2part"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "imagecreatefromgd2part"
title: "从指定的 GD2 文件或 URL 的部分创建新图像"
signature: "GdImage|false imagecreatefromgd2part(string $filename, int $x, int $y, int $width, int $height)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagecreatefromgd2part.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从指定的 GD2 文件或 URL 的部分创建新图像

## 说明

```php
GdImage|false imagecreatefromgd2part(string $filename, int $x, int $y, int $width, int $height)
```

从指定的 GD2 文件或 URL 的部分创建新图像。

> 如已启用fopen 包装器，在此函数中， URL 可作为文件名。关于如何指定文件名详见 `fopen()`。各种 wapper 的不同功能请参见 `wrappers`，注意其用法及其可提供的预定义变量。

## 参数

- **`$filename`** — GD2 图像路径。
- **`$x`** — 源点的 x 坐标。
- **`$y`** — 源点的 y 坐标。
- **`$width`** — 源图象的宽度。
- **`$height`** — 源图象的高度。

## 返回值

成功后返回图象对象,失败后返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 成功时，此函数现在返回 `GDImage` 实例，之前返回 `resource`。 |

## 示例

**`imagecreatefromgd2part()` 示例**

```php


<?php
// 对于这个例子，需要先获取图像的尺寸
$image = getimagesize('./test.gd2');

// 现在获得了图像大小，创建图像实例
$im = imagecreatefromgd2part('./test.gd2', 4, 4, ($image[0] / 2) - 6, ($image[1] / 2) - 6);

// 执行图像操作，在本例中对图像进行浮雕
if(function_exists('imagefilter'))
{
    imagefilter($im, IMG_FILTER_EMBOSS);
}

// 保存优化后的图像
imagegd2($im, './test_emboss.gd2');
?>

    
```

## 注释

> The GD and GD2 image formats are proprietary image formats of libgd. They have to be regarded *obsolete*, and should only be used for development and testing purposes.
