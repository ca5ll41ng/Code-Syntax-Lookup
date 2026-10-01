---
id: "en-php-function-imagick-uniqueimagecolors"
language: "php"
lang: "en"
category: "function"
name: "Imagick::uniqueImageColors"
title: "Discards all but one of any pixel color"
signature: "public bool Imagick::uniqueImageColors()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.uniqueimagecolors.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Discards all but one of any pixel color

## Description

```php
public bool Imagick::uniqueImageColors()
```

Discards all but one of any pixel color. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success.

## Examples

**`Imagick::uniqueImageColors()`**

```php

      
<?php
function uniqueImageColors($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    //Reduce the image to 256 colours nicely.
    $imagick->quantizeImage(256, \Imagick::COLORSPACE_YIQ, 0, false, false);
    $imagick->uniqueImageColors();
    $imagick->scaleimage($imagick->getImageWidth(), $imagick->getImageHeight() * 20);
    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>

      
```
