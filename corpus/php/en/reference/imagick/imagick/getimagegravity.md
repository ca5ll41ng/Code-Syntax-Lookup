---
id: "en-php-function-imagick-getimagegravity"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getImageGravity"
title: "Gets the image gravity"
signature: "public int Imagick::getImageGravity()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getimagegravity.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the image gravity

## Description

```php
public int Imagick::getImageGravity()
```

Gets the current gravity value of the image. Unlike `Imagick::getGravity()`, this method returns the gravity defined for the current image sequence. This method is available if Imagick has been compiled against ImageMagick version 6.4.4 or newer.

## Parameters

This function has no parameters.

## Return Values

Returns the images gravity property. Refer to the list of gravity constants.
