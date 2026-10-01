---
id: "en-php-function-imagick-painttransparentimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::paintTransparentImage"
title: "Changes any pixel that matches color with the color defined by fill"
signature: "public bool Imagick::paintTransparentImage(mixed $target, float $alpha, float $fuzz)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.painttransparentimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Changes any pixel that matches color with the color defined by fill

## Description

```php
public bool Imagick::paintTransparentImage(mixed $target, float $alpha, float $fuzz)
```

Changes any pixel that matches color with the color defined by fill.

## Parameters

- **`$target`** — Change this target color to specified opacity value within the image.
- **`$alpha`** — The level of transparency: 1.0 is fully opaque and 0.0 is fully transparent.
- **`$fuzz`** — The fuzz member of image defines how much tolerance is acceptable to consider two colors as the same.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Changelog

|  |  |
| --- | --- |
| PECL imagick 2.1.0 | Now allows a string representing the color as the first parameter. Previous versions allow only an ImagickPixel object. |
