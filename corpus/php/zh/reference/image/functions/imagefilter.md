---
id: "zh-php-function-function-imagefilter"
language: "php"
lang: "zh"
category: "function"
name: "imagefilter"
title: "对图像使用过滤器"
signature: "bool imagefilter(GdImage $image, int $filter, array|int|float|bool $args)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagefilter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 对图像使用过滤器

## 说明

```php
bool imagefilter(GdImage $image, int $filter, array|int|float|bool $args)
```

`imagefilter()` 在 `$image` 上应用指定的过滤器 `$filter`。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$filter`** — `$filter` 可以是下列中的一个： - `IMG_FILTER_NEGATE`：将图像中所有颜色反转。 - `IMG_FILTER_GRAYSCALE`：将图像转换为灰度，通过使用与 REC.601 亮度 (Y') 计算相同的系数来更改红色、绿色和蓝色分量的加权和。保留 alpha 分量。对于调色板图像，由于调色板限制，结果可能有所不同。 - `IMG_FILTER_BRIGHTNESS`：更改图像的亮度。使用 `$args` 设置亮度级别。亮度的范围是 -255 到 255。 - `IMG_FILTER_CONTRAST`：更改图像的对比度。使用 `$args` 设置对比度级别。 - `IMG_FILTER_COLORIZE`：与 `IMG_FILTER_GRAYSCALE` 类似，区别是可以指定颜色。使用 `$args`、`$arg2` 和 `$arg3` 以 `$red`、`$green`、`$blue` 的形式和 `$arg4` 用于 `$alpha` 通道。每种颜色的范围是 0 到 255。 - `IMG_FILTER_EDGEDETECT`：用边缘检测来突出图像的边缘。 - `IMG_FILTER_EMBOSS`：使图像浮雕化。 - `IMG_FILTER_GAUSSIAN_BLUR`：用高斯算法模糊图像。 - `IMG_FILTER_SELECTIVE_BLUR`：模糊图像。 - `IMG_FILTER_MEAN_REMOVAL`：用平均移除法来达到“轮廓”效果。 - `IMG_FILTER_SMOOTH`：使图像更平滑。用 `$args` 设定平滑级别。 - `IMG_FILTER_PIXELATE`：对图像应用像素化效果，使用 `$args` 设置块大小和 `$arg2` 设置像素化效果模式。 - `IMG_FILTER_SCATTER`：将散射效果应用于图像，使用 `$args` 和 `$arg2` 定义效果强度，另外使用 `$arg3` 仅应用选定像素颜色。
- **`$args`** — - `IMG_FILTER_BRIGHTNESS`：亮度级别。 - `IMG_FILTER_CONTRAST`：对比度级别。 - `IMG_FILTER_COLORIZE`: 红色成分的值。 - `IMG_FILTER_SMOOTH`：平滑级别。 - `IMG_FILTER_PIXELATE`：块大小（像素）。 - `IMG_FILTER_SCATTER`：效果减法级别。 不能高于或等于 `$arg2` 设置的加法级别。
- **`$arg2`** — - `IMG_FILTER_COLORIZE`: 绿色成分的值。 - `IMG_FILTER_PIXELATE`：是否使用高级像素化效果（默认为 `false`）。 - `IMG_FILTER_SCATTER`：效果添加级别。
- **`$arg3`** — - `IMG_FILTER_COLORIZE`: 蓝色成分的值。 - `IMG_FILTER_SCATTER`：可选的数组索引颜色值，应用效果。
- **`$arg4`** — - `IMG_FILTER_COLORIZE`：Alpha 通道，A 值在 0 到 127 之间。 0 表示完全不透明，而 127 表示完全透明。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 错误／异常

抛出 `ValueError` 异常，如果 `$sub` 或 `$plus` 会导致 `IMG_FILTER_SCATTER` `$filter` 的溢出/下溢。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 现在抛出 `ValueError` 异常，如果 `$sub` 或 `$plus` 会导致 `IMG_FILTER_SCATTER` `$filter` 的溢出/下溢。 |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |
| 7.4.0 | 新增散射支持（`IMG_FILTER_SCATTER`）。 |

## 示例

**`imagefilter()` 灰度示例**

```php


