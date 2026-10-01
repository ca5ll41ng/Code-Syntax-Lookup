---
id: "en-php-function-gmagick-writeimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::writeimage"
title: "Writes an image to the specified filename"
signature: "public Gmagick Gmagick::writeimage(string $filename, bool $all_frames = false)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.writeimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Writes an image to the specified filename

## Description

```php
public Gmagick Gmagick::writeimage(string $filename, bool $all_frames = false)
```

Writes an image to the specified filename. If the filename parameter is `null`, the image is written to the filename set by `Gmagick::readimage()` or `Gmagick::setimagefilename()`.

## Parameters

- **`$filename`** — The image filename.

## Return Values

The `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
