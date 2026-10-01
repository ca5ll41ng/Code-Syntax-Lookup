---
id: "en-php-function-imagick-rollimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::rollImage"
title: "Offsets an image"
signature: "public bool Imagick::rollImage(int $x, int $y)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.rollimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Offsets an image

## Description

```php
public bool Imagick::rollImage(int $x, int $y)
```

Offsets an image as defined by x and y.

## Parameters

- **`$x`** — The X offset.
- **`$y`** — The Y offset.

## Return Values

Returns `true` on success.

## Examples

**`Imagick::rollImage()`**

```php

      
<?php
function rollImage($imagePath, $rollX, $rollY) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->rollimage($rollX, $rollY);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
