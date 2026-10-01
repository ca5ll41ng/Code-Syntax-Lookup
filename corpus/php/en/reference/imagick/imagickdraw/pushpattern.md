---
id: "en-php-function-imagickdraw-pushpattern"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::pushPattern"
title: "Indicates that subsequent commands up to a ImagickDraw::opPattern() command comprise the definition of a named pattern"
signature: "public bool ImagickDraw::pushPattern(string $pattern_id, float $x, float $y, float $width, float $height)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.pushpattern.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Indicates that subsequent commands up to a ImagickDraw::opPattern() command comprise the definition of a named pattern

## Description

```php
public bool ImagickDraw::pushPattern(string $pattern_id, float $x, float $y, float $width, float $height)
```

> This function is currently not documented; only its argument list is available.

Indicates that subsequent commands up to a DrawPopPattern() command comprise the definition of a named pattern. The pattern space is assigned top left corner coordinates, a width and height, and becomes its own drawing space. Anything which can be drawn may be used in a pattern definition. Named patterns may be used as stroke or brush definitions.

## Parameters

- **`$pattern_id`** — the pattern Id
- **`$x`** — x coordinate of the top-left corner
- **`$y`** — y coordinate of the top-left corner
- **`$width`** — width of the pattern
- **`$height`** — height of the pattern

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`ImagickDraw::pushPattern()` example**

```php

      
<?php
function pushPattern($strokeColor, $fillColor, $backgroundColor) {
    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeWidth(1);
    $draw->setStrokeOpacity(1);
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);

    $draw->setStrokeWidth(1);

    $draw->pushPattern("MyFirstPattern", 0, 0, 50, 50);
    for ($x = 0; $x < 50; $x += 10) {
        for ($y = 0; $y < 50; $y += 5) {
            $positionX = $x + (($y / 5) % 5);
            $draw->rectangle($positionX, $y, $positionX + 5, $y + 5);
        }
    }
    $draw->popPattern();

    $draw->setFillOpacity(0);
    $draw->rectangle(100, 100, 400, 400);
    $draw->setFillOpacity(1);

    $draw->setFillOpacity(1);

    $draw->push();
    $draw->setFillPatternURL('#MyFirstPattern');
    $draw->setFillColor('yellow');
    $draw->rectangle(100, 100, 400, 400);
    $draw->pop();

    $imagick = new \Imagick();
    $imagick->newImage(500, 500, $backgroundColor);
    $imagick->setImageFormat("png");

    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>

      
```
