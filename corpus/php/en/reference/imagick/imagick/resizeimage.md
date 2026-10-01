---
id: "en-php-function-imagick-resizeimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::resizeImage"
title: "Scales an image"
signature: "public bool Imagick::resizeImage(int $columns, int $rows, int $filter, float $blur, bool $bestfit = false, bool $legacy = false)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.resizeimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Scales an image

## Description

```php
public bool Imagick::resizeImage(int $columns, int $rows, int $filter, float $blur, bool $bestfit = false, bool $legacy = false)
```

Scales an image to the desired dimensions with a filter.

> The behavior of the parameter `$bestfit` changed in Imagick 3.0.0. Before this version given dimensions 400x400 an image of dimensions 200x150 would be left untouched. In Imagick 3.0.0 and later the image would be scaled up to size 400x300 as this is the "best fit" for the given dimensions. If `$bestfit` parameter is used both width and height must be given.

## Parameters

- **`$columns`** — Width of the image
- **`$rows`** — Height of the image
- **`$filter`** — Refer to the list of filter constants.
- **`$blur`** — The blur factor where > 1 is blurry, < 1 is sharp.
- **`$bestfit`** — Optional `bool` parameter. If set to true, the image is resized to fit within the given dimensions while preserving the aspect ratio.
- **`$legacy`** — Optional `bool` parameter. If set to true, the calculations are done with the small rounding bug that existed in Imagick before 3.4.0. If set to false, the calculations should produce the same results as the ImageMagick command-line tools.

## Return Values

Returns `true` on success.

## Changelog

|  |  |
| --- | --- |
| PECL imagick 2.1.0 | Added optional fit parameter. This method now supports proportional scaling. Pass zero as either parameter for proportional scaling. |
| PECL imagick 3.4.0 | Added the `$legacy` parameter. |

## Examples

**`Imagick::resizeImage()`**

```php

      
<?php
function resizeImage($imagePath, $width, $height, $filterType, $blur, $bestFit, $cropZoom) {
    //The blur factor where > 1 is blurry, < 1 is sharp.
    $imagick = new \Imagick(realpath($imagePath));

    $imagick->resizeImage($width, $height, $filterType, $blur, $bestFit);

    $cropWidth = $imagick->getImageWidth();
    $cropHeight = $imagick->getImageHeight();

    if ($cropZoom) {
        $newWidth = $cropWidth / 2;
        $newHeight = $cropHeight / 2;

        $imagick->cropimage(
            $newWidth,
            $newHeight,
            ($cropWidth - $newWidth) / 2,
            ($cropHeight - $newHeight) / 2
        );

        $imagick->scaleimage(
            $imagick->getImageWidth() * 4,
            $imagick->getImageHeight() * 4
        );
    }


    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
