---
id: "en-php-function-imagick-writeimagefile"
language: "php"
lang: "en"
category: "function"
name: "Imagick::writeImageFile"
title: "Writes an image to a filehandle"
signature: "public bool Imagick::writeImageFile(resource $filehandle, [string $format = ...])"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.writeimagefile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Writes an image to a filehandle

## Description

```php
public bool Imagick::writeImageFile(resource $filehandle, [string $format = ...])
```

Writes the image sequence to an open filehandle. The handle must be opened with for example fopen. This method is available if Imagick has been compiled against ImageMagick version 6.3.6 or newer.

## Parameters

- **`$filehandle`** — Filehandle where to write the image.
- **`$format`** — The image format. The list of valid format specifiers depends on the compiled feature set of ImageMagick, and can be queried at runtime via `Imagick::queryFormats()`.

## Return Values

Returns `true` on success.

## See Also

 `Imagick::queryFormats()`
