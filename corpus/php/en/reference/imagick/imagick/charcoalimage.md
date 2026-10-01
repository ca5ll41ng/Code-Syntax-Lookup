---
id: "en-php-function-imagick-charcoalimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::charcoalImage"
title: "Simulates a charcoal drawing"
signature: "public bool Imagick::charcoalImage(float $radius, float $sigma)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.charcoalimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Simulates a charcoal drawing

## Description

```php
public bool Imagick::charcoalImage(float $radius, float $sigma)
```

Simulates a charcoal drawing.

## Parameters

- **`$radius`** — The radius of the Gaussian, in pixels, not counting the center pixel
- **`$sigma`** — The standard deviation of the Gaussian, in pixels

## Return Values

Returns `true` on success.

## Examples

**`Imagick::charcoalImage()`**

```php

      
<?php
function charcoalImage($imagePath, $radius, $sigma) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->charcoalImage($radius, $sigma);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
