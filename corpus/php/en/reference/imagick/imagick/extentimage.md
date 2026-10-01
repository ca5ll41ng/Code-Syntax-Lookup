---
id: "en-php-function-imagick-extentimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::extentImage"
title: "Set image size"
signature: "public bool Imagick::extentImage(int $width, int $height, int $x, int $y)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.extentimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set image size

## Description

```php
public bool Imagick::extentImage(int $width, int $height, int $x, int $y)
```

Comfortability method for setting image size. The method sets the image size and allows setting x,y coordinates where the new area begins. This method is available if Imagick has been compiled against ImageMagick version 6.3.1 or newer.

> Prior to ImageMagick 6.5.7-8 (1623), $x was positive when shifting to the left and negative when shifting to the right, and $y was positive when shifting an image up and negative when shifting an image down. Somewhere between ImageMagick 6.3.7 (1591) and ImageMagick 6.5.7-8 (1623), the axes of $x and $y were flipped, so that $x was negative when shifting to the left and positive when shifting to the right, and $y was negative when shifting an image up and positive when shifting an image down. Somewhere between ImageMagick 6.5.7-8 (1623) and ImageMagick 6.6.9-7 (1641), the axes of $x and $y were flipped back to pre-ImageMagick 6.5.7-8 (1623) functionality.

## Parameters

- **`$width`** — The new width
- **`$height`** — The new height
- **`$x`** — X position for the new size
- **`$y`** — Y position for the new size

## Return Values

Returns `true` on success.

## See Also

`Imagick::resizeImage()` `Imagick::thumbnailImage()` `Imagick::cropImage()`
