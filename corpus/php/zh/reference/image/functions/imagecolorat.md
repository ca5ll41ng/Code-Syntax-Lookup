---
id: "zh-php-function-function-imagecolorat"
language: "php"
lang: "zh"
category: "function"
name: "imagecolorat"
title: "取得某像素的颜色索引值"
signature: "int|false imagecolorat(GdImage $image, int $x, int $y)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagecolorat.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得某像素的颜色索引值

## 说明

```php
int|false imagecolorat(GdImage $image, int $x, int $y)
```

返回 `$image` 所指定的图像中指定位置像素的颜色索引值。

如果图像是真彩色图像，此函数以整数返回该点的 RGB 值。用位移加掩码来取得红，绿，蓝各自的值：

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$x`** — 点的 x 坐标。
- **`$y`** — 点的 y 坐标。

## 返回值

返回颜色的索引 或者在失败时返回 `false`。

> 此函数可能返回布尔值 `false`，但也可能返回等同于 `false` 的非布尔值。请阅读 布尔类型章节以获取更多信息。应使用 === 运算符来测试此函数的返回值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |

## 示例

**访问不同的 RGB 值**

```php


<?php
$im = imagecreatefrompng("php.png");
$rgb = imagecolorat($im, 10, 15);
$r = ($rgb >> 16) & 0xFF;
$g = ($rgb >> 8) & 0xFF;
$b = $rgb & 0xFF;

var_dump($r, $g, $b);
?>

    
```

以上示例的输出类似于：

```text


int(119)
int(123)
int(180)

    
```

**使用 `imagecolorsforindex()` 获取可读的 RGB 值**

```php


<?php
$im = imagecreatefrompng("php.png");
$rgb = imagecolorat($im, 10, 15);

$colors = imagecolorsforindex($im, $rgb);

var_dump($colors);
?>

    
```

以上示例的输出类似于：

```text


array(4) {
  ["red"]=>
  int(119)
  ["green"]=>
  int(123)
  ["blue"]=>
  int(180)
  ["alpha"]=>
  int(127)
}

    
```

## 参见

 `imagecolorset()` `imagecolorsforindex()` `imagesetpixel()`
