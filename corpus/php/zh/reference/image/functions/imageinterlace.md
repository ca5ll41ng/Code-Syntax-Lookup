---
id: "zh-php-function-function-imageinterlace"
language: "php"
lang: "zh"
category: "function"
name: "imageinterlace"
title: "启用或禁用隔行扫描"
signature: "bool imageinterlace(GdImage $image, bool|null $enable = null)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imageinterlace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 启用或禁用隔行扫描

## 说明

```php
bool imageinterlace(GdImage $image, bool|null $enable = null)
```

`imageinterlace()` 打开或关闭隔行扫描位（bit）。

如果设置了隔行扫描位（interlace bit）并且图像被用作 JPEG，将会创建为渐进式 JPEG 图像。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$enable`** — 如果为 `true`，则图像开启隔行扫描，如果为 `false`，否则将关闭隔行扫描。传递 `null` 不会让隔行扫描行为发生改变。

## 返回值

如果为图像设置了隔行扫描位，则返回 `true`，否则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.5 | `imageinterlace()` 现在返回 `bool`；之前返回 `int`（非零为隔行扫描图像，否则为 0） |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |
| 8.0.0 | `$enable` 现在接受 `bool`；之前接受 `int`。 |

## 示例

**使用 `imageinterlace()` 打开隔行扫描**

```php


<?php
// 创建图像实例
$im = imagecreatefromgif('php.gif');

// 打开隔行扫描
imageinterlace($im, true);

// 保存隔行扫描图像
imagegif($im, './php_interlaced.gif');
?>

    
```
