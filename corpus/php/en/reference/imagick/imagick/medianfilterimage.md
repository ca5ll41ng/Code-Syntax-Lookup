---
id: "en-php-function-imagick-medianfilterimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::medianFilterImage"
title: "Applies a digital filter"
signature: "public bool Imagick::medianFilterImage(float $radius)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.medianfilterimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Applies a digital filter

## Description

```php
public bool Imagick::medianFilterImage(float $radius)
```

Applies a digital filter that improves the quality of a noisy image. Each pixel is replaced by the median in a set of neighboring pixels as defined by radius.

## Parameters

- **`$radius`** — The radius of the pixel neighborhood.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::medianFilterImage()`**

```php

      
<?php
function medianFilterImage($radius, $imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    @$imagick->medianFilterImage($radius);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
