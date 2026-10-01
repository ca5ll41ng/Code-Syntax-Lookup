---
id: "en-php-function-imagickdraw-setfillrule"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::setFillRule"
title: "Sets the fill rule to use while drawing polygons"
signature: "public bool ImagickDraw::setFillRule(int $fillrule)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.setfillrule.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the fill rule to use while drawing polygons

## Description

```php
public bool ImagickDraw::setFillRule(int $fillrule)
```

> This function is currently not documented; only its argument list is available.

Sets the fill rule to use while drawing polygons.

## Parameters

- **`$fillrule`** — One of the FILLRULE constant (`imagick::FILLRULE_*`).

## Return Values

No value is returned.

## Examples

**`ImagickDraw::setFillRule()` example**

```php

      
<?php
function setFillRule($fillColor, $strokeColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeWidth(1);
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);

    $fillRules = [\Imagick::FILLRULE_NONZERO, \Imagick::FILLRULE_EVENODD];

    $points = 11;
    $size = 150;

    $draw->translate(175, 160);

    for ($x = 0; $x < 2; $x++) {
        $draw->setFillRule($fillRules[$x]);
        $draw->pathStart();
        for ($n = 0; $n < $points * 2; $n++) {

            if ($n >= $points) {
                $angle = fmod($n * 360 * 4 / $points, 360) * pi() / 180;
            }
            else {
                $angle = fmod($n * 360 * 3 / $points, 360) * pi() / 180;
            }

            $positionX = $size * sin($angle);
            $positionY = $size * cos($angle);

            if ($n == 0) {
                $draw->pathMoveToAbsolute($positionX, $positionY);
            }
            else {
                $draw->pathLineToAbsolute($positionX, $positionY);
            }
        }

        $draw->pathClose();
        $draw->pathFinish();

        $draw->translate(325, 0);
    }

    $image = new \Imagick();
    $image->newImage(700, 320, $backgroundColor);
    $image->setImageFormat("png");
    $image->drawImage($draw);

    header("Content-Type: image/png");
    echo $image->getImageBlob();
}

?>

      
```
