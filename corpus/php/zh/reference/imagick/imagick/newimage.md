---
id: "zh-php-function-imagick-newimage"
language: "php"
lang: "zh"
category: "function"
name: "Imagick::newImage"
title: "创建一张图片"
signature: "public bool Imagick::newImage(int $cols, int $rows, mixed $background, [string $format = ...])"
module: "imagick"
source_url: "https://www.php.net/manual/zh/imagick.newimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建一张图片

## 说明

```php
public bool Imagick::newImage(int $cols, int $rows, mixed $background, [string $format = ...])
```

创建一个 Imagick 图片对象，同时可以附带设置一个 ImagickPixel 值作为其背景色。

## 参数

- **`$cols`** — 新建图片对象列的值（宽多少像素）
- **`$rows`** — 新建图片对象行的值（高多少像素）
- **`$background`** — 新建图片独享的背景色
- **`$format`** — 图片格式。这个参数是在 Imagick 2.0.1 版本添加的。

## 返回值

成功时返回 `true`。

## 错误／异常

错误时抛出 ImagickException。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| PECL imagick 2.1.0 | 现在可以似乎用了一个字符串作为颜色传入第三个参数。在此之前的版本只允许以一个 ImagickPixel 对象的形式传入。 |

## 示例

**Using `Imagick::newImage()`:**

Create a new image and display it.

```php

                    
<?php

$image = new Imagick();
$image->newImage(100, 100, new ImagickPixel('red'));
$image->setImageFormat('png');

header('Content-type: image/png');
echo $image;

?>

                
```
