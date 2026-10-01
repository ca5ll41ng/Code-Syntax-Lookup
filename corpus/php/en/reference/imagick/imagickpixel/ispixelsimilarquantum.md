---
id: "en-php-function-imagickpixel-ispixelsimilarquantum"
language: "php"
lang: "en"
category: "function"
name: "ImagickPixel::isPixelSimilarQuantum"
title: "Returns whether two colors differ by less than the specified distance"
signature: "public bool ImagickPixel::isPixelSimilarQuantum(string $color, [string $fuzz = ...])"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickpixel.ispixelsimilarquantum.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether two colors differ by less than the specified distance

## Description

```php
public bool ImagickPixel::isPixelSimilarQuantum(string $color, [string $fuzz = ...])
```

Returns true if the distance between two colors is less than the specified distance. The fuzz value should be in the range 0-QuantumRange. The maximum value represents the longest possible distance in the colorspace. e.g. from RGB(0, 0, 0) to RGB(255, 255, 255) for the RGB colorspace

## Parameters

- **`$color`**
- **`$fuzz`**

## Return Values
