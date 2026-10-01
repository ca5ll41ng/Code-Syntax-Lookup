---
id: "en-php-function-imagickdraw-setfillpatternurl"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::setFillPatternURL"
title: "Sets the URL to use as a fill pattern for filling objects"
signature: "public bool ImagickDraw::setFillPatternURL(string $fill_url)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.setfillpatternurl.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the URL to use as a fill pattern for filling objects

## Description

```php
public bool ImagickDraw::setFillPatternURL(string $fill_url)
```

> This function is currently not documented; only its argument list is available.

Sets the URL to use as a fill pattern for filling objects. Only local URLs ("#identifier") are supported at this time. These local URLs are normally created by defining a named fill pattern with DrawPushPattern/DrawPopPattern.

## Parameters

- **`$fill_url`** — URL to use to obtain fill pattern.

## Return Values

Returns `true` on success or `false` on failure.
