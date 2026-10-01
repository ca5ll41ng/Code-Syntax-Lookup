---
id: "en-php-function-function-imagecreatefrombmp"
language: "php"
lang: "en"
category: "function"
name: "imagecreatefrombmp"
title: "Create a new image from file or URL"
signature: "GdImage|false imagecreatefrombmp(string $filename)"
module: "image"
source_url: "https://www.php.net/manual/en/function.imagecreatefrombmp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a new image from file or URL

## Description

```php
GdImage|false imagecreatefrombmp(string $filename)
```

`imagecreatefrombmp()` returns an image identifier representing the image obtained from the given filename.

> A URL can be used as a filename with this function if the fopen wrappers have been enabled. See `fopen()` for more details on how to specify the filename. See the `wrappers` for links to information about what abilities the various wrappers have, notes on their usage, and information on any predefined variables they may provide.

## Parameters

- **`$filename`** — Path to the BMP image.

## Return Values

Returns an image object on success, `false` on errors.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | On success, this function returns a `GDImage` instance now; previously, a `resource` was returned. |

## Examples

**Convert an BMP image to a PNG image using `imagecreatefrombmp()`**

```php


<?php
// Load the BMP file
$im = imagecreatefrombmp('./example.bmp');

// Convert it to a PNG file with default settings
imagepng($im, './example.png');
?>

    
```
