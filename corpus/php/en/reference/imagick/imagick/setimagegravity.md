---
id: "en-php-function-imagick-setimagegravity"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setImageGravity"
title: "Sets the image gravity"
signature: "public bool Imagick::setImageGravity(int $gravity)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setimagegravity.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the image gravity

## Description

```php
public bool Imagick::setImageGravity(int $gravity)
```

Sets the gravity property for the current image. This method can be used to set the gravity property for a single image sequence. This method is available if Imagick has been compiled against ImageMagick version 6.4.4 or newer.

## Parameters

- **`$gravity`** — The gravity property. Refer to the list of gravity constants.

## Return Values

No value is returned.
