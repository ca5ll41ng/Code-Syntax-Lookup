---
id: "en-php-function-imagick-settype"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setType"
title: "Sets the image type attribute"
signature: "public bool Imagick::setType(int $image_type)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.settype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the image type attribute

## Description

```php
public bool Imagick::setType(int $image_type)
```

Sets the image type applied to images written subsequently. To convert the current image instead, use `Imagick::setImageType()`.

## Parameters

- **`$image_type`** — One of the `imagick::IMGTYPE_{*}` constants.

## Return Values

Returns `true` on success.
