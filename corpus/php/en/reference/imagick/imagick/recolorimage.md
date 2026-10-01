---
id: "en-php-function-imagick-recolorimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::recolorImage"
title: "Recolors image"
signature: "public bool Imagick::recolorImage(array $matrix)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.recolorimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Recolors image

## Description

```php
public bool Imagick::recolorImage(array $matrix)
```

Translate, scale, shear, or rotate image colors. This method supports variable sized matrices but normally 5x5 matrix is used for RGBA and 6x6 is used for CMYK. The last row should contain the normalized values. This method is available if Imagick has been compiled against ImageMagick version 6.3.6 or newer.

## Parameters

- **`$matrix`** — The matrix containing the color values

## Return Values

Returns `true` on success.

## Examples

**`Imagick::recolorImage()`**

```php

      
<?php
function recolorImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $remapColor = [ 1, 0, 0,
        0, 0, 1,
        0, 1, 0,];

//$remapColor = [
//    1.438, -0.122, -0.016,  0, 0, -0.03,
//    -0.062,  1.378, -0.016,  0, 0,  0.05,
//    -0.062, -0.122, 1.483,   0, 0, -0.02,
//];

    @$imagick->recolorImage($remapColor);

    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```

## See Also

`Imagick::displayImage()`
