---
id: "zh-php-function-function-imagesettile"
language: "php"
lang: "zh"
category: "function"
name: "imagesettile"
title: "设置要填充的平铺图像"
signature: "true imagesettile(GdImage $image, GdImage $tile)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagesettile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置要填充的平铺图像

## 说明

```php
true imagesettile(GdImage $image, GdImage $tile)
```

当使用特殊颜色 `IMG_COLOR_TILED`时，`imagesettile()` 设置所有区域填充函数（比如 `imagefill()` 和 `imagefilledpolygon()`）要使用的平铺图像。

平铺是指使用重复模式填充区域的图像。*任何* GD 图像都可以用于平铺，并且通过使用 `imagecolortransparent()` 来设定平铺图像的透明颜色索引，可以创建允许底层区域的某些部分透过的平铺。

> 平铺完成后不需要采取什么特殊动作，但如果要销毁平铺图像（或让 PHP 销毁），不能使用 `IMG_COLOR_TILED` 颜色，除非设置了新的平铺图像。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$tile`** — 用作平铺的图像对象。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 和 `$tile` 现在需要 `GdImage` 实例；之前需要 `resource`。 |

## 示例

**`imagesettile()` 示例**

```php


<?php
// 加载外部图像
$zend = imagecreatefromgif('./zend.gif');

// 创建 200x200 图像
$im = imagecreatetruecolor(200, 200);

// 设置平铺
imagesettile($im, $zend);

// 重复图像
imagefilledrectangle($im, 0, 0, 199, 199, IMG_COLOR_TILED);

// 输出图像到浏览器
header('Content-Type: image/png');

imagepng($im);
?>

    
```

以上示例的输出类似于：
