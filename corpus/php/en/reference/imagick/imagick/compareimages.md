---
id: "en-php-function-imagick-compareimages"
language: "php"
lang: "en"
category: "function"
name: "Imagick::compareImages"
title: "Compares an image to a reconstructed image"
signature: "public array Imagick::compareImages(Imagick $compare, int $metric)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.compareimages.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Compares an image to a reconstructed image

## Description

```php
public array Imagick::compareImages(Imagick $compare, int $metric)
```

Returns an array containing a reconstructed image and the difference between images.

## Parameters

- **`$compare`** — An image to compare to.
- **`$metric`** — Provide a valid metric type constant. Refer to this list of metric constants.

## Return Values

Returns an array containing a reconstructed image and the difference between images.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**Using `Imagick::compareImages()`:**

Compare images and display the reconstructed image

```php


<?php

$image1 = new imagick("image1.png");
$image2 = new imagick("image2.png");

$result = $image1->compareImages($image2, Imagick::METRIC_MEANSQUAREERROR);
$result[0]->setImageFormat("png");

header("Content-Type: image/png");
echo $result[0];

?>

    
```
