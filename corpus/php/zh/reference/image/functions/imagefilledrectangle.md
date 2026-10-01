---
id: "zh-php-function-function-imagefilledrectangle"
language: "php"
lang: "zh"
category: "function"
name: "imagefilledrectangle"
title: "绘制矩形并填充"
signature: "true imagefilledrectangle(GdImage $image, int $x1, int $y1, int $x2, int $y2, int $color)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagefilledrectangle.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 绘制矩形并填充

## 说明

```php
true imagefilledrectangle(GdImage $image, int $x1, int $y1, int $x2, int $y2, int $color)
```

在指定 `$image` 中创建一个从点 1 开始到点 2 结束的的矩形并填充 `$color`。0, 0 是图像的左上角。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$x1`** — 点 1 的 x 坐标。
- **`$y1`** — 点 1 的 y 坐标。
- **`$x2`** — 点 2 的 x 坐标。
- **`$y2`** — 点 2 的 y 坐标。
- **`$color`** — 填充颜色。颜色标识符使用 `imagecolorallocate()` 创建。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**`imagefilledrectangle()` 用法**

```php


<?php
// 创建 55x30 图像
$im = imagecreatetruecolor(55, 30);
$white = imagecolorallocate($im, 255, 255, 255);

// 画白色矩形
imagefilledrectangle($im, 4, 4, 50, 25, $white);

// 保存图像
imagepng($im, './imagefilledrectangle.png');
?>

    
```

以上示例的输出类似于：
