---
id: "zh-php-function-function-imagefill"
language: "php"
lang: "zh"
category: "function"
name: "imagefill"
title: "漫水填充"
signature: "true imagefill(GdImage $image, int $x, int $y, int $color)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagefill.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 漫水填充

## 说明

```php
true imagefill(GdImage $image, int $x, int $y, int $color)
```

使用 `$image` 中的指定 `$color` 从指定坐标（左上角为 0，0）开始执行漫水填充。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$x`** — 起点的 x 坐标。
- **`$y`** — 起点的 y 坐标。
- **`$color`** — 填充颜色。颜色标识符使用 `imagecolorallocate()` 创建。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**`imagefill()` 示例**

```php


<?php

$im = imagecreatetruecolor(100, 100);

// 设置背景为红色
$red = imagecolorallocate($im, 255, 0, 0);
imagefill($im, 0, 0, $red);

header('Content-type: image/png');
imagepng($im);
?>

    
```

以上示例的输出类似于：

## 参见

 `imagecolorallocate()`
