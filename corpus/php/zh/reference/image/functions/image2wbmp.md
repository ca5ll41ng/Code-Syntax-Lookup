---
id: "zh-php-function-function-image2wbmp"
language: "php"
lang: "zh"
category: "function"
name: "image2wbmp"
title: "输出图象到浏览器或文件。"
signature: "bool image2wbmp(resource $image, [string $filename = ...], [int $foreground = ...])"
module: "image"
source_url: "https://www.php.net/manual/zh/function.image2wbmp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 输出图象到浏览器或文件。

## 说明

```php
bool image2wbmp(resource $image, [string $filename = ...], [int $foreground = ...])
```

`image2wbmp()` 输出或保存为指定 `$image` 的 WBMP 版本。

## 参数

- **`$image`** — 图像资源，由某个图像创建函数返回，比如 `imagecreatetruecolor()`。
- **`$filename`** — 保存文件的路径。如果没有指定，将直接输出原始图片流。
- **`$foreground`** — 使用此参数从 `imagecolorallocate()` 获得的标识符来设置前景色。默认前景色为黑色。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

> 如果 libgd 输出图像失败，函数会返回 `true`。

## 示例

**`image2wbmp()` 示例**

```php


<?php
$file = 'php.png';
$image = imagecreatefrompng($file);

header('Content-Type: ' . image_type_to_mime_type(IMAGETYPE_WBMP));
image2wbmp($image); // 直接输出流
?>

    
```

## 参见

 `imagewbmp()`
