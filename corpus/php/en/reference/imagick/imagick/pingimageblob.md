---
id: "en-php-function-imagick-pingimageblob"
language: "php"
lang: "en"
category: "function"
name: "Imagick::pingImageBlob"
title: "Quickly fetch attributes"
signature: "public bool Imagick::pingImageBlob(string $image)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.pingimageblob.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Quickly fetch attributes

## Description

```php
public bool Imagick::pingImageBlob(string $image)
```

This method can be used to query image width, height, size, and format without reading the whole image to memory. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

## Parameters

- **`$image`** — A string containing the image.

## Return Values

Returns `true` on success.

## Examples

**Using `Imagick::pingImageBlob()`**

Pinging an image from a string

```php


<?php
/* read image contents */
$image = file_get_contents("test.jpg");

/* create new imagick object */
$im = new Imagick();

/* pass the string to the imagick object */
$im->pingImageBlob($image);

/* output image width and height */
echo $im->getImageWidth() . 'x' . $im->getImageHeight();
?>

    
```

## See Also

`Imagick::pingImage()` `Imagick::pingImageFile()` `Imagick::readImage()` `Imagick::readImageBlob()` `Imagick::readImageFile()`
