---
id: "en-php-function-imagickdraw-point"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::point"
title: "Draws a point"
signature: "public bool ImagickDraw::point(float $x, float $y)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.point.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Draws a point

## Description

```php
public bool ImagickDraw::point(float $x, float $y)
```

> This function is currently not documented; only its argument list is available.

Draws a point using the current stroke color and stroke thickness at the specified coordinates.

## Parameters

- **`$x`** — point's x coordinate
- **`$y`** — point's y coordinate

## Return Values

No value is returned.

## Examples

**`ImagickDraw::point()` example**

```php

      
<?php
function point($fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setFillColor($fillColor);

    for ($x = 0; $x < 10000; $x++) {
        $draw->point(rand(0, 500), rand(0, 500));
    }

    $imagick = new \Imagick();
    $imagick->newImage(500, 500, $backgroundColor);
    $imagick->setImageFormat("png");
    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>

      
```
