---
id: "en-php-function-imagick-flipimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::flipImage"
title: "Creates a vertical mirror image"
signature: "public bool Imagick::flipImage()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.flipimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a vertical mirror image

## Description

```php
public bool Imagick::flipImage()
```

Creates a vertical mirror image by reflecting the pixels around the central x-axis.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::flipImage()`**

```php

      
<?php
function flipImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->flipImage();
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```

## See Also

 `Imagick::flopimage()`
