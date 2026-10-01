---
id: "en-php-function-imagick-vignetteimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::vignetteImage"
title: "Adds vignette filter to the image"
signature: "public bool Imagick::vignetteImage(float $blackPoint, float $whitePoint, int $x, int $y)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.vignetteimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds vignette filter to the image

## Description

```php
public bool Imagick::vignetteImage(float $blackPoint, float $whitePoint, int $x, int $y)
```

Softens the edges of the image in vignette style. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

## Parameters

- **`$blackPoint`** — The black point.
- **`$whitePoint`** — The white point
- **`$x`** — X offset of the ellipse
- **`$y`** — Y offset of the ellipse

## Return Values

Returns `true` on success.

## Examples

**`Imagick::vignetteImage()`**

```php

      
<?php
function vignetteImage($imagePath, $blackPoint, $whitePoint, $x, $y) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->vignetteImage($blackPoint, $whitePoint, $x, $y);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```

## See Also

`Imagick::waveImage()` `Imagick::swirlImage()`
