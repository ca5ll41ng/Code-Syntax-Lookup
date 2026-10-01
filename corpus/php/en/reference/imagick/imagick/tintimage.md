---
id: "en-php-function-imagick-tintimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::tintImage"
title: "Applies a color vector to each pixel in the image"
signature: "public bool Imagick::tintImage(mixed $tint, mixed $opacity, bool $legacy = false)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.tintimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Applies a color vector to each pixel in the image

## Description

```php
public bool Imagick::tintImage(mixed $tint, mixed $opacity, bool $legacy = false)
```

Applies a color vector to each pixel in the image. The length of the vector is 0 for black and white and at its maximum for the midtones. The vector weighing function is f(x)=(1-(4.0*((x-0.5)*(x-0.5)))).

## Parameters

- **`$tint`**
- **`$opacity`**

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Changelog

|  |  |
| --- | --- |
| PECL imagick 2.1.0 | Now allows a string representing the color as the first parameter and a float representing the opacity value as the second parameter. Previous versions allow only an ImagickPixel objects. |

## Examples

**`Imagick::tintImage()`**

```php

      
<?php
function tintImage($r, $g, $b, $a) {
    $a = $a / 100;

    $imagick = new \Imagick();
    $imagick->newPseudoImage(400, 400, 'gradient:black-white');

    $tint = new \ImagickPixel("rgb($r, $g, $b)");
    $opacity = new \ImagickPixel("rgb(128, 128, 128, $a)");
    $imagick->tintImage($tint, $opacity);
    $imagick->setImageFormat('png');
    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>

      
```
