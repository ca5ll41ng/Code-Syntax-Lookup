---
id: "en-php-function-imagick-setimageclipmask"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setImageClipMask"
title: "Sets image clip mask"
signature: "public bool Imagick::setImageClipMask(Imagick $clip_mask)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setimageclipmask.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets image clip mask

## Description

```php
public bool Imagick::setImageClipMask(Imagick $clip_mask)
```

Sets image clip mask from another Imagick object. This method is available if Imagick has been compiled against ImageMagick version 6.3.6 or newer.

## Parameters

- **`$clip_mask`** — The Imagick object containing the clip mask

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::setImageClipMask()`**

```php

      
<?php
function setImageClipMask($imagePath) {
    $imagick = new \Imagick();
    $imagick->readImage(realpath($imagePath));

    $width = $imagick->getImageWidth();
    $height = $imagick->getImageHeight();

    $clipMask = new \Imagick();
    $clipMask->newPseudoImage(
        $width,
        $height,
        "canvas:transparent"
    );

    $draw = new \ImagickDraw();
    $draw->setFillColor('white');
    $draw->circle(
        $width / 2,
        $height / 2,
        ($width / 2) + ($width / 4),
        $height / 2
    );
    $clipMask->drawImage($draw);
    $imagick->setImageClipMask($clipMask);

    $imagick->negateImage(false);
    $imagick->setFormat("png");

    header("Content-Type: image/png");
    echo $imagick->getImagesBlob();
    
}

?>

      
```
