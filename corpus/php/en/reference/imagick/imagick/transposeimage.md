---
id: "en-php-function-imagick-transposeimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::transposeImage"
title: "Creates a vertical mirror image"
signature: "public bool Imagick::transposeImage()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.transposeimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a vertical mirror image

## Description

```php
public bool Imagick::transposeImage()
```

Creates a vertical mirror image by reflecting the pixels around the central x-axis while rotating them 90-degrees. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success.

## Examples

**`Imagick::transposeImage()`**

```php

      
<?php
function transposeImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->transposeImage();
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```

## See Also

`Imagick::transverseImage()`
