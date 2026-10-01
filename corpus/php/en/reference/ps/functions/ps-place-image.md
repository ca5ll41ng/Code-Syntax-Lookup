---
id: "en-php-function-function-ps-place-image"
language: "php"
lang: "en"
category: "function"
name: "ps_place_image"
title: "Places image on the page"
signature: "bool ps_place_image(resource $psdoc, int $imageid, float $x, float $y, float $scale)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-place-image.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Places image on the page

## Description

```php
bool ps_place_image(resource $psdoc, int $imageid, float $x, float $y, float $scale)
```

Places a formerly loaded image on the page. The image can be scaled. If the image shall be rotated as well, you will have to rotate the coordinate system before with `ps_rotate()`.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$imageid`** — The resource identifier of the image as returned by `ps_open_image()` or `ps_open_image_file()`.
- **`$x`** — x-coordinate of the lower left corner of the image.
- **`$y`** — y-coordinate of the lower left corner of the image.
- **`$scale`** — The scaling factor for the image. A scale of 1.0 will result in a resolution of 72 dpi, because each pixel is equivalent to 1 point.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_open_image()` `ps_open_image_file()`
