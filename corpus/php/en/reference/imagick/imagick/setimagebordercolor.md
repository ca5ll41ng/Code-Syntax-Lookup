---
id: "en-php-function-imagick-setimagebordercolor"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setImageBorderColor"
title: "Sets the image border color"
signature: "public bool Imagick::setImageBorderColor(mixed $border)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setimagebordercolor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the image border color

## Description

```php
public bool Imagick::setImageBorderColor(mixed $border)
```

Sets the image border color.

## Parameters

- **`$border`** — The border color

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Changelog

|  |  |
| --- | --- |
| PECL imagick 2.1.0 | Now allows a string representing the color as a parameter. Previous versions allow only an ImagickPixel object. |
