---
id: "en-php-function-imagick-transformimagecolorspace"
language: "php"
lang: "en"
category: "function"
name: "Imagick::transformImageColorspace"
title: "Transforms an image to a new colorspace"
signature: "public bool Imagick::transformImageColorspace(int $colorspace)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.transformimagecolorspace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Transforms an image to a new colorspace

## Description

```php
public bool Imagick::transformImageColorspace(int $colorspace)
```

Transforms an image to a new colorspace.

## Parameters

- **`$colorspace`** — The colorspace the image should be transformed to, one of the COLORSPACE constants e.g. Imagick::COLORSPACE_CMYK.

## Return Values

Returns `true` on success.

## Examples

**`Imagick::transformImageColorspace()` example**

Transforms an image to a new colorspace, and then extracts a single channel so that the individual channel values can be viewed.

```php


<?php
function transformImageColorspace($imagePath, $colorSpace, $channel) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->transformimagecolorspace($colorSpace);
    //channel should be one of the channel constants e.g. \Imagick::CHANNEL_BLUE 
    $imagick->separateImageChannel($channel);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}
?>

   
```

## See Also

 `Imagick::setColorSpace()`
