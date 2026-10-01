---
id: "zh-php-function-function-imagecreatetruecolor"
language: "php"
lang: "zh"
category: "function"
name: "imagecreatetruecolor"
title: "新建真彩色图像"
signature: "GdImage|false imagecreatetruecolor(int $width, int $height)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagecreatetruecolor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 新建真彩色图像

## 说明

```php
GdImage|false imagecreatetruecolor(int $width, int $height)
```

`imagecreatetruecolor()` 返回图像对象，表示指定大小的黑色图像。

## 参数

- **`$width`** — 图像宽度。
- **`$height`** — 图像高度。

## 返回值

成功后返回图象对象,失败后返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 成功时，此函数现在返回 `GDImage` 实例；之前返回 `resource`。 |

## 示例

**新建 GD 图像流并输出图像。**

```php


<?php
header ('Content-Type: image/png');
$im = @imagecreatetruecolor(120, 20)
      or die('Cannot Initialize new GD image stream');
$text_color = imagecolorallocate($im, 233, 14, 91);
imagestring($im, 1, 5, 5,  'A Simple Text String', $text_color);
imagepng($im);
?>

    
```

以上示例的输出类似于：

## 参见

 `imagecreate()`
