---
id: "en-php-function-function-imagecreatefromtga"
language: "php"
lang: "en"
category: "function"
name: "imagecreatefromtga"
title: "Create a new image from file or URL"
signature: "GdImage|false imagecreatefromtga(string $filename)"
module: "image"
source_url: "https://www.php.net/manual/en/function.imagecreatefromtga.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a new image from file or URL

## Description

```php
GdImage|false imagecreatefromtga(string $filename)
```

`imagecreatefromtga()` returns an image object representing the image obtained from the given filename.

## Parameters

- **`$filename`** — Path to the Truevision TGA image.

## Return Values

Returns an image object on success, `false` on errors.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | On success, this function returns a `GDImage` instance now; previously, a `resource` was returned. |
