---
id: "en-php-function-imagickdraw-setfontweight"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::setFontWeight"
title: "Sets the font weight"
signature: "public bool ImagickDraw::setFontWeight(int $weight)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.setfontweight.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the font weight

## Description

```php
public bool ImagickDraw::setFontWeight(int $weight)
```

> This function is currently not documented; only its argument list is available.

Sets the font weight to use when annotating with text.

## Parameters

- **`$weight`**

## Return Values

## Examples

**`ImagickDraw::setFontWeight()` example**

```php

      
<?php
function setFontWeight($fillColor, $strokeColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);

    $draw->setStrokeWidth(1);

    $draw->setFontSize(36);

    $draw->setFontWeight(100);
    $draw->annotation(50, 50, "Lorem Ipsum!");

    $draw->setFontWeight(200);
    $draw->annotation(50, 100, "Lorem Ipsum!");

    $draw->setFontWeight(400);
    $draw->annotation(50, 150, "Lorem Ipsum!");

    $draw->setFontWeight(800);
    $draw->annotation(50, 200, "Lorem Ipsum!");

    $imagick = new \Imagick();
    $imagick->newImage(500, 500, $backgroundColor);
    $imagick->setImageFormat("png");
    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>

      
```
