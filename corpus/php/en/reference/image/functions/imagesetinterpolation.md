---
id: "en-php-function-function-imagesetinterpolation"
language: "php"
lang: "en"
category: "function"
name: "imagesetinterpolation"
title: "Set the interpolation method"
signature: "bool imagesetinterpolation(GdImage $image, int $method = IMG_BILINEAR_FIXED)"
module: "image"
source_url: "https://www.php.net/manual/en/function.imagesetinterpolation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the interpolation method

## Description

```php
bool imagesetinterpolation(GdImage $image, int $method = IMG_BILINEAR_FIXED)
```

Sets the interpolation method, setting an interpolation method affects the rendering of various functions in GD, such as the `imagerotate()` function.

## Parameters

- **`$image`** — A `GdImage` object, returned by one of the image creation functions, such as `imagecreatetruecolor()`.
- **`$method`** — The interpolation method, which can be one of the following: - `IMG_BELL`: Bell filter. - `IMG_BESSEL`: Bessel filter. - `IMG_BICUBIC`: Bicubic interpolation. - `IMG_BICUBIC_FIXED`: Fixed point implementation of the bicubic interpolation. - `IMG_BILINEAR_FIXED`: Fixed point implementation of the bilinear interpolation (`default (also on image creation)`). - `IMG_BLACKMAN`: Blackman window function. - `IMG_BOX`: Box blur filter. - `IMG_BSPLINE`: Spline interpolation. - `IMG_CATMULLROM`: Cubic Hermite spline interpolation. - `IMG_GAUSSIAN`: Gaussian function. - `IMG_GENERALIZED_CUBIC`: Generalized cubic spline fractal interpolation. - `IMG_HERMITE`: Hermite interpolation. - `IMG_HAMMING`: Hamming filter. - `IMG_HANNING`: Hanning filter. - `IMG_MITCHELL`: Mitchell filter. - `IMG_POWER`: Power interpolation. - `IMG_QUADRATIC`: Inverse quadratic interpolation. - `IMG_SINC`: Sinc function. - `IMG_NEAREST_NEIGHBOUR`: Nearest neighbour interpolation. - `IMG_WEIGHTED4`: Weighting filter. - `IMG_TRIANGLE`: Triangle interpolation.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$image` expects a `GdImage` instance now; previously, a valid `gd` `resource` was expected. |

## Examples

**`imagesetinterpolation()` example**

```php


<?php
// Load an image
$im = imagecreate(500, 500);

// By default interpolation is IMG_BILINEAR_FIXED, switch 
// to use the 'Mitchell' filter:
imagesetinterpolation($im, IMG_MITCHELL);

// Continue to work with $im ...
?>

    
```

## Notes

Changing the interpolation method affects the following functions when rendering:

- `imageaffine()`
- `imagerotate()`

## See Also

 `imagegetinterpolation()`
