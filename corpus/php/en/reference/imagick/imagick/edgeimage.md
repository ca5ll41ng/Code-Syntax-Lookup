---
id: "en-php-function-imagick-edgeimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::edgeImage"
title: "Enhance edges within the image"
signature: "public bool Imagick::edgeImage(float $radius)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.edgeimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Enhance edges within the image

## Description

```php
public bool Imagick::edgeImage(float $radius)
```

Enhance edges within the image with a convolution filter of the given radius. Use radius 0 and it will be auto-selected.

## Parameters

- **`$radius`** — The radius of the operation.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::edgeImage()`**

```php

      
<?php
function edgeImage($imagePath, $radius) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->edgeImage($radius);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
