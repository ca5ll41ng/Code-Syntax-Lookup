---
id: "zh-php-function-function-imagecolorresolve"
language: "php"
lang: "zh"
category: "function"
name: "imagecolorresolve"
title: "取得指定颜色的索引值或有可能得到的最接近的替代值"
signature: "int imagecolorresolve(GdImage $image, int $red, int $green, int $blue)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagecolorresolve.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得指定颜色的索引值或有可能得到的最接近的替代值

## 说明

```php
int imagecolorresolve(GdImage $image, int $red, int $green, int $blue)
```

本函数可以保证对所请求的颜色返回颜色索引，要么是准确的颜色要么是最接近的颜色。

如果图象由文件创建，只有该图象使用到的颜色会被解析。仅存在于调色板中的颜色不会被解析。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$red`** — 红色成分的值。
- **`$green`** — 绿色成分的值。
- **`$blue`** — 蓝色成分的值。

## 返回值

返回颜色索引值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**使用 `imagecoloresolve()` 从图像中获取颜色**

```php


<?php
// 加载图像
$im = imagecreatefromgif('phplogo.gif');

// 从图像中获取最接近的颜色
$colors = array();
$colors[] = imagecolorresolve($im, 255, 255, 255);
$colors[] = imagecolorresolve($im, 0, 0, 200);

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

 `imagecolorclosest()`
