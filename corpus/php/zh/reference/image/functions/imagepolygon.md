---
id: "zh-php-function-function-imagepolygon"
language: "php"
lang: "zh"
category: "function"
name: "imagepolygon"
title: "绘制多边形"
signature: "bool imagepolygon(GdImage $image, array $points, int $color)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagepolygon.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 绘制多边形

## 说明

自 PHP 8.0.0 起的签名（不支持命名参数）

```php
bool imagepolygon(GdImage $image, array $points, int $color)
```

替代签名（从 PHP 8.1.0 开始弃用）

```php
bool imagepolygon(GdImage $image, array $points, int $num_points, int $color)
```

`imagepolygon()` 在指定 `$image` 中创建多边形。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$points`** — 包含多边形顶点的数组，例如： | points[0] | = x0 | | --- | --- | | points[1] | = y0 | | points[2] | = x1 | | points[3] | = y1 |
- **`$num_points`** — 点（顶点）的总数，必须最少为 3。 — 如果根据第二个签名省略此参数，则 `$points` 必须具有偶数个元素，并且假定 `$num_points` 为 count($points)/2。
- **`$color`** — 颜色标识符使用 `imagecolorallocate()` 创建。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 弃用参数 `$num_points`。 |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**`imagepolygon()` 示例**

```php


<?php
// 创建空白图像
$image = imagecreatetruecolor(400, 300);

// 为多边形分配颜色
$col_poly = imagecolorallocate($image, 255, 255, 255);

// 绘制多边形
imagepolygon($image, array(
        0,   0,
        100, 200,
        300, 200
    ),
    $col_poly);

// 输出图像到浏览器
header('Content-type: image/png');

imagepng($image);
?>

    
```

以上示例的输出类似于：

## 参见

 `imagefilledpolygon()` `imageopenpolygon()` `imagecreate()` `imagecreatetruecolor()`
