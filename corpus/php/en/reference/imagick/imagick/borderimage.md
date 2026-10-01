---
id: "en-php-function-imagick-borderimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::borderImage"
title: "Surrounds the image with a border"
signature: "public bool Imagick::borderImage(mixed $bordercolor, int $width, int $height)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.borderimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Surrounds the image with a border

## Description

```php
public bool Imagick::borderImage(mixed $bordercolor, int $width, int $height)
```

Surrounds the image with a border of the color defined by the bordercolor ImagickPixel object.

## Parameters

- **`$bordercolor`** — ImagickPixel object or a string containing the border color
- **`$width`** — Border width
- **`$height`** — Border height

## Return Values

Returns `true` on success.

## Changelog

|  |  |
| --- | --- |
| PECL imagick 2.1.0 | Now allows a string representing the color as the first parameter. Previous versions allow only an ImagickPixel object. |

## Examples

**`Imagick::borderImage()`**

```php

      
<?php
function borderImage($imagePath, $color, $width, $height) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->borderImage($color, $width, $height);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
