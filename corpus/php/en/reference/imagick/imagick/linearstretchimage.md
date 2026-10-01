---
id: "en-php-function-imagick-linearstretchimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::linearStretchImage"
title: "Stretches with saturation the image intensity"
signature: "public bool Imagick::linearStretchImage(float $blackPoint, float $whitePoint)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.linearstretchimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Stretches with saturation the image intensity

## Description

```php
public bool Imagick::linearStretchImage(float $blackPoint, float $whitePoint)
```

Stretches with saturation the image intensity.

## Parameters

- **`$blackPoint`** — The image black point
- **`$whitePoint`** — The image white point

## Return Values

Returns `true` on success.

## Examples

**`Imagick::linearStretchImage()`**

```php

      
<?php
function linearStretchImage($imagePath, $blackThreshold, $whiteThreshold) {
    $imagick = new \Imagick(realpath($imagePath));
    $pixels = $imagick->getImageWidth() * $imagick->getImageHeight();
    $imagick->linearStretchImage($blackThreshold * $pixels, $whiteThreshold * $pixels);

    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
