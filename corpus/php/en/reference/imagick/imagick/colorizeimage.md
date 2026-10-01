---
id: "en-php-function-imagick-colorizeimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::colorizeImage"
title: "Blends the fill color with the image"
signature: "public bool Imagick::colorizeImage(mixed $colorize, mixed $opacity, bool $legacy = false)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.colorizeimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Blends the fill color with the image

## Description

```php
public bool Imagick::colorizeImage(mixed $colorize, mixed $opacity, bool $legacy = false)
```

Blends the fill color with each pixel in the image.

## Parameters

- **`$colorize`** — ImagickPixel object or a string containing the colorize color
- **`$opacity`** — ImagickPixel object or an float containing the opacity value. 1.0 is fully opaque and 0.0 is fully transparent.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Changelog

|  |  |
| --- | --- |
| PECL imagick 2.1.0 | Now allows a string representing the color as the first parameter and a float representing the opacity value as the second parameter. Previous versions allow only an ImagickPixel objects. |

## Examples

**`Imagick::colorizeImage()`**

```php

      
<?php
function colorizeImage($imagePath, $color, $opacity) {
    $imagick = new \Imagick(realpath($imagePath));
    $opacity = $opacity / 255.0;
    $opacityColor = new \ImagickPixel("rgba(0, 0, 0, $opacity)");
    $imagick->colorizeImage($color, $opacityColor);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
