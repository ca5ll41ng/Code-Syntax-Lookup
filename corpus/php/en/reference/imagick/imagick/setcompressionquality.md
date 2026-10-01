---
id: "en-php-function-imagick-setcompressionquality"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setCompressionQuality"
title: "Sets the object's default compression quality"
signature: "public bool Imagick::setCompressionQuality(int $quality)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setcompressionquality.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the object's default compression quality

## Description

```php
public bool Imagick::setCompressionQuality(int $quality)
```

Sets the object's default compression quality.

> This method only works for new images e.g. those created through Imagick::newPseudoImage. For existing images you should use `Imagick::setImageCompressionQuality()`.

## Parameters

- **`$quality`** — An `integer` between 1 and 100, 1 = high compression, 100 low compression.

## Return Values

Returns `true` on success.

## Examples

**`Imagick::setCompressionQuality()`**

```php

      
<?php
function setCompressionQuality($imagePath, $quality) {

    $backgroundImagick = new \Imagick(realpath($imagePath));
    $imagick = new \Imagick();
    $imagick->setCompressionQuality($quality);
    $imagick->newPseudoImage(
        $backgroundImagick->getImageWidth(),
        $backgroundImagick->getImageHeight(),
        'canvas:white'
    );

    $imagick->compositeImage(
        $backgroundImagick,
        \Imagick::COMPOSITE_ATOP,
        0,
        0
    );
    
    $imagick->setFormat("jpg");    
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
