---
id: "en-php-function-imagickpixeliterator-construct"
language: "php"
lang: "en"
category: "function"
name: "ImagickPixelIterator::__construct"
title: "The ImagickPixelIterator constructor"
signature: "public ImagickPixelIterator::__construct(Imagick $wand)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickpixeliterator.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The ImagickPixelIterator constructor

## Description

```php
public ImagickPixelIterator::__construct(Imagick $wand)
```

> This function is currently not documented; only its argument list is available.

The ImagickPixelIterator constructor

## Return Values

Returns `true` on success.

## Examples

**`ImagickPixelIterator::construct()`**

```php

      
<?php
function construct($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imageIterator = new \ImagickPixelIterator($imagick);

    /* Loop through pixel rows */
    foreach ($imageIterator as $pixels) { 
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

    header("Content-Type: image/jpg");
    echo $imagick;
}

?>

      
```
