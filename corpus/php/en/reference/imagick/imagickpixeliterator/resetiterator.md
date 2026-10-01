---
id: "en-php-function-imagickpixeliterator-resetiterator"
language: "php"
lang: "en"
category: "function"
name: "ImagickPixelIterator::resetIterator"
title: "Resets the pixel iterator"
signature: "public bool ImagickPixelIterator::resetIterator()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickpixeliterator.resetiterator.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Resets the pixel iterator

## Description

```php
public bool ImagickPixelIterator::resetIterator()
```

> This function is currently not documented; only its argument list is available.

Resets the pixel iterator. Use it in conjunction with ImagickPixelIterator::getNextIteratorRow() to iterate over all the pixels in a pixel container.

## Return Values

Returns `true` on success.

## Examples

**`ImagickPixelIterator::resetIterator()`**

```php

      
<?php
function resetIterator($imagePath) {

    $imagick = new \Imagick(realpath($imagePath));

    $imageIterator = $imagick->getPixelIterator();

    /* Loop through pixel rows */
    foreach ($imageIterator as $pixels) {
        /* Loop through the pixels in the row (columns) */
        foreach ($pixels as $column => $pixel) {
            /** @var $pixel \ImagickPixel */
            if ($column % 2) {

                /* Make every second pixel 25% red*/
                $pixel->setColorValue(\Imagick::COLOR_RED, 64); 
            }
        }
        /* Sync the iterator, this is important to do on each iteration */
        $imageIterator->syncIterator();
    }

    $imageIterator->resetiterator();

    /* Loop through pixel rows */
    foreach ($imageIterator as $pixels) {
        /* Loop through the pixels in the row (columns) */
        foreach ($pixels as $column => $pixel) {
            /** @var $pixel \ImagickPixel */
            if ($column % 3) {
                $pixel->setColorValue(\Imagick::COLOR_BLUE, 64); /* Make every second pixel a little blue*/
                //$pixel->setColor("rgba(0, 0, 128, 0)"); /* Paint every second pixel black*/
            }
        }
        $imageIterator->syncIterator(); /* Sync the iterator, this is important to do on each iteration */
    }

    $imageIterator->clear();

    header("Content-Type: image/jpg");
    echo $imagick;
}

?>

      
```
