---
id: "en-php-function-function-imageavif"
language: "php"
lang: "en"
category: "function"
name: "imageavif"
title: "Output image to browser or file"
signature: "bool imageavif(GdImage $image, resource|string|null $file = null, int $quality = -1, int $speed = -1)"
module: "image"
source_url: "https://www.php.net/manual/en/function.imageavif.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Output image to browser or file

## Description

```php
bool imageavif(GdImage $image, resource|string|null $file = null, int $quality = -1, int $speed = -1)
```

Outputs or saves a AVIF Raster image from the given `$image`.

## Parameters

- **`$image`** — A `GdImage` object, returned by one of the image creation functions, such as `imagecreatetruecolor()`.
- **`$file`** — The path or an open stream resource (which is automatically closed after this function returns) to save the file to. If not set or `null`, the raw image stream will be output directly.
- **`$quality`** — `$quality` is optional, and ranges from 0 (worst quality, smaller file) to 100 (best quality, larger file). If `-1` is provided, the default value `52` is used.
- **`$speed`** — `$speed` is optional, and ranges from 0 (slow, smaller file) to 10 (fast, larger file). If `-1` is provided, the default value `6` is used.

## Return Values

Returns `true` on success or `false` on failure.

> However, if libgd fails to output the image, this function returns `true`.

## Errors/Exceptions

Throws a `ValueError` if `$quality` or `$speed` is invalid.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | Now throws a `ValueError` if `$quality` or `$speed` is invalid. |

## See Also

 `imagepng()` `imagewbmp()` `imagejpeg()` `imagetypes()`
