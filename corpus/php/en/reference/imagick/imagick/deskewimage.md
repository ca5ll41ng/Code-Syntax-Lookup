---
id: "en-php-function-imagick-deskewimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::deskewImage"
title: "Removes skew from the image"
signature: "public bool Imagick::deskewImage(float $threshold)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.deskewimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes skew from the image

## Description

```php
public bool Imagick::deskewImage(float $threshold)
```

This method can be used to remove skew from for example scanned images where the paper was not properly placed on the scanning surface. This method is available if Imagick has been compiled against ImageMagick version 6.4.5 or newer.

## Parameters

- **`$threshold`** — Deskew threshold

## Return Values

## Examples

**`Imagick::deskewImage()`**

```php

      
<?php
function deskewImage($threshold) {
    $imagick = new \Imagick(realpath("images/NYTimes-Page1-11-11-1918.jpg"));
    $deskewImagick = clone $imagick;
    
    //This is the only thing required for deskewing.
    $deskewImagick->deskewImage($threshold);

    //The rest of this example is to make the result obvious - because
    //otherwise the result is not obvious.
    $trim = 9;

    $deskewImagick->cropImage($deskewImagick->getImageWidth() - $trim, $deskewImagick->getImageHeight(), $trim, 0);
    $imagick->cropImage($imagick->getImageWidth() - $trim, $imagick->getImageHeight(), $trim, 0);
    $deskewImagick->resizeimage($deskewImagick->getImageWidth() / 2, $deskewImagick->getImageHeight() / 2, \Imagick::FILTER_LANCZOS, 1);
    $imagick->resizeimage($imagick->getImageWidth() / 2, $imagick->getImageHeight() / 2, \Imagick::FILTER_LANCZOS, 1);
    $newCanvas = new \Imagick();
    $newCanvas->newimage($imagick->getImageWidth() + $deskewImagick->getImageWidth() + 20, $imagick->getImageHeight(), 'red', 'jpg');
    $newCanvas->compositeimage($imagick, \Imagick::COMPOSITE_COPY, 5, 0);
    $newCanvas->compositeimage($deskewImagick, \Imagick::COMPOSITE_COPY, $imagick->getImageWidth() + 10, 0);

    header("Content-Type: image/jpg");
    echo $newCanvas->getImageBlob();
}

?>

      
```
