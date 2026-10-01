---
id: "en-php-function-imagick-affinetransformimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::affineTransformImage"
title: "Transforms an image"
signature: "public bool Imagick::affineTransformImage(ImagickDraw $matrix)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.affinetransformimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Transforms an image

## Description

```php
public bool Imagick::affineTransformImage(ImagickDraw $matrix)
```

Transforms an image as dictated by the affine matrix.

## Parameters

- **`$matrix`** — The affine matrix

## Return Values

Returns `true` on success.

## Examples

**`Imagick::affineTransformImage()`**

```php

      
<?php
function affineTransformImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $draw = new \ImagickDraw();

    $angle = deg2rad(40);

    $affineRotate = array(
        "sx" => cos($angle), "sy" => cos($angle), 
        "rx" => sin($angle), "ry" => -sin($angle), 
        "tx" => 0, "ty" => 0,
    );

    $draw->affine($affineRotate);

    $imagick->affineTransformImage($draw);

    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
