---
id: "en-php-function-imagick-setsamplingfactors"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setSamplingFactors"
title: "Sets the image sampling factors"
signature: "public bool Imagick::setSamplingFactors(array $factors)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setsamplingfactors.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the image sampling factors

## Description

```php
public bool Imagick::setSamplingFactors(array $factors)
```

Sets the image sampling factors.

## Parameters

- **`$factors`**

## Return Values

Returns `true` on success.

## Examples

**`Imagick::setSamplingFactors()`**

```php

      
<?php
function setSamplingFactors($imagePath) {

    $imagePath = "../imagick/images/FineDetail.png";
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->setImageFormat('jpg');
    $imagick->setSamplingFactors(array('2x2', '1x1', '1x1'));

    $compressed = $imagick->getImageBlob();

    
    $reopen = new \Imagick();
    $reopen->readImageBlob($compressed);

    $reopen->resizeImage(
        $reopen->getImageWidth() * 4,
        $reopen->getImageHeight() * 4,
        \Imagick::FILTER_POINT,
        1
    );
    
    header("Content-Type: image/jpg");
    echo $reopen->getImageBlob();
}

?>

      
```
