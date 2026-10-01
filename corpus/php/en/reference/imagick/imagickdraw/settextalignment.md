---
id: "en-php-function-imagickdraw-settextalignment"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::setTextAlignment"
title: "Specifies a text alignment"
signature: "public bool ImagickDraw::setTextAlignment(int $align)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.settextalignment.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Specifies a text alignment

## Description

```php
public bool ImagickDraw::setTextAlignment(int $align)
```

> This function is currently not documented; only its argument list is available.

Specifies a text alignment to be applied when annotating with text.

## Parameters

- **`$align`** — One of the ALIGN constant (`imagick::ALIGN_*`).

## Return Values

No value is returned.

## Examples

**`ImagickDraw::setTextAlignment()` example**

```php

      
<?php
function setTextAlignment($strokeColor, $fillColor, $backgroundColor) {
    $draw = new \ImagickDraw();
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeWidth(1);
    $draw->setFontSize(36);

    $draw->setTextAlignment(\Imagick::ALIGN_LEFT);
    $draw->annotation(250, 75, "Lorem Ipsum!");
    $draw->setTextAlignment(\Imagick::ALIGN_CENTER);
    $draw->annotation(250, 150, "Lorem Ipsum!");
    $draw->setTextAlignment(\Imagick::ALIGN_RIGHT);
    $draw->annotation(250, 225, "Lorem Ipsum!");
    $draw->line(250, 0, 250, 500);

    $imagick = new \Imagick();
    $imagick->newImage(500, 500, $backgroundColor);
    $imagick->setImageFormat("png");
    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>

      
```
