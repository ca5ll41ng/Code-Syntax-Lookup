---
id: "en-php-function-gmagick-deconstructimages"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::deconstructimages"
title: "Returns certain pixel differences between images"
signature: "public Gmagick Gmagick::deconstructimages()"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.deconstructimages.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns certain pixel differences between images

## Description

```php
public Gmagick Gmagick::deconstructimages()
```

Compares each image with the next in a sequence and returns the maximum bounding region of any pixel differences it discovers.

## Parameters

This function has no parameters.

## Return Values

Returns a new `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
