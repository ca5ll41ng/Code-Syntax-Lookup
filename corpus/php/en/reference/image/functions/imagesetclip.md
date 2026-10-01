---
id: "en-php-function-function-imagesetclip"
language: "php"
lang: "en"
category: "function"
name: "imagesetclip"
title: "Set the clipping rectangle"
signature: "true imagesetclip(GdImage $image, int $x1, int $y1, int $x2, int $y2)"
module: "image"
source_url: "https://www.php.net/manual/en/function.imagesetclip.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the clipping rectangle

## Description

 {{{ 

```php
true imagesetclip(GdImage $image, int $x1, int $y1, int $x2, int $y2)
```

`imagesetclip()` sets the current clipping rectangle, i.e. the area beyond which no pixels will be drawn.

 }}} 

## Parameters

 {{{ 

- **`$image`** — A `GdImage` object, returned by one of the image creation functions, such as `imagecreatetruecolor()`.
- **`$x1`** — The x-coordinate of the upper left corner.
- **`$y1`** — The y-coordinate of the upper left corner.
- **`$x2`** — The x-coordinate of the lower right corner.
- **`$y2`** — The y-coordinate of the lower right corner.

 }}} 

## Return Values

 {{{ 

Always returns `true`.

 }}} 

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$image` expects a `GdImage` instance now; previously, a valid `gd` `resource` was expected. |

## See Also

 {{{ 

 `imagegetclip()` 

 }}}
