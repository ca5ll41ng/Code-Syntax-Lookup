---
id: "en-php-function-imagick-colormatriximage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::colorMatrixImage"
title: "Apply color transformation to an image"
signature: "public bool Imagick::colorMatrixImage(array $color_matrix)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.colormatriximage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Apply color transformation to an image

## Description

```php
public bool Imagick::colorMatrixImage(array $color_matrix)
```

Apply color transformation to an image. The method permits saturation changes, hue rotation, luminance to alpha, and various other effects. Although variable-sized transformation matrices can be used, typically one uses a 5x5 matrix for an RGBA image and a 6x6 for CMYKA (or RGBA with offsets). The matrix is similar to those used by Adobe Flash except offsets are in column 6 rather than 5 (in support of CMYKA images) and offsets are normalized (divide Flash offset by 255)

## Parameters

- **`$color_matrix`**

## Return Values

Returns `true` on success.

## Examples

**`Imagick::colorMatrixImage()`**

```php

      
<?php
function colorMatrixImage($imagePath, $colorMatrix) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->setImageOpacity(1);

    //A color matrix should look like:
    //    $colorMatrix = [
    //        1.5, 0.0, 0.0, 0.0, 0.0, -0.157,
    //        0.0, 1.0, 0.5, 0.0, 0.0, -0.157,
    //        0.0, 0.0, 1.5, 0.0, 0.0, -0.157,
    //        0.0, 0.0, 0.0, 1.0, 0.0,  0.0,
    //        0.0, 0.0, 0.0, 0.0, 1.0,  0.0,
    //        0.0, 0.0, 0.0, 0.0, 0.0,  1.0
    //    ];

    $background = new \Imagick();
    $background->newPseudoImage($imagick->getImageWidth(), $imagick->getImageHeight(),  "pattern:checkerboard");

    $background->setImageFormat('png');

    $imagick->setImageFormat('png');
    $imagick->colorMatrixImage($colorMatrix);
    
    $background->compositeImage($imagick, \Imagick::COMPOSITE_ATOP, 0, 0);

    header("Content-Type: image/png");
    echo $background->getImageBlob();
}

?>

      
```
