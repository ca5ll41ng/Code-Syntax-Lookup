---
id: "zh-php-function-function-imagegif"
language: "php"
lang: "zh"
category: "function"
name: "imagegif"
title: "输出图象到浏览器或文件。"
signature: "bool imagegif(GdImage $image, resource|string|null $file = null)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagegif.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 输出图象到浏览器或文件。

## 说明

```php
bool imagegif(GdImage $image, resource|string|null $file = null)
```

`imagegif()` 从图像 `$image` 在 `$file` 中创建 GIF 图像。`$image` 参数是 `imagecreate()` 或 `imagecreatefrom*` 函数的返回值。

图像格式为 GIF87a。如果用了 `imagecolortransparent()` 使图像为透明，则其格式为 GIF89a。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$file`** — 文件保存的路径或者已打开的流资源（此方法返回后自动关闭该流资源），如果未设置或为 `null`，将会直接输出原始图象流。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

> 如果 libgd 输出图像失败，函数会返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**使用 `imagegif()` 输出图像**

```php


<?php
// 创建新的图像实例
$im = imagecreatetruecolor(100, 100);

// 设置背景为白色
imagefilledrectangle($im, 0, 0, 99, 99, 0xFFFFFF);

//在图像上绘制文本字符串
imagestring($im, 3, 40, 20, 'GD Library', 0xFFBA00);

// 输出图像到浏览器
header('Content-Type: image/gif');

imagegif($im);
?>

    
```

**使用 `imagegif()` 将 PNG 图像转换成 GIF**

```php


<?php

// 载入 PNG
$png = imagecreatefrompng('./php.png');

// 以 GIF 保存图像
imagegif($png, './php.gif');

// 完工
echo 'Converted PNG image to GIF with success!';
?>

    
```

## 注释

> 以下代码段通过自动检测 GD 支持的图像类型来写出移植性更好的 PHP 程序。用更灵活的代码替代了原来的 `header("Content-type: image/gif"); imagegif($im);`： ```php <?php // 创建新的图像实例 $im = imagecreatetruecolor(100, 100); // 在这里对图像进行一些操作 // 处理输出 if(function_exists('imagegif')) { // 针对 GIF header('Content-Type: image/gif'); imagegif($im); } elseif(function_exists('imagejpeg')) { // 针对 JPEG header('Content-Type: image/jpeg'); imagejpeg($im, NULL, 100); } elseif(function_exists('imagepng')) { // 针对 PNG header('Content-Type: image/png'); imagepng($im); } elseif(function_exists('imagewbmp')) { // 针对 WBMP header('Content-Type: image/vnd.wap.wbmp'); imagewbmp($im); } else { die('No image support in this PHP server'); } ?> ```

> 可以用 `imagetypes()` 函数检查是否支持某种图像格式： ```php <?php if(imagetypes() & IMG_GIF) { header('Content-Type: image/gif'); imagegif($im); } elseif(imagetypes() & IMG_JPG) { /* ... etc. */ } ?> ```

## 参见

 `imagepng()` `imagewbmp()` `imagejpeg()` `imagetypes()`
