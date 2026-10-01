---
id: "zh-php-function-function-imagettftext"
language: "php"
lang: "zh"
category: "function"
name: "imagettftext"
title: "用 TrueType 字体向图像写入文本"
signature: "array|false imagettftext(GdImage $image, float $size, float $angle, int $x, int $y, int $color, string $font_filename, string $text, array $options = [])"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagettftext.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 用 TrueType 字体向图像写入文本

## 说明

```php
array|false imagettftext(GdImage $image, float $size, float $angle, int $x, int $y, int $color, string $font_filename, string $text, array $options = [])
```

使用 TrueType 字体将指定的 `$text` 写入图像。

> PHP 8.0.0 之前，`imagefttext()` 是 `imagettftext()` 的扩展变体，额外支持 `$extrainfo`。自 PHP 8.0.0 起，`imagettftext()` 是 `imagefttext()` 的别名。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$size`** — 字体的尺寸，单位：点（磅）。
- **`$angle`** — 角度制表示的角度，0 度为从左向右读的文本。较高数值表示逆时针旋转。例如 90 度表示从下向上读的文本。
- **`$x`** — 由 `$x`，`$y` 所表示的坐标定义了第一个字符的基本点（大概是字符的左下角）。这和 `imagestring()` 不同，其中 `$x`，`$y` 定义了第一个字符的左上角。例如“top left”为 0, 0。
- **`$y`** — Y 坐标。它设定了字体基线的位置，不是字符的最底端。
- **`$color`** — 颜色索引。使用负的颜色索引值具有关闭防锯齿的效果。见 `imagecolorallocate()`。
- **`$fontfile`** — 想要使用的 TrueType 字体的路径。 — 根据 PHP 所使用的 GD 库版本，*当 `$fontfile` 没有以 `/` 开头时则 `.ttf` 将追加*到文件名之后，并且会在库定义字体路径中尝试搜索该文件名。 — 当使用的 GD 库版本低于 2.0.18 时，`space` 字符而不是分号将被用来作为不同字体文件的“路径分隔符”。不小心使用了此特性将会导致一条警告信息：`Warning: Could not find/open font`。对受影响的版本来说唯一解决方案就是将字体移动到不包含空格的路径。 — 很多情况下字体与使用字体的脚本在同一个目录中，下面的小技巧可以缓解 include 的问题。 ```php <?php // Set the environment variable for GD putenv('GDFONTPATH=' . realpath('.')); // Name the font to be used (note the lack of the .ttf extension) $font = 'SomeFont'; ?> ```
  > 注意 open_basedir *不* 适用于 `$fontfile`。


- **`$text`** — UTF-8 编码的文本字符串。 — 可以包含十进制数字化字符表示（形式为：`&#8364;`）来访问字体中超过位置 127 的字符，支持十六进制格式（如 `&#xA9;`）。UTF-8 编码的字符串可以直接传递。 — 不支持命名实体，比如 ``。可以考虑使用 `html_entity_decode()` 将这些命名实体解码为 UTF-8 字符。 — 如果字符串中使用了字体不支持的字符，则将用空心矩形替换该字符。
- **`$options`** — 包含 key 为 `linespacing` 且其值为 `float` 的数组。

## 返回值

返回含有 8 个元素的数组，代表构成文本外框的四个点，顺序为左下、右下、右上、左上。无论角度如何，这些点是相对于文本的，因此“左上角”指的是以水平方向看文字时的左上角。错误时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 新增 `$options`。 |

## 示例

**`imagettftext()` 示例**

此示例脚本将生成白色 400x30 像素的 PNG 图像，其中有黑色（带灰色阴影）Arial 字体写的“Testing...”。

```php


<?php

// 设置 content-type
header('Content-Type: image/png');

// 创建图像
$im = imagecreatetruecolor(400, 30);

// 创建一些颜色
$white = imagecolorallocate($im, 255, 255, 255);
$grey = imagecolorallocate($im, 128, 128, 128);
$black = imagecolorallocate($im, 0, 0, 0);
imagefilledrectangle($im, 0, 0, 399, 29, $white);

// 要绘制的文本
$text = 'Testing...';

// 用自己的字体路径替换路径
$font = 'arial.ttf';

// 给文本添加一些阴影
imagettftext($im, 20, 0, 11, 21, $grey, $font, $text);

// 添加文本
imagettftext($im, 20, 0, 10, 20, $black, $font, $text);

// 与 imagejpeg() 相比，使用 imagepng() 可产生更清晰的文本
imagepng($im);

?>

    
```

以上示例的输出类似于：

## 注释

> 此函数仅在 PHP 编译时加入 freetype 支持时有效（--with-freetype-dir=DIR）。

## 参见

 `imagettfbbox()` `imagefttext()` `imagestring()`
