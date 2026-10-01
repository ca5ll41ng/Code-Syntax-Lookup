---
id: "en-php-function-imagick-steganoimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::steganoImage"
title: "Hides a digital watermark within the image"
signature: "public Imagick Imagick::steganoImage(Imagick $watermark_wand, int $offset)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.steganoimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Hides a digital watermark within the image

## Description

```php
public Imagick Imagick::steganoImage(Imagick $watermark_wand, int $offset)
```

Hides a digital watermark within the image. Recover the hidden watermark later to prove that the authenticity of an image. Offset defines the start position within the image to hide the watermark.

## Parameters

- **`$watermark_wand`**
- **`$offset`**

## Return Values

Returns `true` on success.
