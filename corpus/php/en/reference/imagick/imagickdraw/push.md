---
id: "en-php-function-imagickdraw-push"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::push"
title: "Clones the current ImagickDraw and pushes it to the stack"
signature: "public bool ImagickDraw::push()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.push.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Clones the current ImagickDraw and pushes it to the stack

## Description

```php
public bool ImagickDraw::push()
```

> This function is currently not documented; only its argument list is available.

Clones the current ImagickDraw to create a new ImagickDraw, which is then added to the ImagickDraw stack. The original drawing ImagickDraw(s) may be returned to by invoking `ImagickDraw::pop()`. The ImagickDraws are stored on a ImagickDraw stack. For every Pop there must have already been an equivalent Push.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`ImagickDraw::push()` example**

```php

      
<?php
function push($strokeColor, $fillColor, $backgroundColor, $fillModifiedColor) {

    $draw = new \ImagickDraw();
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillModifiedColor);
    $draw->setStrokeWidth(2);
    $draw->setFontSize(72);
    $draw->push();
    $draw->translate(50, 50);
    $draw->rectangle(200, 200, 300, 300);
    $draw->pop();
    $draw->setFillColor($fillColor);
    $draw->rectangle(200, 200, 300, 300);

    $imagick = new \Imagick();
    $imagick->newImage(500, 500, $backgroundColor);
    $imagick->setImageFormat("png");

    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>

      
```
