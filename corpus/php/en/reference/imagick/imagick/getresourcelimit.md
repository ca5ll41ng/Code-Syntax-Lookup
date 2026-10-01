---
id: "en-php-function-imagick-getresourcelimit"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getResourceLimit"
title: "Returns the specified resource limit"
signature: "public static int Imagick::getResourceLimit(int $type)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getresourcelimit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the specified resource limit

## Description

```php
public static int Imagick::getResourceLimit(int $type)
```

Returns the specified resource limit.

## Parameters

- **`$type`** — One of the resourcetype constants.

## Return Values

Returns the specified resource limit. The unit depends on the type of the resource being limited.

## Errors/Exceptions

Throws ImagickException on error.

## See Also

 `Imagick::setResourceLimit()`
