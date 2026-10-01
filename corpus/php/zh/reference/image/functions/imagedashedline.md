---
id: "zh-php-function-function-imagedashedline"
language: "php"
lang: "zh"
category: "function"
name: "imagedashedline"
title: "绘制虚线"
signature: "true imagedashedline(GdImage $image, int $x1, int $y1, int $x2, int $y2, int $color)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagedashedline.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 绘制虚线

## 说明

```php
true imagedashedline(GdImage $image, int $x1, int $y1, int $x2, int $y2, int $color)
```

弃用此函数。使用 `imagesetstyle()` 和 `imageline()` 组合替代。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$x1`** — 左上 x 坐标。
- **`$y1`** — 左上 y 坐标。0，0 为图像的左上角。
- **`$x2`** — 右下 x 坐标。
- **`$y2`** — 右下 y 坐标。
- **`$color`** — 填充颜色。颜色标识符使用 `imagecolorallocate()` 创建。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**`imagedashedline()` 示例**

```php


<?php
// 创建 100x100 图像
$im = imagecreatetruecolor(100, 100);
$white = imagecolorallocate($im, 0xFF, 0xFF, 0xFF);

// 绘制垂直虚线
imagedashedline($im, 50, 25, 50, 75, $white);

// 保存图像
imagepng($im, './dashedline.png');
?>

    
```

以上示例的输出类似于：

**替代 `imagedashedline()`**

```php


<?php
// 创建 100x100 图像
$im = imagecreatetruecolor(100, 100);
$white = imagecolorallocate($im, 0xFF, 0xFF, 0xFF);

// 定义样式：前 4 个像素为白色，
// 后 4 个像素为透明。这将创建虚线效果
$style = Array(
                $white, 
                $white, 
                $white, 
                $white, 
                IMG_COLOR_TRANSPARENT, 
                IMG_COLOR_TRANSPARENT, 
                IMG_COLOR_TRANSPARENT, 
                IMG_COLOR_TRANSPARENT
                );

imagesetstyle($im, $style);

// 绘制虚线
imageline($im, 50, 25, 50, 75, IMG_COLOR_STYLED);

// 保存图像
imagepng($im, './imageline.png');
?>

    
```

## 参见

 `imagesetstyle()` `imageline()`
