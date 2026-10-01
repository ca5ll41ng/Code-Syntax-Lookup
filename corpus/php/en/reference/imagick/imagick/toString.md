---
id: "en-php-function-imagick-tostring"
language: "php"
lang: "en"
category: "function"
name: "Imagick::__toString"
title: "Returns the image as a string"
signature: "public string Imagick::__toString()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.tostring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the image as a string

## Description

```php
public string Imagick::__toString()
```

Returns the current image as string. This will only return a single image; it should not be used for Imagick objects that contain multiple images e.g. an animated GIF or PDF with multiple pages.

## Parameters

This function has no parameters.

## Return Values

Returns the string content on success or an empty string on failure.

## See Also

 `Imagick::getImageBlob()` `Imagick::getImagesBlob()`
