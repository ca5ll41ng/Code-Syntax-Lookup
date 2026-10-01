---
id: "en-php-function-imagick-compareimagelayers"
language: "php"
lang: "en"
category: "function"
name: "Imagick::compareImageLayers"
title: "Returns the maximum bounding region between images"
signature: "public Imagick Imagick::compareImageLayers(int $method)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.compareimagelayers.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the maximum bounding region between images

## Description

```php
public Imagick Imagick::compareImageLayers(int $method)
```

Compares each image with the next in a sequence and returns the maximum bounding region of any pixel differences it discovers. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

## Parameters

- **`$method`** — One of the layer method constants.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**Using `Imagick::compareImageLayers()`**

Comparing image layers

```php


<?php
/* create new imagick object */
$im = new Imagick("test.gif");

/* optimize the image layers */
$result = $im->compareImageLayers(imagick::LAYERMETHOD_COALESCE);

/* work on the $result */
?>

    
```

## See Also

`Imagick::optimizeImageLayers()` `Imagick::writeImages()` `Imagick::writeImage()`
