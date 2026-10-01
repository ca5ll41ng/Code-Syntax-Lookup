---
id: "en-php-function-imagickdraw-settextantialias"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::setTextAntialias"
title: "Controls whether text is antialiased"
signature: "public bool ImagickDraw::setTextAntialias(bool $antialias)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.settextantialias.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Controls whether text is antialiased

## Description

```php
public bool ImagickDraw::setTextAntialias(bool $antialias)
```

> This function is currently not documented; only its argument list is available.

Controls whether text is antialiased. Text is antialiased by default.

## Parameters

- **`$antialias`**

## Return Values

No value is returned.

## Examples

**`ImagickDraw::setTextAntialias()` example**

```php

      
<?php
function setTextAntialias($fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();
    $draw->setStrokeColor('none');
    $draw->setFillColor($fillColor);
    $draw->setStrokeWidth(1);
    $draw->setFontSize(32);
    $draw->setTextAntialias(false);
    $draw->annotation(5, 30, "Lorem Ipsum!");
    $draw->setTextAntialias(true);
    $draw->annotation(5, 65, "Lorem Ipsum!");

    $imagick = new \Imagick();
    $imagick->newImage(220, 80, $backgroundColor);
    $imagick->setImageFormat("png");
    $imagick->drawImage($draw);

    //Scale the image so that people can see the aliasing.
    $imagick->scaleImage(220 * 6, 80 * 6);
    $imagick->cropImage(640, 480, 0, 0);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>

      
```
