---
id: "en-php-function-imagick-pingimagefile"
language: "php"
lang: "en"
category: "function"
name: "Imagick::pingImageFile"
title: "Get basic image attributes in a lightweight manner"
signature: "public bool Imagick::pingImageFile(resource $filehandle, [string $fileName = ...])"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.pingimagefile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get basic image attributes in a lightweight manner

## Description

```php
public bool Imagick::pingImageFile(resource $filehandle, [string $fileName = ...])
```

This method can be used to query image width, height, size, and format without reading the whole image to memory. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

## Parameters

- **`$filehandle`** — An open filehandle to the image.
- **`$fileName`** — Optional filename for this image.

## Return Values

Returns `true` on success.

## Examples

**Using `Imagick::pingImageFile()`**

Opening a remote location

```php


<?php
/* fopen a remote location */
$fp = fopen("http://example.com/test.jpg");

/* create new imagick object */
$im = new Imagick();

/* pass the handle to imagick */
$im->pingImageFile($fp);
?>

    
```

## See Also

`Imagick::pingImage()` `Imagick::pingImageBlob()` `Imagick::readImage()` `Imagick::readImageBlob()` `Imagick::readImageFile()`
