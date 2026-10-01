---
id: "zh-php-function-function-imagefilledpolygon"
language: "php"
lang: "zh"
category: "function"
name: "imagefilledpolygon"
title: "绘制多边形并填充"
signature: "bool imagefilledpolygon(GdImage $image, array $points, int $color)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagefilledpolygon.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 绘制多边形并填充

## 说明

自 PHP 8.0.0 起的签名（不支持命名参数）

```php
bool imagefilledpolygon(GdImage $image, array $points, int $color)
```

替代签名（从 PHP 8.1.0 起弃用）

```php
bool imagefilledpolygon(GdImage $image, array $points, int $num_points, int $color)
```

`imagefilledpolygon()` 在指定 `$image` 中创建多边形并填充。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$points`** — 包含连续多边形顶点的 `x` 和 `y` 坐标的数组。
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

**`imagefilledpolygon()` 示例**

```php


<?php
// 为多边形设置点数组
$values = array(
            40,  50,  // Point 1 (x, y)
            20,  240, // Point 2 (x, y)
            60,  60,  // Point 3 (x, y)
            240, 20,  // Point 4 (x, y)
            50,  40,  // Point 5 (x, y)
            10,  10   // Point 6 (x, y)
            );

// 创建图像
$image = imagecreatetruecolor(250, 250);

// 分配颜色
$bg   = imagecolorallocate($image, 0, 0, 0);
$blue = imagecolorallocate($image, 0, 0, 255);

// 填充背景
imagefilledrectangle($image, 0, 0, 249, 249, $bg);

// 绘制多边形
imagefilledpolygon($image, $values, $blue);

// 输出图像
header('Content-type: image/png');
imagepng($image);
?>

    
```

以上示例的输出类似于：

## 参见

 `imagepolygon()`
