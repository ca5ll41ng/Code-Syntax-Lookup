---
id: "en-php-function-imagick-forwardfouriertransformimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::forwardFourierTransformImage"
title: "Implements the discrete Fourier transform (DFT)"
signature: "public bool Imagick::forwardFourierTransformimage(bool $magnitude)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.forwardfouriertransformimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Implements the discrete Fourier transform (DFT)

## Description

```php
public bool Imagick::forwardFourierTransformimage(bool $magnitude)
```

Implements the discrete Fourier transform (DFT) of the image either as a magnitude / phase or real / imaginary image pair.

## Parameters

- **`$magnitude`** — If true, return as magnitude / phase pair otherwise a real / imaginary image pair.

## Return Values

Returns `true` on success.

## Examples

**`Imagick::forwardFourierTransformImage()`**

```php

      
<?php
//Utility function for forwardTransformImage
function createMask() {
    $draw = new \ImagickDraw();

    $draw->setStrokeOpacity(0);
    $draw->setStrokeColor('rgb(255, 255, 255)');
    $draw->setFillColor('rgb(255, 255, 255)');

    //Draw a circle on the y-axis, with its centre
    //at x, y that touches the origin
    $draw->circle(250, 250, 220, 250);

    $imagick = new \Imagick();
    $imagick->newImage(512, 512, "black");
    $imagick->drawImage($draw);
    $imagick->gaussianBlurImage(20, 20);
    $imagick->autoLevelImage();

    return $imagick;
}


function forwardFourierTransformImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->resizeimage(512, 512, \Imagick::FILTER_LANCZOS, 1);

    $mask = createMask();
    $imagick->forwardFourierTransformImage(true);

    @$imagick->setimageindex(0);
    $magnitude = $imagick->getimage();

    @$imagick->setimageindex(1);
    $imagickPhase = $imagick->getimage();

    if (true) {
        $imagickPhase->compositeImage($mask, \Imagick::COMPOSITE_MULTIPLY, 0, 0);
    }

    if (false) {
        $output = clone $imagickPhase;
        $output->setimageformat('png');
        header("Content-Type: image/png");
        echo $output->getImageBlob();
    }

    $magnitude->inverseFourierTransformImage($imagickPhase, true);

    $magnitude->setimageformat('png');
    header("Content-Type: image/png");
    echo $magnitude->getImageBlob();
}

?>

      
```
