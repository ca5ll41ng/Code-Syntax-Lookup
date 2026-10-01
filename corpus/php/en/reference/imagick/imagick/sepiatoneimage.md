---
id: "en-php-function-imagick-sepiatoneimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::sepiaToneImage"
title: "Sepia tones an image"
signature: "public bool Imagick::sepiaToneImage(float $threshold)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.sepiatoneimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sepia tones an image

## Description

```php
public bool Imagick::sepiaToneImage(float $threshold)
```

Applies a special effect to the image, similar to the effect achieved in a photo darkroom by sepia toning. Threshold ranges from 0 to QuantumRange and is a measure of the extent of the sepia toning. A threshold of 80 is a good starting point for a reasonable tone.

## Parameters

- **`$threshold`**

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::sepiaToneImage()`**

```php

      
<?php
function sepiaToneImage($imagePath, $sepia) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->sepiaToneImage($sepia);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
