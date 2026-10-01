---
id: "en-php-function-gmagick-addnoiseimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::addnoiseimage"
title: "Adds random noise to the image"
signature: "public Gmagick Gmagick::addnoiseimage(int $noise_type)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.addnoiseimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds random noise to the image

## Description

```php
public Gmagick Gmagick::addnoiseimage(int $noise_type)
```

Adds random noise to the image.

## Parameters

- **`$noise_type`** — The type of the noise. Refer to this list of noise constants.

## Return Values

The Gmagick object with noise added.

## Errors/Exceptions

Throws an `GmagickException` on error.
