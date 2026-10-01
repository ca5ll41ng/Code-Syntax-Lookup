---
id: "en-php-function-imagick-oilpaintimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::oilPaintImage"
title: "Simulates an oil painting"
signature: "public bool Imagick::oilPaintImage(float $radius)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.oilpaintimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Simulates an oil painting

## Description

```php
public bool Imagick::oilPaintImage(float $radius)
```

Applies a special effect filter that simulates an oil painting. Each pixel is replaced by the most frequent color occurring in a circular region defined by radius.

## Parameters

- **`$radius`** — The radius of the circular neighborhood.

## Return Values

Returns `true` on success.

## Examples

**`Imagick::oilPaintImage()`**

```php

      
<?php
function oilPaintImage($imagePath, $radius) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->oilPaintImage($radius);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
