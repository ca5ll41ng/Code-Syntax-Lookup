---
id: "en-php-function-imagickdraw-setcliprule"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::setClipRule"
title: "Set the polygon fill rule to be used by the clipping path"
signature: "public bool ImagickDraw::setClipRule(int $fillrule)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.setcliprule.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the polygon fill rule to be used by the clipping path

## Description

```php
public bool ImagickDraw::setClipRule(int $fillrule)
```

> This function is currently not documented; only its argument list is available.

Set the polygon fill rule to be used by the clipping path.

## Parameters

- **`$fillrule`** — One of the FILLRULE constant (`imagick::FILLRULE_*`).

## Return Values

No value is returned.

## Examples

**`ImagickDraw::setClipRule()` example**

```php

      
<?php
function setClipRule($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeOpacity(1);
    $draw->setStrokeWidth(2);
    //\Imagick::FILLRULE_EVENODD
    //\Imagick::FILLRULE_NONZERO

    $clipPathName = 'testClipPath';
    $draw->pushClipPath($clipPathName);
    $draw->setClipRule(\Imagick::FILLRULE_EVENODD);
    $draw->rectangle(0, 0, 300, 500);
    $draw->rectangle(200, 0, 500, 500);
    $draw->popClipPath();
    $draw->setClipPath($clipPathName);
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
