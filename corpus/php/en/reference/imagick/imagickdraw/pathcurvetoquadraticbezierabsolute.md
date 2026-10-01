---
id: "en-php-function-imagickdraw-pathcurvetoquadraticbezierabsolute"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::pathCurveToQuadraticBezierAbsolute"
title: "Draws a quadratic Bezier curve"
signature: "public bool ImagickDraw::pathCurveToQuadraticBezierAbsolute(float $x1, float $y1, float $x_end, float $y)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.pathcurvetoquadraticbezierabsolute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Draws a quadratic Bezier curve

## Description

```php
public bool ImagickDraw::pathCurveToQuadraticBezierAbsolute(float $x1, float $y1, float $x_end, float $y)
```

> This function is currently not documented; only its argument list is available.

Draws a quadratic Bezier curve from the current point to (x,y) using (x1,y1) as the control point using absolute coordinates. At the end of the command, the new current point becomes the final (x,y) coordinate pair used in the polybezier.

## Parameters

- **`$x1`** — x coordinate of the control point
- **`$y1`** — y coordinate of the control point
- **`$x_end`** — x coordinate of the end point
- **`$y`** — y coordinate of the end point

## Return Values

No value is returned.

## Examples

**`ImagickDraw::pathCurveToQuadraticBezierAbsolute()` example**

```php

      
<?php
function pathCurveToQuadraticBezierAbsolute($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeOpacity(1);
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);

    $draw->setStrokeWidth(2);
    $draw->setFontSize(72);

    $draw->pathStart();
    $draw->pathMoveToAbsolute(50,250);

    // This specifies a quadratic bezier curve with the current position as the start
    // point, the control point is the first two params, and the end point is the last two params.
    $draw->pathCurveToQuadraticBezierAbsolute(
        150,50, 
        250,250
    );

    // This specifies a quadratic bezier curve with the current position as the start
    // point, the control point is mirrored from the previous curves control point
    // and the end point is defined by the x, y values.
    $draw->pathCurveToQuadraticBezierSmoothAbsolute(
        450,250
    );

    // This specifies a quadratic bezier curve with the current position as the start
    // point, the control point is mirrored from the previous curves control point
    // and the end point is defined relative from the current position by the x, y values.
    $draw->pathCurveToQuadraticBezierSmoothRelative(
        200,-100
    );

    $draw->pathFinish();

    $imagick = new \Imagick();
    $imagick->newImage(700, 500, $backgroundColor);
    $imagick->setImageFormat("png");

    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();

}

?>

      
```
