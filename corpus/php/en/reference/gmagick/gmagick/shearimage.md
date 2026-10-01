---
id: "en-php-function-gmagick-shearimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::shearimage"
title: "Creating a parallelogram"
signature: "public Gmagick Gmagick::shearimage(mixed $color, float $xShear, float $yShear)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.shearimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creating a parallelogram

## Description

```php
public Gmagick Gmagick::shearimage(mixed $color, float $xShear, float $yShear)
```

Slides one edge of an image along the X or Y axis, creating a parallelogram. An X direction shear slides an edge along the X axis, while a Y direction shear slides an edge along the Y axis. The amount of the shear is controlled by a shear angle. For X direction shears, x_shear is measured relative to the Y axis, and similarly, for Y direction shears y_shear is measured relative to the X axis. Empty triangles left over from shearing the image are filled with the background color.

## Parameters

- **`$color`** — The background pixel wand.
- **`$xShear`** — The number of degrees to shear the image.
- **`$yShear`** — The number of degrees to shear the image.

## Return Values

The `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
