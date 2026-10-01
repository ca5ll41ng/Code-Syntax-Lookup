---
id: "en-php-function-imagickdraw-rotate"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::rotate"
title: "Applies the specified rotation to the current coordinate space"
signature: "public bool ImagickDraw::rotate(float $degrees)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.rotate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Applies the specified rotation to the current coordinate space

## Description

```php
public bool ImagickDraw::rotate(float $degrees)
```

> This function is currently not documented; only its argument list is available.

Applies the specified rotation to the current coordinate space.

## Parameters

- **`$degrees`** — degrees to rotate.

## Return Values

No value is returned.

## Examples

**`ImagickDraw::rotate()` example**

```php

      
<?php
function rotate($strokeColor, $fillColor, $backgroundColor, $fillModifiedColor) {
    $draw = new \ImagickDraw();
    $draw->setStrokeColor($strokeColor);
    $draw->setStrokeOpacity(1);
    $draw->setFillColor($fillColor);
    $draw->rectangle(200, 200, 300, 300);
    $draw->setFillColor($fillModifiedColor);
    $draw->rotate(15);
    $draw->rectangle(200, 200, 300, 300);

    $image = new \Imagick();
    $image->newImage(500, 500, $backgroundColor);
    $image->setImageFormat("png");
    $image->drawImage($draw);

    header("Content-Type: image/png");
    echo $image->getImageBlob();
}

?>

      
```
