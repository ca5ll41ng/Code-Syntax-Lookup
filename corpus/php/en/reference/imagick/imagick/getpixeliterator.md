---
id: "en-php-function-imagick-getpixeliterator"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getPixelIterator"
title: "Returns a MagickPixelIterator"
signature: "public ImagickPixelIterator Imagick::getPixelIterator()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getpixeliterator.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a MagickPixelIterator

## Description

```php
public ImagickPixelIterator Imagick::getPixelIterator()
```

Returns a MagickPixelIterator.

## Parameters

This function has no parameters.

## Return Values

Returns an ImagickPixelIterator on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::getPixelIterator()`**

```php

      
<?php
function getPixelIterator($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imageIterator = $imagick->getPixelIterator();

    foreach ($imageIterator as $row => $pixels) { /* Loop through pixel rows */
        foreach ($pixels as $column => $pixel) { /* Loop through the pixels in the row (columns) */
            /** @var $pixel \ImagickPixel */
            if ($column % 2) {
                $pixel->setColor("rgba(0, 0, 0, 0)"); /* Paint every second pixel black*/
            }
        }
        $imageIterator->syncIterator(); /* Sync the iterator, this is important to do on each iteration */
    }

    header("Content-Type: image/jpg");
    echo $imagick;
}

?>

      
```
