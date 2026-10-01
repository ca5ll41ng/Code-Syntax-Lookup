---
id: "en-php-function-imagickdraw-setfontfamily"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::setFontFamily"
title: "Sets the font family to use when annotating with text"
signature: "public bool ImagickDraw::setFontFamily(string $font_family)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.setfontfamily.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the font family to use when annotating with text

## Description

```php
public bool ImagickDraw::setFontFamily(string $font_family)
```

> This function is currently not documented; only its argument list is available.

Sets the font family to use when annotating with text.

## Parameters

- **`$font_family`** — the font family

## Return Values

Returns `true` on success.

## Examples

**`ImagickDraw::setFontFamily()` example**

```php

      
<?php
function setFontFamily($fillColor, $strokeColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $strokeColor = new \ImagickPixel($strokeColor);
    $fillColor = new \ImagickPixel($fillColor);

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);

    $draw->setStrokeWidth(2);

    $draw->setFontSize(48);

    $draw->setFontFamily("Times");
    $draw->annotation(50, 50, "Lorem Ipsum!");

    $draw->setFontFamily("AvantGarde");
    $draw->annotation(50, 100, "Lorem Ipsum!");

    $draw->setFontFamily("NewCenturySchlbk");    
    $draw->annotation(50, 150, "Lorem Ipsum!");

    $draw->setFontFamily("Palatino");
    $draw->annotation(50, 200, "Lorem Ipsum!");

    $imagick = new \Imagick();
    $imagick->newImage(450, 250, $backgroundColor);
    $imagick->setImageFormat("png");
    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>

      
```
