---
id: "en-php-function-imagick-scaleimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::scaleImage"
title: "Scales the size of an image"
signature: "public bool Imagick::scaleImage(int $columns, int $rows, bool $bestfit = false, bool $legacy = false)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.scaleimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Scales the size of an image

## Description

```php
public bool Imagick::scaleImage(int $columns, int $rows, bool $bestfit = false, bool $legacy = false)
```

Scales the size of an image to the given dimensions. The other parameter will be calculated if 0 is passed as either param.

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
| PECL imagick 2.1.0 | Added optional fit parameter. This method now supports proportional scaling. Pass zero as either parameter for proportional scaling. |
| PECL imagick 3.4.0 | Added the `$legacy` parameter. |

## Examples

**`Imagick::scaleImage()`**

```php

      
<?php
function scaleImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->scaleImage(150, 150, true);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
