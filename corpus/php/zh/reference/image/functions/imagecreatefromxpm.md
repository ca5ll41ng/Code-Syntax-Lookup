---
id: "zh-php-function-function-imagecreatefromxpm"
language: "php"
lang: "zh"
category: "function"
name: "imagecreatefromxpm"
title: "由文件或 URL 创建一个新图象。"
signature: "GdImage|false imagecreatefromxpm(string $filename)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagecreatefromxpm.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 由文件或 URL 创建一个新图象。

## 说明

```php
GdImage|false imagecreatefromxpm(string $filename)
```

`imagecreatefromxpm()` 返回图像标识符，代表从指定文件名获得的图像。

> 如已启用fopen 包装器，在此函数中， URL 可作为文件名。关于如何指定文件名详见 `fopen()`。各种 wapper 的不同功能请参见 `wrappers`，注意其用法及其可提供的预定义变量。

## 参数

- **`$filename`** — XPM 图像的路径。

## 返回值

成功后返回图象对象,失败后返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 成功时，此函数现在返回 `GDImage` 实例；之前返回 `resource`。 |

## 示例

**使用 `imagecreatefromxpm()` 创建图像实例**

```php


<?php
// 检测 XPM 支持
if(!(imagetypes() & IMG_XPM))
{
    die('Support for xpm was not found!');
}

// 创建图像实例
$xpm = imagecreatefromxpm('./example.xpm');

// Do image operations here

// PHP 不支持写入 xpm 图像，
// 因此在这种情况下将图像保存为具有
// 100% 质量的 jpeg 文件
imagejpeg($xpm, './example.jpg', 100);
?>

    
```
