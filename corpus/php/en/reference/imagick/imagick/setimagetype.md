---
id: "en-php-function-imagick-setimagetype"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setImageType"
title: "Sets the image type"
signature: "public bool Imagick::setImageType(int $image_type)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setimagetype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the image type

## Description

```php
public bool Imagick::setImageType(int $image_type)
```

Converts the image to the given type, which combines a color model with the presence or absence of an alpha channel. Depending on the type, this may change the colorspace, quantize the colors, or change whether the image has an alpha channel.

`Imagick::setImageType()` modifies the image itself. To set the type that subsequent images are written with instead, use `Imagick::setType()`.

## Parameters

- **`$image_type`** — One of the `imagick::IMGTYPE_{*}` constants. `imagick::IMGTYPE_UNDEFINED` and `imagick::IMGTYPE_OPTIMIZE` convert nothing, but are still recorded on the image.

## Return Values

Returns `true` on success.
