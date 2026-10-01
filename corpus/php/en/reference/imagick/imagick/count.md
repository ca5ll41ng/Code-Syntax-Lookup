---
id: "en-php-function-imagick-count"
language: "php"
lang: "en"
category: "function"
name: "Imagick::count"
title: "Get the number of images"
signature: "public int Imagick::count(int $mode = 0)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the number of images

## Description

```php
public int Imagick::count(int $mode = 0)
```

Returns the number of images.

## Parameters

- **`$mode`** — An unused argument. Currently there is a non-particularly well defined feature in PHP where calling count() on a countable object might (or might not) require this method to accept a parameter. This parameter is here to be conformant with the interface of countable, even though the param is not used.

## Return Values

Returns the number of images.
