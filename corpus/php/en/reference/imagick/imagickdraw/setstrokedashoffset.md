---
id: "en-php-function-imagickdraw-setstrokedashoffset"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::setStrokeDashOffset"
title: "Specifies the offset into the dash pattern to start the dash"
signature: "public bool ImagickDraw::setStrokeDashOffset(float $dash_offset)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.setstrokedashoffset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Specifies the offset into the dash pattern to start the dash

## Description

```php
public bool ImagickDraw::setStrokeDashOffset(float $dash_offset)
```

> This function is currently not documented; only its argument list is available.

Specifies the offset into the dash pattern to start the dash.

## Parameters

- **`$dash_offset`** — dash offset

## Return Values

No value is returned.

## Examples

**`ImagickDraw::setStrokeDashOffset()` example**

```php

      
<?php
function setStrokeDashOffset($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeWidth(4);
    $draw->setStrokeDashArray([20, 20]);
    $draw->setStrokeDashOffset(0);
    $draw->rectangle(100, 50, 225, 175);

    //Start the dash effect halfway through the solid portion
    $draw->setStrokeDashOffset(10);
    $draw->rectangle(275, 50, 400, 175);

    //Start the dash effect on the space portion
    $draw->setStrokeDashOffset(20);
    $draw->rectangle(100, 200, 225, 350);
    $draw->setStrokeDashOffset(5);
    $draw->rectangle(275, 200, 400, 350);

    $image = new \Imagick();
    $image->newImage(500, 400, $backgroundColor);
    $image->setImageFormat("png");
    $image->drawImage($draw);

    header("Content-Type: image/png");
    echo $image->getImageBlob();
}

?>

      
```
