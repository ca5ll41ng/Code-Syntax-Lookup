---
id: "en-php-function-imagick-setimagebackgroundcolor"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setImageBackgroundColor"
title: "Sets the image background color"
signature: "public bool Imagick::setImageBackgroundColor(mixed $background)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setimagebackgroundcolor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the image background color

## Description

```php
public bool Imagick::setImageBackgroundColor(mixed $background)
```

Sets the image background color.

## Parameters

- **`$background`**

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Changelog

|  |  |
| --- | --- |
| PECL imagick 2.1.0 | Now allows a string representing the color as the parameter. Previous versions allow only an ImagickPixel object. |
