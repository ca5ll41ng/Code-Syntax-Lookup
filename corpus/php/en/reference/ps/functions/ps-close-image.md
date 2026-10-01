---
id: "en-php-function-function-ps-close-image"
language: "php"
lang: "en"
category: "function"
name: "ps_close_image"
title: "Closes image and frees memory"
signature: "void|false ps_close_image(resource $psdoc, int $imageid)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-close-image.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Closes image and frees memory

## Description

```php
void|false ps_close_image(resource $psdoc, int $imageid)
```

Closes an image and frees its resources. Once an image is closed it cannot be used anymore.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$imageid`** — Resource identifier of the image as returned by `ps_open_image()` or `ps_open_image_file()`.

## Return Values

Returns `null` on success or `false` on failure.

## See Also

`ps_open_image()` `ps_open_image_file()`
