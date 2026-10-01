---
id: "zh-php-function-function-imageistruecolor"
language: "php"
lang: "zh"
category: "function"
name: "imageistruecolor"
title: "检查图像是否为真彩色图像"
signature: "bool imageistruecolor(GdImage $image)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imageistruecolor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查图像是否为真彩色图像

## 说明

```php
bool imageistruecolor(GdImage $image)
```

`imageistruecolor()` 检查 `$image` 图像是否为真彩色图像。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。

## 返回值

如果 `$image` 是真彩色返回 `true`，否则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**使用 `imageistruecolor()` 简单检测真彩色实例**

```php


<?php
// $im 是图像实例

// 检查图像是否为真彩色图像
if(!imageistruecolor($im))
{
    // 创建新的真彩色图像实例
    $tc = imagecreatetruecolor(imagesx($im), imagesy($im));

    // 复制像素
    imagecopy($tc, $im, 0, 0, 0, 0, imagesx($im), imagesy($im));

    $im = $tc;
    $tc = NULL;

    // 或者使用 imagepalettetotruecolor()
}

// 继续使用图像实例
?>

    
```

## 参见

 `imagecreatetruecolor()` `imagepalettetotruecolor()`
