---
id: "zh-php-function-function-imagecreate"
language: "php"
lang: "zh"
category: "function"
name: "imagecreate"
title: "创建新的基于调色板的图像"
signature: "GdImage|false imagecreate(int $width, int $height)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagecreate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建新的基于调色板的图像

## 说明

```php
GdImage|false imagecreate(int $width, int $height)
```

`imagecreate()` 返回代表指定大小的空白图像的图像标识符。

通常，建议使用 `imagecreatetruecolor()` 而不是 `imagecreate()`，以便在尽可能的最高质量图像上进行图像处理。如果要输出调色板图像，则应在使用 `imagepng()` 或 `imagegif()` 保存图像之前立即调用 `imagetruecolortopalette()`。

## 参数

- **`$width`** — 图像宽度。
- **`$height`** — 图像高度。

## 返回值

成功后返回图象对象,失败后返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 成功时，此函数现在返回 `GDImage` 实例，之前返回 `resource`。 |

## 示例

**创建新的 GD 图像流并输出图像。**

```php


<?php
header("Content-Type: image/png");
$im = @imagecreate(110, 20)
    or die("Cannot Initialize new GD image stream");
$background_color = imagecolorallocate($im, 0, 0, 0);
$text_color = imagecolorallocate($im, 233, 14, 91);
imagestring($im, 1, 5, 5,  "A Simple Text String", $text_color);
imagepng($im);
?>

    
```

以上示例的输出类似于：

## 参见

 `imagecreatetruecolor()`
