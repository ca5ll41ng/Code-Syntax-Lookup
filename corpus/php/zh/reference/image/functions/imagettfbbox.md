---
id: "zh-php-function-function-imagettfbbox"
language: "php"
lang: "zh"
category: "function"
name: "imagettfbbox"
title: "取得使用 TrueType 字体的文本的边界框"
signature: "array|false imagettfbbox(float $size, float $angle, string $font_filename, string $string, array $options = [])"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagettfbbox.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得使用 TrueType 字体的文本的边界框

## 说明

```php
array|false imagettfbbox(float $size, float $angle, string $font_filename, string $string, array $options = [])
```

本函数计算并返回 TrueType 文本的边界框的像素大小。

> 在 PHP 8.0.0 之前，`imageftbbox()` 是 `imagettfbbox()` 的扩展变体，额外支持 `$extrainfo`。自 PHP 8.0.0 起，`imagettfbbox()` 是 `imageftbbox()` 的别名。

## 参数

- **`$size`** — 字体的尺寸，单位：点（磅）。
- **`$angle`** — 测量字符串的角度（以度为单位）。
- **`$fontfile`** — 想要使用的 TrueType 字体的路径。 — 根据 PHP 所使用的 GD 库版本，*当 `$fontfile` 没有以 `/` 开头时则 `.ttf` 将追加*到文件名之后，并且会在库定义字体路径中尝试搜索该文件名。 — 当使用的 GD 库版本低于 2.0.18 时，`space` 字符而不是分号将被用来作为不同字体文件的“路径分隔符”。不小心使用了此特性将会导致一条警告信息：`Warning: Could not find/open font`。对受影响的版本来说唯一解决方案就是将字体移动到不包含空格的路径。 — 很多情况下字体与使用字体的脚本在同一个目录中，下面的小技巧可以缓解 include 的问题。 ```php <?php // Set the environment variable for GD putenv('GDFONTPATH=' . realpath('.')); // Name the font to be used (note the lack of the .ttf extension) $font = 'SomeFont'; ?> ```
  > 注意 open_basedir *不* 适用于 `$fontfile`。


- **`$string`** — 要测量的字符串。
- **`$options`** — 与 `imagettftext()` 相同。

## 返回值

`imagettfbbox()` 成功时返回包含 8 个元素的数组，代表构成文本边界框的四个点。失败时返回 `false`。

| 键 | 内容 |
| --- | --- |
| 0 | 左下角,X 位置 |
| 1 | 左下角，Y 位置 |
| 2 | 右下角，X 位置 |
| 3 | 右下角，Y 位置 |
| 4 | 右上角，X 位置 |
| 5 | 右上角，Y 位置 |
| 6 | 左上角，X 位置 |
| 7 | 左上角，Y 位置 |

这些点相对于 *text*，与 `$angle` 无关，因此“左上角”意味着可以在左上角看到横排文本。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 新增 `$options`。 |

## 示例

**`imagettfbbox()` 示例**

```php


<?php
// 创建 300x150 图像
$im = imagecreatetruecolor(300, 150);
$black = imagecolorallocate($im, 0, 0, 0);
$white = imagecolorallocate($im, 255, 255, 255);

// 设置白色背景色
imagefilledrectangle($im, 0, 0, 299, 299, $white);

// 字体文件的路径
$font = './arial.ttf';

// 首先为第一个文本创建边界框
$bbox = imagettfbbox(10, 45, $font, 'Powered by PHP ' . phpversion());

// 这是 X 坐标和 Y 坐标
$x = $bbox[0] + (imagesx($im) / 2) - ($bbox[4] / 2) - 25;
$y = $bbox[1] + (imagesy($im) / 2) - ($bbox[5] / 2) - 5;

// 写入
imagettftext($im, 10, 45, $x, $y, $black, $font, 'Powered by PHP ' . phpversion());

// 为第二个文本创建边界框
$bbox = imagettfbbox(10, 45, $font, 'and Zend Engine ' . zend_version());

// 设置坐标，使其位于第一个字的旁边
$x = $bbox[0] + (imagesx($im) / 2) - ($bbox[4] / 2) + 10;
$y = $bbox[1] + (imagesy($im) / 2) - ($bbox[5] / 2) - 5;

// 写入
imagettftext($im, 10, 45, $x, $y, $black, $font, 'and Zend Engine ' . zend_version());

// 输出到浏览器
header('Content-Type: image/png');

imagepng($im);
?>

    
```

## 注释

> 此函数仅在 PHP 编译时加入 freetype 支持时有效（--with-freetype-dir=DIR）。

## 参见

 `imagettftext()` `imageftbbox()`
