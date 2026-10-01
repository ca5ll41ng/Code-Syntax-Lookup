---
id: "en-php-function-gmagick-readimageblob"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::readimageblob"
title: "Reads image from a binary string"
signature: "public Gmagick Gmagick::readimageblob(string $imageContents, [string $filename = ...])"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.readimageblob.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Reads image from a binary string

## Description

```php
public Gmagick Gmagick::readimageblob(string $imageContents, [string $filename = ...])
```

Reads image from a binary string.

## Parameters

- **`$imageContents`** — Content of image.
- **`$filename`** — The image filename.

## Return Values

The `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
