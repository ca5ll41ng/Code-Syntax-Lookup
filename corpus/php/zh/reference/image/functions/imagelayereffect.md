---
id: "zh-php-function-function-imagelayereffect"
language: "php"
lang: "zh"
category: "function"
name: "imagelayereffect"
title: "设定 alpha 混合标志以使用分层效果"
signature: "true imagelayereffect(GdImage $image, int $effect)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagelayereffect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设定 alpha 混合标志以使用分层效果

## 说明

```php
true imagelayereffect(GdImage $image, int $effect)
```

设定 alpha 混色标志以使用分层效果。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$effect`** — 下列常量之一： - **`IMG_EFFECT_REPLACE`** — 使用像素替换（等同于将 `true` 传递给 `imagealphablending()`） - **`IMG_EFFECT_ALPHABLEND`** — 使用普通像素混合（等同于将 `false` 传递给 `imagealphablending()`） - **`IMG_EFFECT_NORMAL`** — 与 `IMG_EFFECT_ALPHABLEND` 相同。 - **`IMG_EFFECT_OVERLAY`** — 叠加（overlay）的效果是黑色背景像素将保持黑色，白色背景像素将保持白色，但灰色背景像素将采用前景像素的颜色。 - **`IMG_EFFECT_MULTIPLY`** — Overlays with a multiply effect.

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |
| 7.2.0 | 新增 `IMG_EFFECT_MULTIPLY`（要求系统 libgd >= 2.1.1 或捆绑 libgd）。 |

## 示例

**`imagelayereffect()` 示例**

```php


<?php
// 设置图像
$im = imagecreatetruecolor(100, 100);

// 设置背景
imagefilledrectangle($im, 0, 0, 100, 100, imagecolorallocate($im, 220, 220, 220));

// Apply the overlay alpha blending flag
imagelayereffect($im, IMG_EFFECT_OVERLAY);

// 绘制两个灰色椭圆
imagefilledellipse($im, 50, 50, 40, 40, imagecolorallocate($im, 100, 255, 100));
imagefilledellipse($im, 50, 50, 50, 80, imagecolorallocate($im, 100, 100, 255));
imagefilledellipse($im, 50, 50, 80, 50, imagecolorallocate($im, 255, 100, 100));

// 输出
header('Content-type: image/png');

imagepng($im);
?>

   
```

以上示例的输出类似于：
