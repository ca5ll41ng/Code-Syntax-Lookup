---
id: "zh-php-function-function-imagejpeg"
language: "php"
lang: "zh"
category: "function"
name: "imagejpeg"
title: "输出图象到浏览器或文件。"
signature: "bool imagejpeg(GdImage $image, resource|string|null $file = null, int $quality = -1)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagejpeg.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 输出图象到浏览器或文件。

## 说明

```php
bool imagejpeg(GdImage $image, resource|string|null $file = null, int $quality = -1)
```

`imagejpeg()` 从指定 `$image` 图像创建 JPEG 文件。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$file`** — 文件保存的路径或者已打开的流资源（此方法返回后自动关闭该流资源），如果未设置或为 `null`，将会直接输出原始图象流。
- **`$quality`** — `$quality` 为可选项，范围从 0（最差质量，文件最小）到 100（最佳质量，文件最大）。默认值（`-1`）使用 IJG 默认的质量值（大约 75）。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

> 如果 libgd 输出图像失败，函数会返回 `true`。

## 错误／异常

如果 `$quality` 无效，抛出 `ValueError`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 现在如果 `$quality` 无效，抛出 `ValueError`。 |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**输出 JPEG 图像到浏览器**

```php


<?php
// 创键空白图像并添加一些文本
$im = imagecreatetruecolor(120, 20);
$text_color = imagecolorallocate($im, 233, 14, 91);
imagestring($im, 1, 5, 5,  'A Simple Text String', $text_color);

// 设置内容类型标头 —— 这个例子里是 image/jpeg
header('Content-Type: image/jpeg');

// 输出图像
imagejpeg($im);
?>

    
```

以上示例的输出类似于：

**保存 JPEG 图像到文件**

```php


<?php
// 创键空白图像并添加一些文本
$im = imagecreatetruecolor(120, 20);
$text_color = imagecolorallocate($im, 233, 14, 91);
imagestring($im, 1, 5, 5,  'A Simple Text String', $text_color);

// 保存图像为“simpletext.jpg”
imagejpeg($im, 'simpletext.jpg');
?>

    
```

**以 75% 的图像质量输出图像到浏览器**

```php


<?php
// 创键空白图像并添加一些文本
$im = imagecreatetruecolor(120, 20);
$text_color = imagecolorallocate($im, 233, 14, 91);
imagestring($im, 1, 5, 5,  'A Simple Text String', $text_color);

// 设置内容类型标头 —— 这个例子里是 image/jpeg
header('Content-Type: image/jpeg');

// 使用 NULL 跳过 file 参数，并设置图像质量为 75%
imagejpeg($im, NULL, 75);
?>

    
```

## 注释

> 如果想输出渐进式 JPEG，需要使用 `imageinterlace()` 设置隔行扫描。

## 参见

 `imagepng()` `imagegif()` `imagewbmp()` `imageinterlace()` `imagetypes()`
