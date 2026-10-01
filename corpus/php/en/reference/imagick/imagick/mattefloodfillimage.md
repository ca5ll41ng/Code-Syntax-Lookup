---
id: "en-php-function-imagick-mattefloodfillimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::matteFloodfillImage"
title: "Changes the transparency value of a color"
signature: "public bool Imagick::matteFloodfillImage(float $alpha, float $fuzz, mixed $bordercolor, int $x, int $y)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.mattefloodfillimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Changes the transparency value of a color

## Description

```php
public bool Imagick::matteFloodfillImage(float $alpha, float $fuzz, mixed $bordercolor, int $x, int $y)
```

Changes the transparency value of any pixel that matches target and is an immediate neighbor. If the method `FillToBorderMethod` is specified, the transparency value is changed for any neighbor pixel that does not match the bordercolor member of image.

## Parameters

- **`$alpha`** — The level of transparency: 1.0 is fully opaque and 0.0 is fully transparent.
- **`$fuzz`** — The fuzz member of image defines how much tolerance is acceptable to consider two colors as the same.
- **`$bordercolor`** — An `ImagickPixel` object or string representing the border color.
- **`$x`** — The starting x coordinate of the operation.
- **`$y`** — The starting y coordinate of the operation.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Changelog

|  |  |
| --- | --- |
| PECL imagick 2.1.0 | Now allows a string representing the color as the third parameter. Previous versions allow only an `ImagickPixel` object. |
