---
id: "zh-php-function-function-imagesetstyle"
language: "php"
lang: "zh"
category: "function"
name: "imagesetstyle"
title: "设定线条的样式"
signature: "bool imagesetstyle(GdImage $image, array $style)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagesetstyle.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设定线条的样式

## 说明

```php
bool imagesetstyle(GdImage $image, array $style)
```

`imagesetstyle()` 设定所有线条函数（例如 `imageline()` 和 `imagepolygon()`）在使用特殊颜色 `IMG_COLOR_STYLED` 或者颜色为 `IMG_COLOR_STYLEDBRUSHED` 绘制图像线条的样式。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$style`** — 像素颜色组成的数组。可以通过常量 `IMG_COLOR_TRANSPARENT` 来添加透明像素。注意 `$style` 不能是空 `array`。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

下面的示例脚本在画布上从左上角到右下角画一行虚线：

**`imagesetstyle()` 例子**

```php


<?php
header("Content-type: image/jpeg");
$im  = imagecreatetruecolor(100, 100);
$w   = imagecolorallocate($im, 255, 255, 255);
$red = imagecolorallocate($im, 255, 0, 0);

/* 画一条虚线，5 个红色像素，5 个白色像素 */
$style = array($red, $red, $red, $red, $red, $w, $w, $w, $w, $w);
imagesetstyle($im, $style);
imageline($im, 0, 0, 100, 100, IMG_COLOR_STYLED);

/* 用 imagesetbrush() 和 imagesetstyle 画一行笑脸 */
$style = array($w, $w, $w, $w, $w, $w, $w, $w, $w, $w, $w, $w, $red);
imagesetstyle($im, $style);

$brush = imagecreatefrompng("http://www.libpng.org/pub/png/images/smile.happy.png");
$w2 = imagecolorallocate($brush, 255, 255, 255);
imagecolortransparent($brush, $w2);
imagesetbrush($im, $brush);
imageline($im, 100, 0, 0, 100, IMG_COLOR_STYLEDBRUSHED);

imagejpeg($im);
?>

    
```

以上示例的输出类似于：

## 参见

 `imagesetbrush()` `imageline()`
