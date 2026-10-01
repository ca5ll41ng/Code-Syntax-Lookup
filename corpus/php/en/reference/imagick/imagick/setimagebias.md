---
id: "en-php-function-imagick-setimagebias"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setImageBias"
title: "Sets the image bias for any method that convolves an image"
signature: "public bool Imagick::setImageBias(float $bias)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setimagebias.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the image bias for any method that convolves an image

## Description

```php
public bool Imagick::setImageBias(float $bias)
```

Sets the image bias for any method that convolves an image (e.g. Imagick::ConvolveImage()).

## Parameters

- **`$bias`**

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::setImageBias()`**

```php

      
<?php
//requires ImageMagick version 6.9.0-1 to have an effect on convolveImage
function setImageBias($bias) {
    $imagick = new \Imagick(realpath("images/stack.jpg"));

    $xKernel = array(
        -0.70, 0, 0.70,
        -0.70, 0, 0.70,
        -0.70, 0, 0.70
    );

    $imagick->setImageBias($bias * \Imagick::getQuantum());
    $imagick->convolveImage($xKernel, \Imagick::CHANNEL_ALL);

    $imagick->setImageFormat('png');
    
    header('Content-type: image/png');
    echo $imagick->getImageBlob();
}

?>

      
```
