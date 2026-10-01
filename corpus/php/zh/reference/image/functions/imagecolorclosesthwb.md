---
id: "zh-php-function-function-imagecolorclosesthwb"
language: "php"
lang: "zh"
category: "function"
name: "imagecolorclosesthwb"
title: "取得与给定颜色最接近的色度的黑白色的索引"
signature: "int imagecolorclosesthwb(GdImage $image, int $red, int $green, int $blue)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagecolorclosesthwb.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得与给定颜色最接近的色度的黑白色的索引

## 说明

```php
int imagecolorclosesthwb(GdImage $image, int $red, int $green, int $blue)
```

取得与给定颜色最接近的色度的黑白色的索引。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$red`** — 红色成分的值。
- **`$green`** — 绿色成分的值。
- **`$blue`** — 蓝色成分的值。

## 返回值

返回一个整数，是给定颜色最接近的色度的黑白色的索引。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**使用 `imagecolorclosesthwb()` 示例**

```php


<?php
$im = imagecreatefromgif('php.gif');

echo 'HWB: ' . imagecolorclosesthwb($im, 116, 115, 152);
?>

    
```

以上示例的输出类似于：

```text


HWB: 33

    
```

## 参见

 `imagecolorclosest()`
