---
id: "zh-php-function-function-imagecolorclosestalpha"
language: "php"
lang: "zh"
category: "function"
name: "imagecolorclosestalpha"
title: "获取最接近指定颜色 + alpha 的颜色索引"
signature: "int imagecolorclosestalpha(GdImage $image, int $red, int $green, int $blue, int $alpha)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagecolorclosestalpha.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取最接近指定颜色 + alpha 的颜色索引

## 说明

```php
int imagecolorclosestalpha(GdImage $image, int $red, int $green, int $blue, int $alpha)
```

返回图像调色板中“最接近”指定 RGB 值以及 `$alpha` 级别的颜色索引。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$red`** — 红色成分的值。
- **`$green`** — 绿色成分的值。
- **`$blue`** — 蓝色成分的值。
- **`$alpha`** — 介于 `0` 和 `127` 之间的值。`0` 表示完全不透明，而 `127` 表示完全透明。

colors 参数是 0 到 255 之间的整数或 0x00 到 0xFF 之间的十六进制数。

## 返回值

返回调色板中最接近的颜色的索引。

## 示例

**在图像中搜索一组颜色**

```php


<?php
// 从图像开始并将其转换为基于调色板的图像
$im = imagecreatefrompng('figures/imagecolorclosest.png');
imagetruecolortopalette($im, false, 255);

// 搜索颜色（RGB）
$colors = array(
    array(254, 145, 154, 50),
    array(153, 145, 188, 127),
    array(153, 90, 145, 0),
    array(255, 137, 92, 84)
);

// 循环执行每个搜索并找到调色板中最接近的颜色。
// 返回搜索编号、搜索 RGB 和转换后的 RGB 匹配项
foreach($colors as $id => $rgb)
{
    $result = imagecolorclosestalpha($im, $rgb[0], $rgb[1], $rgb[2], $rgb[3]);
    $result = imagecolorsforindex($im, $result);
    $result = "({$result['red']}, {$result['green']}, {$result['blue']}, {$result['alpha']})";

    echo "#$id: Search ($rgb[0], $rgb[1], $rgb[2], $rgb[3]); Closest match: $result.\n";
}
?>

    
```

以上示例的输出类似于：

```text


#0: Search (254, 145, 154, 50); Closest match: (252, 150, 148, 0).
#1: Search (153, 145, 188, 127); Closest match: (148, 150, 196, 0).
#2: Search (153, 90, 145, 0); Closest match: (148, 90, 156, 0).
#3: Search (255, 137, 92, 84); Closest match: (252, 150, 92, 0).

    
```

## 参见

 `imagecolorexactalpha()` `imagecolorclosest()` `imagecolorclosesthwb()`
