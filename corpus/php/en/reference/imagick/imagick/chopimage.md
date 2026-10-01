---
id: "en-php-function-imagick-chopimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::chopImage"
title: "Removes a region of an image and trims"
signature: "public bool Imagick::chopImage(int $width, int $height, int $x, int $y)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.chopimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes a region of an image and trims

## Description

```php
public bool Imagick::chopImage(int $width, int $height, int $x, int $y)
```

Removes a region of an image and collapses the image to occupy the removed portion.

## Parameters

- **`$width`** — Width of the chopped area
- **`$height`** — Height of the chopped area
- **`$x`** — X origo of the chopped area
- **`$y`** — Y origo of the chopped area

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**Using `Imagick::chopImage()`:**

Example of using Imagick::chopImage

```php


<?php
/* Create some objects */
$image = new Imagick();
$pixel = new ImagickPixel( 'gray' );

/* New image */
$image->newImage(400, 200, $pixel);

/* Chop image */
$image->chopImage(200, 200, 0, 0);

/* Give image a format */
$image->setImageFormat('png');

/* Output the image with headers */
header('Content-type: image/png');
echo $image;

?>

    
```

## See Also

`Imagick::cropImage()`
