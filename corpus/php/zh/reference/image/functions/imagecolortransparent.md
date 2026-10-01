---
id: "zh-php-function-function-imagecolortransparent"
language: "php"
lang: "zh"
category: "function"
name: "imagecolortransparent"
title: "将颜色定义为透明"
signature: "int imagecolortransparent(GdImage $image, int|null $color = null)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagecolortransparent.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将颜色定义为透明

## 说明

```php
int imagecolortransparent(GdImage $image, int|null $color = null)
```

获取或设置指定 `$image` 中的透明色。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$color`** — 颜色标识符使用 `imagecolorallocate()` 创建。

## 返回值

返回新（或当前，如果未指定）透明色的标识符。如果 `$color` 为 `null`，并且图像没有透明色，则返回的标识符为 `-1`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |
| 8.0.0 | `$color` 现在允许为 null。 |

## 示例

**`imagecolortransparent()` 示例**

```php


<?php
// 创建 55x30 图像
$im = imagecreatetruecolor(55, 30);
$red = imagecolorallocate($im, 255, 0, 0);
$black = imagecolorallocate($im, 0, 0, 0);

// 使背景透明
imagecolortransparent($im, $black);

// 画红色矩形
imagefilledrectangle($im, 4, 4, 50, 25, $red);

// 保存图像
imagepng($im, './imagecolortransparent.png');
?>

    
```

以上示例的输出类似于：

## 注释

> 透明度仅能使用 `imagecopymerge()` 和真彩色图像复制，而不使用 `imagecopy()` 或调色板图像。

> 透明色是图像的属性，透明度不是颜色的属性。一旦设定某个颜色为透明色，图像中之前绘制为该颜色的任何区域都成为透明的。
