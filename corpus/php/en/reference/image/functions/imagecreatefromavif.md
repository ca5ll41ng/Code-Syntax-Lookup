---
id: "en-php-function-function-imagecreatefromavif"
language: "php"
lang: "en"
category: "function"
name: "imagecreatefromavif"
title: "Create a new image from file or URL"
signature: "GdImage|false imagecreatefromavif(string $filename)"
module: "image"
source_url: "https://www.php.net/manual/en/function.imagecreatefromavif.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a new image from file or URL

## Description

```php
GdImage|false imagecreatefromavif(string $filename)
```

`imagecreatefromavif()` returns an image object representing the image obtained from the given filename.

## Parameters

- **`$filename`** — Path to the AVIF raster image.

## Return Values

Returns an image object on success, `false` on errors.
