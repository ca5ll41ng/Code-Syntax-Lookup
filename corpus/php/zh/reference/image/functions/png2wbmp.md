---
id: "zh-php-function-function-png2wbmp"
language: "php"
lang: "zh"
category: "function"
name: "png2wbmp"
title: "将 PNG 图像文件转换为 WBMP 图像文件"
signature: "bool png2wbmp(string $pngname, string $wbmpname, int $dest_height, int $dest_width, int $threshold)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.png2wbmp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将 PNG 图像文件转换为 WBMP 图像文件

## 说明

```php
bool png2wbmp(string $pngname, string $wbmpname, int $dest_height, int $dest_width, int $threshold)
```

转换 PNG 文件到 WBMP 文件。

## 参数

- **`$pngname`** — PNG 文件的路径。
- **`$wbmpname`** — 目标 WBMP 文件的路径。
- **`$dest_height`** — 目标图像的高度。
- **`$dest_width`** — 目标图像的宽度。
- **`$threshold`** — 阈值，在 0 到 8 之间（含）。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

> 如果 libgd 输出图像失败，函数会返回 `true`。

## 示例

**`png2wbmp()` 示例**

```php


<?php
// Path to the target png
$path = './test.png';

// Get the image sizes
$image = getimagesize($path);

// Convert image
png2wbmp($path, './test.wbmp', $image[1], $image[0], 7);
?>

    
```

## 参见

 `jpeg2wbmp()`
