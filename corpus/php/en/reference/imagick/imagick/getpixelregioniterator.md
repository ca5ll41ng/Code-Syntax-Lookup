---
id: "en-php-function-imagick-getpixelregioniterator"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getPixelRegionIterator"
title: "Get an ImagickPixelIterator for an image section"
signature: "public ImagickPixelIterator Imagick::getPixelRegionIterator(int $x, int $y, int $columns, int $rows)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getpixelregioniterator.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get an ImagickPixelIterator for an image section

## Description

```php
public ImagickPixelIterator Imagick::getPixelRegionIterator(int $x, int $y, int $columns, int $rows)
```

Get an ImagickPixelIterator for an image section.

## Parameters

- **`$x`** — The x-coordinate of the region.
- **`$y`** — The y-coordinate of the region.
- **`$columns`** — The width of the region.
- **`$rows`** — The height of the region.

## Return Values

Returns an ImagickPixelIterator for an image section.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

 {{{ 

**`Imagick::getPixelRegionIterator()` example**

 {{{ 

Iterate over the pixels in the top left of the image, changing them to be black.

```php

     
<?php
$im = new Imagick(realpath("./testImage.png"));
$areaIterator = $im->getPixelRegionIterator(0, 0, 10, 10);

foreach ($areaIterator as $rowIterator) {
    foreach ($rowIterator as $pixel) {
        // Paint every pixel black
        $pixel->setColor("rgba(0, 0, 0, 0)");
    }
    $areaIterator->syncIterator();
}
$im->writeImage("./output.png");
?>

    
```

 }}}
