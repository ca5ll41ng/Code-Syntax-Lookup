---
id: "zh-php-function-function-imagecopy"
language: "php"
lang: "zh"
category: "function"
name: "imagecopy"
title: "拷贝图像的一部分"
signature: "true imagecopy(GdImage $dst_image, GdImage $src_image, int $dst_x, int $dst_y, int $src_x, int $src_y, int $src_width, int $src_height)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagecopy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 拷贝图像的一部分

## 说明

```php
true imagecopy(GdImage $dst_image, GdImage $src_image, int $dst_x, int $dst_y, int $src_x, int $src_y, int $src_width, int $src_height)
```

从 x、y 坐标 `$src_x`、`$src_y` 开始，将 `$src_image` 的一部分复制到 `$dst_image` 上，宽度为 `$src_width`，高度为 `$src_height`。定义的部分将被复制到 x,y 坐标 `$dst_x` 和 `$dst_y` 上。

## 参数

- **`$dst_image`** — 目标图象资源。
- **`$src_image`** — 源图象资源。
- **`$dst_x`** — 目标点的 x 坐标。
- **`$dst_y`** — 目标点的 y 坐标。
- **`$src_x`** — 源点的 x 坐标。
- **`$src_y`** — 源点的 y 坐标。
- **`$src_width`** — 源图象的宽度。
- **`$src_height`** — 源图象的高度。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$dst_image` 和 `$src_image` 现在需要 `GdImage` 实例；之前需要 `resource`。 |

## 示例

**裁剪 PHP.net logo**

```php


<?php
// 创建图像实例
$src = imagecreatefromgif('php.gif');
$dest = imagecreatetruecolor(80, 40);

// 复制
imagecopy($dest, $src, 0, 0, 20, 13, 80, 40);

// 输出
header('Content-Type: image/gif');
imagegif($dest);
?>

   
```

以上示例的输出类似于：

## 参见

 `imagecrop()`
