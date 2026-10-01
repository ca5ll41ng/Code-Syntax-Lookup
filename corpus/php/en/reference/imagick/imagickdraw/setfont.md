---
id: "en-php-function-imagickdraw-setfont"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::setFont"
title: "Sets the fully-specified font to use when annotating with text"
signature: "public bool ImagickDraw::setFont(string $font_name)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.setfont.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the fully-specified font to use when annotating with text

## Description

```php
public bool ImagickDraw::setFont(string $font_name)
```

> This function is currently not documented; only its argument list is available.

Sets the fully-specified font to use when annotating with text.

## Parameters

- **`$font_name`**

## Return Values

Returns `true` on success.

## Examples

**`ImagickDraw::setFont()` example**

```php

      
<?php
function setFont($fillColor, $strokeColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);

    $draw->setStrokeWidth(2);
    $draw->setFontSize(36);

    $draw->setFont("../fonts/Arial.ttf");
    $draw->annotation(50, 50, "Lorem Ipsum!");

    $draw->setFont("../fonts/Consolas.ttf");
    $draw->annotation(50, 100, "Lorem Ipsum!");

    $draw->setFont("../fonts/CANDY.TTF");
    $draw->annotation(50, 150, "Lorem Ipsum!");

    $draw->setFont("../fonts/Inconsolata-dz.otf");
    $draw->annotation(50, 200, "Lorem Ipsum!");

    $imagick = new \Imagick();
    $imagick->newImage(500, 300, $backgroundColor);
    $imagick->setImageFormat("png");
    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>

      
```
