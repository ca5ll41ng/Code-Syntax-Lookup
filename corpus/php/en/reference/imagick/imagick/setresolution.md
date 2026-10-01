---
id: "en-php-function-imagick-setresolution"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setResolution"
title: "Sets the image resolution"
signature: "public bool Imagick::setResolution(float $x_resolution, float $y_resolution)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setresolution.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the image resolution

## Description

```php
public bool Imagick::setResolution(float $x_resolution, float $y_resolution)
```

Sets the image resolution.

## Parameters

- **`$x_resolution`** — The horizontal resolution.
- **`$y_resolution`** — The vertical resolution.

## Return Values

Returns `true` on success.

## Notes

`Imagick::setResolution()` must be called before loading or creating an image.

## See Also

 `Imagick::setImageResolution()` `Imagick::getImageResolution()`
