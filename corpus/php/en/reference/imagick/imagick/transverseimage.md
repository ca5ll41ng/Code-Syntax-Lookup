---
id: "en-php-function-imagick-transverseimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::transverseImage"
title: "Creates a horizontal mirror image"
signature: "public bool Imagick::transverseImage()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.transverseimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a horizontal mirror image

## Description

```php
public bool Imagick::transverseImage()
```

Creates a horizontal mirror image by reflecting the pixels around the central y-axis while rotating them 270-degrees. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success.

## Examples

**`Imagick::transverseImage()`**

```php

      
<?php
function transverseImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->transverseImage();
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```

## See Also

`Imagick::transposeImage()`
