---
id: "en-php-function-imagick-resampleimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::resampleImage"
title: "Resample image to desired resolution"
signature: "public bool Imagick::resampleImage(float $x_resolution, float $y_resolution, int $filter, float $blur)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.resampleimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Resample image to desired resolution

## Description

```php
public bool Imagick::resampleImage(float $x_resolution, float $y_resolution, int $filter, float $blur)
```

Resample image to desired resolution.

## Parameters

- **`$x_resolution`**
- **`$y_resolution`**
- **`$filter`**
- **`$blur`**

## Return Values

Returns `true` on success.

## Examples

**`Imagick::resampleImage()`**

```php

      
<?php
function resampleImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));

    $imagick->resampleImage(200, 200, \Imagick::FILTER_LANCZOS, 1);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
