---
id: "en-php-function-imagick-liquidrescaleimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::liquidRescaleImage"
title: "Animates an image or images"
signature: "public bool Imagick::liquidRescaleImage(int $width, int $height, float $delta_x, float $rigidity)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.liquidrescaleimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Animates an image or images

## Description

```php
public bool Imagick::liquidRescaleImage(int $width, int $height, float $delta_x, float $rigidity)
```

This method scales the images using liquid rescaling method. This method is an implementation of a technique called seam carving. In order for this method to work as expected ImageMagick must be compiled with liblqr support. This method is available if Imagick has been compiled against ImageMagick version 6.3.9 or newer.

## Parameters

- **`$width`** — The width of the target size
- **`$height`** — The height of the target size
- **`$delta_x`** — How much the seam can traverse on x-axis. Passing 0 causes the seams to be straight.
- **`$rigidity`** — Introduces a bias for non-straight seams. This parameter is typically 0.

## Return Values

Returns `true` on success.

## See Also

`Imagick::resizeImage()`
