---
id: "en-php-function-imagick-getsize"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getSize"
title: "Returns the size associated with the Imagick object"
signature: "public array Imagick::getSize()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getsize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the size associated with the Imagick object

## Description

```php
public array Imagick::getSize()
```

Get the size in pixels associated with the Imagick object, previously set by `Imagick::setSize()`.

> This method just returns the size that was set using `Imagick::setSize()`. If you want to get the actual width / height of the image, use `Imagick::getImageWidth()` and `Imagick::getImageHeight()`.

## Parameters

This function has no parameters.

## Return Values

Returns the size associated with the Imagick object as an array with the keys "columns" and "rows".

## Examples

**Getting the size of a raw RGB image set at 200x400, after scaling to 400x800 (compared to width / height)**

```php


<?php
//Set size first and then load the raw image
$img = new Imagick();
$img->setSize(200, 400);
$img->readImage("image.rgb");

$img->scaleImage(400, 800);

$size = $img->getSize();
print_r($size);

echo $img->getImageWidth()."x".$img->getImageHeight();
?>

    
```

The above example will output:

```text


Array
(
    [columns] => 200
    [rows] => 400
)
400x800

    
```
