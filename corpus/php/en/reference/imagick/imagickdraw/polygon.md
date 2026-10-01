---
id: "en-php-function-imagickdraw-polygon"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::polygon"
title: "Draws a polygon"
signature: "public bool ImagickDraw::polygon(array $coordinates)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.polygon.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Draws a polygon

## Description

```php
public bool ImagickDraw::polygon(array $coordinates)
```

> This function is currently not documented; only its argument list is available.

Draws a polygon using the current stroke, stroke width, and fill color or texture, using the specified array of coordinates.

## Parameters

- **`$coordinates`** — multidimensional array like array( array( 'x' => 3, 'y' => 4 ), array( 'x' => 2, 'y' => 6 ) );

## Return Values

Returns `true` on success.

## Examples

**`ImagickDraw::polygon()` example**

```php

      
<?php
function polygon($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeOpacity(1);
    $draw->setStrokeColor($strokeColor);
    $draw->setStrokeWidth(4);

    $draw->setFillColor($fillColor);

    $points = [
        ['x' => 40 * 5, 'y' => 10 * 5],
        ['x' => 20 * 5, 'y' => 20 * 5], 
        ['x' => 70 * 5, 'y' => 50 * 5], 
        ['x' => 60 * 5, 'y' => 15 * 5],
    ];

    $draw->polygon($points);

    $image = new \Imagick();
    $image->newImage(500, 300, $backgroundColor);
    $image->setImageFormat("png");
    $image->drawImage($draw);

    header("Content-Type: image/png");
    echo $image->getImageBlob();
}

?>

      
```
