---
id: "en-php-function-function-imageflip"
language: "php"
lang: "en"
category: "function"
name: "imageflip"
title: "Flips an image using a given mode"
signature: "true imageflip(GdImage $image, int $mode)"
module: "image"
source_url: "https://www.php.net/manual/en/function.imageflip.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Flips an image using a given mode

## Description

```php
true imageflip(GdImage $image, int $mode)
```

Flips the `$image` image using the given `$mode`.

## Parameters

- **`$image`** — A `GdImage` object, returned by one of the image creation functions, such as `imagecreatetruecolor()`.
- **`$mode`** — Flip mode, this can be one of the `IMG_FLIP_{*}` constants: — | Constant | Meaning | | --- | --- | | `IMG_FLIP_HORIZONTAL` | Flips the image horizontally. | | `IMG_FLIP_VERTICAL` | Flips the image vertically. | | `IMG_FLIP_BOTH` | Flips the image both horizontally and vertically. |

## Return Values

Always returns `true`.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$image` expects a `GdImage` instance now; previously, a valid `gd` `resource` was expected. |

## Examples

**Flips an image vertically**

This example uses the `IMG_FLIP_VERTICAL` constant.

```php


<?php
// File
$filename = 'phplogo.png';

// Content type
header('Content-type: image/png');

// Load
$im = imagecreatefrompng($filename);

// Flip it vertically
imageflip($im, IMG_FLIP_VERTICAL);

// Output
imagejpeg($im);
?>

    
```

The above example will output something similar to:

**Flips the image horizontally**

This example uses the `IMG_FLIP_HORIZONTAL` constant.

```php


<?php
// File
$filename = 'phplogo.png';

// Content type
header('Content-type: image/png');

// Load
$im = imagecreatefrompng($filename);

// Flip it horizontally
imageflip($im, IMG_FLIP_HORIZONTAL);

// Output
imagejpeg($im);
?>

    
```

The above example will output something similar to:
