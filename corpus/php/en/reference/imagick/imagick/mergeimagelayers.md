---
id: "en-php-function-imagick-mergeimagelayers"
language: "php"
lang: "en"
category: "function"
name: "Imagick::mergeImageLayers"
title: "Merges image layers"
signature: "public Imagick Imagick::mergeImageLayers(int $layer_method)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.mergeimagelayers.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Merges image layers

## Description

```php
public Imagick Imagick::mergeImageLayers(int $layer_method)
```

Merges image layers into one. This method is useful when working with image formats that use multiple layers such as PSD. The merging is controlled using the `$layer_method` which defines how the layers are merged. This method is available if Imagick has been compiled against ImageMagick version 6.3.7 or newer.

## Parameters

- **`$layer_method`** — One of the `Imagick::LAYERMETHOD_{*}` constants

## Return Values

Returns an Imagick object containing the merged image.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::mergeImageLayers()`**

```php

      
<?php
function mergeImageLayers($layerMethodType, $imagePath1, $imagePath2) {

    $imagick = new \Imagick(realpath($imagePath1));

    $imagick2 = new \Imagick(realpath($imagePath2));
    $imagick->addImage($imagick2);
    $imagick->setImageFormat('png');

    $result = $imagick->mergeImageLayers($layerMethodType);
    header("Content-Type: image/png");
    echo $result->getImageBlob();
}

?>

      
```

## See Also

`Imagick::flattenImages()`
