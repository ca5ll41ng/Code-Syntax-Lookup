---
id: "en-php-function-imagick-rotateimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::rotateImage"
title: "Rotates an image"
signature: "public bool Imagick::rotateImage(mixed $background, float $degrees)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.rotateimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Rotates an image

## Description

```php
public bool Imagick::rotateImage(mixed $background, float $degrees)
```

Rotates an image the specified number of degrees. Empty triangles left over from rotating the image are filled with the background color.

## Parameters

- **`$background`** — The background color
- **`$degrees`** — Rotation angle, in degrees. The rotation angle is interpreted as the number of degrees to rotate the image clockwise.

## Return Values

Returns `true` on success.

## Changelog

|  |  |
| --- | --- |
| PECL imagick 2.1.0 | Now allows a string representing the color as the first parameter. Previous versions allow only an ImagickPixel object. |

## Examples

**`Imagick::rotateImage()`**

```php

      
<?php
function rotateImage($imagePath, $angle, $color) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->rotateimage($color, $angle);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
