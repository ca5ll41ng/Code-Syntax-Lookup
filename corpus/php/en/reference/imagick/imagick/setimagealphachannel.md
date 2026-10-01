---
id: "en-php-function-imagick-setimagealphachannel"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setImageAlphaChannel"
title: "Sets image alpha channel"
signature: "public bool Imagick::setImageAlphaChannel(int $mode)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setimagealphachannel.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets image alpha channel

## Description

```php
public bool Imagick::setImageAlphaChannel(int $mode)
```

Activate or deactivate image alpha channel. The `$mode` is one of the `Imagick::ALPHACHANNEL_{*}` constants. This method is available if Imagick has been compiled against ImageMagick version 6.3.8 or newer.

## Parameters

- **`$mode`** — One of the `Imagick::ALPHACHANNEL_{*}` constants

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## See Also

`Imagick::setImageMatte()` Imagick Alpha Channel Constants
