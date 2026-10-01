---
id: "zh-php-function-function-imagecopymergegray"
language: "php"
lang: "zh"
category: "function"
name: "imagecopymergegray"
title: "用灰度复制并合并图像的一部分"
signature: "true imagecopymergegray(GdImage $dst_image, GdImage $src_image, int $dst_x, int $dst_y, int $src_x, int $src_y, int $src_width, int $src_height, int $pct)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagecopymergegray.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 用灰度复制并合并图像的一部分

## 说明

```php
true imagecopymergegray(GdImage $dst_image, GdImage $src_image, int $dst_x, int $dst_y, int $src_x, int $src_y, int $src_width, int $src_height, int $pct)
```

`imagecopymergegray()` 将 `$src_image` 的一部分复制到 `$dst_image` 上，起始于 x、y 坐标 `$src_x`、`$src_y`，宽度为 `$src_width`，高度为 `$src_height`。定义的部分将被复制到 x、y 坐标 `$dst_x` 和 `$dst_y` 上。

本函数和 `imagecopymerge()` 相同，只是在合并时通过在复制操作前将目标像素转换为灰度级来保留了原色度。

## 参数

- **`$dst_image`** — 目标图象资源。
- **`$src_image`** — 源图象资源。
- **`$dst_x`** — 目标点的 x 坐标。
- **`$dst_y`** — 目标点的 y 坐标。
- **`$src_x`** — 源点的 x 坐标。
- **`$src_y`** — 源点的 y 坐标。
- **`$src_width`** — 源图象的宽度。
- **`$src_height`** — 源图象的高度。
- **`$pct`** — `$src_image` 将根据 `$pct` 改变灰度，其中 0 为全灰度，100 不变。当 `$pct` = 100 时，此函数的行为与调色板图像的 `imagecopy()` 相同，除了忽略 alpha 组件（components），其实现了真彩色图像的 alpha 透明度。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$dst_image` 和 `$src_image` 现在需要 `GdImage` 实例，之前需要 `resource`。 |

## 示例

**`imagecopymergegray()` 用法**

```php


<?php
// 创建图像实例
$dest = imagecreatefromgif('php.gif');
$src = imagecreatefromgif('php.gif');

// 复制并合并 - 灰色 = 20%
imagecopymergegray($dest, $src, 10, 10, 0, 0, 100, 47, 20);

// 输出
header('Content-Type: image/gif');
imagegif($dest);
?>

    
```
