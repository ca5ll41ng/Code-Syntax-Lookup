---
id: "en-php-function-imagick-frameimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::frameImage"
title: "Adds a simulated three-dimensional border"
signature: "public bool Imagick::frameImage(mixed $matte_color, int $width, int $height, int $inner_bevel, int $outer_bevel)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.frameimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds a simulated three-dimensional border

## Description

```php
public bool Imagick::frameImage(mixed $matte_color, int $width, int $height, int $inner_bevel, int $outer_bevel)
```

Adds a simulated three-dimensional border around the image. The width and height specify the border width of the vertical and horizontal sides of the frame. The inner and outer bevels indicate the width of the inner and outer shadows of the frame.

## Parameters

- **`$matte_color`** — ImagickPixel object or a string representing the matte color
- **`$width`** — The width of the border
- **`$height`** — The height of the border
- **`$inner_bevel`** — The inner bevel width
- **`$outer_bevel`** — The outer bevel width

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Changelog

|  |  |
| --- | --- |
| PECL imagick 2.1.0 | Now allows a string representing the color as the first parameter. Previous versions allow only an ImagickPixel object. |

## Examples

**`Imagick::frameImage()`**

```php

      
<?php
function frameImage($imagePath, $color, $width, $height, $innerBevel, $outerBevel) {
    $imagick = new \Imagick(realpath($imagePath));

    $width = $width + $innerBevel + $outerBevel;
    $height = $height + $innerBevel + $outerBevel;

    $imagick->frameimage(
        $color,
        $width,
        $height,
        $innerBevel,
        $outerBevel
    );
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
