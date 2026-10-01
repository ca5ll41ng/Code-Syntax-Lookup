---
id: "en-php-function-imagick-setbackgroundcolor"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setBackgroundColor"
title: "Sets the object's default background color"
signature: "public bool Imagick::setBackgroundColor(mixed $background)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setbackgroundcolor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the object's default background color

## Description

```php
public bool Imagick::setBackgroundColor(mixed $background)
```

Sets the object's default background color.

## Parameters

- **`$background`**

## Return Values

Returns `true` on success.

## Changelog

|  |  |
| --- | --- |
| PECL imagick 2.1.0 | Now allows a string representing the color as a parameter. Previous versions allow only an ImagickPixel object. |
