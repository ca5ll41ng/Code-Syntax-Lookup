---
id: "en-php-function-imagick-flopimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::flopImage"
title: "Creates a horizontal mirror image"
signature: "public bool Imagick::flopImage()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.flopimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a horizontal mirror image

## Description

```php
public bool Imagick::flopImage()
```

Creates a horizontal mirror image by reflecting the pixels around the central y-axis.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::flopImage()`**

```php

      
<?php
function flopImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->flopImage();
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```

## See Also

 `Imagick::flipimage()`
