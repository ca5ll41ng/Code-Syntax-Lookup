---
id: "en-php-function-imagick-spreadimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::spreadImage"
title: "Randomly displaces each pixel in a block"
signature: "public bool Imagick::spreadImage(float $radius)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.spreadimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Randomly displaces each pixel in a block

## Description

```php
public bool Imagick::spreadImage(float $radius)
```

Special effects method that randomly displaces each pixel in a block defined by the radius parameter.

## Parameters

- **`$radius`**

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::spreadImage()`**

```php

      
<?php
function spreadImage($imagePath, $radius) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->spreadImage($radius);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
