---
id: "en-php-function-imagick-swirlimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::swirlImage"
title: "Swirls the pixels about the center of the image"
signature: "bool Imagick::swirlImage(float $degrees)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.swirlimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Swirls the pixels about the center of the image

## Description

```php
bool Imagick::swirlImage(float $degrees)
```

Swirls the pixels about the center of the image, where degrees indicates the sweep of the arc through which each pixel is moved. You get a more dramatic effect as the degrees move from 1 to 360.

## Parameters

- **`$degrees`**

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::swirlImage()`**

```php

      
<?php
function swirlImage($imagePath, $swirl) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->swirlImage($swirl);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
