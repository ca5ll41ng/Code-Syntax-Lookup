---
id: "en-php-function-imagick-exportimagepixels"
language: "php"
lang: "en"
category: "function"
name: "Imagick::exportImagePixels"
title: "Exports raw image pixels"
signature: "public array Imagick::exportImagePixels(int $x, int $y, int $width, int $height, string $map, int $STORAGE)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.exportimagepixels.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Exports raw image pixels

## Description

```php
public array Imagick::exportImagePixels(int $x, int $y, int $width, int $height, string $map, int $STORAGE)
```

Exports image pixels into an array. The map defines the ordering of the exported pixels. The size of the returned array is `width * height * strlen(map)`. This method is available if Imagick has been compiled against ImageMagick version 6.4.7 or newer.

## Parameters

- **`$x`** — X-coordinate of the exported area
- **`$y`** — Y-coordinate of the exported area
- **`$width`** — Width of the exported aread
- **`$height`** — Height of the exported area
- **`$map`** — Ordering of the exported pixels. For example `"RGB"`. Valid characters for the map are R, G, B, A, O, C, Y, M, K, I and P.
- **`$STORAGE`** — Refer to this list of pixel type constants

## Return Values

Returns an array containing the pixels values.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**Using `Imagick::exportImagePixels()`**

Export image pixels into an array

```php


<?php

/* Create new object */
$im = new Imagick();

/* Create new image */
$im->newPseudoImage(0, 0, "magick:rose");

/* Export the image pixels */
$pixels = $im->exportImagePixels(10, 10, 2, 2, "RGB", Imagick::PIXEL_CHAR);

/* Output */
var_dump($pixels);
?>

    
```

The above example will output:

```text


array(12) {
  [0]=>
  int(72)
  [1]=>
  int(64)
  [2]=>
  int(57)
  [3]=>
  int(69)
  [4]=>
  int(59)
  [5]=>
  int(43)
  [6]=>
  int(124)
  [7]=>
  int(120)
  [8]=>
  int(-96)
  [9]=>
  int(91)
  [10]=>
  int(84)
  [11]=>
  int(111)
}

    
```
