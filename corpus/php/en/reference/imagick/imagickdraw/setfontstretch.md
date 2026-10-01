---
id: "en-php-function-imagickdraw-setfontstretch"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::setFontStretch"
title: "Sets the font stretch to use when annotating with text"
signature: "public bool ImagickDraw::setFontStretch(int $stretch)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.setfontstretch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the font stretch to use when annotating with text

## Description

```php
public bool ImagickDraw::setFontStretch(int $stretch)
```

> This function is currently not documented; only its argument list is available.

Sets the font stretch to use when annotating with text. The AnyStretch enumeration acts as a wild-card "don't care" option.

## Parameters

- **`$stretch`** — One of the STRETCH constant (`imagick::STRETCH_*`).

## Return Values

No value is returned.

## Examples

**`ImagickDraw::setFontStretch()` example**

```php

      
<?php
function setFontStretch($fillColor, $strokeColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeWidth(2);
    $draw->setFontSize(36);

    $fontStretchTypes = [
        \Imagick::STRETCH_ULTRACONDENSED, 
        \Imagick::STRETCH_CONDENSED, 
        \Imagick::STRETCH_SEMICONDENSED, 
        \Imagick::STRETCH_SEMIEXPANDED, 
        \Imagick::STRETCH_EXPANDED, 
        \Imagick::STRETCH_EXTRAEXPANDED, 
        \Imagick::STRETCH_ULTRAEXPANDED, 
        \Imagick::STRETCH_ANY
    ];

    $offset = 0;
    foreach ($fontStretchTypes as $fontStretch) {
        $draw->setFontStretch($fontStretch);
        $draw->annotation(50, 75 + $offset, "Lorem Ipsum!");
        $offset += 50;
    }

    $imagick = new \Imagick();
    $imagick->newImage(500, 500, $backgroundColor);
    $imagick->setImageFormat("png");
    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>

      
```
