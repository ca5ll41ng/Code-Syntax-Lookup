---
id: "zh-php-function-function-imagesetbrush"
language: "php"
lang: "zh"
category: "function"
name: "imagesetbrush"
title: "为线条设置笔刷图像"
signature: "true imagesetbrush(GdImage $image, GdImage $brush)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagesetbrush.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 为线条设置笔刷图像

## 说明

```php
true imagesetbrush(GdImage $image, GdImage $brush)
```

当用特殊的颜色 `IMG_COLOR_BRUSHED` 或 `IMG_COLOR_STYLEDBRUSHED` 绘制时，`imagesetbrush()` 通过所有的线条函数设置要使用的笔刷图像。【注：使用笔刷图像，所画的线是由 `$brush` 所代表的图像构成的。请参考并尝试运行 `imagesetstyle()` 中的例子以帮助理解。】

> 笔刷完成后不需要采取什么特殊动作，但如果要销毁笔刷图像（或让 PHP 销毁），不能使用 `IMG_COLOR_BRUSHED` 或 `IMG_COLOR_STYLEDBRUSHED` 颜色，除非设置了新的笔刷图像。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$brush`** — 图像对象。

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 和 `$brush` 现在需要 `GdImage` 实例，之前需要 `resource`。 |

## 示例

**`imagesetbrush()` 示例**

```php


<?php
// 加载迷你 php logo
$php = imagecreatefrompng('./php.png');

// 创建主图像 100x100
$im = imagecreatetruecolor(100, 100);

// 用白色填充背景
$white = imagecolorallocate($im, 255, 255, 255);
imagefilledrectangle($im, 0, 0, 299, 99, $white);

// 设置画笔
imagesetbrush($im, $php);

// 画几支画笔，每支都相互重叠
imageline($im, 50, 50, 50, 60, IMG_COLOR_BRUSHED);

// 输出图像到浏览器
header('Content-type: image/png');

imagepng($im);
?>

    
```

以上示例的输出类似于：
