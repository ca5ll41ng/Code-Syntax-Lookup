---
id: "en-php-function-imagick-shadeimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::shadeImage"
title: "Creates a 3D effect"
signature: "public bool Imagick::shadeImage(bool $gray, float $azimuth, float $elevation)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.shadeimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a 3D effect

## Description

```php
public bool Imagick::shadeImage(bool $gray, float $azimuth, float $elevation)
```

Shines a distant light on an image to create a three-dimensional effect. You control the positioning of the light with azimuth and elevation; azimuth is measured in degrees off the x axis and elevation is measured in pixels above the Z axis. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

## Parameters

- **`$gray`** — A value other than zero shades the intensity of each pixel.
- **`$azimuth`** — Defines the light source direction.
- **`$elevation`** — Defines the light source direction.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on failure.

## Examples

**`Imagick::shadeImage()`**

```php

      
<?php
function shadeImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->shadeImage(true, 45, 20);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
