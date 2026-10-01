---
id: "zh-php-function-function-imagecolorclosest"
language: "php"
lang: "zh"
category: "function"
name: "imagecolorclosest"
title: "取得与指定的颜色最接近的颜色索引值"
signature: "int imagecolorclosest(GdImage $image, int $red, int $green, int $blue)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagecolorclosest.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得与指定的颜色最接近的颜色索引值

## 说明

```php
int imagecolorclosest(GdImage $image, int $red, int $green, int $blue)
```

返回图像调色板中与指定的 RGB 值最“接近”的颜色索引。

计算所需颜色与调色板中每种颜色之间的“距离”，就好像 RGB 值表示三维空间中的点一样。

如果图象由文件创建，只有该图象使用到的颜色会被解析。仅存在于调色板中的颜色不会被解析。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$red`** — 红色成分的值。
- **`$green`** — 绿色成分的值。
- **`$blue`** — 蓝色成分的值。

颜色参数是 0 到 255 之间的整数或 0x00 和 0xFF 之间的十六进制数。

## 返回值

返回图像调色板中最接近指定颜色的索引

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**在图像中搜索一组颜色**

```php


<?php
// 从图像开始并将其转换为基于调色板的图像
$im = imagecreatefrompng('figures/imagecolorclosest.png');
imagetruecolortopalette($im, false, 255);

// 搜索颜色（RGB）
$colors = array(
    array(254, 145, 154),
    array(153, 145, 188),
    array(153, 90, 145),
    array(255, 137, 92)
);

// 循环执行每个搜索并找到调色板中最接近的颜色。
// 返回搜索编号、搜索 RGB 和转换后的 RGB 匹配项
foreach($colors as $id => $rgb)
{
    $result = imagecolorclosest($im, $rgb[0], $rgb[1], $rgb[2]);
    $result = imagecolorsforindex($im, $result);
    $result = "({$result['red']}, {$result['green']}, {$result['blue']})";

    echo "#$id: Search ($rgb[0], $rgb[1], $rgb[2]); Closest match: $result.\n";
}
?>

    
```

以上示例的输出类似于：

```text


#0: Search (254, 145, 154); Closest match: (252, 150, 148).
#1: Search (153, 145, 188); Closest match: (148, 150, 196).
#2: Search (153, 90, 145); Closest match: (148, 90, 156).
#3: Search (255, 137, 92); Closest match: (252, 150, 92).

    
```

## 参见

 `imagecolorexact()` `imagecolorclosestalpha()` `imagecolorclosesthwb()`
