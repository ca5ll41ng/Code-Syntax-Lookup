---
id: "en-php-function-imagickdraw-setfontsize"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::setFontSize"
title: "Sets the font pointsize to use when annotating with text"
signature: "public bool ImagickDraw::setFontSize(float $point_size)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.setfontsize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the font pointsize to use when annotating with text

## Description

```php
public bool ImagickDraw::setFontSize(float $point_size)
```

> This function is currently not documented; only its argument list is available.

Sets the font pointsize to use when annotating with text.

## Parameters

- **`$point_size`** — the point size

## Return Values

No value is returned.

## Examples

**`ImagickDraw::setFontSize()` example**

```php

      
<?php
function setFontSize($fillColor, $strokeColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeOpacity(1);
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeWidth(2);
    $draw->setFont("../fonts/Arial.ttf");

    $sizes = [24, 36, 48, 60, 72];

    foreach ($sizes as $size) {
        $draw->setFontSize($size);
        $draw->annotation(50, ($size * $size / 16), "Lorem Ipsum!");
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
