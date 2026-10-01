---
id: "en-php-function-imagick-transparentpaintimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::transparentPaintImage"
title: "Paints pixels transparent"
signature: "public bool Imagick::transparentPaintImage(mixed $target, float $alpha, float $fuzz, bool $invert)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.transparentpaintimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Paints pixels transparent

## Description

```php
public bool Imagick::transparentPaintImage(mixed $target, float $alpha, float $fuzz, bool $invert)
```

Paints pixels matching the target color transparent. This method is available if Imagick has been compiled against ImageMagick version 6.3.8 or newer.

## Parameters

- **`$target`** — The target color to paint
- **`$alpha`** — The level of transparency: 1.0 is fully opaque and 0.0 is fully transparent.
- **`$fuzz`** — The amount of fuzz. For example, set fuzz to 10 and the color red at intensities of 100 and 102 respectively are now interpreted as the same color.
- **`$invert`** — If `true` paints any pixel that does not match the target color.

## Return Values

Returns `true` on success.

## Examples

**`Imagick::transparentPaintImage()`**

```php

      
<?php
function transparentPaintImage($color, $alpha, $fuzz) {
    $imagick = new \Imagick(realpath("images/BlueScreen.jpg"));

    //Need to be in a format that supports transparency
    $imagick->setimageformat('png');

    $imagick->transparentPaintImage(
        $color, $alpha, $fuzz * \Imagick::getQuantum(), false
    );

    //Not required, but helps tidy up left over pixels
    $imagick->despeckleimage();

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>

      
```
