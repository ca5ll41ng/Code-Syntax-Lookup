---
id: "en-php-function-imagick-encipherimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::encipherImage"
title: "Enciphers an image"
signature: "public bool Imagick::encipherImage(string $passphrase)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.encipherimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Enciphers an image

## Description

```php
public bool Imagick::encipherImage(string $passphrase)
```

Converts plain pixels to enciphered pixels. The image is not readable until it has been deciphered using `Imagick::decipherImage()` This method is available if Imagick has been compiled against ImageMagick version 6.3.9 or newer.

## Parameters

- **`$passphrase`** — The passphrase

## Return Values

Returns `true` on success.

## See Also

`Imagick::decipherImage()`
