---
id: "en-php-function-imagickpixel-ispixelsimilar"
language: "php"
lang: "en"
category: "function"
name: "ImagickPixel::isPixelSimilar"
title: "Check the distance between this color and another"
signature: "public bool ImagickPixel::isPixelSimilar(ImagickPixel $color, float $fuzz)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickpixel.ispixelsimilar.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check the distance between this color and another

## Description

```php
public bool ImagickPixel::isPixelSimilar(ImagickPixel $color, float $fuzz)
```

Checks the distance between the color described by this ImagickPixel object and that of the provided object, by plotting their RGB values on the color cube. If the distance between the two points is less than the fuzz value given, the colors are similar. This method replaces ImagickPixel::isSimilar() and correctly normalises the fuzz value to ImageMagick QuantumRange.

## Parameters

- **`$color`** — The ImagickPixel object to compare this object against.
- **`$fuzz`** — The maximum distance within which to consider these colors as similar. The theoretical maximum for this value is the square root of three (1.732).

## Return Values

Returns `true` on success.
