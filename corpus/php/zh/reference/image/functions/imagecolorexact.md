---
id: "zh-php-function-function-imagecolorexact"
language: "php"
lang: "zh"
category: "function"
name: "imagecolorexact"
title: "取得指定颜色的索引值"
signature: "int imagecolorexact(GdImage $image, int $red, int $green, int $blue)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagecolorexact.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得指定颜色的索引值

## 说明

```php
int imagecolorexact(GdImage $image, int $red, int $green, int $blue)
```

返回图像调色板中指定颜色的索引值。

如果图象由文件创建，只有该图象使用到的颜色会被解析。仅存在于调色板中的颜色不会被解析。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$red`** — 红色成分的值。
- **`$green`** — 绿色成分的值。
- **`$blue`** — 蓝色成分的值。

## 返回值

返回调色板中指定颜色的索引值，如果该颜色不存在则返回 -1。

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
$colors[] = imagecolorexact($im, 255, 0, 0);
$colors[] = imagecolorexact($im, 0, 0, 0);
$colors[] = imagecolorexact($im, 255, 255, 255);
$colors[] = imagecolorexact($im, 100, 255, 52);

print_r($colors);
?>

   
```

以上示例的输出类似于：

```text


Array
(
    [0] => 16711680
    [1] => 0
    [2] => 16777215
    [3] => 6618932
)

   
```

## 参见

 `imagecolorclosest()`
