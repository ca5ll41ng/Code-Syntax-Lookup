---
id: "zh-php-function-function-imageline"
language: "php"
lang: "zh"
category: "function"
name: "imageline"
title: "绘制直线"
signature: "true imageline(GdImage $image, int $x1, int $y1, int $x2, int $y2, int $color)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imageline.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 绘制直线

## 说明

```php
true imageline(GdImage $image, int $x1, int $y1, int $x2, int $y2, int $color)
```

在指定的两个点之间画一条直线。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$x1`** — 第一个点的 x 坐标。
- **`$y1`** — 第一个点的 y 坐标。
- **`$x2`** — 第二个点的 x 坐标。
- **`$y2`** — 第二个点的 y 坐标。
- **`$color`** — 直线颜色。颜色标识符使用 `imagecolorallocate()` 创建。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**绘制粗线**

```php


<?php

function imagelinethick($image, $x1, $y1, $x2, $y2, $color, $thick = 1)
{
    /* 这样只适用于正交线
    imagesetthickness($image, $thick);
    return imageline($image, $x1, $y1, $x2, $y2, $color);
    */
    if ($thick == 1) {
        return imageline($image, $x1, $y1, $x2, $y2, $color);
    }
    $t = $thick / 2 - 0.5;
    if ($x1 == $x2 || $y1 == $y2) {
        return imagefilledrectangle($image, round(min($x1, $x2) - $t), round(min($y1, $y2) - $t), round(max($x1, $x2) + $t), round(max($y1, $y2) + $t), $color);
    }
    $k = ($y2 - $y1) / ($x2 - $x1); //y = kx + q
    $a = $t / sqrt(1 + pow($k, 2));
    $points = array(
        round($x1 - (1+$k)*$a), round($y1 + (1-$k)*$a),
        round($x1 - (1-$k)*$a), round($y1 - (1+$k)*$a),
        round($x2 + (1+$k)*$a), round($y2 - (1-$k)*$a),
        round($x2 + (1-$k)*$a), round($y2 + (1+$k)*$a),
    );
    imagefilledpolygon($image, $points, 4, $color);
    return imagepolygon($image, $points, 4, $color);
}

?>

    
```

## 参见

 `imagecreatetruecolor()` `imagecolorallocate()`
