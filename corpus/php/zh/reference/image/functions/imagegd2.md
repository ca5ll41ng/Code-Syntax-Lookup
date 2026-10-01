---
id: "zh-php-function-function-imagegd2"
language: "php"
lang: "zh"
category: "function"
name: "imagegd2"
title: "将 GD2 图像输出到浏览器或文件"
signature: "bool imagegd2(GdImage $image, string|null $file = null, int $chunk_size = 128, int $mode = IMG_GD2_RAW)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagegd2.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将 GD2 图像输出到浏览器或文件

## 说明

```php
bool imagegd2(GdImage $image, string|null $file = null, int $chunk_size = 128, int $mode = IMG_GD2_RAW)
```

输出或保存 `$image` 参数指定的 GD2 图像。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$file`** — 文件保存的路径或者已打开的流资源（此方法返回后自动关闭该流资源），如果未设置或为 `null`，将会直接输出原始图象流。
- **`$chunk_size`** — 块大小。
- **`$mode`** — 可以是 `IMG_GD2_RAW` 或 `IMG_GD2_COMPRESSED`。默认为 `IMG_GD2_RAW`。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

> 如果 libgd 输出图像失败，函数会返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.3 | `$file` 现在可以为 null。 |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**输出 GD2 图像**

```php


<?php
// 创建空白图像并添加一些文本
$im = imagecreatetruecolor(120, 20);
$text_color = imagecolorallocate($im, 233, 14, 91);
imagestring($im, 1, 5, 5,  "A Simple Text String", $text_color);

// 输出图像
imagegd2($im);
?>

   
```

**保存 GD2 图像**

```php


<?php
// 创建空白图像并添加一些文本
$im = imagecreatetruecolor(120, 20);
$text_color = imagecolorallocate($im, 233, 14, 91);
imagestring($im, 1, 5, 5,  "A Simple Text String", $text_color);

// 保存 gd2 图像
// GD2 图像的文件格式为 .gd2，参阅 http://www.libgd.org/GdFileFormats
imagegd2($im, 'simple.gd2');
?>

    
```

## 注释

> GD2 格式通常用于允许快速加载部分图像。请注意，GD2 格式仅可用于与 GD2 兼容的应用程序。

> The GD and GD2 image formats are proprietary image formats of libgd. They have to be regarded *obsolete*, and should only be used for development and testing purposes.

## 参见

 `imagegd()`
