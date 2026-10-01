---
id: "en-php-function-imagick-solarizeimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::solarizeImage"
title: "Applies a solarizing effect to the image"
signature: "public bool Imagick::solarizeImage(int $threshold)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.solarizeimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Applies a solarizing effect to the image

## Description

```php
public bool Imagick::solarizeImage(int $threshold)
```

Applies a special effect to the image, similar to the effect achieved in a photo darkroom by selectively exposing areas of photo sensitive paper to light. Threshold ranges from 0 to QuantumRange and is a measure of the extent of the solarization.

## Parameters

- **`$threshold`**

## Return Values

Returns `true` on success.

## Examples

**`Imagick::solarizeImage()`**

```php

      
<?php
function solarizeImage($imagePath, $solarizeThreshold) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->solarizeImage($solarizeThreshold * \Imagick::getQuantum());
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
