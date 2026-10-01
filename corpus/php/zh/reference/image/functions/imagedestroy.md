---
id: "zh-php-function-function-imagedestroy"
language: "php"
lang: "zh"
category: "function"
name: "imagedestroy"
title: "销毁图像"
signature: "#[\\Deprecated] true imagedestroy(GdImage $image)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagedestroy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 销毁图像

## 说明

```php
#[\Deprecated] true imagedestroy(GdImage $image)
```

> 此函数无效。在 PHP 8.0.0 之前，用于关闭资源。

在 PHP 8.0.0 之前，`imagedestroy()` 会释放与 `$image` 资源相关的所有内存。自 8.0.0 起，GD 扩展使用对象而不是资源，并且无法明确关闭对象。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.5.0 | 此函数已被弃用。 |
| 8.0.0 | 此函数现在是 NOP（空操作）。 |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**PHP 8.0.0 前使用 `imagedestroy()`**

```php


<?php
// 创建 100 x 100 图像
$im = imagecreatetruecolor(100, 100);

// 修改或保存图像

// 从内存中释放图像
imagedestroy($im);
?>

    
```
