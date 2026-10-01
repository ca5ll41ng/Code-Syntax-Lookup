---
id: "en-php-function-imagick-appendimages"
language: "php"
lang: "en"
category: "function"
name: "Imagick::appendImages"
title: "Append a set of images"
signature: "public Imagick Imagick::appendImages(bool $stack)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.appendimages.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Append a set of images

## Description

```php
public Imagick Imagick::appendImages(bool $stack)
```

Append a set of images into one larger image.

## Parameters

- **`$stack`** — Whether to stack the images vertically. By default (or if `false` is specified) images are stacked left-to-right. If `$stack` is `true`, images are stacked top-to-bottom.

## Return Values

Returns Imagick instance on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::appendImages()` example**

```php


<?php

/* Create new imagick object */
$im = new Imagick();

/* create red, green and blue images */
$im->newImage(100, 50, "red");
$im->newImage(100, 50, "green");
$im->newImage(100, 50, "blue");

/* Append the images into one */
$im->resetIterator();
$combined = $im->appendImages(true);

/* Output the image */
$combined->setImageFormat("png");
header("Content-Type: image/png");
echo $combined;
?>

    
```

The above example will output something similar to:
