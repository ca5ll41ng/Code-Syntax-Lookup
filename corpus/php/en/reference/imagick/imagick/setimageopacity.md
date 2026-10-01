---
id: "en-php-function-imagick-setimageopacity"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setImageOpacity"
title: "Sets the image opacity level"
signature: "public bool Imagick::setImageOpacity(float $opacity)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setimageopacity.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the image opacity level

## Description

```php
public bool Imagick::setImageOpacity(float $opacity)
```

Sets the image to the specified opacity level. This method is available if Imagick has been compiled against ImageMagick version 6.3.1 or newer. This method operates on all channels, which means that for example opacity value of 0.5 will set all transparent areas to partially opaque. To add transparency to areas that are not already transparent use Imagick::evaluateImage()

## Parameters

- **`$opacity`** — The level of transparency: 1.0 is fully opaque and 0.0 is fully transparent.

## Return Values

Returns `true` on success.

## Examples

**A `Imagick::setImageOpacity()` example**

An example of using Imagick::setImageOpacity()

```php


<?php
/* Create the object */
$image = new Imagick('source.png');

/* Set the opacity */
$image->setImageOpacity(0.7);

/* output the image */
header('Content-type: image/png');
echo $image;

?>

    
```
