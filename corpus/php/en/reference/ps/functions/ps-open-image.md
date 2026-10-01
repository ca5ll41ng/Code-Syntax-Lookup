---
id: "en-php-function-function-ps-open-image"
language: "php"
lang: "en"
category: "function"
name: "ps_open_image"
title: "Reads an image for later placement"
signature: "int ps_open_image(resource $psdoc, string $type, string $source, string $data, int $length, int $width, int $height, int $components, int $bpc, string $params)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-open-image.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Reads an image for later placement

## Description

```php
int ps_open_image(resource $psdoc, string $type, string $source, string $data, int $length, int $width, int $height, int $components, int $bpc, string $params)
```

Reads an image which is already available in memory. The parameter `$source` is currently not evaluated and assumed to be `memory`. The image data is a sequence of pixels starting in th upper left corner and ending in the lower right corner. Each pixel consists of `$components` color components, and each component has `$bpc` bits.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$type`** — The type of the image. Possible values are `png`, `jpeg`, or `eps`.
- **`$source`** — Not used.
- **`$data`** — The image data.
- **`$length`** — The length of the image data.
- **`$width`** — The width of the image.
- **`$height`** — The height of the image.
- **`$components`** — The number of components for each pixel. This can be 1 (gray scale images), 3 (rgb images), or 4 (cmyk, rgba images).
- **`$bpc`** — Number of bits per component (quite often 8).
- **`$params`**

## Return Values

Returns identifier of image or zero in case of an error. The identifier is a positive number greater than 0.

## See Also

`ps_open_image_file()` `ps_place_image()` `ps_close_image()`
