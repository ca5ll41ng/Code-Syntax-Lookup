---
id: "en-php-function-imagickpixeliterator-clear"
language: "php"
lang: "en"
category: "function"
name: "ImagickPixelIterator::clear"
title: "Clear resources associated with a PixelIterator"
signature: "public bool ImagickPixelIterator::clear()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickpixeliterator.clear.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Clear resources associated with a PixelIterator

## Description

```php
public bool ImagickPixelIterator::clear()
```

> This function is currently not documented; only its argument list is available.

Clear resources associated with a PixelIterator.

## Return Values

Returns `true` on success.

## Examples

**`ImagickPixelIterator::clear()`**

```php

      
<?php
function clear($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));

    $imageIterator = $imagick->getPixelRegionIterator(100, 100, 250, 200);

    /* Loop through pixel rows */
    foreach ($imageIterator as $pixels) { 
        /** @var $pixel \ImagickPixel */
        /* Loop through the pixels in the row (columns) */
        foreach ($pixels as $column => $pixel) { 
            if ($column % 2) {
                /* Paint every second pixel black*/
                $pixel->setColor("rgba(0, 0, 0, 0)"); 
            }
        }
        /* Sync the iterator, this is important to do on each iteration */
        $imageIterator->syncIterator();
    }

    $imageIterator->clear();

    header("Content-Type: image/jpg");
    echo $imagick;
}

?>

      
```
