---
id: "en-php-function-imagickdraw-settextundercolor"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::setTextUnderColor"
title: "Specifies the color of a background rectangle"
signature: "public bool ImagickDraw::setTextUnderColor(ImagickPixel|string $under_color)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.settextundercolor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Specifies the color of a background rectangle

## Description

```php
public bool ImagickDraw::setTextUnderColor(ImagickPixel|string $under_color)
```

> This function is currently not documented; only its argument list is available.

Specifies the color of a background rectangle to place under text annotations.

## Parameters

- **`$under_color`** — the under color

## Return Values

No value is returned.

## Examples

**`ImagickDraw::setTextUnderColor()` example**

```php

      
<?php
function setTextUnderColor($strokeColor, $fillColor, $backgroundColor, $textUnderColor) {
    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeWidth(2);
    $draw->setFontSize(72);
    $draw->annotation(50, 75, "Lorem Ipsum!");
    $draw->setTextUnderColor($textUnderColor);
    $draw->annotation(50, 175, "Lorem Ipsum!");

    $imagick = new \Imagick();
    $imagick->newImage(500, 500, $backgroundColor);
    $imagick->setImageFormat("png");

    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>

      
```
