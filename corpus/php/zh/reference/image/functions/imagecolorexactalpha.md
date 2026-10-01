---
id: "zh-php-function-function-imagecolorexactalpha"
language: "php"
lang: "zh"
category: "function"
name: "imagecolorexactalpha"
title: "取得指定的颜色加透明度的索引值"
signature: "int imagecolorexactalpha(GdImage $image, int $red, int $green, int $blue, int $alpha)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagecolorexactalpha.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得指定的颜色加透明度的索引值

## 说明

```php
int imagecolorexactalpha(GdImage $image, int $red, int $green, int $blue, int $alpha)
```

返回图像调色板中指定颜色加透明度的索引值。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$red`** — 红色成分的值。
- **`$green`** — 绿色成分的值。
- **`$blue`** — 蓝色成分的值。
- **`$alpha`** — 介于 `0` 和 `127` 之间的值。`0` 表示完全不透明，而 `127` 表示完全透明。

colors 参数是 0 到 255 之间的整数或 0x00 到 0xFF 之间的十六进制数。

## 返回值

返回图像调色板中指定颜色加透明度的索引值。 如果颜色不在图像的调色板中，返回 -1。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**从 GD logo 中获取颜色**

```php


<?php

// 设置图像
$im = imagecreatefrompng('./gdlogo.png');

$colors   = Array();
$colors[] = imagecolorexactalpha($im, 255, 0, 0, 0);
$colors[] = imagecolorexactalpha($im, 0, 0, 0, 127);
$colors[] = imagecolorexactalpha($im, 255, 255, 255, 55);
$colors[] = imagecolorexactalpha($im, 100, 255, 52, 20);

print_r($colors);
?>

   
```

以上示例的输出类似于：

```text


Array
(
    [0] => 16711680
    [1] => 2130706432
    [2] => 939524095
    [3] => 342163252
)

   
```

## 参见

 `imagecolorclosestalpha()`
