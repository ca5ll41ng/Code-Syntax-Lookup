---
id: "en-php-function-imagick-decipherimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::decipherImage"
title: "Deciphers an image"
signature: "public bool Imagick::decipherImage(string $passphrase)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.decipherimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Deciphers an image

## Description

```php
public bool Imagick::decipherImage(string $passphrase)
```

Deciphers image that has been enciphered before. The image must be enciphered using `Imagick::encipherImage()`. This method is available if Imagick has been compiled against ImageMagick version 6.3.9 or newer.

## Parameters

- **`$passphrase`** — The passphrase

## Return Values

Returns `true` on success.

## See Also

`Imagick::encipherImage()`
