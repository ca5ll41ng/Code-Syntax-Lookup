---
id: "en-php-function-imagick-setimageprofile"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setImageProfile"
title: "Adds a named profile to the Imagick object"
signature: "public bool Imagick::setImageProfile(string $name, string $profile)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setimageprofile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds a named profile to the Imagick object

## Description

```php
public bool Imagick::setImageProfile(string $name, string $profile)
```

Adds a named profile to the Imagick object. If a profile with the same name already exists, it is replaced. This method differs from the Imagick::ProfileImage() method in that it does not apply any CMS color profiles.

## Parameters

- **`$name`**
- **`$profile`**

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.
