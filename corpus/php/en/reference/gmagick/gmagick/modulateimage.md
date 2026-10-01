---
id: "en-php-function-gmagick-modulateimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::modulateimage"
title: "Control the brightness, saturation, and hue"
signature: "public Gmagick Gmagick::modulateimage(float $brightness, float $saturation, float $hue)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.modulateimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Control the brightness, saturation, and hue

## Description

```php
public Gmagick Gmagick::modulateimage(float $brightness, float $saturation, float $hue)
```

Lets you control the brightness, saturation, and hue of an image. Hue is the percentage of absolute rotation from the current position. For example 50 results in a counter-clockwise rotation of 90 degrees, 150 results in a clockwise rotation of 90 degrees, with 0 and 200 both resulting in a rotation of 180 degrees.

## Parameters

- **`$brightness`** — The percent change in brighness (-100 thru +100).
- **`$saturation`** — The percent change in saturation (-100 thru +100)
- **`$hue`** — The percent change in hue (-100 thru +100)

## Return Values

The `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
