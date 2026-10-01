---
id: "zh-php-function-function-imagecolorallocate"
language: "php"
lang: "zh"
category: "function"
name: "imagecolorallocate"
title: "为图像分配颜色"
signature: "int|false imagecolorallocate(GdImage $image, int $red, int $green, int $blue)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagecolorallocate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 为图像分配颜色

## 说明

```php
int|false imagecolorallocate(GdImage $image, int $red, int $green, int $blue)
```

返回颜色标识符，表示由指定 RGB 成分组成的颜色。

必须调用 `imagecolorallocate()` 创建要在 `$image` 表示的图像中使用的每种颜色。

> 第一次调用 `imagecolorallocate()` 会对基于调色板的图像填充背景色——使用 `imagecreate()` 建立的图像。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$red`** — 红色成分的值。
- **`$green`** — 绿色成分的值。
- **`$blue`** — 蓝色成分的值。

这些参数是 0 到 255 之间的整数或者 0x00 到 0xFF 之间的十六进制数字。

## 返回值

颜色标识符，如果分配失败，则为 `false`。

> 此函数可能返回布尔值 `false`，但也可能返回等同于 `false` 的非布尔值。请阅读 布尔类型章节以获取更多信息。应使用 === 运算符来测试此函数的返回值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**`imagecolorallocate()` 示例**

```php


<?php

$im = imagecreate(100, 100);

// 设置背景为红色
$background = imagecolorallocate($im, 255, 0, 0);

// 设置一些颜色
$white = imagecolorallocate($im, 255, 255, 255);
$black = imagecolorallocate($im, 0, 0, 0);

// 十六进制方式
$white = imagecolorallocate($im, 0xFF, 0xFF, 0xFF);
$black = imagecolorallocate($im, 0x00, 0x00, 0x00);

?>

    
```

## 参见

 `imagecolorallocatealpha()` `imagecolordeallocate()`
