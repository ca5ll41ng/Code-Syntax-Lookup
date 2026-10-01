---
id: "en-php-function-function-imageresolution"
language: "php"
lang: "en"
category: "function"
name: "imageresolution"
title: "Get or set the resolution of the image"
signature: "array|true imageresolution(GdImage $image, int|null $resolution_x = null, int|null $resolution_y = null)"
module: "image"
source_url: "https://www.php.net/manual/en/function.imageresolution.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get or set the resolution of the image

## Description

 {{{ 

```php
array|true imageresolution(GdImage $image, int|null $resolution_x = null, int|null $resolution_y = null)
```

`imageresolution()` allows to set and get the resolution of an image in DPI (dots per inch). If the optional parameters are `null`, the current resolution is returned as an indexed array. If only `$resolution_x` is not `null`, the horizontal and vertical resolution are set to this value. If none of the optional parameters are `null`, the horizontal and vertical resolution are set to these values, respectively.

The resolution is only used as meta information when images are read from and written to formats supporting this kind of information (currently PNG and JPEG). It does not affect any drawing operations. The default resolution for new images is 96 DPI.

 }}} 

## Parameters

 {{{ 

- **`$image`** — A `GdImage` object, returned by one of the image creation functions, such as `imagecreatetruecolor()`.
- **`$resolution_x`** — The horizontal resolution in DPI.
- **`$resolution_y`** — The vertical resolution in DPI.

 }}} 

## Return Values

 {{{ 

When used as getter, it returns an indexed array of the horizontal and vertical resolution on success. When used as setter, it always returns `true`.

 }}} 

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$resolution_x` and `$resolution_y` are now nullable. |

## Examples

 {{{ 

**Setting and getting the resolution of an image**

 {{{ 

```php


<?php
$im = imagecreatetruecolor(100, 100);
imageresolution($im, 200);
print_r(imageresolution($im));
imageresolution($im, 300, 72);
print_r(imageresolution($im));
?>

   
```

The above example will output:

```text


Array
(
    [0] => 200
    [1] => 200
)
Array
(
    [0] => 300
    [1] => 72
)

   
```

 }}} 

 }}}
