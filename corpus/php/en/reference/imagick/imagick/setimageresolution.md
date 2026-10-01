---
id: "en-php-function-imagick-setimageresolution"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setImageResolution"
title: "Sets the image resolution"
signature: "public bool Imagick::setImageResolution(float $x_resolution, float $y_resolution)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setimageresolution.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the image resolution

## Description

```php
public bool Imagick::setImageResolution(float $x_resolution, float $y_resolution)
```

Sets the image resolution.

## Parameters

- **`$x_resolution`**
- **`$y_resolution`**

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::setImageResolution()`**

```php

      
<?php
function setImageResolution($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->setImageResolution(50, 50);
    
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
