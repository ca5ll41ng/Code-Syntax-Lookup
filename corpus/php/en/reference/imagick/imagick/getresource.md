---
id: "en-php-function-imagick-getresource"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getResource"
title: "Returns the specified resource's memory usage"
signature: "public static int Imagick::getResource(int $type)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getresource.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the specified resource's memory usage

## Description

```php
public static int Imagick::getResource(int $type)
```

Returns the specified resource's memory usage in megabytes.

## Parameters

- **`$type`** — Refer to the list of resourcetype constants.

## Return Values

Returns the specified resource's memory usage in megabytes.

## Errors/Exceptions

Throws ImagickException on error.
