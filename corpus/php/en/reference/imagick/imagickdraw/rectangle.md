---
id: "en-php-function-imagickdraw-rectangle"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::rectangle"
title: "Draws a rectangle"
signature: "public bool ImagickDraw::rectangle(float $top_left_x, float $top_left_y, float $bottom_right_x, float $bottom_right_y)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.rectangle.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Draws a rectangle

## Description

```php
public bool ImagickDraw::rectangle(float $top_left_x, float $top_left_y, float $bottom_right_x, float $bottom_right_y)
```

> This function is currently not documented; only its argument list is available.

Draws a rectangle given two coordinates and using the current stroke, stroke width, and fill settings.

## Parameters

- **`$top_left_x`** — x coordinate of the top left corner
- **`$top_left_y`** — y coordinate of the top left corner
- **`$bottom_right_x`** — x coordinate of the bottom right corner
- **`$bottom_right_y`** — y coordinate of the bottom right corner

## Return Values

No value is returned.

## Examples

**`ImagickDraw::rectangle()` example**

```php

      
<?php
function rectangle($strokeColor, $fillColor, $backgroundColor) {
    $draw = new \ImagickDraw();
    $strokeColor = new \ImagickPixel($strokeColor);
    $fillColor = new \ImagickPixel($fillColor);

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeOpacity(1);
    $draw->setStrokeWidth(2);

    $draw->rectangle(200, 200, 300, 300);
    $imagick = new \Imagick();
    $imagick->newImage(500, 500, $backgroundColor);
    $imagick->setImageFormat("png");

    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>

      
```
