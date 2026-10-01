---
id: "zh-php-function-function-imagecreatefromwebp"
language: "php"
lang: "zh"
category: "function"
name: "imagecreatefromwebp"
title: "由文件或 URL 创建一个新图象。"
signature: "GdImage|false imagecreatefromwebp(string $filename)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagecreatefromwebp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 由文件或 URL 创建一个新图象。

## 说明

```php
GdImage|false imagecreatefromwebp(string $filename)
```

`imagecreatefromwebp()` 返回图像标识符，代表从指定文件名获得的图像。请注意，无法读取动画 WebP 文件。

> 如已启用fopen 包装器，在此函数中， URL 可作为文件名。关于如何指定文件名详见 `fopen()`。各种 wapper 的不同功能请参见 `wrappers`，注意其用法及其可提供的预定义变量。

## 参数

- **`$filename`** — WebP 图像路径。

## 返回值

成功后返回图象对象,失败后返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 成功时，此函数现在返回 `GDImage` 实例；之前返回 `resource`。 |

## 示例

**使用 `imagecreatefromwebp()` 转换 WebP 图像为 jpeg 图像**

```php


<?php
// 加载 WebP 文件
$im = imagecreatefromwebp('./example.webp');

// 以 100% 的质量转换成 jpeg 格式
imagejpeg($im, './example.jpeg', 100);
?>

    
```
