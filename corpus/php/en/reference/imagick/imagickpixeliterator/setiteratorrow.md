---
id: "en-php-function-imagickpixeliterator-setiteratorrow"
language: "php"
lang: "en"
category: "function"
name: "ImagickPixelIterator::setIteratorRow"
title: "Set the pixel iterator row"
signature: "public bool ImagickPixelIterator::setIteratorRow(int $row)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickpixeliterator.setiteratorrow.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the pixel iterator row

## Description

```php
public bool ImagickPixelIterator::setIteratorRow(int $row)
```

> This function is currently not documented; only its argument list is available.

Set the pixel iterator row.

## Parameters

- **`$row`**

## Return Values

Returns `true` on success.

## Examples

**`ImagickPixelIterator::setIteratorRow()`**

```php

      
<?php
function setIteratorRow($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imageIterator = $imagick->getPixelRegionIterator(200, 100, 200, 200);

    for ($x = 0; $x < 20; $x++) {        
        $imageIterator->setIteratorRow($x * 5);
        $pixels = $imageIterator->getCurrentIteratorRow();
        /* Loop through the pixels in the row (columns) */
        foreach ($pixels as $pixel) {
            /** @var $pixel \ImagickPixel */
            /* Paint every second pixel black*/
            $pixel->setColor("rgba(0, 0, 0, 0)"); 
        }

        /* Sync the iterator, this is important to do on each iteration */
        $imageIterator->syncIterator();
    }

    header("Content-Type: image/jpg");
    echo $imagick;
}

?>

      
```
