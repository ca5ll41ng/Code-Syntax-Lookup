---
id: "en-php-function-imagickdraw-popdefs"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::popDefs"
title: "Terminates a definition list"
signature: "public bool ImagickDraw::popDefs()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.popdefs.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Terminates a definition list

## Description

```php
public bool ImagickDraw::popDefs()
```

> This function is currently not documented; only its argument list is available.

Terminates a definition list.

## Return Values

No value is returned.

## Examples

**`ImagickDraw::popDefs()` example**

```php

      
<?php
function popDefs($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setstrokeOpacity(1);
    $draw->setStrokeWidth(2);
    $draw->setFontSize(72);
    $draw->pushDefs();
    $draw->setStrokeColor('white');
    $draw->rectangle(50, 50, 200, 200);
    $draw->popDefs();

    $draw->rectangle(300, 50, 450, 200);

    $imagick = new \Imagick();
    $imagick->newImage(500, 500, $backgroundColor);
    $imagick->setImageFormat("png");

    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>

      
```
