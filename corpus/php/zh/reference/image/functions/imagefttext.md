---
id: "zh-php-function-function-imagefttext"
language: "php"
lang: "zh"
category: "function"
name: "imagefttext"
title: "使用 FreeType 2 字体将文本写入图像"
signature: "array|false imagefttext(GdImage $image, float $size, float $angle, int $x, int $y, int $color, string $font_filename, string $text, array $options = [])"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagefttext.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用 FreeType 2 字体将文本写入图像

## 说明

```php
array|false imagefttext(GdImage $image, float $size, float $angle, int $x, int $y, int $color, string $font_filename, string $text, array $options = [])
```

> 在 PHP 8.0.0 之前，`imagefttext()` 是 `imagettftext()` 的扩展变体，它还支持 `$options`。自 PHP 8.0.0 起，`imagettftext()` 是 `imagefttext()` 的别名。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$size`** — 字体的尺寸，单位：点（磅）。
- **`$angle`** — 以度为单位的角度，0 度表示从左到右阅读文本。较高的值表示逆时针旋转。例如，值为 90 将导致从下到上阅读文本。
- **`$x`** — `$x` 和 `$y` 给出的坐标将定义第一个字符的基点（大致是字符的左下角）。 这与 `imagestring()` 不同，其中 `$x` 和 `$y` 定义第一个字符的左上角。例如，“左上角”是 0, 0。
- **`$y`** — y 坐标。设置字体基线的位置，而不是字符的最底部。
- **`$color`** — 文本所需颜色的索引，请参阅 `imagecolorexact()`。
- **`$font_filename`** — 希望使用的 TrueType 字体的路径。 — 根据 PHP 使用的 GD 库版本，*当 `$font_filename` 不以 `/` 开头时，将追加 `.ttf`* 到文件名末尾，库将尝试沿着库定义的字体路径搜索该文件名。 — 在许多情况下，字体与使用的脚本位于同一目录中，以下技巧将缓解任何包含问题。 ```php <?php // 设置 GD 的环境变量 putenv('GDFONTPATH=' . realpath('.')); // 要使用的字体名称（注意没有 .ttf 扩展名） $font = 'SomeFont'; ?> ```
- **`$text`** — 要插入到图像中的文本。
- **`$options`** — | 键 | 类型 | 含义 | | --- | --- | --- | | `linespacing` | `float` | 定义绘制行距 |

## 返回值

这个函数返回数组，定义了盒子的四个点，从左下角开始逆时针移动：

| 0 | 左下 x 坐标 |
| --- | --- |
| 1 | 左下 y 坐标 |
| 2 | 右下 x 坐标 |
| 3 | 右下 x 坐标 |
| 4 | 右上 x 坐标 |
| 5 | 右上 x 坐标 |
| 6 | 左上 x 坐标 |
| 7 | 左上 y 坐标 |

失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**`imagefttext()` 示例**

```php


<?php
// 创建 300x100 图像
$im = imagecreatetruecolor(300, 100);
$red = imagecolorallocate($im, 0xFF, 0x00, 0x00);
$black = imagecolorallocate($im, 0x00, 0x00, 0x00);

// 将背景设为红色
imagefilledrectangle($im, 0, 0, 299, 99, $red);

// ttf 字体文件的路径
$font_file = './arial.ttf';

// 使用字体大小 13 绘制文本“PHP Manual”
imagefttext($im, 13, 0, 105, 55, $black, $font_file, 'PHP Manual');

// 输出图像到浏览器
header('Content-Type: image/png');

imagepng($im);
?>

    
```

## 注释

> 此函数仅在 PHP 编译时加入 freetype 支持时有效（--with-freetype-dir=DIR）。

## 参见

 `imageftbbox()` `imagettftext()`
