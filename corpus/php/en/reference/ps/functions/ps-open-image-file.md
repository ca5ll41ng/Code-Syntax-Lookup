---
id: "en-php-function-function-ps-open-image-file"
language: "php"
lang: "en"
category: "function"
name: "ps_open_image_file"
title: "Opens image from file"
signature: "int ps_open_image_file(resource $psdoc, string $type, string $filename, [string $stringparam = ...], int $intparam = 0)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-open-image-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Opens image from file

## Description

```php
int ps_open_image_file(resource $psdoc, string $type, string $filename, [string $stringparam = ...], int $intparam = 0)
```

Loads an image for later use.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$type`** — The type of the image. Possible values are `png`, `jpeg`, or `eps`.
- **`$filename`** — The name of the file containing the image data.
- **`$stringparam`** — Not used.
- **`$intparam`** — Not used.

## Return Values

Returns identifier of image or zero in case of an error. The identifier is a positive number greater than 0.

## See Also

`ps_open_image()` `ps_place_image()` `ps_close_image()`
