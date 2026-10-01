---
id: "zh-php-function-function-imagepalettecopy"
language: "php"
lang: "zh"
category: "function"
name: "imagepalettecopy"
title: "将调色板从一个图像复制到另一个"
signature: "void imagepalettecopy(GdImage $dst, GdImage $src)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagepalettecopy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将调色板从一个图像复制到另一个

## 说明

```php
void imagepalettecopy(GdImage $dst, GdImage $src)
```

`imagepalettecopy()` 把调色板从 `$src` 图像复制到 `$dst` 图像。

## 参数

- **`$dst`** — 目标图像对象。
- **`$src`** — 源图像对象。

## 返回值

没有返回值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$dst` 和 `$src` 现在接受 `GdImage` 实例；之前接受 `resource`。 |

## 示例

**`imagepalettecopy()` 示例**

```php


<?php
// 创建两个调色板图像
$palette1 = imagecreate(100, 100);
$palette2 = imagecreate(100, 100);

// 在第一个调色板图像中
// 将背景分配为绿色
$green = imagecolorallocate($palette1, 0, 255, 0);

// 将调色板从图像 1 复制到图像 2
imagepalettecopy($palette2, $palette1);

// 由于调色板现已复制，可以使用
// 分配给图像 1 的绿色，而无需
// 两次使用 imagecolorallocate()
imagefilledrectangle($palette2, 0, 0, 99, 99, $green);

// 输出图像到浏览器
header('Content-type: image/png');

imagepng($palette2);
?>

    
```
