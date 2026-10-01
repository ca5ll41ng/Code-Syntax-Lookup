---
id: "en-php-function-imagickdraw-matte"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::matte"
title: "Paints on the image's opacity channel"
signature: "public bool ImagickDraw::matte(float $x, float $y, int $paint)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.matte.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Paints on the image's opacity channel

## Description

```php
public bool ImagickDraw::matte(float $x, float $y, int $paint)
```

> This function is currently not documented; only its argument list is available.

Paints on the image's opacity channel in order to set effected pixels to transparent, to influence the opacity of pixels.

## Parameters

- **`$x`** — x coordinate of the matte
- **`$y`** — y coordinate of the matte
- **`$paint`** — One of the PAINT constant (`imagick::PAINT_*`).

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`ImagickDraw::matte()` example**

```php

      
<?php
function matte($strokeColor, $fillColor, $backgroundColor, $paintType) {
    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);

    $draw->setStrokeWidth(2);
    $draw->setFontSize(72);

    $draw->matte(120, 120, $paintType);    
    $draw->rectangle(100, 100, 300, 200);

    $imagick = new \Imagick();
    $imagick->newImage(500, 500, $backgroundColor);
    $imagick->setImageFormat("png");
    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>

      
```
