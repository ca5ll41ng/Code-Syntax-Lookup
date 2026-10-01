---
id: "en-php-function-imagick-pingimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::pingImage"
title: "Fetch basic attributes about the image"
signature: "public bool Imagick::pingImage(string $filename)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.pingimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetch basic attributes about the image

## Description

```php
public bool Imagick::pingImage(string $filename)
```

This method can be used to query image width, height, size, and format without reading the whole image in to memory.

## Parameters

- **`$filename`** — The filename to read the information from.

## Return Values

Returns `true` on success.
