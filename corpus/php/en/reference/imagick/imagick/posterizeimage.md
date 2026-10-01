---
id: "en-php-function-imagick-posterizeimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::posterizeImage"
title: "Reduces the image to a limited number of color level"
signature: "public bool Imagick::posterizeImage(int $levels, bool $dither)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.posterizeimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Reduces the image to a limited number of color level

## Description

```php
public bool Imagick::posterizeImage(int $levels, bool $dither)
```

Reduces the image to a limited number of color level.

## Parameters

- **`$levels`**
- **`$dither`**

## Return Values

Returns `true` on success.

## Examples

**`Imagick::posterizeImage()`**

```php

      
<?php
function posterizeImage($imagePath, $posterizeType, $numberLevels) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->posterizeImage($numberLevels, $posterizeType);
    $imagick->setImageFormat('png');
    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

posterizeImage($imagePath, \Imagick::DITHERMETHOD_RIEMERSMA, 8);

?>

      
```
