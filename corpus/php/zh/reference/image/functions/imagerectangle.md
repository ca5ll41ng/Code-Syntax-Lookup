---
id: "zh-php-function-function-imagerectangle"
language: "php"
lang: "zh"
category: "function"
name: "imagerectangle"
title: "绘制矩形"
signature: "true imagerectangle(GdImage $image, int $x1, int $y1, int $x2, int $y2, int $color)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagerectangle.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 绘制矩形

## 说明

```php
true imagerectangle(GdImage $image, int $x1, int $y1, int $x2, int $y2, int $color)
```

`imagerectangle()` 创建从指定坐标开始的矩形。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$x1`** — 左上角 x 坐标。
- **`$y1`** — 左上角 y 坐标。 0, 0 是图像左上角。
- **`$x2`** — 右下角 x 坐标。
- **`$y2`** — 右下角 y 坐标。
- **`$color`** — 颜色标识符使用 `imagecolorallocate()` 创建。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**`imagerectangle()` 的简单示例**

```php


<?php
// 创建 200 x 200 图像
$canvas = imagecreatetruecolor(200, 200);

// 分配颜色
$pink = imagecolorallocate($canvas, 255, 105, 180);
$white = imagecolorallocate($canvas, 255, 255, 255);
$green = imagecolorallocate($canvas, 132, 135, 28);

// 绘制三个矩形，每个矩形都有自己的颜色
imagerectangle($canvas, 50, 50, 150, 150, $pink);
imagerectangle($canvas, 45, 60, 120, 100, $white);
imagerectangle($canvas, 100, 120, 75, 160, $green);

// 输出
header('Content-Type: image/jpeg');
imagejpeg($canvas);
?>

    
```

以上示例的输出类似于：
