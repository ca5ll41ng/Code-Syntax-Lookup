---
id: "en-php-function-imagick-transformimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::transformImage"
title: "Convenience method for setting crop size and the image geometry"
signature: "public Imagick Imagick::transformImage(string $crop, string $geometry)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.transformimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Convenience method for setting crop size and the image geometry

## Description

```php
public Imagick Imagick::transformImage(string $crop, string $geometry)
```

A convenience method for setting crop size and the image geometry from strings. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

## Parameters

- **`$crop`** — A crop geometry string. This geometry defines a subregion of the image to crop.
- **`$geometry`** — An image geometry string. This geometry defines the final size of the image.

## Return Values

Returns an Imagick object containing the transformed image.

## Examples

**Using `Imagick::transformImage()`:**

The example creates a 100x100 black image.

```php


<?php
$image = new Imagick();
$image->newImage(300, 200, "black");
$new_image = $image->transformImage("100x100", "100x100");
$new_image->writeImage('test_out.jpg');
?>

    
```

## See Also

`Imagick::cropImage()` `Imagick::resizeImage()` `Imagick::thumbnailImage()`
