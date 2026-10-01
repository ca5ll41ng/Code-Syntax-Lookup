---
id: "zh-php-function-function-imageconvolution"
language: "php"
lang: "zh"
category: "function"
name: "imageconvolution"
title: "用系数 div 和 offset 申请一个 3x3 的卷积矩阵"
signature: "bool imageconvolution(GdImage $image, array $matrix, float $divisor, float $offset)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imageconvolution.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 用系数 div 和 offset 申请一个 3x3 的卷积矩阵

## 说明

```php
bool imageconvolution(GdImage $image, array $matrix, float $divisor, float $offset)
```

使用指定的系数和 offset 在图像上应用卷积矩阵。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$matrix`** — 3x3 矩阵：三个浮点数组成的数组，再由这样的三个数组组成的数组。
- **`$divisor`** — The divisor of the result of the convolution, used for normalization.
- **`$offset`** — 颜色偏移。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**Embossing the PHP.net logo**

```php


<?php
$image = imagecreatefromgif('http://www.php.net/images/php.gif');

$emboss = array(array(2, 0, 0), array(0, -1, 0), array(0, 0, -1));
imageconvolution($image, $emboss, 1, 127);

header('Content-Type: image/png');
imagepng($image, null, 9);
?>

    
```

以上示例会输出：

**Gaussian blur**

```php


<?php
$image = imagecreatetruecolor(180,40);

// Writes the text and apply a gaussian blur on the image
imagestring($image, 5, 10, 8, 'Gaussian Blur Text', 0x00ff00);
$gaussian = array(array(1.0, 2.0, 1.0), array(2.0, 4.0, 2.0), array(1.0, 2.0, 1.0));
imageconvolution($image, $gaussian, 16, 0);

// Rewrites the text for comparison
imagestring($image, 5, 10, 18, 'Gaussian Blur Text', 0x00ff00);

header('Content-Type: image/png');
imagepng($image, null, 9);
?>

    
```

以上示例会输出：

## 参见

 `imagefilter()`
