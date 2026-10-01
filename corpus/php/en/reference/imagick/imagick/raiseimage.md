---
id: "en-php-function-imagick-raiseimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::raiseImage"
title: "Creates a simulated 3d button-like effect"
signature: "public bool Imagick::raiseImage(int $width, int $height, int $x, int $y, bool $raise)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.raiseimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a simulated 3d button-like effect

## Description

```php
public bool Imagick::raiseImage(int $width, int $height, int $x, int $y, bool $raise)
```

Creates a simulated three-dimensional button-like effect by lightening and darkening the edges of the image. Members width and height of raise_info define the width of the vertical and horizontal edge of the effect.

## Parameters

- **`$width`**
- **`$height`**
- **`$x`**
- **`$y`**
- **`$raise`**

## Return Values

Returns `true` on success.

## Examples

**`Imagick::raiseImage()`**

```php

      
<?php
function raiseImage($imagePath, $width, $height, $x, $y, $raise) {
    $imagick = new \Imagick(realpath($imagePath));

    //x and y do nothing?
    $imagick->raiseImage($width, $height, $x, $y, $raise);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
