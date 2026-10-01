---
id: "zh-php-guide-image-examples"
language: "php"
lang: "zh"
category: "guide"
name: "image.examples"
title: "示例"
module: "image"
source_url: "https://www.php.net/manual/zh/image.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 示例

## 使用 PHP 创建 PNG 图像

**使用 PHP 创建 PNG 图像**

```php


<?php

header("Content-type: image/png");
$string = $_GET['text'];
$im     = imagecreatefrompng("images/button1.png");
$orange = imagecolorallocate($im, 220, 210, 60);
$px     = (imagesx($im) - 7.5 * strlen($string)) / 2;
imagestring($im, 3, $px, 9, $string, $orange);
imagepng($im);

?>

    
```

本示例需要从带有 `<img src="button.php?text=text">` 标签的页面调用。 上述 `button.php` 脚本将 `"text"` 字符串绘制到一个图像上， 在本例中图像文件为 `"images/button1.png"`， 然后输出绘制后的图像。 当你需要经常修改图像上的文字时， 动态生成图像就可以省去了每次都重新制作图像的麻烦。

## 使用 Alpha 通道为图像加水印

**使用 Alpha 通道为图像加水印**

```php


<?php
// 加载水印以及要加水印的图像
$stamp = imagecreatefrompng('stamp.png');
$im = imagecreatefromjpeg('photo.jpeg');

// 设置水印图像的外边距，并且获取水印图像的尺寸
$marge_right = 10;
$marge_bottom = 10;
$sx = imagesx($stamp);
$sy = imagesy($stamp);


// 利用图像的宽度和水印的外边距计算位置，并且将水印复制到图像上

imagecopy($im, $stamp, imagesx($im) - $sx - $marge_right, imagesy($im) - $sy - $marge_bottom, 0, 0, imagesx($stamp), imagesy($stamp));

// 输出
header('Content-type: image/png');
imagepng($im);
?>

    
```

本示例是为图像加水印以及版权信息的常见方式。 请注意，水印图像中所包含的 alpha 通道信息以及文本的抗锯齿效果， 都会在复制过程中保留。

## 使用 `imagecopymerge()` 函数创建半透明水印

**使用 `imagecopymerge()` 函数创建半透明水印**

```php


<?php
// 加载要加水印的图像
$im = imagecreatefromjpeg('photo.jpeg');

// 首先我们从 GD 手动创建水印图像
$stamp = imagecreatetruecolor(100, 70);
imagefilledrectangle($stamp, 0, 0, 99, 69, 0x0000FF);
imagefilledrectangle($stamp, 9, 9, 90, 60, 0xFFFFFF);
imagestring($stamp, 5, 20, 20, 'libGD', 0x0000FF);
imagestring($stamp, 3, 20, 40, '(c) 2007-9', 0x0000FF);

// 设置水印图像的位置和大小
$marge_right = 10;
$marge_bottom = 10;
$sx = imagesx($stamp);
$sy = imagesy($stamp);

// 以 50% 的透明度合并水印和图像
imagecopymerge($im, $stamp, imagesx($im) - $sx - $marge_right, imagesy($im) - $sy - $marge_bottom, 0, 0, imagesx($stamp), imagesy($stamp), 50);

// 将图像保存到文件
imagepng($im, 'photo_stamp.png');

?>

    
```

本示例使用 `imagecopymerge()` 函数 来合并水印图像和原始图像。 我们可以控制水印的透明度，在本例中是 50% 的透明度。 在实际使用中， 使用半透明水印可以在不影响用户观看图像的前提下进行版权保护。
