---
id: "en-php-function-function-imagecrop"
language: "php"
lang: "en"
category: "function"
name: "imagecrop"
title: "Crop an image to the given rectangle"
signature: "GdImage|false imagecrop(GdImage $image, array $rectangle)"
module: "image"
source_url: "https://www.php.net/manual/en/function.imagecrop.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Crop an image to the given rectangle

## Description

```php
GdImage|false imagecrop(GdImage $image, array $rectangle)
```

Crops an image to the given rectangular area and returns the resulting image. The given `$image` is not modified.

## Parameters

- **`$image`** — A `GdImage` object, returned by one of the image creation functions, such as `imagecreatetruecolor()`.
- **`$rectangle`** — The cropping rectangle as `array` with keys `x`, `y`, `width` and `height`.

## Return Values

Return cropped image object on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$image` expects a `GdImage` instance now; previously, a valid `gd` `resource` was expected. |
| 8.0.0 | On success, this function returns a `GDImage` instance now; previously, a `resource` was returned. |

## Examples

**`imagecrop()` example**

This example shows how to crop an image to a square area.

```php


<?php
$im = imagecreatefrompng('example.png');
$size = min(imagesx($im), imagesy($im));
$im2 = imagecrop($im, ['x' => 0, 'y' => 0, 'width' => $size, 'height' => $size]);
if ($im2 !== FALSE) {
    imagepng($im2, 'example-cropped.png');
}
?>

   
```

## See Also

 `imagecropauto()`
