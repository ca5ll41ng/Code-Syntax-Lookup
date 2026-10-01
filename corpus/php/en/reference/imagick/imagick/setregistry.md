---
id: "en-php-function-imagick-setregistry"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setRegistry"
title: "Sets the ImageMagick registry entry named key to value"
signature: "public static bool Imagick::setRegistry(string $key, string $value)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setregistry.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the ImageMagick registry entry named key to value

## Description

```php
public static bool Imagick::setRegistry(string $key, string $value)
```

Sets the ImageMagick registry entry named key to value. This is most useful for setting "temporary-path" which controls where ImageMagick creates temporary images e.g. while processing PDFs.

## Parameters

- **`$key`**
- **`$value`**

## Return Values

Returns `true` on success.
