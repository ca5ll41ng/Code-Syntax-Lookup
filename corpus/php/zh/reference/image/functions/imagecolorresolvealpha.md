---
id: "zh-php-function-function-imagecolorresolvealpha"
language: "php"
lang: "zh"
category: "function"
name: "imagecolorresolvealpha"
title: "取得指定颜色 + alpha 或其最接近的替代值"
signature: "int imagecolorresolvealpha(GdImage $image, int $red, int $green, int $blue, int $alpha)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagecolorresolvealpha.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得指定颜色 + alpha 或其最接近的替代值

## 说明

```php
int imagecolorresolvealpha(GdImage $image, int $red, int $green, int $blue, int $alpha)
```

本函数保证返回所请求的颜色的颜色索引，要么是确切的颜色要么是最接近的颜色。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$red`** — 红色成分的值。
- **`$green`** — 绿色成分的值。
- **`$blue`** — 蓝色成分的值。
- **`$alpha`** — 介于 `0` 和 `127` 之间的值。`0` 表示完全不透明，而 `127` 表示完全透明。

colors 参数是 0 到 255 之间的整数或 0x00 到 0xFF 之间的十六进制数。

## 返回值

返回颜色索引。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**使用 `imagecoloresolvealpha()` 从图像中获取颜色**

```php


<?php
// 加载图像
$im = imagecreatefromgif('phplogo.gif');

// 从图像中获取最接近的颜色
$colors = array();
$colors[] = imagecolorresolvealpha($im, 255, 255, 255, 0);
$colors[] = imagecolorresolvealpha($im, 0, 0, 200, 127);

// 输出
print_r($colors);
?>
  
   
```

以上示例的输出类似于：

```text


Array
(
    [0] => 89
    [1] => 85
)

   
```

## 参见

 `imagecolorclosestalpha()`
