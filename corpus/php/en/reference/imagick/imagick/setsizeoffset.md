---
id: "en-php-function-imagick-setsizeoffset"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setSizeOffset"
title: "Sets the size and offset of the Imagick object"
signature: "public bool Imagick::setSizeOffset(int $columns, int $rows, int $offset)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setsizeoffset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the size and offset of the Imagick object

## Description

```php
public bool Imagick::setSizeOffset(int $columns, int $rows, int $offset)
```

Sets the size and offset of the Imagick object. Set it before you read a raw image format such as RGB, GRAY, or CMYK. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

## Parameters

- **`$columns`** — The width in pixels.
- **`$rows`** — The height in pixels.
- **`$offset`** — The image offset.

## Return Values

Returns `true` on success.
