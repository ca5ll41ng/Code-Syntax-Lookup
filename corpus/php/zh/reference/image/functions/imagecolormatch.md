---
id: "zh-php-function-function-imagecolormatch"
language: "php"
lang: "zh"
category: "function"
name: "imagecolormatch"
title: "使一个图像中调色板版本的颜色与真彩色版本更能匹配"
signature: "true imagecolormatch(GdImage $image1, GdImage $image2)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagecolormatch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使一个图像中调色板版本的颜色与真彩色版本更能匹配

## 说明

```php
true imagecolormatch(GdImage $image1, GdImage $image2)
```

使一个图像中调色板版本的颜色与真彩色版本更能匹配。

## 参数

- **`$image1`** — 真彩色图像对象。
- **`$image2`** — 调色板图像对象，指向与 `$image1` 相同大小的图像。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image1` 和 `$image2` 现在需要 `GdImage` 实例，之前需要 `resource`。 |

## 示例

**`imagecolormatch()` 示例**

```php


<?php
// 设置真彩色和调色板图像
$im1 = imagecreatefrompng('./gdlogo.png');
$im2 = imagecreate(imagesx($im1), imagesy($im1));

// 给 $im2 添加一些颜色
$colors   = Array();
$colors[] = imagecolorallocate($im2, 255, 36, 74);
$colors[] = imagecolorallocate($im2, 40, 0, 240);
$colors[] = imagecolorallocate($im2, 82, 100, 255);
$colors[] = imagecolorallocate($im2, 84, 63, 44);

// 将这些颜色与真彩图像进行匹配
imagecolormatch($im1, $im2);
?>

   
```

## 参见

 `imagecreatetruecolor()`
