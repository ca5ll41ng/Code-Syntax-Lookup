---
id: "zh-php-function-function-imagechar"
language: "php"
lang: "zh"
category: "function"
name: "imagechar"
title: "水平地绘制一个字符"
signature: "true imagechar(GdImage $image, GdFont|int $font, int $x, int $y, string $char, int $color)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagechar.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 水平地绘制一个字符

## 说明

```php
true imagechar(GdImage $image, GdFont|int $font, int $x, int $y, string $char, int $color)
```

`imagechar()` 将 `$char` 的首个字符绘制在 `$image` 标识的图像中，其左上角位于 `$x`，`$y`（图像左上角为 0, 0），颜色为 `$color`。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$font`** — 取值对于内建的 latin2 编码字体可以是：1、2、3、4、5(更高的数字对应更大的字体)， 或是通过 `imageloadfont()` 返回的 `GdFont` 实例。
- **`$x`** — 起点的 x 坐标。
- **`$y`** — 起点的 y 坐标。
- **`$char`** — 要绘制的字符。
- **`$color`** — 颜色标识符使用 `imagecolorallocate()` 创建。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | `$font` 参数现在接受 `GdFont` 实例和 `integer`，之前仅接受 `integer`。 |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**`imagechar()` 示例**

```php


<?php

$im = imagecreate(100, 100);

$string = 'PHP';

$bg = imagecolorallocate($im, 255, 255, 255);
$black = imagecolorallocate($im, 0, 0, 0);

// 在左上角打印一个黑色“P”
imagechar($im, 1, 0, 0, $string, $black);

header('Content-type: image/png');
imagepng($im);

?>

    
```

以上示例的输出类似于：

## 参见

 `imagecharup()` `imageloadfont()`
