---
id: "en-php-function-imagick-modulateimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::modulateImage"
title: "Control the brightness, saturation, and hue"
signature: "public bool Imagick::modulateImage(float $brightness, float $saturation, float $hue)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.modulateimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Control the brightness, saturation, and hue

## Description

```php
public bool Imagick::modulateImage(float $brightness, float $saturation, float $hue)
```

Lets you control the brightness, saturation, and hue of an image. Hue is the percentage of absolute rotation from the current position. For example 50 results in a counter-clockwise rotation of 90 degrees, 150 results in a clockwise rotation of 90 degrees, with 0 and 200 both resulting in a rotation of 180 degrees.

## Parameters

- **`$brightness`**
- **`$saturation`**
- **`$hue`**

## Return Values

Returns `true` on success.

## Examples

**`Imagick::modulateImage()`**

```php

      
<?php
function modulateImage($imagePath, $hue, $brightness, $saturation) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->modulateImage($brightness, $saturation, $hue);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
