---
id: "en-php-function-imagick-writeimagesfile"
language: "php"
lang: "en"
category: "function"
name: "Imagick::writeImagesFile"
title: "Writes frames to a filehandle"
signature: "public bool Imagick::writeImagesFile(resource $filehandle, [string $format = ...])"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.writeimagesfile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Writes frames to a filehandle

## Description

```php
public bool Imagick::writeImagesFile(resource $filehandle, [string $format = ...])
```

Writes all image frames into an open filehandle. This method can be used to write animated gifs or other multiframe images into open filehandle. This method is available if Imagick has been compiled against ImageMagick version 6.3.6 or newer.

## Parameters

- **`$filehandle`** — Filehandle where to write the images.
- **`$format`** — The image format. The list of valid format specifiers depends on the compiled feature set of ImageMagick, and can be queried at runtime via `Imagick::queryFormats()`.

## Return Values

Returns `true` on success.

## See Also

 `Imagick::queryFormats()`
