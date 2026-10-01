---
id: "en-php-function-imagick-setimagemattecolor"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setImageMatteColor"
title: "Sets the image matte color"
signature: "public bool Imagick::setImageMatteColor(mixed $matte)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setimagemattecolor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the image matte color

## Description

```php
public bool Imagick::setImageMatteColor(mixed $matte)
```

Sets the image matte color.

## Parameters

- **`$matte`**

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Changelog

|  |  |
| --- | --- |
| PECL imagick 2.1.0 | Now allows a string representing the color as the parameter. Previous versions allow only an ImagickPixel object. |
