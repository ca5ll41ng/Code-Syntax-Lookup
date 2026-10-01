---
id: "en-php-function-imagickdraw-setfontstyle"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::setFontStyle"
title: "Sets the font style to use when annotating with text"
signature: "public bool ImagickDraw::setFontStyle(int $style)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.setfontstyle.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the font style to use when annotating with text

## Description

```php
public bool ImagickDraw::setFontStyle(int $style)
```

> This function is currently not documented; only its argument list is available.

Sets the font style to use when annotating with text. The AnyStyle enumeration acts as a wild-card "don't care" option.

## Parameters

- **`$style`** — One of the STYLE constant (`imagick::STYLE_*`).

## Return Values

No value is returned.

## Examples

**`ImagickDraw::setFontStyle()` example**

```php

      
<?php
function setFontStyle($fillColor, $strokeColor, $backgroundColor) {
    $draw = new \ImagickDraw();
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeWidth(1);
    $draw->setFontSize(36);
    $draw->setFontStyle(\Imagick::STYLE_NORMAL);
    $draw->annotation(50, 50, "Lorem Ipsum!");

    $draw->setFontStyle(\Imagick::STYLE_ITALIC);
    $draw->annotation(50, 100, "Lorem Ipsum!");

    $draw->setFontStyle(\Imagick::STYLE_OBLIQUE);
    $draw->annotation(50, 150, "Lorem Ipsum!");

    $imagick = new \Imagick();
    $imagick->newImage(350, 300, $backgroundColor);
    $imagick->setImageFormat("png");
    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>

      
```
