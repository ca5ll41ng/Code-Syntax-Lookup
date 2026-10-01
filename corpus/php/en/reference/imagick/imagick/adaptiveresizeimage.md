---
id: "en-php-function-imagick-adaptiveresizeimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::adaptiveResizeImage"
title: "Adaptively resize image with data dependent triangulation"
signature: "public bool Imagick::adaptiveResizeImage(int $columns, int $rows, bool $bestfit = false, bool $legacy = false)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.adaptiveresizeimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adaptively resize image with data dependent triangulation

## Description

```php
public bool Imagick::adaptiveResizeImage(int $columns, int $rows, bool $bestfit = false, bool $legacy = false)
```

Adaptively resize image with data-dependent triangulation. Avoids blurring across sharp color changes. Most useful when used to shrink images slightly to a slightly smaller "web size"; may not look good when a full-sized image is adaptively resized to a thumbnail. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

> The behavior of the parameter `$bestfit` changed in Imagick 3.0.0. Before this version given dimensions 400x400 an image of dimensions 200x150 would be left untouched. In Imagick 3.0.0 and later the image would be scaled up to size 400x300 as this is the "best fit" for the given dimensions. If `$bestfit` parameter is used both width and height must be given.

## Parameters

- **`$columns`** — The number of columns in the scaled image.
- **`$rows`** — The number of rows in the scaled image.
- **`$bestfit`** — Whether to fit the image within the given dimensions while preserving the aspect ratio.
- **`$legacy`** — Optional `bool` parameter. If set to true, the calculations are done with the small rounding bug that existed in Imagick before 3.4.0. If set to false, the calculations should produce the same results as the ImageMagick command-line tools.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Changelog

|  |  |
| --- | --- |
| PECL imagick 2.1.0 | Added optional fit parameter. |
| PECL imagick 2.1.0 | This method now supports proportional scaling. Pass zero as either parameter for proportional scaling. |
| PECL imagick 3.4.0 | Added the `$legacy` parameter. |

## Examples

**Using `Imagick::adaptiveResizeImage()`**

Resize an image to a standard size for the web. This method works best when resizing to a size only slightly smaller than the previous image size.

```php


<?php
header('Content-type: image/jpeg');

$image = new Imagick('image.jpg');
$image->adaptiveResizeImage(1024,768);

echo $image;
?>

    
```

## See Also

`Imagick::chopImage()` `Imagick::cropImage()` `Imagick::magnifyImage()` `Imagick::minifyImage()` `Imagick::resizeImage()` `Imagick::scaleImage()` `Imagick::shaveImage()` `Imagick::thumbnailImage()` `Imagick::trimImage()`
