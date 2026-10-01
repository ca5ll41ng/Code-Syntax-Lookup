---
id: "en-php-function-imagickdraw-settextdecoration"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::setTextDecoration"
title: "Specifies a decoration"
signature: "public bool ImagickDraw::setTextDecoration(int $decoration)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.settextdecoration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Specifies a decoration

## Description

```php
public bool ImagickDraw::setTextDecoration(int $decoration)
```

> This function is currently not documented; only its argument list is available.

Specifies a decoration to be applied when annotating with text.

## Parameters

- **`$decoration`** — One of the DECORATION constant (`imagick::DECORATION_*`).

## Return Values

No value is returned.

## Examples

**`ImagickDraw::setTextDecoration()` example**

```php

      
<?php
function setTextDecoration($strokeColor, $fillColor, $backgroundColor, $textDecoration) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeWidth(2);
    $draw->setFontSize(72);
    $draw->setTextDecoration($textDecoration);
    $draw->annotation(50, 75, "Lorem Ipsum!");

    $imagick = new \Imagick();
    $imagick->newImage(500, 200, $backgroundColor);
    $imagick->setImageFormat("png");
    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>

      
```
