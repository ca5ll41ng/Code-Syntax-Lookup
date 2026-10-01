---
id: "en-php-function-imagick-getiteratorindex"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getIteratorIndex"
title: "Gets the index of the current active image"
signature: "public int Imagick::getIteratorIndex()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getiteratorindex.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the index of the current active image

## Description

```php
public int Imagick::getIteratorIndex()
```

Returns the index of the current active image within the Imagick object. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

## Parameters

This function has no parameters.

## Return Values

Returns an integer containing the index of the image in the stack.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**Using `Imagick::getIteratorIndex()`:**

Create images, set and get the iterator index

```php


<?php
$im = new Imagick();
$im->newImage(100, 100, new ImagickPixel("red"));
$im->newImage(100, 100, new ImagickPixel("green"));
$im->newImage(100, 100, new ImagickPixel("blue"));

$im->setIteratorIndex(1);
echo $im->getIteratorIndex();
?>

    
```

## See Also

`Imagick::setIteratorIndex()` `Imagick::getImageIndex()` `Imagick::setImageIndex()`
