---
id: "en-php-function-imagick-getimageprofiles"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getImageProfiles"
title: "Returns the image profiles"
signature: "public array Imagick::getImageProfiles(string $pattern = \"*\", bool $include_values = true)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getimageprofiles.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the image profiles

## Description

```php
public array Imagick::getImageProfiles(string $pattern = "*", bool $include_values = true)
```

Returns all associated profiles that match the pattern. If `false` is passed as second parameter only the profile names are returned. This method is available if Imagick has been compiled against ImageMagick version 6.3.6 or newer.

## Parameters

- **`$pattern`** — The pattern for profile names.
- **`$include_values`** — Whether to return only profile names. If `false` then only profile names will be returned.

## Return Values

Returns an array containing the image profiles or profile names.
