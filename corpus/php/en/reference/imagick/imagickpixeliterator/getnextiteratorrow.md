---
id: "en-php-function-imagickpixeliterator-getnextiteratorrow"
language: "php"
lang: "en"
category: "function"
name: "ImagickPixelIterator::getNextIteratorRow"
title: "Returns the next row of the pixel iterator"
signature: "public array ImagickPixelIterator::getNextIteratorRow()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickpixeliterator.getnextiteratorrow.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the next row of the pixel iterator

## Description

```php
public array ImagickPixelIterator::getNextIteratorRow()
```

> This function is currently not documented; only its argument list is available.

Returns the next row as an array of pixel wands from the pixel iterator.

## Return Values

Returns the next row as an array of ImagickPixel objects, throwing ImagickPixelIteratorException on error.

## Examples

**`ImagickPixelIterator::getNextIteratorRow()`**

```php

      
<?php
function getNextIteratorRow($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imageIterator = $imagick->getPixelIterator();

    $count = 0;
    while ($pixels = $imageIterator->getNextIteratorRow()) {
        if (($count % 3) == 0) {
            /* Loop through the pixels in the row (columns) */
            foreach ($pixels as $column => $pixel) { 
                /** @var $pixel \ImagickPixel */
                if ($column % 2) {
                    /* Paint every second pixel black*/
                    $pixel->setColor("rgba(0, 0, 0, 0)");
                }
            }
            /* Sync the iterator, this is important to do on each iteration */
            $imageIterator->syncIterator(); 
        }

        $count += 1;
    }

    header("Content-Type: image/jpg");
    echo $imagick;
}

?>

      
```
