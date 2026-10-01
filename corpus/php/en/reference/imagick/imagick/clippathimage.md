---
id: "en-php-function-imagick-clippathimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::clipPathImage"
title: "Clips along the named paths from the 8BIM profile"
signature: "public bool Imagick::clipPathImage(string $pathname, bool $inside)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.clippathimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Clips along the named paths from the 8BIM profile

## Description

```php
public bool Imagick::clipPathImage(string $pathname, bool $inside)
```

Clips along the named paths from the 8BIM profile, if present. Later operations take effect inside the path. It may be a number if preceded with #, to work on a numbered path, e.g., "#1" to use the first path.

## Parameters

- **`$pathname`** — The name of the path
- **`$inside`** — If `true` later operations take effect inside clipping path. Otherwise later operations take effect outside clipping path.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.
