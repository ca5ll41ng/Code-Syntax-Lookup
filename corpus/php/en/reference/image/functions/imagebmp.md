---
id: "en-php-function-function-imagebmp"
language: "php"
lang: "en"
category: "function"
name: "imagebmp"
title: "Output a BMP image to browser or file"
signature: "bool imagebmp(GdImage $image, resource|string|null $file = null, bool $compressed = true)"
module: "image"
source_url: "https://www.php.net/manual/en/function.imagebmp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Output a BMP image to browser or file

## Description

```php
bool imagebmp(GdImage $image, resource|string|null $file = null, bool $compressed = true)
```

Outputs or saves a BMP version of the given `$image`.

## Parameters

- **`$image`** — A `GdImage` object, returned by one of the image creation functions, such as `imagecreatetruecolor()`.
- **`$file`** — The path or an open stream resource (which is automatically closed after this function returns) to save the file to. If not set or `null`, the raw image stream will be output directly.
  > `null` is invalid if the `$compressed` arguments is not used.


- **`$compressed`** — Whether the BMP should be compressed with run-length encoding (RLE), or not.

## Return Values

Returns `true` on success or `false` on failure.

> However, if libgd fails to output the image, this function returns `true`.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$image` expects a `GdImage` instance now; previously, a valid `gd` `resource` was expected. |
| 8.0.0 | The type of `$compressed` is `boolean` now; formerly it was `integer`. |

## Examples

**Saving a BMP file**

```php


<?php
// Create a blank image and add some text
$im = imagecreatetruecolor(120, 20);
$text_color = imagecolorallocate($im, 233, 14, 91);

imagestring($im, 1, 5, 5,  'BMP with PHP', $text_color);

// Save the image
imagebmp($im, 'php.bmp');
?>

    
```
