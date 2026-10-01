---
id: "en-php-function-gmagickpixel-getcolor"
language: "php"
lang: "en"
category: "function"
name: "GmagickPixel::getcolor"
title: "Returns the color"
signature: "public mixed GmagickPixel::getcolor(bool $as_array = false, bool $normalize_array = false)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagickpixel.getcolor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the color

## Description

```php
public mixed GmagickPixel::getcolor(bool $as_array = false, bool $normalize_array = false)
```

Returns the color described by the `GmagickPixel` object, as a `string` or an `array`. If the color has an opacity channel set, this is provided as a fourth value in the list.

## Parameters

- **`$as_array`** — `true` to indicate return of `array` instead of `string`.
- **`$normalize_array`** — `true` to normalize the color values.

## Return Values

A `string` or an `array` of channel values, each normalized if `true` is given as `$normalize_array`. Throws `GmagickPixelException` on error.
