---
id: "en-php-function-imagick-whitethresholdimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::whiteThresholdImage"
title: "Force all pixels above the threshold into white"
signature: "public bool Imagick::whiteThresholdImage(mixed $threshold)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.whitethresholdimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Force all pixels above the threshold into white

## Description

```php
public bool Imagick::whiteThresholdImage(mixed $threshold)
```

Is like Imagick::ThresholdImage() but force all pixels above the threshold into white while leaving all pixels below the threshold unchanged.

## Parameters

- **`$threshold`**

## Return Values

Returns `true` on success.

## Changelog

|  |  |
| --- | --- |
| PECL imagick 2.1.0 | Now allows a string representing the color as a parameter. Previous versions allow only an ImagickPixel object. |

## Examples

**`Imagick::whiteThresholdImage()`**

```php

      
<?php
function whiteThresholdImage($imagePath, $color) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->whiteThresholdImage($color);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
