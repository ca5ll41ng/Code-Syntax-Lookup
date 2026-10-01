---
id: "zh-php-function-function-imagecolorsforindex"
language: "php"
lang: "zh"
category: "function"
name: "imagecolorsforindex"
title: "获取索引的颜色"
signature: "array imagecolorsforindex(GdImage $image, int $color)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagecolorsforindex.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取索引的颜色

## 说明

```php
array imagecolorsforindex(GdImage $image, int $color)
```

获取指定索引的颜色。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$color`** — 颜色索引。

## 返回值

返回具有 red、green、blue 和 alpha 的键名的关联数组，包含了指定颜色索引的适当值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |
| 8.0.0 | 如果 `$color` 超出范围，`imagecolorsforindex()` 现在抛出 `ValueError` 异常；之前返回 `false`。 |

## 示例

**`imagecolorsforindex()` 示例**

```php


<?php

// 打开图像
$im = imagecreatefrompng('nexen.png');

// 获取颜色
$start_x = 40;
$start_y = 50;
$color_index = imagecolorat($im, $start_x, $start_y);

// 使其可读
$color_tran = imagecolorsforindex($im, $color_index);

// 显示该颜色的值
print_r($color_tran);

?>

    
```

以上示例的输出类似于：

```text


Array
(
   [red] => 226
   [green] => 222
   [blue] => 252
   [alpha] => 0
)

    
```

## 参见

 `imagecolorat()` `imagecolorexact()`