<?php
$im = imagecreatefrompng('dave.png');

if($im && imagefilter($im, IMG_FILTER_GRAYSCALE))
{
    echo 'Image converted to grayscale.';

    imagepng($im, 'dave.png');
}
else
{
    echo 'Conversion to grayscale failed.';
}
?>

    
```

**`imagefilter()` 亮度示例**

```php


<?php
$im = imagecreatefrompng('sean.png');

if($im && imagefilter($im, IMG_FILTER_BRIGHTNESS, 20))
{
    echo 'Image brightness changed.';

    imagepng($im, 'sean.png');
}
else
{
    echo 'Image brightness change failed.';
}
?>

    
```

**`imagefilter()` 着色示例**

```php


<?php
$im = imagecreatefrompng('philip.png');

/* R、G、B, 所以 0, 255, 0 是绿色 */
if($im && imagefilter($im, IMG_FILTER_COLORIZE, 0, 255, 0))
{
    echo 'Image successfully shaded green.';

    imagepng($im, 'philip.png');
}
else
{
    echo 'Green shading failed.';
}
?>

    
```

**`imagefilter()` 反例**

```php


<?php
// 定义否定函数，以便可以移植到没有
// imagefilter() 的 php 版本
function negate($im)
{
    if(function_exists('imagefilter'))
    {
        return imagefilter($im, IMG_FILTER_NEGATE);
    }

    for($x = 0; $x < imagesx($im); ++$x)
    {
        for($y = 0; $y < imagesy($im); ++$y)
        {
            $index = imagecolorat($im, $x, $y);
            $rgb = imagecolorsforindex($index);
            $color = imagecolorallocate($im, 255 - $rgb['red'], 255 - $rgb['green'], 255 - $rgb['blue']);

            imagesetpixel($im, $x, $y, $color);
        }
    }

    return(true);
}

$im = imagecreatefromjpeg('kalle.jpg');

if($im && negate($im))
{
    echo 'Image successfully converted to negative colors.';

    imagejpeg($im, 'kalle.jpg', 100);
}
else
{
    echo 'Converting to negative colors failed.';
}
?>

    
```

**`imagefilter()` 像素化示例**

```php


<?php
// 加载 PHP log，需要创建两个实例
// 来显示差异
$logo1 = imagecreatefrompng('./php.png');
$logo2 = imagecreatefrompng('./php.png');

// 创建想要显示差异的图像实例
$output = imagecreatetruecolor(imagesx($logo1) * 2, imagesy($logo1));

// 对每个实例应用像素化，块大小为 3
imagefilter($logo1, IMG_FILTER_PIXELATE, 3);
imagefilter($logo2, IMG_FILTER_PIXELATE, 3, true);

// 合并差异到输出图像上
imagecopy($output, $logo1, 0, 0, 0, 0, imagesx($logo1) - 1, imagesy($logo1) - 1);
imagecopy($output, $logo2, imagesx($logo2), 0, 0, 0, imagesx($logo2) - 1, imagesy($logo2) - 1);

// 输出差异
header('Content-Type: image/png');
imagepng($output);
?>

    
```

以上示例的输出类似于：

**`imagefilter()` 散射示例**

```php


<?php
// 加载图像
$logo = imagecreatefrompng('./php.png');

// 对图像应用非常柔和的散射效果
imagefilter($logo, IMG_FILTER_SCATTER, 3, 5);

// 输出带有散射效果的图像
header('Content-Type: image/png');
imagepng($logo);
?>

    
```

以上示例的输出类似于：

## 注释

> `IMG_FILTER_SCATTER` 的结果始终随机。

## 参见

 `imageconvolution()`
