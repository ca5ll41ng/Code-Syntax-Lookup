---
id: "en-php-function-imagickdraw-bezier"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::bezier"
title: "Draws a bezier curve"
signature: "public bool ImagickDraw::bezier(array $coordinates)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.bezier.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Draws a bezier curve

## Description

```php
public bool ImagickDraw::bezier(array $coordinates)
```

> This function is currently not documented; only its argument list is available.

Draws a bezier curve through a set of points on the image.

## Parameters

- **`$coordinates`** — Multidimensional array like array( array( 'x' => 1, 'y' => 2 ), array( 'x' => 3, 'y' => 4 ) )

## Return Values

No value is returned.

## Examples

**`ImagickDraw::bezier()` example**

```php

      
<?php
function bezier($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $strokeColor = new \ImagickPixel($strokeColor);
    $fillColor = new \ImagickPixel($fillColor);

    $draw->setStrokeOpacity(1);
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);

    $draw->setStrokeWidth(2);

    $smoothPointsSet = [
        [
            ['x' => 10.0 * 5, 'y' => 10.0 * 5],
            ['x' => 30.0 * 5, 'y' => 90.0 * 5],
            ['x' => 25.0 * 5, 'y' => 10.0 * 5],
            ['x' => 50.0 * 5, 'y' => 50.0 * 5],
        ], 
        [
            ['x' => 50.0 * 5, 'y' => 50.0 * 5],
            ['x' => 75.0 * 5, 'y' => 90.0 * 5],
            ['x' => 70.0 * 5, 'y' => 10.0 * 5],
            ['x' => 90.0 * 5, 'y' => 40.0 * 5],
        ],
    ];

    foreach ($smoothPointsSet as $points) {
        $draw->bezier($points);
    }

    $disjointPoints = [
        [
            ['x' => 10 * 5, 'y' => 10 * 5], 
            ['x' => 30 * 5, 'y' => 90 * 5], 
            ['x' => 25 * 5, 'y' => 10 * 5],
            ['x' => 50 * 5, 'y' => 50 * 5],
        ],
        [
            ['x' => 50 * 5, 'y' => 50 * 5], 
            ['x' => 80 * 5, 'y' => 50 * 5],
            ['x' => 70 * 5, 'y' => 10 * 5],
            ['x' => 90 * 5, 'y' => 40 * 5],
         ]
    ];
    $draw->translate(0, 200);

    foreach ($disjointPoints as $points) {
        $draw->bezier($points);
    }

    //Create an image object which the draw commands can be rendered into
    $imagick = new \Imagick();
    $imagick->newImage(500, 500, $backgroundColor);
    $imagick->setImageFormat("png");

    //Render the draw commands in the ImagickDraw object 
    //into the image.
    $imagick->drawImage($draw);

    //Send the image to the browser
    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>

      
```
