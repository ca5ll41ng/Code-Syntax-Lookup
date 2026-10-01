---
id: "en-php-function-function-imagescale"
language: "php"
lang: "en"
category: "function"
name: "imagescale"
title: "Scale an image using the given new width and height"
signature: "GdImage|false imagescale(GdImage $image, int $width, int $height = -1, int $mode = IMG_BILINEAR_FIXED)"
module: "image"
source_url: "https://www.php.net/manual/en/function.imagescale.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Scale an image using the given new width and height

## Description

```php
GdImage|false imagescale(GdImage $image, int $width, int $height = -1, int $mode = IMG_BILINEAR_FIXED)
```

`imagescale()` scales an image using the given interpolation algorithm.

> Unlike many of other image functions, `imagescale()` does not modify the passed `$image`; instead, a *new* image is returned.

## Parameters

- **`$image`** — A `GdImage` object, returned by one of the image creation functions, such as `imagecreatetruecolor()`.
- **`$width`** — The width to scale the image to.
- **`$height`** — The height to scale the image to. If omitted or negative, the aspect ratio will be preserved.
- **`$mode`** — One of `IMG_NEAREST_NEIGHBOUR`, `IMG_BILINEAR_FIXED`, `IMG_BICUBIC`, `IMG_BICUBIC_FIXED` or anything else (will use two pass). > `IMG_WEIGHTED4` is not yet supported.

## Return Values

Return the scaled image object on success or `false` on failure.

## Errors/Exceptions

Throws a `ValueError` if `$width` or `$height` would cause over-/underflow.

Throws a `ValueError` if `$mode` is invalid.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | Now throws a `ValueError` if `$width` or `$height` would cause over-/underflow. |
| 8.4.0 | Now throws a `ValueError` if `$mode` is invalid. |
| 8.0.0 | On success, this function returns a `GDImage` instance now; previously, a `resource` was returned. |
| 8.0.0 | `$image` expects a `GdImage` instance now; previously, a valid `gd` `resource` was expected. |

## See Also

 `imagecopyresized()` `imagecopyresampled()`
