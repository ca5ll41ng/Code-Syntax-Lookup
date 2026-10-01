---
id: "en-php-function-imagickdraw-composite"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::composite"
title: "Composites an image onto the current image"
signature: "public bool ImagickDraw::composite(int $composite, float $x, float $y, float $width, float $height, Imagick $image)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.composite.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Composites an image onto the current image

## Description

```php
public bool ImagickDraw::composite(int $composite, float $x, float $y, float $width, float $height, Imagick $image)
```

> This function is currently not documented; only its argument list is available.

Composites an image onto the current image, using the specified composition operator, specified position, and at the specified size.

## Parameters

- **`$composite`** — composition operator. One of the Composite Operator constant (`imagick::COMPOSITE_*`).
- **`$x`** — x coordinate of the top left corner.
- **`$y`** — y coordinate of the top left corner.
- **`$width`** — width of the composition image.
- **`$height`** — height of the composition image.
- **`$image`** — the `Imagick` object where composition image is taken from.

## Return Values

Returns `true` on success.

## Examples

**`ImagickDraw::composite()` example**

```php

      
<?php
function composite($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setFillOpacity(1);
    $draw->setStrokeWidth(2);
    $draw->setFontSize(72);
    $draw->setStrokeOpacity(1);
    $draw->setStrokeColor($strokeColor);
    $draw->setStrokeWidth(2);
    $draw->setFont("../fonts/CANDY.TTF");
    $draw->setFontSize(140);
    $draw->rectangle(0, 0, 1000, 300);
    $draw->setFillColor('white');
    $draw->setfillopacity(1);
    $draw->annotation(50, 180, "Lorem Ipsum!");

    //Create an image object which the draw commands can be rendered into
    $imagick = new \Imagick();
    $imagick->newImage(1000, 302, $backgroundColor);
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
