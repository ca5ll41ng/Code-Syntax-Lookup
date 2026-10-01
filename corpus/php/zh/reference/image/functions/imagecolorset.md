---
id: "zh-php-function-function-imagecolorset"
language: "php"
lang: "zh"
category: "function"
name: "imagecolorset"
title: "给指定调色板索引设定颜色"
signature: "false|null imagecolorset(GdImage $image, int $color, int $red, int $green, int $blue, int $alpha = 0)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagecolorset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 给指定调色板索引设定颜色

## 说明

```php
false|null imagecolorset(GdImage $image, int $color, int $red, int $green, int $blue, int $alpha = 0)
```

本函数将调色板中指定的索引设定为指定的颜色。对于在调色板图像中创建类似区域填充（flood-fill）的效果很有用，免去了真的去填充的开销。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$color`** — 调色板中的索引值。
- **`$red`** — 红色成分的值。
- **`$green`** — 绿色成分的值。
- **`$blue`** — 蓝色成分的值。
- **`$alpha`** — alpha 的值。

## 返回值

函数成功时返回 `null`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**`imagecolorset()` 示例**

```php


<?php
// 创建 300x100 图像
$im = imagecreate(300, 100);

// 设置背景为红色
imagecolorallocate($im, 255, 0, 0);

// 获取背景颜色索引
$bg = imagecolorat($im, 0, 0);

// 设置背景为蓝色
imagecolorset($im, $bg, 0, 0, 255);

// 输出图像到浏览器
header('Content-Type: image/png');

imagepng($im);
?>

    
```

## 参见

 `imagecolorat()`
