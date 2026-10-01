---
id: "zh-php-function-function-imagewebp"
language: "php"
lang: "zh"
category: "function"
name: "imagewebp"
title: "将 WebP 格式的图像输出到浏览器或文件"
signature: "bool imagewebp(GdImage $image, resource|string|null $file = null, int $quality = -1)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagewebp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将 WebP 格式的图像输出到浏览器或文件

## 说明

```php
bool imagewebp(GdImage $image, resource|string|null $file = null, int $quality = -1)
```

输出或保存为指定 `$image` 的 WebP 版本。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$file`** — 文件保存的路径或者已打开的流资源（此方法返回后自动关闭该流资源），如果未设置或为 `null`，将会直接输出原始图象流。
- **`$quality`** — `$quality` 范围从 0（最低质量，最小文件体积）到 100（最好质量, 最大文件体积）。 如果设置为 `-1`，则使用默认值 `80`。

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

**保存为 WebP 图像文件**

```php


<?php
// 创建一个空图像并在其上加入一些文字
$im = imagecreatetruecolor(120, 20);
$text_color = imagecolorallocate($im, 233, 14, 91);

imagestring($im, 1, 5, 5,  'WebP with PHP', $text_color);

// 保存图像
imagewebp($im, 'php.webp');
?>

    
```
