---
id: "en-php-function-imagickdraw-getstrokeantialias"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::getStrokeAntialias"
title: "Returns the current stroke antialias setting"
signature: "public bool ImagickDraw::getStrokeAntialias()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.getstrokeantialias.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the current stroke antialias setting

## Description

```php
public bool ImagickDraw::getStrokeAntialias()
```

> This function is currently not documented; only its argument list is available.

Returns the current stroke antialias setting. Stroked outlines are antialiased by default. When antialiasing is disabled stroked pixels are thresholded to determine if the stroke color or underlying canvas color should be used.

## Return Values

Returns `true` if antialiasing is on and `false` if it is off.
