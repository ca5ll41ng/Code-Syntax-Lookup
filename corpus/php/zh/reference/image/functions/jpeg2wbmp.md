---
id: "zh-php-function-function-jpeg2wbmp"
language: "php"
lang: "zh"
category: "function"
name: "jpeg2wbmp"
title: "将 JPEG 图像文件转换为 WBMP 图像文件"
signature: "bool jpeg2wbmp(string $jpegname, string $wbmpname, int $dest_height, int $dest_width, int $threshold)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.jpeg2wbmp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将 JPEG 图像文件转换为 WBMP 图像文件

## 说明

```php
bool jpeg2wbmp(string $jpegname, string $wbmpname, int $dest_height, int $dest_width, int $threshold)
```

将 JPEG 图像文件转换为 WBMP 图像文件。

## 参数

- **`$jpegname`** — JPEG 文件的路径。
- **`$wbmpname`** — 目标 WBMP 文件的路径。
- **`$dest_height`** — 目标图像高度。
- **`$dest_width`** — 目标图像宽度。
- **`$threshold`** — 阈值，在 0 和 8 之间（含）。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

> 如果 libgd 输出图像失败，函数会返回 `true`。

## 示例

**`jpeg2wbmp()` 示例**

```php


<?php
// 目标 jpeg 的路径
$path = './test.jpg';

// 获取图像尺寸
$image = getimagesize($path);

// 转换图像
jpeg2wbmp($path, './test.wbmp', $image[1], $image[0], 5);
?>

    
```

## 参见

 `png2wbmp()`
