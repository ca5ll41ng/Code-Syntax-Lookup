---
id: "zh-php-function-function-imageftbbox"
language: "php"
lang: "zh"
category: "function"
name: "imageftbbox"
title: "通过 freetype2 使用字体给出文本的边界框"
signature: "array|false imageftbbox(float $size, float $angle, string $font_filename, string $string, array $options = [])"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imageftbbox.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 通过 freetype2 使用字体给出文本的边界框

## 说明

```php
array|false imageftbbox(float $size, float $angle, string $font_filename, string $string, array $options = [])
```

此函数计算并返回 FreeType 文本的边界框（以像素为单位）。

> 在 PHP 8.0.0 之前，`imageftbbox()` 是 `imagettfbbox()` 的扩展变体，它还支持 `$options`。自 PHP 8.0.0 起，`imagettfbbox()` 是 `imageftbbox()` 的别名。

## 参数

- **`$size`** — 字体的尺寸，单位：点（磅）。
- **`$angle`** — 测量的 `$string` 的角度（以度为单位）。
- **`$font_filename`** — TrueType 字体文件的名称（可以是 URL）。根据 PHP 使用的 GD 库的版本，可能会尝试搜索没有以“/”开头并会在末尾追加“.ttf”的文件名，并沿着库定义的字体路径搜索。
- **`$string`** — 要测量的字符串。
- **`$options`** — | 键 | 类型 | 含义 | | --- | --- | --- | | `linespacing` | `float` | 定义绘制行距 |

## 返回值

`imageftbbox()` 返回包含 8 个元素的数组，代表构成文本边界框的四个点：

| 0 | 左下角，X 坐标 |
| --- | --- |
| 1 | 左下角，Y 坐标 |
| 2 | 右下角，X 坐标 |
| 3 | 右下角，Y 坐标 |
| 4 | 右上角，X 坐标 |
| 5 | 右上角， Y 坐标 |
| 6 | 左上角，X 坐标 |
| 7 | 左上角，Y 坐标 |

无论 `$angle` 如何，这些点都是相对于 *text*，因此“左上角”意味着在左上角水平地看到文本。

失败时，返回 `false`。

## 示例

**`imageftbbox()` 示例**

```php


<?php
// 创建 300x150 图像
$im = imagecreatetruecolor(300, 150);
$black = imagecolorallocate($im, 0, 0, 0);
$white = imagecolorallocate($im, 255, 255, 255);

// 将背景设置为白色
imagefilledrectangle($im, 0, 0, 299, 299, $white);

// 字体文件的路径
$font = './arial.ttf';

// 首先创建边界框
$bbox = imageftbbox(10, 0, $font, 'The PHP Documentation Group');

// 这是 X 和 Y 坐标
$x = $bbox[0] + (imagesx($im) / 2) - ($bbox[4] / 2) - 5;
$y = $bbox[1] + (imagesy($im) / 2) - ($bbox[5] / 2) - 5;

imagefttext($im, 10, 0, $x, $y, $black, $font, 'The PHP Documentation Group');

// 输出到浏览器
header('Content-Type: image/png');

imagepng($im);
?>

    
```

## 注释

> 此函数仅在 PHP 编译时加入 freetype 支持时有效（--with-freetype-dir=DIR）。

## 参见

 `imagefttext()` `imagettfbbox()`
