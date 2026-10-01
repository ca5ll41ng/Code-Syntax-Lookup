---
id: "en-php-function-function-imagegetinterpolation"
language: "php"
lang: "en"
category: "function"
name: "imagegetinterpolation"
title: "Get the interpolation method"
signature: "int imagegetinterpolation(GdImage $image)"
module: "image"
source_url: "https://www.php.net/manual/en/function.imagegetinterpolation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the interpolation method

## Description

```php
int imagegetinterpolation(GdImage $image)
```

Gets the currently set interpolation method of the `$image`.

## Parameters

- **`$image`** — A `GdImage` object, returned by one of the image creation functions, such as `imagecreatetruecolor()`.

## Return Values

Returns the interpolation method.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$image` expects a `GdImage` instance now; previously, a valid `gd` `resource` was expected. |

## See Also

 `imagesetinterpolation()`
