---
id: "en-php-function-imagick-getimagehistogram"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getImageHistogram"
title: "Gets the image histogram"
signature: "public array Imagick::getImageHistogram()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getimagehistogram.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the image histogram

## Description

```php
public array Imagick::getImageHistogram()
```

Returns the image histogram as an array of ImagickPixel objects.

## Parameters

This function has no parameters.

## Return Values

Returns the image histogram as an array of ImagickPixel objects.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**Generates `Imagick::getImageHistogram()`**

```php

      
<?php
function getColorStatistics($histogramElements, $colorChannel) {
    $colorStatistics = [];

    foreach ($histogramElements as $histogramElement) {
        $color = $histogramElement->getColorValue($colorChannel);
        $color = intval($color * 255);
        $count = $histogramElement->getColorCount();

        if (array_key_exists($color, $colorStatistics)) {
            $colorStatistics[$color] += $count;
        }
        else {
            $colorStatistics[$color] = $count;
        }
    }

    ksort($colorStatistics);
    
    return $colorStatistics;
}
    


function getImageHistogram($imagePath) {

    $backgroundColor = 'black';

    $draw = new \ImagickDraw();
    $draw->setStrokeWidth(0); //make the lines be as thin as possible

    $imagick = new \Imagick();
    $imagick->newImage(500, 500, $backgroundColor);
    $imagick->setImageFormat("png");
    $imagick->drawImage($draw);

    $histogramWidth = 256;
    $histogramHeight = 100; // the height for each RGB segment

    $imagick = new \Imagick(realpath($imagePath));
    //Resize the image to be small, otherwise PHP tends to run out of memory
    //This might lead to bad results for images that are pathologically 'pixelly'
    $imagick->adaptiveResizeImage(200, 200, true);
    $histogramElements = $imagick->getImageHistogram();

    $histogram = new \Imagick();
    $histogram->newpseudoimage($histogramWidth, $histogramHeight * 3, 'xc:black');
    $histogram->setImageFormat('png');

    $getMax = function ($carry, $item)  {
        if ($item > $carry) {
            return $item;
        }
        return $carry;
    };

    $colorValues = [
        'red' => getColorStatistics($histogramElements, \Imagick::COLOR_RED),
        'lime' => getColorStatistics($histogramElements, \Imagick::COLOR_GREEN),
        'blue' => getColorStatistics($histogramElements, \Imagick::COLOR_BLUE),
    ];

    $max = array_reduce($colorValues['red'] , $getMax, 0);
    $max = array_reduce($colorValues['lime'] , $getMax, $max);
    $max = array_reduce($colorValues['blue'] , $getMax, $max);

    $scale =  $histogramHeight / $max;

    $count = 0;
    foreach ($colorValues as $color => $values) {
        $draw->setstrokecolor($color);

        $offset = ($count + 1) * $histogramHeight;

        foreach ($values as $index => $value) {
            $draw->line($index, $offset, $index, $offset - ($value * $scale));
        }
        $count++;
    }

    $histogram->drawImage($draw);
    
    header( "Content-Type: image/png" );
    echo $histogram;
}

?>

      
```
