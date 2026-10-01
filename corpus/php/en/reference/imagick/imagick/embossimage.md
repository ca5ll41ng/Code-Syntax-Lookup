---
id: "en-php-function-imagick-embossimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::embossImage"
title: "Returns a grayscale image with a three-dimensional effect"
signature: "public bool Imagick::embossImage(float $radius, float $sigma)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.embossimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a grayscale image with a three-dimensional effect

## Description

```php
public bool Imagick::embossImage(float $radius, float $sigma)
```

Returns a grayscale image with a three-dimensional effect. We convolve the image with a Gaussian operator of the given radius and standard deviation (sigma). For reasonable results, radius should be larger than sigma. Use a radius of 0 and it will choose a suitable radius for you.

## Parameters

- **`$radius`** — The radius of the effect
- **`$sigma`** — The sigma of the effect

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::embossImage()`**

```php

      
<?php
function embossImage($imagePath, $radius, $sigma) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->embossImage($radius, $sigma);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
