---
id: "en-php-function-imagick-inversefouriertransformimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::inverseFourierTransformImage"
title: "Implements the inverse discrete Fourier transform (DFT)"
signature: "public bool Imagick::inverseFourierTransformImage(Imagick $complement, bool $magnitude)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.inversefouriertransformimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Implements the inverse discrete Fourier transform (DFT)

## Description

```php
public bool Imagick::inverseFourierTransformImage(Imagick $complement, bool $magnitude)
```

Implements the inverse discrete Fourier transform (DFT) of the image either as a magnitude / phase or real / imaginary image pair.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$complement`** — The second image to combine with this one to form either the magnitude / phase or real / imaginary image pair.
- **`$magnitude`** — If true, combine as magnitude / phase pair otherwise a real / imaginary image pair.

## Return Values

Returns `true` on success.
