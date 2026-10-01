---
id: "en-php-function-imagick-optimizeimagelayers"
language: "php"
lang: "en"
category: "function"
name: "Imagick::optimizeImageLayers"
title: "Removes repeated portions of images to optimize"
signature: "public bool Imagick::optimizeImageLayers()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.optimizeimagelayers.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes repeated portions of images to optimize

## Description

```php
public bool Imagick::optimizeImageLayers()
```

Compares each image the GIF disposed forms of the previous image in the sequence. From this it attempts to select the smallest cropped image to replace each frame, while preserving the results of the animation. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**Using `Imagick::optimizeImageLayers()`**

Reading, optimizing and writing a GIF image

```php


<?php
/* create new imagick object */
$im = new Imagick("test.gif");

/* optimize the image layers */
$im->optimizeImageLayers();

/* write the image back */
$im->writeImages("test_optimized.gif", true);
?>

    
```

## See Also

`Imagick::compareImageLayers()` `Imagick::writeImages()` `Imagick::writeImage()`
