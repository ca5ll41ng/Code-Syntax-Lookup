---
id: "zh-php-function-function-imagesetpixel"
language: "php"
lang: "zh"
category: "function"
name: "imagesetpixel"
title: "设置单个像素"
signature: "true imagesetpixel(GdImage $image, int $x, int $y, int $color)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagesetpixel.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置单个像素

## 说明

```php
true imagesetpixel(GdImage $image, int $x, int $y, int $color)
```

`imagesetpixel()` 在指定坐标处绘制像素。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$x`** — x 坐标。
- **`$y`** — y 坐标。
- **`$color`** — 颜色标识符使用 `imagecolorallocate()` 创建。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**`imagesetpixel()` 示例**

A random drawing that ends with a regular picture.

```php


<?php

$x = 200;
$y = 200;

$gd = imagecreatetruecolor($x, $y);
 
$corners[0] = array('x' => 100, 'y' =>  10);
$corners[1] = array('x' =>   0, 'y' => 190);
$corners[2] = array('x' => 200, 'y' => 190);

$red = imagecolorallocate($gd, 255, 0, 0); 

for ($i = 0; $i < 100000; $i++) {
  imagesetpixel($gd, round($x), round($y), $red);
  $a = rand(0, 2);
  $x = ($x + $corners[$a]['x']) / 2;
  $y = ($y + $corners[$a]['y']) / 2;
}
 
header('Content-Type: image/png');
imagepng($gd);

?>

    
```

以上示例的输出类似于：

## 参见

 `imagecreatetruecolor()` `imagecolorallocate()` `imagecolorat()`
