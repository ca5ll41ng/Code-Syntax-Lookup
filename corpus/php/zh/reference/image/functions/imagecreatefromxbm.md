---
id: "zh-php-function-function-imagecreatefromxbm"
language: "php"
lang: "zh"
category: "function"
name: "imagecreatefromxbm"
title: "由文件或 URL 创建一个新图象。"
signature: "GdImage|false imagecreatefromxbm(string $filename)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagecreatefromxbm.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 由文件或 URL 创建一个新图象。

## 说明

```php
GdImage|false imagecreatefromxbm(string $filename)
```

`imagecreatefromxbm()` 返回图像标识符，代表从指定文件名获得的图像。

> 如已启用fopen 包装器，在此函数中， URL 可作为文件名。关于如何指定文件名详见 `fopen()`。各种 wapper 的不同功能请参见 `wrappers`，注意其用法及其可提供的预定义变量。

## 参数

- **`$filename`** — XBM 图像路径。

## 返回值

成功后返回图象对象,失败后返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 成功时，此函数现在返回 `GDImage` 实例；之前返回 `resource`。 |

## 示例

**使用 `imagecreatefromxbm()` 转换 XBM 图像为 png 图像**

```php


<?php
// 加载 xbm 文件
$xbm = imagecreatefromxbm('./example.xbm');

// 转化为 png 文件
imagepng($xbm, './example.png');
?>

    
```
