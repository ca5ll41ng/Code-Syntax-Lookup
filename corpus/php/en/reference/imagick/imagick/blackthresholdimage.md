---
id: "en-php-function-imagick-blackthresholdimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::blackThresholdImage"
title: "Forces all pixels below the threshold into black"
signature: "public bool Imagick::blackThresholdImage(mixed $threshold)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.blackthresholdimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Forces all pixels below the threshold into black

## Description

```php
public bool Imagick::blackThresholdImage(mixed $threshold)
```

Is like Imagick::thresholdImage() but forces all pixels below the threshold into black while leaving all pixels above the threshold unchanged.

## Parameters

- **`$threshold`** — The threshold below which everything turns black

## Return Values

Returns `true` on success.

## Changelog

|  |  |
| --- | --- |
| PECL imagick 2.1.0 | Now allows a string representing the color as a parameter. Previous versions allow only an ImagickPixel object. |

## Examples

**`Imagick::blackThresholdImage()`**

```php

      
<?php
function blackThresholdImage($imagePath, $thresholdColor) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->blackthresholdimage($thresholdColor);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
