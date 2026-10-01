---
id: "en-php-function-imagickpixel-setcolor"
language: "php"
lang: "en"
category: "function"
name: "ImagickPixel::setColor"
title: "Sets the color"
signature: "public bool ImagickPixel::setColor(string $color)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickpixel.setcolor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the color

## Description

```php
public bool ImagickPixel::setColor(string $color)
```

> This function is currently not documented; only its argument list is available.

Sets the color described by the ImagickPixel object, with a string (e.g. "blue", "#0000ff", "rgb(0,0,255)", "cmyk(100,100,100,10)", etc.).

## Parameters

- **`$color`** — The color definition to use in order to initialise the ImagickPixel object.

## Return Values

Returns `true` if the specified color was set, `false` otherwise.

## Examples

**`ImagickPixel::setColor()`**

```php

      
<?php
function setColor() {
    $draw = new \ImagickDraw();

    $strokeColor = new \ImagickPixel('green');
    $fillColor = new \ImagickPixel();
    $fillColor->setColor('rgba(100%, 75%, 0%, 1.0)');

    $draw->setstrokewidth(3.0);
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->rectangle(200, 200, 300, 300);

    $image = new \Imagick();
    $image->newImage(500, 500, "SteelBlue2");
    $image->setImageFormat("png");

    $image->drawImage($draw);

    header("Content-Type: image/png");
    echo $image->getImageBlob();
}

?>

      
```
