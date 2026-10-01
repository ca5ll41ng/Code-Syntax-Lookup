---
id: "en-php-function-imagickdraw-getstrokemiterlimit"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::getStrokeMiterLimit"
title: "Returns the stroke miter limit"
signature: "public int ImagickDraw::getStrokeMiterLimit()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.getstrokemiterlimit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the stroke miter limit

## Description

```php
public int ImagickDraw::getStrokeMiterLimit()
```

> This function is currently not documented; only its argument list is available.

Returns the miter limit. When two line segments meet at a sharp angle and miter joins have been specified for 'lineJoin', it is possible for the miter to extend far beyond the thickness of the line stroking the path. The 'miterLimit' imposes a limit on the ratio of the miter length to the 'lineWidth'.

## Return Values

Returns an int describing the miter limit and 0 if no miter limit is set.
