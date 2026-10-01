---
id: "en-php-function-imagick-setimagematte"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setImageMatte"
title: "Sets the image matte channel"
signature: "public bool Imagick::setImageMatte(bool $matte)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setimagematte.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the image matte channel

## Description

```php
public bool Imagick::setImageMatte(bool $matte)
```

Sets the image matte channel. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

## Parameters

- **`$matte`** — True activates the matte channel and false disables it.

## Return Values

Returns `true` on success.
