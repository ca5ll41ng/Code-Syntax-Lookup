---
id: "en-php-function-imagick-waveimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::waveImage"
title: "Applies wave filter to the image"
signature: "public bool Imagick::waveImage(float $amplitude, float $length)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.waveimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Applies wave filter to the image

## Description

```php
public bool Imagick::waveImage(float $amplitude, float $length)
```

Applies a wave filter to the image. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

## Parameters

- **`$amplitude`** — The amplitude of the wave.
- **`$length`** — The length of the wave.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**WaveImage can be quite slow `Imagick::waveImage()`**

```php

      
<?php
function waveImage($imagePath, $amplitude, $length) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->waveImage($amplitude, $length);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```

## See Also

`Imagick::solarizeImage()` `Imagick::oilpaintImage()` `Imagick::embossImage()` `Imagick::addNoiseImage()` `Imagick::swirlImage()`
