---
id: "en-php-function-imagick-contrastimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::contrastImage"
title: "Change the contrast of the image"
signature: "public bool Imagick::contrastImage(bool $sharpen)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.contrastimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Change the contrast of the image

## Description

```php
public bool Imagick::contrastImage(bool $sharpen)
```

Enhances the intensity differences between the lighter and darker elements of the image. Set sharpen to a value other than 0 to increase the image contrast otherwise the contrast is reduced.

## Parameters

- **`$sharpen`** — The sharpen value

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::contrastImage()`**

```php

      
<?php
function contrastImage($imagePath, $contrastType) {
    $imagick = new \Imagick(realpath($imagePath));
    if ($contrastType != 2) {
        $imagick->contrastImage($contrastType);
    }

    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
