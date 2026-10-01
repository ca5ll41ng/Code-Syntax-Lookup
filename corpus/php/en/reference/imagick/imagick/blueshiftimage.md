---
id: "en-php-function-imagick-blueshiftimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::blueShiftImage"
title: "Mutes the colors of the image"
signature: "public bool Imagick::blueShiftImage(float $factor = 1.5)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.blueshiftimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Mutes the colors of the image

## Description

```php
public bool Imagick::blueShiftImage(float $factor = 1.5)
```

Mutes the colors of the image to simulate a scene at nighttime in the moonlight.

## Parameters

- **`$factor`**

## Return Values

Returns `true` on success.

## Examples

**`Imagick::blueShiftImage()`**

```php

      
<?php
function blueShiftImage($imagePath, $blueShift) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->blueShiftImage($blueShift);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
