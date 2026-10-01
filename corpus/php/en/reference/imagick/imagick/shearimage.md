---
id: "en-php-function-imagick-shearimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::shearImage"
title: "Creating a parallelogram"
signature: "public bool Imagick::shearImage(mixed $background, float $x_shear, float $y_shear)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.shearimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creating a parallelogram

## Description

```php
public bool Imagick::shearImage(mixed $background, float $x_shear, float $y_shear)
```

Slides one edge of an image along the X or Y axis, creating a parallelogram. An X direction shear slides an edge along the X axis, while a Y direction shear slides an edge along the Y axis. The amount of the shear is controlled by a shear angle. For X direction shears, x_shear is measured relative to the Y axis, and similarly, for Y direction shears y_shear is measured relative to the X axis. Empty triangles left over from shearing the image are filled with the background color.

## Parameters

- **`$background`** — The background color
- **`$x_shear`** — The number of degrees to shear on the x axis
- **`$y_shear`** — The number of degrees to shear on the y axis

## Return Values

Returns `true` on success.

## Changelog

|  |  |
| --- | --- |
| PECL imagick 2.1.0 | Now allows a string representing the color as the first parameter. Previous versions allow only an ImagickPixel object. |

## Examples

**`Imagick::shearImage()`**

```php

      
<?php
function shearImage($imagePath, $color, $shearX, $shearY) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->shearimage($color, $shearX, $shearY);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
