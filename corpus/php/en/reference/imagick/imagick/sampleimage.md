---
id: "en-php-function-imagick-sampleimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::sampleImage"
title: "Scales an image with pixel sampling"
signature: "public bool Imagick::sampleImage(int $columns, int $rows)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.sampleimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Scales an image with pixel sampling

## Description

```php
public bool Imagick::sampleImage(int $columns, int $rows)
```

Scales an image to the desired dimensions with pixel sampling. Unlike other scaling methods, this method does not introduce any additional color into the scaled image.

## Parameters

- **`$columns`**
- **`$rows`**

## Return Values

Returns `true` on success.
