---
id: "en-php-function-imagickdraw-setvectorgraphics"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::setVectorGraphics"
title: "Sets the vector graphics"
signature: "public bool ImagickDraw::setVectorGraphics(string $xml)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.setvectorgraphics.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the vector graphics

## Description

```php
public bool ImagickDraw::setVectorGraphics(string $xml)
```

> This function is currently not documented; only its argument list is available.

Sets the vector graphics associated with the specified ImagickDraw object. Use this method with `ImagickDraw::getVectorGraphics()` as a method to persist the vector graphics state.

## Parameters

- **`$xml`** — xml containing the vector graphics

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`ImagickDraw::setVectorGraphics()` example**

```php

      
<?php
function setVectorGraphics() {
    //Setup a draw object with some drawing in it.
    $draw = new \ImagickDraw();
    $draw->setFillColor("red");
    $draw->circle(20, 20, 50, 50);
    $draw->setFillColor("blue");
    $draw->circle(50, 70, 50, 50);
    $draw->rectangle(50, 120, 80, 150);

    //Get the drawing as a string
    $SVG = $draw->getVectorGraphics();
    
    //$svg is a string, and could be saved anywhere a string can be saved

    //Use the saved drawing to generate a new draw object
    $draw2 = new \ImagickDraw();
    //Apparently the SVG text is missing the root element. 
    $draw2->setVectorGraphics("<root>".$SVG."</root>");

    $imagick = new \Imagick();
    $imagick->newImage(200, 200, 'white');
    $imagick->setImageFormat("png");

    $imagick->drawImage($draw2);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>

      
```
