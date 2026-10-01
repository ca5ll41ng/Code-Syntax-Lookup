---
id: "en-php-function-imagick-spliceimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::spliceImage"
title: "Splices a solid color into the image"
signature: "public bool Imagick::spliceImage(int $width, int $height, int $x, int $y)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.spliceimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Splices a solid color into the image

## Description

```php
public bool Imagick::spliceImage(int $width, int $height, int $x, int $y)
```

Splices a solid color into the image.

## Parameters

- **`$width`**
- **`$height`**
- **`$x`**
- **`$y`**

## Return Values

Returns `true` on success.

## Examples

**`Imagick::spliceImage()`**

```php

      
<?php
function spliceImage($imagePath, $startX, $startY, $width, $height) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->spliceImage($width, $height, $startX, $startY);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
