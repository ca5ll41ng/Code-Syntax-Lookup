---
id: "en-php-function-imagickdraw-pathstart"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::pathStart"
title: "Declares the start of a path drawing list"
signature: "public bool ImagickDraw::pathStart()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.pathstart.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Declares the start of a path drawing list

## Description

```php
public bool ImagickDraw::pathStart()
```

> This function is currently not documented; only its argument list is available.

Declares the start of a path drawing list which is terminated by a matching DrawPathFinish() command. All other DrawPath commands must be enclosed between a and a DrawPathFinish() command. This is because path drawing commands are subordinate commands and they do not function by themselves.

## Return Values

No value is returned.

## Examples

**`ImagickDraw::pathStart()` example**

```php

      
<?php
function pathStart($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeOpacity(1);
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);

    $draw->setStrokeWidth(2);
    $draw->setFontSize(72);

    $draw->pathStart();
    $draw->pathMoveToAbsolute(50, 50);
    $draw->pathLineToAbsolute(100, 50);
    $draw->pathLineToRelative(0, 50);
    $draw->pathLineToHorizontalRelative(-50);
    $draw->pathFinish();

    $draw->pathStart();
    $draw->pathMoveToAbsolute(50, 50);
    $draw->pathMoveToRelative(300, 0);
    $draw->pathLineToRelative(50, 0);
    $draw->pathLineToVerticalRelative(50);
    $draw->pathLineToHorizontalAbsolute(350);
    $draw->pathclose();
    $draw->pathFinish();

    $draw->pathStart();
    $draw->pathMoveToAbsolute(50, 300);
    $draw->pathCurveToAbsolute(50, 300, 100, 200, 300, 300);
    $draw->pathLineToVerticalAbsolute(350);
    $draw->pathFinish();

    $imagick = new \Imagick();
    $imagick->newImage(500, 500, $backgroundColor);
    $imagick->setImageFormat("png");

    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>

      
```
