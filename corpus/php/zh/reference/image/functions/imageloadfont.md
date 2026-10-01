---
id: "zh-php-function-function-imageloadfont"
language: "php"
lang: "zh"
category: "function"
name: "imageloadfont"
title: "载入新字体"
signature: "GdFont|false imageloadfont(string $filename)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imageloadfont.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 载入新字体

## 说明

```php
GdFont|false imageloadfont(string $filename)
```

`imageloadfont()` 加载用户定义的点阵字体并返回其标识符。

## 参数

- **`$filename`** — 字体文件格式目前是二进制且依赖于体系结构。这意味着应该用跟运行 PHP 相同类型 CPU 的机器生成字体。 — | 字节位置 | C 数据类型 | 说明 | | --- | --- | --- | | byte 0-3 | int | 字体中的字符数 | | byte 4-7 | int | 字体中第一个字符的值（通常 32 代表空格） | | byte 8-11 | int | 每个字符宽度的像素值 | | byte 12-15 | int | 每个字符高度的像素值 | | byte 16- | char | 字符数据的数组，每字符中每像素 1 字节，一共（nchars*width*height）字节。 |

## 返回值

返回 `GdFont` 实例， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在返回 `GdFont` 实例；之前返回 `integer`。 |

## 示例

**`imageloadfont()` 用法示例**

```php


<?php
// 创建新的图像实例
$im = imagecreatetruecolor(50, 20);
$black = imagecolorallocate($im, 0, 0, 0);
$white = imagecolorallocate($im, 255, 255, 255);

// 将背景设为白色
imagefilledrectangle($im, 0, 0, 49, 19, $white);

// 加载 gd 字体并输入“Hello”
$font = imageloadfont('./04b.gdf');
imagestring($im, $font, 0, 0, 'Hello', $black);

// 输出到浏览器
header('Content-type: image/png');

imagepng($im);
?>

    
```

## 参见

 `imagefontwidth()` `imagefontheight()` `imagestring()`
