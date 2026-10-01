---
id: "en-php-function-imagick-trimimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::trimImage"
title: "Remove edges from the image"
signature: "public bool Imagick::trimImage(float $fuzz)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.trimimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Remove edges from the image

## Description

```php
public bool Imagick::trimImage(float $fuzz)
```

Remove edges that are the background color from the image. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

## Parameters

- **`$fuzz`** — By default target must match a particular pixel color exactly. However, in many cases two colors may differ by a small amount. The fuzz member of image defines how much tolerance is acceptable to consider two colors as the same. This parameter represents the variation on the quantum range.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**Using `Imagick::trimImage()`:**

Trim an image, then display to the browser.

```php


<?php
/* Create the object and read the image in */
$im = new Imagick("image.jpg");

/* Trim the image. */
$im->trimImage(0);

/* Output the image */
header("Content-Type: image/" . $im->getImageFormat());
echo $im;
?>

    
```

## See Also

`Imagick::getQuantumDepth()` `Imagick::getQuantumRange()` `imagecropauto()`
