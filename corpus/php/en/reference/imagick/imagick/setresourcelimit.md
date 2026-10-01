---
id: "en-php-function-imagick-setresourcelimit"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setResourceLimit"
title: "Sets the limit for a particular resource"
signature: "public static bool Imagick::setResourceLimit(int $type, int $limit)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setresourcelimit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the limit for a particular resource

## Description

```php
public static bool Imagick::setResourceLimit(int $type, int $limit)
```

This method is used to modify the resource limits of the underlying ImageMagick library.

## Parameters

- **`$type`** — Refer to the list of resourcetype constants.
- **`$limit`** — One of the resourcetype constants. The unit depends on the type of the resource being limited.

## Return Values

Returns `true` on success.

## See Also

 `Imagick::getResourceLimit()`
