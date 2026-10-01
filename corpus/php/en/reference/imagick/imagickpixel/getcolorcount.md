---
id: "en-php-function-imagickpixel-getcolorcount"
language: "php"
lang: "en"
category: "function"
name: "ImagickPixel::getColorCount"
title: "Returns the color count associated with this color"
signature: "public int ImagickPixel::getColorCount()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickpixel.getcolorcount.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the color count associated with this color

## Description

```php
public int ImagickPixel::getColorCount()
```

Returns the color count associated with this color.

The color count is the number of pixels in the image that have the same color as this ImagickPixel.

ImagickPixel::getColorCount appears to only work for ImagickPixel objects created through Imagick::getImageHistogram()

## Parameters

This function has no parameters.

## Return Values

Returns the color count as an integer on success, throws ImagickPixelException on failure.

## Examples

**ImagickPixel `getColorCount()`**

```php

      
<?php
    $imagick = new \Imagick();
    $imagick->newPseudoImage(640, 480, "magick:logo");
    $histogramElements = $imagick->getImageHistogram();
    $lastColor = array_pop($histogramElements);
    echo "Last pixel color count is: ".$lastColor->getColorCount();
?>

      
```

The output for this will be similar to:

```php


Last pixel color count is: 256244

    
```
