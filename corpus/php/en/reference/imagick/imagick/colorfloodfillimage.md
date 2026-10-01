---
id: "en-php-function-imagick-colorfloodfillimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::colorFloodfillImage"
title: "Changes the color value of any pixel that matches target"
signature: "public bool Imagick::colorFloodfillImage(mixed $fill, float $fuzz, mixed $bordercolor, int $x, int $y)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.colorfloodfillimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Changes the color value of any pixel that matches target

## Description

```php
public bool Imagick::colorFloodfillImage(mixed $fill, float $fuzz, mixed $bordercolor, int $x, int $y)
```

Changes the color value of any pixel that matches target and is an immediate neighbor.

## Parameters

- **`$fill`** — ImagickPixel object containing the fill color
- **`$fuzz`** — The amount of fuzz. For example, set fuzz to 10 and the color red at intensities of 100 and 102 respectively are now interpreted as the same color for the purposes of the floodfill.
- **`$bordercolor`** — ImagickPixel object containing the border color
- **`$x`** — X start position of the floodfill
- **`$y`** — Y start position of the floodfill

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Changelog

|  |  |
| --- | --- |
| PECL imagick 2.1.0 | Now allows a string representing the color as first and third parameter. Previous versions allow only an ImagickPixel object. |
