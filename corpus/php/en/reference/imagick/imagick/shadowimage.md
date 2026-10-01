---
id: "en-php-function-imagick-shadowimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::shadowImage"
title: "Simulates an image shadow"
signature: "public bool Imagick::shadowImage(float $opacity, float $sigma, int $x, int $y)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.shadowimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Simulates an image shadow

## Description

```php
public bool Imagick::shadowImage(float $opacity, float $sigma, int $x, int $y)
```

Simulates an image shadow.

## Parameters

- **`$opacity`**
- **`$sigma`**
- **`$x`**
- **`$y`**

## Return Values

Returns `true` on success.

## Examples

**`Imagick::shadowImage()`**

```php

      
<?php
function shadowImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->shadowImage(0.4, 10, 50, 5);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
