---
id: "en-php-function-imagick-quantizeimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::quantizeImage"
title: "Analyzes the colors within a reference image"
signature: "public bool Imagick::quantizeImage(int $numberColors, int $colorspace, int $treedepth, bool $dither, bool $measureError)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.quantizeimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Analyzes the colors within a reference image

## Description

```php
public bool Imagick::quantizeImage(int $numberColors, int $colorspace, int $treedepth, bool $dither, bool $measureError)
```

## Parameters

- **`$numberColors`**
- **`$colorspace`**
- **`$treedepth`**
- **`$dither`**
- **`$measureError`**

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::quantizeImage()`**

```php

      
<?php
function quantizeImage($imagePath, $numberColors, $colorSpace, $treeDepth, $dither) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->quantizeImage($numberColors, $colorSpace, $treeDepth, $dither, false);
    $imagick->setImageFormat('png');
    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>

      
```
