---
id: "en-php-function-imagick-animateimages"
language: "php"
lang: "en"
category: "function"
name: "Imagick::animateImages"
title: "Animates an image or images"
signature: "public bool Imagick::animateImages(string $x_server)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.animateimages.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Animates an image or images

## Description

```php
public bool Imagick::animateImages(string $x_server)
```

This method animates the image onto a local or remote X server. This method is not available on Windows. This method is available if Imagick has been compiled against ImageMagick version 6.3.6 or newer.

## Parameters

- **`$x_server`** — X server address

## Return Values

Returns `true` on success.

## See Also

`Imagick::displayImage()`
