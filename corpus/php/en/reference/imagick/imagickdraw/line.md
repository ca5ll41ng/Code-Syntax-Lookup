---
id: "en-php-function-imagickdraw-line"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::line"
title: "Draws a line"
signature: "public bool ImagickDraw::line(float $start_x, float $start_y, float $end_x, float $end_y)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.line.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Draws a line

## Description

```php
public bool ImagickDraw::line(float $start_x, float $start_y, float $end_x, float $end_y)
```

> This function is currently not documented; only its argument list is available.

Draws a line on the image using the current stroke color, stroke opacity, and stroke width.

## Parameters

- **`$start_x`** — starting x coordinate
- **`$start_y`** — starting y coordinate
- **`$end_x`** — ending x coordinate
- **`$end_y`** — ending y coordinate

## Return Values

No value is returned.

## Examples

**`ImagickDraw::line()` example**

```php

      
<?php
function line($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);

    $draw->setStrokeWidth(2);
    $draw->setFontSize(72);

    $draw->line(125, 70, 100, 50);
    $draw->line(350, 170, 100, 150);

    $imagick = new \Imagick();
    $imagick->newImage(500, 500, $backgroundColor);
    $imagick->setImageFormat("png");
    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>

      
```
