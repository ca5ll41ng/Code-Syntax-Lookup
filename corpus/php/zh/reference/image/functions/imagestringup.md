---
id: "zh-php-function-function-imagestringup"
language: "php"
lang: "zh"
category: "function"
name: "imagestringup"
title: "垂直绘制字符串"
signature: "true imagestringup(GdImage $image, GdFont|int $font, int $x, int $y, string $string, int $color)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagestringup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 垂直绘制字符串

## 说明

```php
true imagestringup(GdImage $image, GdFont|int $font, int $x, int $y, string $string, int $color)
```

在指定坐标处垂直绘制 `$string`。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$font`** — 取值对于内建的 latin2 编码字体可以是：1、2、3、4、5(更高的数字对应更大的字体)， 或是通过 `imageloadfont()` 返回的 `GdFont` 实例。
- **`$x`** — 左下角的 x 坐标。
- **`$y`** — 左下角的 y 坐标。
- **`$string`** — 要写入的字符串。
- **`$color`** — 颜色标识符使用 `imagecolorallocate()` 创建。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | `$font` 参数现在接受 `GdFont` 实例和 `integer`，之前仅接受 `integer`。 |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**`imagestringup()` 示例**

```php


<?php
// 创建 100*100 图像
$im = imagecreatetruecolor(100, 100);

// 写入文本
$textcolor = imagecolorallocate($im, 0xFF, 0xFF, 0xFF);
imagestringup($im, 3, 40, 80, 'gd library', $textcolor);

// 保存图像
imagepng($im, './stringup.png');
?>

    
```

以上示例的输出类似于：

## 参见

 `imagestring()` `imageloadfont()`
