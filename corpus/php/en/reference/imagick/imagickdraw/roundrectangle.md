---
id: "en-php-function-imagickdraw-roundrectangle"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::roundRectangle"
title: "Draws a rounded rectangle"
signature: "public bool ImagickDraw::roundRectangle(float $top_left_x, float $top_left_y, float $bottom_right_x, float $bottom_right_y, float $rounding_x, float $rounding_y)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.roundrectangle.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Draws a rounded rectangle

## Description

```php
public bool ImagickDraw::roundRectangle(float $top_left_x, float $top_left_y, float $bottom_right_x, float $bottom_right_y, float $rounding_x, float $rounding_y)
```

> This function is currently not documented; only its argument list is available.

Draws a rounded rectangle given two coordinates, x & y corner radiuses and using the current stroke, stroke width, and fill settings.

## Parameters

- **`$top_left_x`** — x coordinate of the top left corner
- **`$top_left_y`** — y coordinate of the top left corner
- **`$bottom_right_x`** — x coordinate of the bottom right
- **`$bottom_right_y`** — y coordinate of the bottom right
- **`$rounding_x`** — x rounding
- **`$rounding_y`** — y rounding

## Return Values

No value is returned.

## Examples

**`ImagickDraw::roundRectangle()` example**

```php

      
<?php
function roundRectangle($strokeColor, $fillColor, $backgroundColor, $startX, $startY, $endX, $endY, $roundX, $roundY) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeOpacity(1);
    $draw->setStrokeWidth(2);

    $draw->roundRectangle($startX, $startY, $endX, $endY, $roundX, $roundY);

    $imagick = new \Imagick();
    $imagick->newImage(500, 500, $backgroundColor);
    $imagick->setImageFormat("png");

    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>

      
```
