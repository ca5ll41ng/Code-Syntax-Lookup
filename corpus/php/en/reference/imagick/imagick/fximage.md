---
id: "en-php-function-imagick-fximage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::fxImage"
title: "Evaluate expression for each pixel in the image"
signature: "public Imagick Imagick::fxImage(string $expression, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.fximage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Evaluate expression for each pixel in the image

## Description

```php
public Imagick Imagick::fxImage(string $expression, int $channel = Imagick::CHANNEL_DEFAULT)
```

Evaluate expression for each pixel in the image. Consult [The Fx Special Effects Image Operator](script/fx.php) for more information.

## Parameters

- **`$expression`** — The expression.
- **`$channel`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::fxImage()`**

```php

      
<?php
function fxImage() {
    $imagick = new \Imagick();
    $imagick->newPseudoImage(200, 200, "xc:white");

    $fx = 'xx=i-w/2; yy=j-h/2; rr=hypot(xx,yy); (.5-rr/140)*1.2+.5';
    $fxImage = $imagick->fxImage($fx);

    header("Content-Type: image/png");
    $fxImage->setimageformat('png');
    echo $fxImage->getImageBlob();
}

?>

      
```
